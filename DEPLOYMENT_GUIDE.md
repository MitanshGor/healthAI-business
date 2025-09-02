# Health Pulse AI Business Website - Deployment Guide 🚀

## Overview

This guide provides step-by-step instructions for deploying the Health Pulse AI business website to various platforms.

## Prerequisites

- Node.js 18+ installed
- Git repository access
- Platform-specific accounts (Vercel, Netlify, etc.)

## Quick Deploy Options

### 1. Vercel (Recommended)

**Step 1: Connect Repository**
1. Go to [vercel.com](https://vercel.com)
2. Sign up/login with GitHub
3. Click "New Project"
4. Import your repository

**Step 2: Configure Build Settings**
- Framework Preset: Next.js
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`

**Step 3: Environment Variables**
Add these environment variables:
```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_CONTACT_EMAIL=hello@healthpulse-ai.com
```

**Step 4: Deploy**
- Click "Deploy"
- Vercel will automatically deploy on every push to main branch

### 2. Netlify

**Step 1: Connect Repository**
1. Go to [netlify.com](https://netlify.com)
2. Sign up/login with GitHub
3. Click "New site from Git"

**Step 2: Configure Build Settings**
- Build command: `npm run build`
- Publish directory: `.next`
- Node version: 18

**Step 3: Deploy**
- Click "Deploy site"

### 3. AWS Amplify

**Step 1: Connect Repository**
1. Go to AWS Amplify Console
2. Click "New app" → "Host web app"
3. Connect your Git repository

**Step 2: Configure Build Settings**
```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm install
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

## Custom Domain Setup

### 1. Vercel
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### 2. Netlify
1. Go to Site Settings → Domain management
2. Add custom domain
3. Update DNS records

## Environment Configuration

### Production Environment Variables
Create a `.env.production` file:
```bash
NEXT_PUBLIC_SITE_URL=https://healthpulse-ai.com
NEXT_PUBLIC_CONTACT_EMAIL=hello@healthpulse-ai.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Analytics Setup
1. Create Google Analytics 4 property
2. Add tracking ID to environment variables
3. Update `app/layout.tsx` with GA script

## Performance Optimization

### 1. Image Optimization
- Use Next.js Image component
- Optimize images before upload
- Use appropriate formats (WebP, AVIF)

### 2. Caching
- Enable CDN caching
- Set appropriate cache headers
- Use static generation where possible

### 3. Bundle Optimization
- Monitor bundle size with `npm run build`
- Use dynamic imports for large components
- Optimize third-party dependencies

## SEO Configuration

### 1. Meta Tags
Update `app/layout.tsx` with proper meta tags:
```typescript
export const metadata: Metadata = {
  title: 'Health Pulse AI - Next-Generation Health Intelligence Platform',
  description: 'Transform health data into actionable insights...',
  keywords: 'health, AI, digital health, wearable, analytics',
  openGraph: {
    title: 'Health Pulse AI',
    description: '...',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Health Pulse AI',
    description: '...',
  },
}
```

### 2. Sitemap
Create `app/sitemap.ts`:
```typescript
export default function sitemap() {
  return [
    {
      url: 'https://healthpulse-ai.com',
      lastModified: new Date(),
    },
    {
      url: 'https://healthpulse-ai.com/features',
      lastModified: new Date(),
    },
    // Add more pages
  ]
}
```

### 3. Robots.txt
Create `public/robots.txt`:
```
User-agent: *
Allow: /

Sitemap: https://healthpulse-ai.com/sitemap.xml
```

## Contact Form Integration

### 1. Formspree
1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Update form action in `components/Contact.tsx`

### 2. Netlify Forms
1. Add `data-netlify="true"` to form
2. Add hidden input for form name
3. Netlify will handle form submissions automatically

### 3. Custom API
1. Create API route in `app/api/contact/route.ts`
2. Handle form submission
3. Send email notifications

## Monitoring & Analytics

### 1. Google Analytics
1. Create GA4 property
2. Add tracking code to layout
3. Set up conversion tracking

### 2. Performance Monitoring
1. Use Vercel Analytics (if on Vercel)
2. Set up Core Web Vitals monitoring
3. Monitor page load times

### 3. Error Tracking
1. Set up Sentry or similar
2. Monitor JavaScript errors
3. Track user experience issues

## Security Considerations

### 1. HTTPS
- Ensure HTTPS is enabled
- Redirect HTTP to HTTPS
- Use HSTS headers

### 2. Content Security Policy
Add CSP headers:
```typescript
// next.config.js
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline';"
          },
        ],
      },
    ]
  },
}
```

### 3. Form Validation
- Client-side validation
- Server-side validation
- Rate limiting for forms

## Maintenance

### 1. Regular Updates
- Keep dependencies updated
- Monitor security vulnerabilities
- Update content regularly

### 2. Backup Strategy
- Version control with Git
- Database backups (if applicable)
- Content backups

### 3. Performance Monitoring
- Monitor Core Web Vitals
- Track user engagement
- Optimize based on analytics

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check Node.js version
   - Clear node_modules and reinstall
   - Check for TypeScript errors

2. **Styling Issues**
   - Verify Tailwind CSS configuration
   - Check for CSS conflicts
   - Ensure proper class names

3. **Performance Issues**
   - Optimize images
   - Check bundle size
   - Monitor Core Web Vitals

### Support Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Documentation](https://vercel.com/docs)

---

**Health Pulse AI Business Website** - Ready for deployment! 🚀
