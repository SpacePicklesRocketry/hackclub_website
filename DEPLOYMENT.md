# Deployment Guide

This guide will help you deploy the HackClub Website to GitHub Pages.

## Prerequisites

1. **GitHub Account**: You need a GitHub account
2. **Repository**: The code should be in a GitHub repository named `hackclub_website` under the `SpacePicklesRocketry` organization
3. **Node.js**: Make sure you have Node.js installed (version 18 or higher recommended)

## Setup Steps

### 1. Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/SpacePicklesRocketry/hackclub_website`
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. This will allow the GitHub Actions workflow to automatically deploy your site

### 2. Configure Repository Secrets (if needed)

If you have any environment variables that need to be kept secret:

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Add any required secrets

### 3. Push Your Code

The deployment will happen automatically when you push to the `main` branch:

```bash
git add .
git commit -m "Initial deployment setup"
git push origin main
```

## Deployment Methods

### Automatic Deployment (Recommended)

The GitHub Actions workflow will automatically:
1. Build your project when you push to `main`
2. Deploy to GitHub Pages
3. Make your site available at: `https://spacepicklesrocketry.github.io/hackclub_website/`

### Manual Deployment

If you need to deploy manually:

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

Or use the deployment script:

```bash
./deploy.sh
```

## Troubleshooting

### Build Failures

If the build fails:

1. Check the GitHub Actions logs in the **Actions** tab
2. Ensure all dependencies are properly installed
3. Verify that the `vite.config.js` has the correct base path: `/hackclub_website/`

### Routing Issues

If you experience routing issues:

1. The project uses `HashRouter` which should work correctly with GitHub Pages
2. The 404.html file handles client-side routing redirects
3. Make sure all internal links use relative paths

### Common Issues

1. **404 Errors**: Make sure the base path in `vite.config.js` matches your repository name
2. **Build Errors**: Check that all dependencies are listed in `package.json`
3. **Deployment Failures**: Verify that GitHub Pages is enabled in repository settings

## Monitoring Deployment

1. **GitHub Actions**: Check the **Actions** tab to monitor build and deployment progress
2. **Pages Settings**: Go to **Settings** → **Pages** to see deployment status
3. **Live Site**: Visit `https://spacepicklesrocketry.github.io/hackclub_website/` to see your deployed site

## Custom Domain (Optional)

If you want to use a custom domain:

1. Go to **Settings** → **Pages**
2. Under **Custom domain**, enter your domain
3. Add a CNAME record pointing to `spacepicklesrocketry.github.io`
4. Create a `CNAME` file in the `public` directory with your domain name

## Performance Optimization

The build process automatically:
- Minifies CSS and JavaScript
- Optimizes images
- Generates source maps for debugging
- Creates gzipped assets for faster loading

## Security

- All environment variables should be added as GitHub Secrets
- Never commit sensitive information like API keys
- Use HTTPS for all external resources

## Support

If you encounter issues:
1. Check the GitHub Actions logs
2. Review the troubleshooting section above
3. Create an issue in the repository with detailed information
