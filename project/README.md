# Ignacio Díaz Nieto - Personal Portfolio

A stunning, performance-optimized personal portfolio website built with vanilla HTML, CSS, and JavaScript. Features premium design with glass morphism effects, advanced motion design, and accessibility-first approach.

## ✨ Features

### Design & UI
- **Premium color system** with enhanced dark/light themes and neon accent highlights (#7cf6ff, #9a6bff)
- **Glass morphism effects** with backdrop blur and subtle borders
- **Light/Dark mode toggle** with persistent theme preference
- **Responsive design** optimized for mobile, tablet, and desktop
- **Premium typography** with Space Grotesk display font and Inter body text
- **Advanced motion design** with magnetic hover effects, 3D tilt cards, and parallax

### Functionality
- **Multi-language support** (English/Spanish) with JSON translation files
- **Lenis smooth scrolling** for buttery-smooth page navigation
- **Command palette** (⌘K) for quick navigation between sections
- **Contact form** with client-side validation and success feedback
- **Typing animation** in hero section showcasing key skills
- **Enhanced scroll spy** navigation with active link highlighting
- **SEO optimized** with structured data and meta tags
- **Tooltip system** for interactive elements with contextual information

### Performance & Accessibility
- **WCAG AA compliant** with proper focus management and aria labels
- **Optimized bundle** with WebP image support and lazy loading
- **Print-friendly** CSS for CV download functionality
- **Reduced motion** support for accessibility preferences
- **Performance monitoring** with Core Web Vitals tracking

### Motion Design Upgrades
- **Magnetic hover effects** on interactive elements
- **3D tilt card animations** with perspective transforms
- **Parallax scrolling** with multiple layers and mouse tracking
- **Staggered reveal animations** with GSAP ScrollTrigger
- **Counter animations** for project metrics
- **Skill bar animations** with smooth progress fills
- **Success confetti** animation on form submission
- **Ripple effects** on button interactions

## 🚀 Quick Start

### Local Development
1. Clone or download the repository
2. Open `index.html` in a web browser
3. No build step required - it's pure vanilla code!

### Customization
1. **Content**: Update personal information in `index.html`
2. **Translations**: Modify `/assets/i18n/en.json` and `/assets/i18n/es.json`
3. **Styling**: Customize CSS custom properties in `styles.css` under `:root`
4. **Interactions**: Extend functionality in `main.js`

## 🏗️ Project Structure

```
/
├── index.html              # Main HTML structure
├── styles.css              # All styling with CSS custom properties
├── main.js                 # JavaScript functionality and interactions
├── assets/
│   └── i18n/
│       ├── en.json         # English translations
│       └── es.json         # Spanish translations
└── README.md               # This file
```

## 🎨 Enhanced Design System

### Colors
- **Background**: `#0b0e13` (Dark) / `#ffffff` (Light)
- **Elevated Background**: `#111622` (Dark) / `#f8fafc` (Light)
- **Primary Accent**: `#7cf6ff` (Cyan)
- **Secondary Accent**: `#9a6bff` (Purple)
- **Success**: `#4be477` (Green)
- **Warning**: `#fbbf24` (Amber)
- **Error**: `#ef4444` (Red)

### Typography
- **Display Font**: Space Grotesk (headings and display text)
- **Body Font**: Inter (body text and UI elements)
- **Monospace Font**: JetBrains Mono (code and technical text)
- **Scale**: Fluid typography with clamp() functions

### Spacing
- **Fluid Spacing**: clamp() functions for responsive spacing
- **Base Gap**: clamp(16px, 2vw, 28px)
- **Container Max Width**: 1200px
- **Border Radius**: 14px default with variations

## 🔧 Enhanced Technical Details

### Libraries Used (via CDN)
- **GSAP 3.12.5**: Advanced animations and scroll triggers
- **Lenis 1.0.29**: Smooth scrolling with momentum
- **Typed.js 2.0.16**: Typing animation in hero section
- **Canvas Confetti 1.6.0**: Success animations
- **Total Bundle Size**: ~145KB (optimized for performance)

### Browser Support
- **Modern browsers**: Chrome 88+, Firefox 85+, Safari 14+, Edge 88+
- **Fallbacks**: Graceful degradation for older browsers
- **Mobile**: iOS Safari 14+, Chrome Mobile 88+
- **Reduced Motion**: Full support for accessibility preferences

### Performance Optimizations
- **WebP Images**: Modern image formats with fallbacks
- **Lazy Loading**: Intersection Observer for images
- **Font Display Swap**: Prevent layout shifts during font loading
- **Resource Preloading**: Critical fonts and assets
- **Performance Monitoring**: Built-in Core Web Vitals tracking

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1200px

## ⌨️ Enhanced Keyboard Shortcuts

- **⌘K / Ctrl+K**: Open command palette
- **Escape**: Close modals/palette
- **Arrow Keys**: Navigate command palette
- **Enter**: Select command palette item
- **Tab**: Navigate form fields and interactive elements
- **Shift+Tab**: Reverse tab navigation

## 🌍 Internationalization

The site supports English and Spanish languages:

- **Default Language**: English
- **Language Toggle**: Top-right corner of navigation
- **Persistent**: Language preference saved in localStorage
- **Fallbacks**: English content shown if translations missing
- **Dynamic Updates**: Typing animation updates with language changes

## 📧 Contact Form

The contact form includes:
- **Client-side validation** with real-time feedback
- **Accessibility**: Proper labels and error messages
- **Success states**: Visual confirmation with confetti animation
- **Integration ready**: Uses Netlify Forms attributes
- **Honeypot protection**: Built-in spam prevention

## 🎯 Enhanced SEO Features

- **Structured Data**: JSON-LD for Person and CreativeWork schemas
- **Meta Tags**: Complete Open Graph and Twitter Cards
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Canonical URLs**: Proper URL structure
- **Performance**: Optimized for Core Web Vitals
- **Image Optimization**: WebP format with proper alt text

## 🔒 Security

- **No sensitive data**: All content is public-facing
- **External links**: Use `rel="noopener noreferrer"`
- **Form validation**: Prevents common injection attacks
- **CSP ready**: Content Security Policy compatible
- **Honeypot fields**: Spam protection for contact form

## 📈 Analytics Ready

The site is prepared for analytics integration:
- **Privacy-friendly**: Plausible.io compatible
- **Event tracking**: Custom events for interactions
- **Performance monitoring**: Web Vitals tracking ready
- **User experience**: Scroll depth and engagement tracking

## 🚀 Deployment

### Static Hosting (Recommended)
- **Netlify**: Drag and drop the folder
- **Vercel**: Connect Git repository
- **GitHub Pages**: Push to `gh-pages` branch
- **AWS S3**: Upload to S3 bucket with static hosting

### Custom Domain
1. Point DNS to hosting provider
2. Update canonical URLs in meta tags
3. Configure SSL certificate
4. Set up proper redirects for SEO

## 🔄 Content Updates

To update content:
1. **Personal Info**: Edit text directly in `index.html`
2. **Projects**: Update project cards with new links/descriptions
3. **Experience**: Add new timeline items
4. **Skills**: Modify skill chips and progress bars
5. **Translations**: Update JSON files for multi-language content
6. **Animations**: Adjust GSAP timelines and CSS transitions

## 🎨 Animation System

The portfolio includes a comprehensive animation system:

### Reveal Animations
- `data-reveal="hero"`: Hero section staggered reveals
- `data-reveal="section"`: Section title animations
- `data-reveal="stagger"`: Staggered child element reveals
- `data-reveal="timeline"`: Timeline item animations
- `data-reveal="fade"`: Simple fade-in animations

### Interactive Effects
- `.magnetic`: Magnetic hover effects with GSAP
- `.tilt-card`: 3D tilt effects on mouse movement
- `.ripple`: Button ripple effects on click
- `[data-tooltip]`: Contextual tooltips

### Performance Considerations
- Respects `prefers-reduced-motion` setting
- Fallback animations for older browsers
- Optimized animation loops with requestAnimationFrame

## 🛠️ Development Tools

For development and debugging:

```javascript
// Available in browser console
window.portfolio // Main portfolio instance
window.utils // Utility functions
window.debugPortfolio // Development helpers (dev mode only)
```

### Debug Commands
- `debugPortfolio.toggleAnimations()`: Toggle animation debugging
- `debugPortfolio.showBoundingBoxes()`: Show element boundaries
- `debugPortfolio.logPerformance()`: Log performance metrics

## 📞 Support

For questions about customization or issues:
- **Technical Issues**: Check browser console for errors
- **Customization Help**: Review CSS custom properties and data attributes
- **Performance**: Use Lighthouse for optimization suggestions
- **Animations**: Check GSAP documentation for advanced effects

## 📋 Changelog

### Version 2.0 - Premium Upgrade
- ✨ Enhanced color system with premium palette
- 🎨 Advanced motion design with magnetic effects
- 🚀 Lenis smooth scrolling integration
- 💫 3D tilt cards and parallax effects
- 🎯 Tooltip system for better UX
- 📊 Counter animations for metrics
- 🎉 Success confetti animations
- 🔧 Enhanced performance monitoring
- 🎨 Premium typography with Space Grotesk
- 📱 Improved responsive design
- ♿ Enhanced accessibility features
- 🌐 Better internationalization support

---

Built with ❤️ using vanilla HTML, CSS, and JavaScript by Ignacio Díaz Nieto.

**Premium upgrade featuring advanced motion design, enhanced accessibility, and performance optimizations.**