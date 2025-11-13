# TechBusiness Website

## Overview
A modern, professional website for a technology business targeting general consumers. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Brand Identity
- **Industry**: Technology
- **Target Audience**: General Consumers
- **Style**: Modern and Professional
- **Color Scheme**: Blue and Indigo gradients (trust, professionalism, innovation)

## Key Features

### 1. Navigation
- Sticky header with transparent-to-solid transition on scroll
- Mobile-responsive with hamburger menu
- Smooth scroll navigation
- Clear CTA button

### 2. Hero Section
- Full-screen hero with high-quality background image
- Large, impactful typography (text-6xl to text-8xl)
- Gradient text for emphasis
- Dual CTA buttons
- Scroll indicator animation

### 3. Services Showcase
- 6 core services in 3-column grid
- Icon-based cards with hover effects
- Professional shadows and transitions
- Services include: Custom Software, Mobile Apps, Cloud Solutions, Cybersecurity, Digital Transformation, Data Analytics

### 4. Testimonials (Team Profiles)
- 6 client testimonials in 3-column grid
- Real photos with 5-star ratings
- Professional styling with subtle gradients
- Name, title, company for each testimonial

### 5. Pricing
- Single package at $29 (one-time)
- Feature list with checkmarks
- Integrated Stripe payment link
- Trust indicators
- Gradient styling for premium feel

### 6. Contact Form
- Split layout: contact info + form
- Form fields: name, email, phone, message
- Hidden fields for founder_id and project_id
- POST to: https://deep-api-server-2moiw.kinsta.app/api/form-submissions
- Success/error state handling
- Business hours and contact details

### 7. Footer
- 4-column layout
- Company info, services links, company links, newsletter signup
- Social media icons
- Copyright and legal links

## Technical Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## Design Principles
- Generous white space throughout
- Large, clear typography hierarchy
- Professional color palette (blues and indigos)
- Smooth transitions and hover effects
- Mobile-first responsive design
- Accessibility considerations

## Color Palette
- Primary: Blue (#3b82f6) to Indigo (#4f46e5)
- Backgrounds: White, Gray-50, Gray-900
- Text: Gray-900 (headings), Gray-600/700 (body)
- Accents: Green (success), Yellow (ratings)

## Spacing System
- Sections: py-24 (96px vertical padding)
- Cards: p-8 (32px padding)
- Grids: gap-8 (32px gap)
- Text spacing: space-y-6, space-y-8

## Interactive Elements
- Smooth scroll navigation
- Hover effects on cards (scale, shadow)
- Form validation and submission handling
- Mobile menu toggle
- Sticky navigation with transparency change

## Performance Optimizations
- Next.js image optimization configured
- External images from Unsplash
- CSS-in-JS with Tailwind for minimal bundle size
- Component-based architecture for code splitting

## Deployment Notes
- Environment variables needed for founder_id and project_id
- Stripe payment link is pre-configured
- Form submissions POST to provided API endpoint
- Images load from Unsplash CDN

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive (iOS Safari, Chrome Mobile)
- Graceful degradation for older browsers