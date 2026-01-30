# DesignCo - Modern Design Agency Website

A premium design agency website built with Next.js 16, React 19, and Tailwind CSS v4. Inspired by modern design agencies with a focus on clean aesthetics, smooth animations, and user experience.

## 🎨 Features

- **Modern Design System** - Custom CSS variables and Tailwind v4 theming
- **Responsive Layout** - Mobile-first design that works on all devices
- **Component-Based Architecture** - Reusable UI primitives (Button, Card, Section)
- **CMS-Driven Portfolio** - JSON-based content management for projects
- **Smooth Animations** - Custom keyframe animations and transitions
- **Performance Optimized** - Built with Next.js 16 and Turbopack
- **Type-Safe** - Full TypeScript support

## 🚀 Tech Stack

- **Framework**: Next.js 16.1.6
- **UI Library**: React 19.2.3
- **Styling**: Tailwind CSS v4.1.18
- **Language**: TypeScript 5
- **Fonts**: Geist Sans & Geist Mono

## 📁 Project Structure

```
designcompany/
├── app/
│   ├── globals.css          # Global styles and design system
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Homepage
├── components/
│   ├── ui/
│   │   ├── Button.tsx        # Button component (primary, secondary, ghost)
│   │   ├── Card.tsx          # Card components with variants
│   │   └── Section.tsx       # Section wrapper with header
│   ├── Navigation.tsx        # Responsive navigation with mobile menu
│   ├── Hero.tsx              # Hero section with CTA
│   ├── Services.tsx          # Services showcase
│   ├── Portfolio.tsx         # Filterable project grid
│   ├── About.tsx             # About section with stats
│   ├── Contact.tsx           # Contact CTA section
│   └── Footer.tsx            # Footer with links
├── lib/
│   └── portfolio-data.json   # CMS content for projects and services
└── public/
    └── projects/             # Project images (placeholder)
```

## 🎯 Component Architecture

### Base UI Primitives

1. **Button** - Three variants (primary, secondary, ghost) with multiple sizes
2. **Card** - Composable card system with Header, Title, Description, Content
3. **Section** - Consistent section wrapper with SectionHeader

### Page Sections

1. **Navigation** - Sticky header with scroll effect and mobile menu
2. **Hero** - Full-screen hero with gradient text and CTA buttons
3. **Services** - Grid of service cards with icons and features
4. **Portfolio** - Filterable project showcase with hover effects
5. **About** - Company story with stats and target audience
6. **Contact** - Dark-themed CTA with contact methods
7. **Footer** - Multi-column footer with links

## 🎨 Design System

### Colors

```css
--background: #fafafa --foreground: #0a0a0a --muted: #71717a --border: #e4e4e7
  --accent: #18181b;
```

### Animations

- **fadeIn** - Fade in with upward movement
- **slideIn** - Slide in from left
- **scaleIn** - Scale in with spring easing
- **shimmer** - Shimmer effect for loading states

### Typography

- Headings: 600 weight, -0.02em letter-spacing, 1.2 line-height
- Body: 1.6 line-height
- Font stack: Geist Sans, system fonts

## 📝 CMS Content Management

Portfolio items and services are managed through `lib/portfolio-data.json`:

```json
{
  "projects": [
    {
      "id": "project-id",
      "title": "Project Name",
      "category": "Category",
      "description": "Description",
      "image": "/projects/image.jpg",
      "tags": ["Tag 1", "Tag 2"],
      "url": "https://..."
    }
  ],
  "services": [...]
}
```

To add new projects:

1. Add entry to `portfolio-data.json`
2. Add project image to `/public/projects/`
3. Categories are automatically extracted for filters

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🎨 Customization

### Update Branding

1. **Company Name**: Update in `Navigation.tsx`, `Footer.tsx`, and `layout.tsx`
2. **Colors**: Modify CSS variables in `app/globals.css`
3. **Fonts**: Change in `app/layout.tsx`

### Add New Sections

1. Create component in `components/`
2. Import and add to `app/page.tsx`
3. Follow existing component patterns

### Modify Services

Edit `lib/portfolio-data.json`:

```json
{
  "services": [
    {
      "icon": "✺",
      "title": "Service Name",
      "description": "Description",
      "features": ["Feature 1", "Feature 2"]
    }
  ]
}
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ⚡ Performance

- **Tailwind CSS v4**: Lightning-fast builds with Rust engine
- **Turbopack**: Next.js 16's fast bundler
- **Optimized Images**: Next.js Image component
- **Code Splitting**: Automatic with Next.js

## 🔧 Development Notes

### Inline Styles

Only use inline styles when necessary (e.g., animation delays). All other styling should use Tailwind classes defined in components.

### Component Composition

Components are designed to be composable. Example:

```tsx
<Card hover>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>
    <CardDescription>Description</CardDescription>
  </CardContent>
</Card>
```

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

- Website: [https://designco.com](https://designco.com)
- Email: hello@designco.com

---

Built with ❤️ using Next.js and Tailwind CSS v4
