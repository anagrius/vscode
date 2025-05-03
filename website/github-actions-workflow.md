# GitHub Actions Workflow for Website Deployment

This document outlines the GitHub Actions workflow that should be implemented to automatically deploy the Truncate website to GitHub Pages.

## Workflow File

Create a file at `.github/workflows/deploy-website.yml` with the following content:

```yaml
name: Deploy GitHub Pages

on:
  push:
    branches:
      - main
    paths:
      - "website/**"
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Pages
        uses: actions/configure-pages@v3

      - name: Build with Jekyll
        uses: actions/jekyll-build-pages@v1
        with:
          source: ./website
          destination: ./_site

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```

## Workflow Explanation

This workflow will:

1. Trigger whenever changes are pushed to the `main` branch that affect files in the `website/` directory, or when manually triggered via the GitHub Actions UI.

2. Set up the necessary permissions for GitHub Pages deployment.

3. Run a build job that:

   - Checks out the repository
   - Sets up GitHub Pages
   - Builds the website using Jekyll (GitHub's built-in static site generator)
   - Uploads the built site as an artifact

4. Run a deploy job that:
   - Takes the built site artifact
   - Deploys it to GitHub Pages
   - Outputs the URL of the deployed site

## Implementation Steps

1. Create the `.github/workflows` directory in the repository
2. Add the `deploy-website.yml` file with the content above
3. Commit and push to the main branch
4. Verify that the workflow runs successfully
5. Check that the website is deployed to GitHub Pages

## Notes

- Make sure GitHub Pages is enabled in the repository settings
- The source should be set to "GitHub Actions" in the Pages settings
- The first deployment may take a few minutes to complete
