# Development Notes

## CSS Linting Warning

You may see the following warning in your IDE:

```
Unknown at rule @theme (severity: warning)
```

### This is Expected Behavior ✅

This warning appears because:

1. **Tailwind CSS v4** introduced the new `@theme` CSS directive
2. Standard CSS linters don't recognize this new directive yet
3. The code works perfectly - this is a linter limitation, not a bug

### The Warning is Safe to Ignore

- Your CSS compiles correctly
- Tailwind processes the `@theme` directive properly
- The website functions as expected
- No impact on production builds

### What @theme Does

The `@theme inline` directive in Tailwind v4 allows you to define custom design tokens directly in CSS:

```css
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  /* etc... */
}
```

This replaces the old `tailwind.config.js` approach.

### To Suppress the Warning (Optional)

If the warning bothers you, you can add to your VS Code settings:

```json
{
  "css.lint.unknownAtRules": "ignore"
}
```

Or create a `.vscode/settings.json`:

```json
{
  "css.lint.unknownAtRules": "ignore"
}
```

## Other Development Tips

### Hot Reload

- Save any file to see changes instantly
- Turbopack provides near-instant fast refresh

### Component Development

- Test components in isolation
- Use TypeScript for type safety
- Follow existing patterns

### Adding Images

1. Place images in `/public/projects/`
2. Reference as `/projects/image-name.jpg`
3. Update `portfolio-data.json`

### Debugging

- Check browser console for errors
- Use React DevTools
- Check terminal for build errors

## Production Checklist

Before deploying:

- [ ] Update all placeholder text
- [ ] Replace demo images with real ones
- [ ] Update contact information
- [ ] Test all links
- [ ] Check mobile responsiveness
- [ ] Run `npm run build`
- [ ] Test production build locally

---

Happy coding! 🚀
