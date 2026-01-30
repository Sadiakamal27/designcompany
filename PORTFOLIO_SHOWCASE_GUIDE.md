# Portfolio Showcase Feature

## Overview

A new **sticky scroll portfolio showcase** section has been added to the website, positioned immediately after the Hero section. This creates an immersive storytelling experience for each featured project.

---

## 🎨 Design Pattern

### Layout Structure

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│  LEFT (Sticky)          RIGHT (Scrollable)          │
│                                                     │
│  ┌──────────────┐      ┌──────────────────┐        │
│  │              │      │                  │        │
│  │  Project     │      │     VIDEO        │        │
│  │  Title       │      │   (Center)       │        │
│  │              │      │                  │        │
│  │  Description │      └──────────────────┘        │
│  │              │                                   │
│  │  Challenge   │      ┌────────┬────────┐        │
│  │              │      │ Image  │ Image  │        │
│  │  Solution    │      │   1    │   2    │        │
│  │              │      └────────┴────────┘        │
│  │  Results     │      ┌────────┬────────┐        │
│  │              │      │ Image  │ Image  │        │
│  │  Tags        │      │   3    │   4    │        │
│  │              │      └────────┴────────┘        │
│  │  Meta Info   │                                   │
│  │              │                                   │
│  └──────────────┘                                   │
│                                                     │
└─────────────────────────────────────────────────────┘
```

### Scroll Behavior

1. **Before Scroll**: Description is hidden/faded
2. **While Scrolling**:
   - Left description becomes visible and sticks to viewport
   - Right content (video + images) scrolls normally
3. **After Section**: Description unsticks, next project appears

---

## 📁 Component Architecture

### Main Component: `PortfolioShowcase.tsx`

**Location**: `components/PortfolioShowcase.tsx`

**Structure**:

```tsx
PortfolioShowcase (Container)
  └── ShowcaseItem (Individual Project)
      ├── Left Column (Sticky)
      │   ├── Project Number
      │   ├── Title
      │   ├── Category
      │   ├── Description
      │   ├── Challenge
      │   ├── Solution
      │   ├── Results List
      │   ├── Tags
      │   └── Meta (Year, Client)
      └── Right Column (Scrollable)
          ├── Video (Center, Full Width)
          └── Image Grid (2x2)
```

### Key Features

1. **Intersection Observer**: Detects when project enters viewport
2. **Sticky Positioning**: Left column sticks during scroll
3. **Staggered Animations**: Content fades in with delays
4. **Responsive Grid**: 12-column layout on desktop, stacked on mobile
5. **Video Autoplay**: Videos play automatically when visible

---

## 📊 CMS Data Structure

### Data Location: `lib/portfolio-data.json`

Added new `showcaseProjects` array:

```json
{
  "showcaseProjects": [
    {
      "id": "unique-id",
      "title": "Project Name",
      "category": "Project Category",
      "shortDescription": "Brief tagline",
      "description": "Full project description",
      "challenge": "What problem needed solving",
      "solution": "How we solved it",
      "results": ["Result 1", "Result 2", "Result 3"],
      "videoUrl": "https://path-to-video.mp4",
      "images": [
        "/path/to/image1.jpg",
        "/path/to/image2.jpg",
        "/path/to/image3.jpg",
        "/path/to/image4.jpg"
      ],
      "tags": ["Tag1", "Tag2", "Tag3"],
      "year": "2024",
      "client": "Client Name"
    }
  ]
}
```

### Current Projects

1. **Fitted** - Mobile App Design
2. **MyPlace** - Property Management Platform
3. **Finom** - Business Banking

---

## 🎯 Technical Implementation

### Sticky Scroll CSS

```css
.lg:sticky {
  position: sticky;
  top: 8rem; /* 32 in Tailwind = 128px */
}
```

The left column sticks when scrolling, staying in view until its parent section ends.

### Intersection Observer

```tsx
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      setIsVisible(entry.isIntersecting);
    },
    {
      threshold: 0.2,
      rootMargin: "-100px 0px",
    },
  );
  // ...
}, []);
```

Triggers animations when 20% of section is visible, with 100px margin.

### Staggered Animations

```tsx
style={{
  transitionDelay: `${200 + imgIdx * 100}ms`
}}
```

Each image animates 100ms after the previous one.

---

## 🎨 Styling Details

### Color Scheme

- Background: White/Light gray
- Text: Dark foreground
- Borders: Subtle zinc borders
- Accents: Gradient overlays on hover

### Animations

- **Fade In**: Opacity 0 → 1 with Y translation
- **Duration**: 700ms
- **Easing**: Smooth cubic-bezier
- **Delays**: Staggered for visual interest

### Responsive Breakpoints

- **Mobile**: Single column, no sticky behavior
- **Desktop (lg+)**: 2-column grid with sticky left

---

## 📝 How to Add New Showcase Projects

### Step 1: Add to CMS

Edit `lib/portfolio-data.json`:

```json
{
  "showcaseProjects": [
    // ... existing projects
    {
      "id": "new-project",
      "title": "New Project",
      "category": "Category",
      "shortDescription": "Short desc",
      "description": "Full description of the project...",
      "challenge": "The problem we faced...",
      "solution": "How we solved it...",
      "results": ["Impact 1", "Impact 2", "Impact 3"],
      "videoUrl": "/videos/project-video.mp4",
      "images": [
        "/projects/new-project-1.jpg",
        "/projects/new-project-2.jpg",
        "/projects/new-project-3.jpg",
        "/projects/new-project-4.jpg"
      ],
      "tags": ["React", "Design", "Web"],
      "year": "2024",
      "client": "Client Name"
    }
  ]
}
```

### Step 2: Add Media Files

1. **Video**: Place in `/public/videos/`
2. **Images**: Place in `/public/projects/`

Recommended specs:

- **Video**: MP4, 16:9 aspect ratio, max 1920x1080, 30fps
- **Images**: JPG/PNG, 4:3 aspect ratio, max 1600x1200

### Step 3: Done!

The component automatically renders all projects in the `showcaseProjects` array. No code changes needed!

---

## 🎬 Video Integration

### Supported Formats

- MP4 (recommended)
- WebM
- OGG

### Video Features

- ✅ Autoplay
- ✅ Muted by default
- ✅ Looping
- ✅ Plays inline on mobile
- ✅ Poster image fallback

### External Videos

You can use external video URLs:

```json
"videoUrl": "https://www.example.com/video.mp4"
```

Or embed services like:

- Vimeo
- YouTube (requires iframe instead)
- Self-hosted

---

## 🖼️ Image Grid

### Layout

- 2x2 grid (4 images per project)
- Aspect ratio: 4:3
- Rounded corners
- Hover effects

### Placeholder Behavior

If images aren't ready:

- Shows gradient background
- Displays project's first letter
- Numbered badges (1-4)
- Maintains aspect ratio

---

## 🎨 Customization Options

### Change Sticky Offset

Edit `PortfolioShowcase.tsx`:

```tsx
<div className="lg:sticky lg:top-32">
  // Change top-32 to desired offset
