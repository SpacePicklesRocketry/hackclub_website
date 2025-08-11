# HackClub Website

A modern React website built with Vite, Tailwind CSS, and Radix UI components.

## 🚀 Quick Start

### Development

```bash
npm install
npm run dev
```

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🌐 Deployment

This project is configured for automatic deployment to GitHub Pages.

### Automatic Deployment (Recommended)

The website automatically deploys when you push to the `main` branch. The GitHub Actions workflow will:

1. Build the project
2. Deploy to GitHub Pages
3. Make it available at: `https://spacepicklesrocketry.github.io/hackclub_website/`

### Manual Deployment

If you need to deploy manually:

```bash
npm run deploy
```

This will build the project and deploy it to the `gh-pages` branch.

## 🛠️ Tech Stack

- **Framework**: React 18 with Vite
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 📁 Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── hooks/         # Custom React hooks
├── lib/           # Utility libraries
├── utils/         # Helper functions
└── api/           # API related code
```