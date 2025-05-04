#!/usr/bin/env node

/**
 * DNS Update Script for Truncate
 * 
 * This script updates DNS records on DNSimple to point to GitHub Pages.
 * It creates/updates CNAME records for the domain specified in .env
 */

require('dotenv').config({ path: '.env' });
const { DNSimple } = require('dnsimple');

// Configuration from environment variables
const apiToken = process.env.DNSIMPLE_API_TOKEN;
const domain = process.env.DOMAIN || 'www.cortex.law';
const githubUsername = process.env.GITHUB_USERNAME || 'cortex-law';

// GitHub Pages URL
const githubPagesUrl = `${githubUsername}.github.io`;

// Extract the base domain (e.g., "cortex.law" from "www.cortex.law")
const domainParts = domain.split('.');
const baseDomain = domainParts.length > 2 
  ? `${domainParts[domainParts.length - 2]}.${domainParts[domainParts.length - 1]}`
  : domain;

// Extract subdomain if present (e.g., "www" from "www.cortex.law")
const subdomain = domainParts.length > 2 
  ? domain.substring(0, domain.length - baseDomain.length - 1)
  : '';

// Validate API token
if (!apiToken) {
  console.error('Error: DNSimple API token not provided.');
  console.error('Please update the DNSIMPLE_API_TOKEN in the .env file with a valid token.');
  console.error('You can obtain a token from https://support.dnsimple.com/articles/api-access-token/');
  process.exit(1);
}

// Check if token appears to be a valid format
if (!apiToken.startsWith('dnsimple_')) {
  console.error('Warning: The API token does not start with "dnsimple_".');
  console.error('This may not be a valid DNSimple API token format.');
  console.error('Please check your token and update it if necessary.');
  // Continue execution as the token might still work
}

// Initialize DNSimple client
const client = new DNSimple({
  accessToken: apiToken,
  // Use production API (remove this line to use sandbox)
  // baseUrl: 'https://api.sandbox.dnsimple.com'
});

async function updateDNS() {
  try {
    console.log('Starting DNS update process...');
    console.log(`Updating ${domain} to point to ${githubPagesUrl}`);

    // Get account ID (required for API calls)
    const response = await client.identity.whoami();
    
    // Check if account information is available
    if (!response.data || !response.data.account) {
      console.error('Error: Could not retrieve account information from DNSimple.');
      console.error('This could be due to:');
      console.error('1. You\'re using a user token that doesn\'t have access to any accounts');
      console.error('2. You need to use an account token instead of a user token');
      
      // Print the response for debugging
      console.error('Response:', JSON.stringify(response, null, 2));
      
      // Try to list accounts to help the user
      try {
        console.log('\nAttempting to list available accounts...');
        const accountsResponse = await client.accounts.listAccounts();
        
        if (accountsResponse.data && accountsResponse.data.length > 0) {
          console.log('\nAvailable accounts:');
          accountsResponse.data.forEach(account => {
            console.log(`- Account ID: ${account.id}, Name: ${account.display_name || account.email}`);
          });
          
          console.log('\nPlease update your .env file with an account token for one of these accounts.');
          console.log('You can generate an account token at: https://dnsimple.com/a/{account_id}/account/access_tokens');
        } else {
          console.log('\nNo accounts available for this user token.');
        }
      } catch (accountError) {
        console.error('\nCould not list accounts:', accountError.message);
      }
      
      console.log('\nTo fix this issue:');
      console.log('1. Log in to your DNSimple account at https://dnsimple.com/');
      console.log('2. Go to Account > API Access');
      console.log('3. Generate a new API v2 token with account access');
      console.log('4. Update the DNSIMPLE_API_TOKEN in your .env file');
      
      process.exit(1);
    }
    
    const accountId = response.data.account.id;
    console.log(`Using DNSimple account ID: ${accountId}`);

    // Check if the domain exists in the account
    try {
      await client.domains.getDomain(accountId, baseDomain);
      console.log(`Domain ${baseDomain} found in your account`);
    } catch (error) {
      if (error.statusCode === 404) {
        console.error(`Domain ${baseDomain} not found in your account. Please add it first.`);
        process.exit(1);
      } else {
        throw error;
      }
    }

    // List existing records to check if our record already exists
    const { data: records } = await client.zones.listZoneRecords(accountId, baseDomain);
    
    // Look for existing CNAME record
    const recordName = subdomain || '@';
    const existingRecord = records.find(r => 
      r.type === 'CNAME' && 
      r.name === recordName
    );

    if (existingRecord) {
      // Update existing record
      console.log(`Updating existing CNAME record (ID: ${existingRecord.id})...`);
      
      await client.zones.updateZoneRecord(
        accountId,
        baseDomain,
        existingRecord.id,
        { content: githubPagesUrl }
      );
      
      console.log('CNAME record updated successfully');
    } else {
      // Create new record
      console.log(`Creating new CNAME record for ${recordName}...`);
      
      const recordSettings = {
        name: recordName,
        type: 'CNAME',
        content: githubPagesUrl,
        ttl: 3600
      };
      
      await client.zones.createZoneRecord(
        accountId,
        baseDomain,
        recordSettings
      );
      
      console.log('CNAME record created successfully');
    }

    // Create/update GitHub Pages CNAME file
    console.log('\nDNS update completed successfully!');
    console.log('\nNext steps:');
    console.log('1. Ensure your GitHub Pages site is configured to use a custom domain');
    console.log(`2. Add a CNAME file to your website/src directory containing: ${domain}`);
    console.log('3. In your GitHub repository settings, enable GitHub Pages and set the custom domain');
    
  } catch (error) {
    console.error('Error updating DNS records:');
    console.error(error.message || error);
    if (error.response) {
      console.error('API Response:', error.response.data);
    }
    process.exit(1);
  }
}

updateDNS();