```

### Adjust Grid Columns

```tsx
<div className="grid lg:grid-cols-12 gap-12">
  <div className="lg:col-span-4"> // Left width
  <div className="lg:col-span-8"> // Right width
```

### Modify Image Grid

```tsx
<div className="grid grid-cols-2 gap-6">
  // Change to grid-cols-3 for 3 columns
  // Change gap-6 for different spacing
```

### Animation Timing

```tsx
style={{
  transitionDelay: `${200 + imgIdx * 100}ms`
}}
// Change 100ms to speed up/slow down
```

---

## 🚀 Performance Considerations

### Videos

- Use compressed MP4 files
- Consider lazy loading for videos below fold
- Provide poster images
- Max size: 10MB per video

### Images

- Optimize with tools like TinyPNG
- Use Next.js Image component (future enhancement)
- Lazy load images
- Use WebP format when possible

### Intersection Observer

- Uses native browser API
- Minimal performance impact
- Efficient scroll handling

---

## 🐛 Troubleshooting

### Video Not Playing

- Check file format (MP4 recommended)
- Verify file path is correct
- Check browser console for errors
- Ensure file is accessible in `/public/`

### Sticky Not Working

- Must be on desktop (lg+ breakpoint)
- Check parent container height
- Ensure sticky element has top value
- Test in supported browsers

### Images Not Showing

- Verify file paths start with `/`
- Check files exist in `/public/`
- Look for 404 errors in network tab
- Verify file permissions

### Animations Choppy

- Reduce number of elements animating
- Increase animation delay gaps
- Check browser performance
- Test on different devices

---

## 📱 Mobile Behavior

- **No sticky behavior**: Too complex for mobile
- **Single column layout**: Stacked vertically
- **Smaller text sizes**: Responsive typography
- **Touch-friendly**: Proper spacing and targets
- **Optimized videos**: Lower resolution acceptable

---

## ✨ Future Enhancements

Possible improvements:

- [ ] Add case study links
- [ ] Include team credits
- [ ] Add testimonials
- [ ] Implement full-screen video modal
- [ ] Add project navigation (prev/next)
- [ ] Include project metrics dashboard
- [ ] Add parallax effects
- [ ] Interactive image lightbox

---

## 📚 References

- **Design Inspiration**: ShapeShyft.co.uk
- **Sticky Positioning**: MDN Web Docs
- **Intersection Observer**: MDN Web Docs
- **Video Element**: HTML5 Video Spec

---

**Built with modern web standards and React best practices** ✨
