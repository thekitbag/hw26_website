# Harkwise Marketing Website

A modern, responsive marketing website for Harkwise - Simple QR-based feedback for offline businesses.

## Features

- **Modern Stack**: Built with React 18, TypeScript, Vite, and Tailwind CSS
- **Mobile-First Design**: Fully responsive across all device sizes
- **Fast Performance**: Optimized for speed with Vite bundling and lazy loading
- **SEO Optimized**: Meta tags, Open Graph, Twitter Cards, and JSON-LD structured data
- **Analytics Ready**: Built-in analytics tracking for user funnel analysis
- **CMS-Light**: Content managed via JSON files for easy updates
- **Accessibility**: AA accessibility standards compliance
- **Privacy-First**: Minimal tracking with clear privacy notice

## Project Structure

```
hw26_website/
├── src/
│   ├── components/
│   │   ├── layout/          # Header, Footer
│   │   ├── sections/        # Homepage sections
│   │   ├── ui/              # Reusable UI components
│   │   ├── Analytics.tsx    # Analytics integration
│   │   ├── PrivacyBanner.tsx
│   │   └── SEO.tsx
│   ├── content/             # CMS-light JSON content files
│   │   ├── site.json        # Site-wide content
│   │   ├── homepage.json    # Homepage sections
│   │   └── pricing.json     # Pricing and FAQ
│   ├── pages/
│   │   └── HomePage.tsx
│   ├── test/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── index.html
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- A modern code editor (VS Code recommended)

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser to http://localhost:5173

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run test` - Run tests with Vitest
- `npm run lint` - Lint code with ESLint
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## Content Management

This site uses a "CMS-light" approach where content is managed via JSON files in the `src/content/` directory:

### Editing Content

1. **Site-wide settings** (`src/content/site.json`):
   - Site name, tagline, contact info
   - Navigation menu items
   - CTA button text

2. **Homepage content** (`src/content/homepage.json`):
   - Hero section
   - Proof points
   - Business segments
   - How it works steps
   - Examples
   - Testimonials

3. **Pricing & FAQ** (`src/content/pricing.json`):
   - Pricing plans
   - FAQ items

### Adding New Content

To add new sections or modify existing content:

1. Edit the relevant JSON file in `src/content/`
2. The changes will hot-reload in development
3. Rebuild for production: `npm run build`

## SEO Configuration

The site includes comprehensive SEO features:

- Dynamic meta tags (title, description, keywords)
- Open Graph tags for social media
- Twitter Card tags
- JSON-LD structured data
- Semantic HTML5 markup
- Fast load times (LCP < 2.5s target)

To customize SEO for the homepage, edit the `<SEO>` component props in `src/pages/HomePage.tsx`.

## Analytics Integration

Analytics tracking is ready to integrate with services like Google Analytics or Plausible:

1. Update `src/components/Analytics.tsx` with your tracking code
2. The site tracks:
   - Page views
   - CTA clicks
   - Signup attempts

## Deployment

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Deployment Options

#### Option 1: Vercel (Recommended)

1. Install Vercel CLI: `npm i -g vercel`
2. Deploy: `vercel`
3. Follow the prompts

#### Option 2: Netlify

1. Build the project: `npm run build`
2. Drag the `dist` folder to Netlify's dashboard
3. Or connect your Git repository for automatic deployments

#### Option 3: Static Hosting (AWS S3, GitHub Pages, etc.)

1. Build the project: `npm run build`
2. Upload the contents of `dist/` to your hosting provider
3. Configure your server to serve `index.html` for all routes

### Environment Variables

For production deployments, you may want to set:

```bash
# Optional: Google Analytics ID
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Optional: API endpoint for signup form
VITE_API_ENDPOINT=https://api.yourserver.com
```

## Performance Optimization

The site is optimized for performance:

- Vite for fast bundling and code splitting
- Lazy loading for images (when added)
- Minimal JavaScript bundle size
- Tailwind CSS with purging unused styles
- Mobile-first responsive design

## Accessibility

The site follows WCAG 2.1 AA standards:

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Sufficient color contrast
- Responsive text sizing

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## Development

### Code Style

This project uses:

- **ESLint** for linting
- **Prettier** for code formatting
- **TypeScript** for type safety

Run `npm run format` before committing changes.

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add route in `src/App.tsx`
3. Update navigation in `src/content/site.json`

### Adding New Sections

1. Create component in `src/components/sections/`
2. Add content to appropriate JSON file in `src/content/`
3. Import and use in `src/pages/HomePage.tsx`

## Testing

Run tests with:

```bash
npm run test
```

The project uses Vitest and React Testing Library.

## License

Proprietary - Harkwise 2024

## Support

For questions or issues, contact: hello@harkwise.com
