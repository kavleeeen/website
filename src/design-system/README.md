# Food Bot Design System

A modern, minimalistic, and elite design system for the Food Recommendation Bot application. Built with consistency, accessibility, and visual excellence in mind.

## 🎨 Design Philosophy

- **Minimalistic**: Clean, uncluttered interfaces that focus on content
- **Elite**: Sophisticated color palettes and premium visual effects
- **Consistent**: Unified design language across all components
- **Accessible**: WCAG compliant with proper focus states and contrast
- **Modern**: Contemporary design patterns with smooth animations

## 🚀 Quick Start

```css
/* Import the design system */
@import '../design-system/design-system.css';

/* Use design system classes */
<div className="ds-card ds-animate-fade-in">
  <h2 className="ds-text-gradient">Title</h2>
  <button className="ds-button ds-button-primary">Action</button>
</div>
```

## 📋 Design Tokens

### Colors

#### Primary Palette
- `--color-primary-50` to `--color-primary-950`: Sophisticated purple gradient
- Main brand color: `--color-primary-500` (#a855f7)
- Dark variant: `--color-primary-600` (#9333ea)

#### Secondary Palette
- `--color-secondary-50` to `--color-secondary-950`: Elegant grays
- Text primary: `--color-secondary-900` (#0f172a)
- Text secondary: `--color-secondary-600` (#475569)

#### Semantic Colors
- Success: `--color-accent-success` (#10b981)
- Warning: `--color-accent-warning` (#f59e0b)
- Error: `--color-accent-error` (#ef4444)
- Info: `--color-accent-info` (#3b82f6)

### Typography

#### Font Families
- Sans: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
- Mono: `'JetBrains Mono', 'Fira Code', Monaco, Consolas, monospace`

#### Font Sizes
- `--font-size-xs`: 0.75rem (12px)
- `--font-size-sm`: 0.875rem (14px)
- `--font-size-base`: 1rem (16px)
- `--font-size-lg`: 1.125rem (18px)
- `--font-size-xl`: 1.25rem (20px)
- `--font-size-2xl`: 1.5rem (24px)
- `--font-size-3xl`: 1.875rem (30px)
- `--font-size-4xl`: 2.25rem (36px)
- `--font-size-5xl`: 3rem (48px)

#### Font Weights
- Light: 300
- Normal: 400
- Medium: 500
- Semibold: 600
- Bold: 700
- Extrabold: 800

### Spacing

8px base unit system:
- `--spacing-1`: 0.25rem (4px)
- `--spacing-2`: 0.5rem (8px)
- `--spacing-3`: 0.75rem (12px)
- `--spacing-4`: 1rem (16px)
- `--spacing-5`: 1.25rem (20px)
- `--spacing-6`: 1.5rem (24px)
- `--spacing-8`: 2rem (32px)
- `--spacing-10`: 2.5rem (40px)
- `--spacing-12`: 3rem (48px)
- `--spacing-16`: 4rem (64px)
- `--spacing-20`: 5rem (80px)
- `--spacing-24`: 6rem (96px)
- `--spacing-32`: 8rem (128px)

### Border Radius

- `--radius-sm`: 0.25rem (4px)
- `--radius-base`: 0.5rem (8px)
- `--radius-md`: 0.75rem (12px)
- `--radius-lg`: 1rem (16px)
- `--radius-xl`: 1.5rem (24px)
- `--radius-2xl`: 2rem (32px)
- `--radius-full`: 9999px

### Shadows

- `--shadow-sm`: Subtle shadow
- `--shadow-base`: Standard shadow
- `--shadow-md`: Medium shadow
- `--shadow-lg`: Large shadow
- `--shadow-xl`: Extra large shadow
- `--shadow-2xl`: Maximum shadow
- `--shadow-glow`: Purple glow effect
- `--shadow-glow-strong`: Strong purple glow

### Animations

#### Durations
- Fast: 150ms
- Normal: 300ms
- Slow: 500ms
- Slower: 750ms

#### Easing Functions
- Smooth: `cubic-bezier(0.4, 0, 0.2, 1)`
- Spring: `cubic-bezier(0.68, -0.55, 0.265, 1.55)`
- Bounce: `cubic-bezier(0.68, -0.55, 0.265, 1.55)`

## 🧩 Component Library

### Buttons

#### Primary Button
```jsx
<button className="ds-button ds-button-primary">
  <FontAwesomeIcon icon={faIcon} className="ds-button-icon" />
  <span className="ds-button-text">Button Text</span>
</button>
```

#### Secondary Button
```jsx
<button className="ds-button ds-button-secondary">
  <FontAwesomeIcon icon={faIcon} className="ds-button-icon" />
  <span className="ds-button-text">Button Text</span>
</button>
```

### Cards

#### Standard Card
```jsx
<div className="ds-card">
  <h3 className="ds-card-title">Card Title</h3>
  <p className="ds-card-content">Card content goes here</p>
</div>
```

#### Glass Card
```jsx
<div className="ds-card ds-glass">
  <h3 className="ds-card-title">Glass Card</h3>
  <p className="ds-card-content">Frosted glass effect</p>
</div>
```

### Forms

#### Form Group
```jsx
<div className="ds-form-group">
  <label className="ds-form-label">
    <FontAwesomeIcon icon={faIcon} className="ds-label-icon" />
    <span className="ds-label-text">Label</span>
  </label>
  <input className="ds-input" placeholder="Enter text..." />
</div>
```

### Messages

#### Success Message
```jsx
<div className="ds-message ds-message-success">
  <FontAwesomeIcon icon={faCheck} className="ds-message-icon" />
  <span className="ds-message-text">Success message</span>
</div>
```

#### Error Message
```jsx
<div className="ds-message ds-message-error">
  <FontAwesomeIcon icon={faExclamation} className="ds-message-icon" />
  <span className="ds-message-text">Error message</span>
</div>
```

## 🎭 Animation Classes

### Fade Animations
- `ds-animate-fade-in`: Fade in from transparent
- `ds-animate-slide-up`: Slide up with fade
- `ds-animate-slide-down`: Slide down with fade
- `ds-animate-scale-in`: Scale in with spring effect

### Utility Animations
- `ds-animate-pulse`: Continuous pulse effect
- `ds-animate-bounce`: Bounce animation

### Transition Classes
- `ds-transition-fast`: Fast transitions (150ms)
- `ds-transition-normal`: Normal transitions (300ms)
- `ds-transition-slow`: Slow transitions (500ms)

## 🎨 Utility Classes

### Text Utilities
```css
.ds-text-xs, .ds-text-sm, .ds-text-base, .ds-text-lg, .ds-text-xl, .ds-text-2xl, .ds-text-3xl, .ds-text-4xl, .ds-text-5xl
.ds-font-light, .ds-font-normal, .ds-font-medium, .ds-font-semibold, .ds-font-bold, .ds-font-extrabold
.ds-leading-tight, .ds-leading-snug, .ds-leading-normal, .ds-leading-relaxed, .ds-leading-loose
```

### Color Utilities
```css
.ds-text-primary, .ds-text-secondary, .ds-text-tertiary, .ds-text-inverse, .ds-text-accent
.ds-bg-primary, .ds-bg-primary-light, .ds-bg-surface, .ds-bg-surface-elevated
```

### Spacing Utilities
```css
.ds-p-1, .ds-p-2, .ds-p-3, .ds-p-4, .ds-p-5, .ds-p-6, .ds-p-8
.ds-m-1, .ds-m-2, .ds-m-3, .ds-m-4, .ds-m-5, .ds-m-6, .ds-m-8
```

### Border Radius Utilities
```css
.ds-rounded-sm, .ds-rounded-base, .ds-rounded-md, .ds-rounded-lg, .ds-rounded-xl, .ds-rounded-2xl, .ds-rounded-full
```

### Shadow Utilities
```css
.ds-shadow-sm, .ds-shadow-base, .ds-shadow-md, .ds-shadow-lg, .ds-shadow-xl, .ds-shadow-2xl, .ds-shadow-glow, .ds-shadow-glow-strong
```

## 🌟 Special Effects

### Gradient Text
```jsx
<h1 className="ds-text-gradient">Gradient Text</h1>
```

### Glass Effect
```jsx
<div className="ds-glass">Glass container</div>
```

### Gradient Backgrounds
```jsx
<div className="ds-gradient-primary">Primary gradient</div>
<div className="ds-gradient-surface">Surface gradient</div>
```

## 📱 Responsive Design

The design system includes responsive utilities and breakpoints:

- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: 768px - 1024px
- **Large Desktop**: > 1024px

### Responsive Classes
```css
.ds-responsive-padding /* Adjusts padding for mobile */
.ds-responsive-text /* Adjusts text size for mobile */
```

## 🌙 Dark Mode Support

The design system automatically adapts to dark mode preferences:

```css
@media (prefers-color-scheme: dark) {
  /* Dark mode variables are automatically applied */
}
```

## ♿ Accessibility

### Focus States
All interactive elements include proper focus states:
```css
.element:focus-visible {
  outline: 2px solid var(--color-primary-500);
  outline-offset: 2px;
}
```

### Color Contrast
All color combinations meet WCAG AA standards for contrast ratios.

### Screen Reader Support
Semantic HTML and proper ARIA labels are used throughout.

## 🚀 Best Practices

1. **Use Design Tokens**: Always use CSS custom properties instead of hardcoded values
2. **Consistent Spacing**: Use the 8px spacing scale for all layouts
3. **Semantic Colors**: Use semantic color names for better maintainability
4. **Animation Performance**: Use `transform` and `opacity` for smooth animations
5. **Mobile First**: Design for mobile first, then enhance for larger screens
6. **Accessibility**: Always include proper focus states and ARIA labels

## 🔧 Customization

### Extending the Design System

```css
/* Add custom tokens */
:root {
  --color-custom-brand: #your-color;
  --spacing-custom: 1.75rem;
}

/* Create custom components */
.ds-custom-component {
  background: var(--color-custom-brand);
  padding: var(--spacing-custom);
  border-radius: var(--radius-lg);
}
```

### Theme Variations

```css
/* Create theme variations */
.theme-dark {
  --color-background: #0f172a;
  --color-surface: #1e293b;
  --color-text-primary: #f8fafc;
}
```

## 📚 Examples

### Complete Component Example
```jsx
<div className="ds-card ds-animate-scale-in">
  <div className="ds-card-header">
    <h3 className="ds-text-gradient">Card Title</h3>
  </div>
  <div className="ds-card-content">
    <p className="ds-text-secondary">Card description</p>
  </div>
  <div className="ds-card-actions">
    <button className="ds-button ds-button-primary">
      <FontAwesomeIcon icon={faIcon} className="ds-button-icon" />
      <span className="ds-button-text">Action</span>
    </button>
  </div>
</div>
```

This design system provides a solid foundation for building consistent, accessible, and visually appealing interfaces for the Food Recommendation Bot application.
