# Truncate Website

This directory contains the Truncate project website and DNS management tools.

## Project Structure

This project follows the standard Truncate project structure:

```
website/
├── README.md           # This file
├── .env                # Environment variables (not committed to repository)
├── src/                # Source code
│   ├── index.html      # Main website page
│   └── CNAME           # GitHub Pages custom domain configuration
├── scripts/            # Utility scripts
│   └── update-dns.js   # DNS update script
├── package.json        # Node.js dependencies
└── .gitignore          # Git ignore rules
```

## Website Content

The website source code and deployment files are located in the `src/` directory:

- `src/index.html` - Main website page
- `src/CNAME` - GitHub Pages custom domain configuration

## DNS Management

This project includes a script to automatically update DNS records on DNSimple.com to point to the GitHub Pages site.

### Prerequisites

- Node.js and npm installed
- DNSimple account with API access
- GitHub Pages site configured for the repository

### Configuration

The DNS update script uses environment variables stored in `etc/.env`:

```
DNSIMPLE_API_TOKEN=your_dnsimple_api_token
DOMAIN=www.cortex.law
GITHUB_USERNAME=cortex-law
```

**Important:** The `.env` file contains sensitive information and should not be committed to the repository. It's already added to `.gitignore`.

### Usage

1. Install dependencies:

```bash
npm install
```

2. Run the DNS update script:

```bash
npm run update-dns
```

The script will:

- Connect to DNSimple using the provided API token
- Check if the domain exists in your account
- Create or update a CNAME record pointing to your GitHub Pages site
- Provide next steps for GitHub Pages configuration

### GitHub Pages Setup

After running the DNS update script:

1. Ensure your GitHub repository has GitHub Pages enabled in the repository settings
2. Set the custom domain to `www.cortex.law` in the GitHub Pages settings
3. The CNAME file in the `src/` directory will be deployed to GitHub Pages

### Troubleshooting

If you encounter issues:

1. Verify your DNSimple API token is correct
2. Check that the domain is registered and active in your DNSimple account
3. Ensure GitHub Pages is properly configured for your repository
4. DNS changes may take time to propagate (up to 24-48 hours)
