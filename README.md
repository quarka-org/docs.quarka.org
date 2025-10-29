# QA Assistant Documentation

This repository contains the documentation website for QA Assistant WordPress Analytics, built with [Docusaurus](https://docusaurus.io/).

## Contributing

We welcome your feedback!

Please open an **Issue** or join the **Discussions** tab to share your thoughts or propose improvements.  
We currently do not accept pull requests unless they are discussed beforehand.

### Branch Naming Convention

When working on branches, please use the following naming format:
`<type>/<summary>/<YYYYMMDD>`

- `type`: Purpose of the change (e.g., `add`, `fix`, `update`)
- `summary`: Short description in kebab-case
- `YYYYMMDD`: Date the branch was created

#### Examples:
- `add/config-pv-limit/20250609`
- `fix/broken-links/20250610`
- `update/sidebar-order/20250611`


## Local Development

```bash
# Install dependencies
npm install

# Start the development server
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
# Build the website
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Directory Structure

- `/docs/user-manual/` - User documentation
- `/docs/developer-manual/` - Developer documentation
- `/blog/` - Blog posts
- `/docs/release-notes/` - Release notes
- `/docs/faq/` - Frequently asked questions

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch.

## Multilingual Support

The documentation supports both English and Japanese. To generate translation files:

```bash
npm run write-translations
```

## Search Functionality

This site uses docusaurus-lunr-search for search functionality, which supports both English and Japanese.

## Custom Domain Setup

The site is configured to use the custom domain `docs.quarka.org`. DNS settings should point to GitHub Pages.

## Security Considerations

- All dependencies are pinned to specific versions to avoid unexpected updates
- The docusaurus-lunr-search plugin was chosen for its security profile and compatibility
- No external services are used for search functionality to maintain data privacy
- Google Tag Manager is implemented using Docusaurus's built-in headTags configuration
