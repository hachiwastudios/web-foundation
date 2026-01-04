# Hachi wa Studios Web Foundation — Developer Documentation

**Version:** 1.0.0
**License:** MIT (Open for contributions)
**Author:** Hachi wa Studios
**Website:** https://hachiwastudios.netlify.app/
**Contact:** hachiwastudios@gmail.com
**Update Schedule:** Monthly updates

---

## 📦 What This Package Contains

A complete, production-ready web development starter with:

- **15 Professional Themes** based on real color theory
- **Enhanced Utility CSS** with 800+ classes
- **Custom Value Support** like Tailwind (e.g., `text-[38px]`, `gap-[2rem]`)
- **50+ SVG Icons** with sizing and coloring utilities
- **20+ JavaScript Utilities** all in one file (hachiwa.js)
- **Full VS Code Intellisense** with autocomplete for all utilities
- **Zero Build Tools** required - works immediately
- **Mobile-First Responsive** design with hamburger menu
- **Advanced Animations** - Framer Motion-like effects made simple

---

## 📁 Project Structure

```
hachiwastudios-web-foundation/
├── .vscode/                                # VS Code configuration
│   ├── settings.json                       # Editor settings
│   ├── css-custom-data.json                # CSS variable intellisense
│   └── html-custom-data.json               # HTML attribute intellisense
│
├── bin/
│   └── cli.js                              # CLI tool for npx
│
├── template/                               # What users get
│   ├── assets/
│   │   ├── css/
│   │   │   └── utility.css                 # All themes + 800+ utilities
│   │   ├── js/
│   │   │   └── hachiwa.js                  # Main utilities bundle (v1.0.0)
│   │   ├── icons.svg                       # 50+ SVG icon sprites
│   │   └── images/                         # User images
│   │
│   ├── components/
│   │   └── index.html                      # Minimal showcase page
│   │
│   ├── config/                             # Configuration files
│   └── README.md                           # User documentation
│
├── docs/
│   └── USER-DOCUMENTATION.md               # Beginner-friendly guide
│
├── package.json                            # npm configuration
├── DEVELOPER-README.md                     # This file
├── version.txt                             # Version info
└── LICENSE                                 # MIT License
```

---

## 🎨 15 Professional Themes

Each theme is optimized for specific use cases:

| # | Theme | Data Attribute | Best For |
|---|-------|----------------|----------|
| 1 | Default | `data-theme="default"` | E-commerce, business sites |
| 2 | Dark | `data-theme="dark"` | Modern apps, night mode |
| 3 | Portfolio | `data-theme="portfolio"` | Creative portfolios, luxury brands |
| 4 | Girly | `data-theme="girly"` | Beauty, fashion, feminine brands |
| 5 | Gaming | `data-theme="gaming"` | Gaming sites, esports, tech |
| 6 | Hacker | `data-theme="hacker"` | Tech blogs, cybersecurity |
| 7 | Corporate | `data-theme="corporate"` | B2B, professional services |
| 8 | Nature | `data-theme="nature"` | Environmental, organic brands |
| 9 | Creative | `data-theme="creative"` | Agencies, bold brands |
| 10 | Minimal | `data-theme="minimal"` | Minimalist, clean designs |
| 11 | Sunset | `data-theme="sunset"` | Food blogs, lifestyle sites |
| 12 | Tech | `data-theme="tech"` | SaaS, modern tech companies |
| 13 | Pastel | `data-theme="pastel"` | Soft, gentle aesthetics |
| 14 | Ocean | `data-theme="ocean"` | Marine, water-related brands |
| 15 | Retro | `data-theme="retro"` | Vintage, nostalgic designs |

### Theme Variables

Each theme provides these CSS variables:

```css
--primary-500, --primary-600, --primary-700    /* Brand colors */
--accent-500, --accent-600                     /* Secondary colors */
--bg-body, --bg-surface, --bg-surface-secondary /* Backgrounds */
--text-primary, --text-secondary, --text-tertiary /* Text colors */
--border-subtle, --border-medium, --border-bold /* Borders */
--status-success, --status-error, --status-warning, --status-info
--space-1 through --space-8                    /* Spacing scale */
--radius-sm, --radius-md, --radius-lg          /* Border radius */
--shadow-sm, --shadow-md, --shadow-lg          /* Box shadows */
```

---

## 💻 CSS Utility Classes (800+)

### Custom Value Support (Like Tailwind!)

```html
<!-- Use any custom value with bracket syntax -->
<div class="text-[38px] gap-[2rem] w-[80%] size-[48px]">
  Custom values work everywhere!
</div>
```

Supported properties: `text`, `size`, `w`, `h`, `min-w`, `min-h`, `max-w`, `max-h`, `gap`, `p`, `pt`, `pr`, `pb`, `pl`, `px`, `py`, `m`, `mt`, `mr`, `mb`, `ml`, `mx`, `my`, `top`, `left`, `right`, `bottom`, `color`, `bg`, `border`, `rounded`

### Layout & Display

```css
.flex, .inline-flex, .grid, .block, .inline-block, .inline, .hidden
.container         /* Responsive container */
.flex-1, .flex-auto, .flex-initial, .flex-none
.flex-grow, .flex-shrink, .flex-nowrap
```

### Flexbox

```css
.flex-row, .flex-col, .flex-wrap
.items-start, .items-center, .items-end, .items-stretch
.justify-start, .justify-center, .justify-end, .justify-between, .justify-around, .justify-evenly
.gap-1, .gap-2, .gap-3, .gap-4, .gap-6, .gap-8
.space-x-4, .space-y-6  /* Space between children */
```

### Grid

```css
.grid-cols-1, .grid-cols-2, .grid-cols-3, .grid-cols-4, .grid-cols-6, .grid-cols-12
.auto-grid          /* Auto-responsive grid */
.gap-4, .gap-6, .gap-8
```

### Sizing

```css
/* Width & Height */
.w-auto, .w-full, .w-screen, .w-1/2, .w-1/3, .w-1/4, .w-2/3, .w-3/4
.h-auto, .h-full, .h-screen, .h-1/2, .h-1/3
.size-4, .size-6, .size-8, .size-12, .size-16

/* Min/Max Width */
.min-w-0, .min-w-full, .max-w-xs, .max-w-sm, .max-w-md, .max-w-lg, .max-w-xl, .max-w-2xl, .max-w-4xl, .max-w-6xl
```

### Position & Z-Index

```css
.static, .relative, .absolute, .fixed, .sticky
.top-0, .right-0, .bottom-0, .left-0, .inset-0
.z-0, .z-10, .z-20, .z-30, .z-40, .z-50
```

### Typography

```css
/* Sizes */
.text-xs (12px), .text-sm (14px), .text-base (16px), .text-lg (18px)
.text-xl (20px), .text-2xl (24px), .text-3xl (32px), .text-4xl (48px), .text-5xl (56px)

/* Weights */
.font-light (300), .font-normal (400), .font-medium (500), .font-semibold (600), .font-bold (700), .font-black (900)

/* Alignment & Transform */
.text-left, .text-center, .text-right, .text-justify
.uppercase, .lowercase, .capitalize, .normal-case
.truncate, .text-ellipsis, .whitespace-nowrap
```

### Colors (Theme-Aware)

```css
/* Text */
.text-primary, .text-secondary, .text-tertiary
.text-primary-500, .text-accent-500
.text-success, .text-error, .text-warning, .text-info

/* Background */
.bg-body, .bg-surface, .bg-surface-secondary
.bg-primary-500, .bg-accent-500
.bg-success, .bg-error, .bg-warning, .bg-info
```

### Spacing (4px scale)

```css
/* Padding: p, pt, pr, pb, pl, px, py */
.p-0, .p-1 (4px), .p-2 (8px), .p-3 (12px), .p-4 (16px)
.p-6 (24px), .p-8 (32px), .p-12 (48px), .p-16 (64px), .p-20 (80px)

/* Margin: m, mt, mr, mb, ml, mx, my */
.m-0, .m-1, .m-2, .m-3, .m-4, .m-6, .m-8, .m-12, .m-16, .m-20
.mx-auto (center), .my-auto, .-mt-4 (negative margin)
```

### Borders & Effects

```css
.border, .border-2, .border-4, .border-t, .border-r, .border-b, .border-l
.border-subtle, .border-medium, .border-bold
.rounded, .rounded-sm, .rounded-md, .rounded-lg, .rounded-xl, .rounded-full
.shadow-sm, .shadow-md, .shadow-lg, .shadow-xl
```

### Opacity, Cursor, Overflow

```css
.opacity-0, .opacity-50, .opacity-75, .opacity-100
.cursor-pointer, .cursor-default, .cursor-not-allowed
.overflow-hidden, .overflow-auto, .overflow-scroll
```

### Responsive Breakpoints

```css
/* Mobile-first approach */
.sm\:text-center    /* ≥640px */
.md\:flex           /* ≥768px */
.lg\:grid-cols-3    /* ≥1024px */
```

---

## 🎨 Icon System (50+ SVG Icons)

### Icon Categories

- **Navigation:** menu, close, home, search, user, settings, arrow-up, arrow-down, arrow-left, arrow-right
- **Chevrons:** chevron-up, chevron-down, chevron-left, chevron-right
- **Actions:** check, plus, minus, x, edit, trash, download, upload, copy, share, external-link
- **States:** info, alert-circle, alert-triangle, bell, star, heart, bookmark, flag, eye, eye-off
- **Media:** image, file, camera, video, music, mic
- **Communication:** mail, message, phone, send
- **E-commerce:** shopping-cart, credit-card, dollar, tag, gift, package
- **Tools:** link, lock, unlock, clock, calendar, map-pin, globe, filter, refresh

### Icon Usage

```html
<!-- Basic icon -->
<svg class="icon">
  <use href="assets/icons.svg#icon-heart"></use>
</svg>

<!-- Sized icons -->
<svg class="icon icon-xs">  <!-- 12px -->
<svg class="icon icon-sm">  <!-- 16px -->
<svg class="icon icon-md">  <!-- 20px (default) -->
<svg class="icon icon-lg">  <!-- 24px -->
<svg class="icon icon-xl">  <!-- 32px -->
<svg class="icon icon-2xl"> <!-- 48px -->
<svg class="icon icon-3xl"> <!-- 64px -->

<!-- Colored icons -->
<svg class="icon icon-primary">     <!-- Primary theme color -->
<svg class="icon icon-success">     <!-- Success green -->
<svg class="icon icon-error">       <!-- Error red -->
<svg class="icon icon-warning">     <!-- Warning yellow -->
```

---

## 🔧 JavaScript Utilities (20+)

All utilities in `hachiwa.js` v1.0.0 - just use data attributes!

### 1. Advanced Typewriter Effect (4 Styles!)

```html
<!-- Default style -->
<h1 data-typewriter="Hello World!" data-typewriter-speed="100"></h1>

<!-- CMD terminal style (green on black) -->
<h2 data-typewriter="$ Initializing system..." data-typewriter-style="cmd"></h2>

<!-- Hacker/Matrix style with glitch effects -->
<h2 data-typewriter="ACCESS GRANTED" data-typewriter-style="hacker"></h2>

<!-- Realistic typing (variable speed) -->
<p data-typewriter="Loading..." data-typewriter-style="realistic" data-typewriter-loop="true"></p>
```

**Options:**
- `data-typewriter-style`: `default`, `realistic`, `cmd`, `hacker`
- `data-typewriter-speed`: Speed in ms (default: 100)
- `data-typewriter-delay`: Delay before start
- `data-typewriter-loop`: Loop animation
- `data-typewriter-cursor`: Show/hide cursor

### 2. Theme Switcher

```html
<select data-theme-switcher class="p-2 border rounded">
  <option value="default">Light</option>
  <option value="dark">Dark</option>
  <option value="gaming">Gaming</option>
  <option value="tech">Tech</option>
  <option value="pastel">Pastel</option>
</select>
```

### 3. Hamburger Menu (Mobile-Responsive!)

```html
<!-- Hamburger button -->
<button class="hamburger" data-hamburger>
  <span></span>
  <span></span>
  <span></span>
</button>

<!-- Mobile menu -->
<div class="mobile-menu" data-mobile-menu>
  <a href="#home">Home</a>
  <a href="#about">About</a>
</div>
```

### 4. Modal/Popup

```html
<button data-modal-open="myModal">Open</button>
<div id="myModal" class="modal">
  <div class="modal-content">
    <button data-modal-close>&times;</button>
    <p>Content</p>
  </div>
</div>
```

### 5. Accordion

```html
<div class="accordion">
  <button class="accordion-trigger">Click</button>
  <div class="accordion-content">Hidden content</div>
</div>
```

### 6. Tabs

```html
<div data-tabs>
  <button data-tab="tab1">Tab 1</button>
  <div id="tab1" class="tab-panel">Content</div>
</div>
```

### 7. Form Validation

```html
<form data-validate>
  <input type="email" required data-validate-email>
  <input type="text" required minlength="3">
  <button type="submit">Submit</button>
</form>
```

### 8. Smooth Scroll

```html
<a href="#section" data-smooth-scroll>Jump to section</a>
```

### 9. Scroll Reveal & Scroll Animate

```html
<!-- Simple reveal -->
<div data-scroll-reveal>Fades in on scroll</div>

<!-- Advanced animations -->
<div data-scroll-animate="fade-up">Slides up when scrolled into view</div>
<div data-scroll-animate="scale" data-scroll-delay="200">Scales in with delay</div>
```

**Scroll animation types:** `fade-up`, `fade-down`, `fade-left`, `fade-right`, `scale`

### 10. Parallax Scrolling

```html
<div data-parallax="0.5">Moves slower than scroll (50% speed)</div>
<div data-parallax="1.5">Moves faster than scroll (150% speed)</div>
```

### 11. Lazy Loading Images

```html
<img data-lazy-src="image.jpg" alt="Description">
```

### 12. Copy to Clipboard

```html
<button data-copy="Text to copy">Copy</button>
```

### 13. Tooltip

```html
<button data-tooltip="I'm a tooltip!">Hover me</button>
```

### 14. Dropdown Menu

```html
<div data-dropdown>
  <button data-dropdown-trigger>Menu</button>
  <div data-dropdown-content>
    <a href="#">Item 1</a>
  </div>
</div>
```

### 15. Page Load Animations

```html
<div data-animate="fade">Fades in on page load</div>
<div data-animate="slide-up" data-animate-delay="200">Slides up with delay</div>
<div data-animate="bounce">Bounces infinitely</div>
```

**Animation types:** `fade`, `slide-up`, `slide-down`, `slide-left`, `slide-right`, `zoom`, `bounce`, `shake`, `rotate`, `pulse`

### 16. Active Navigation State

```html
<nav data-active-state>
  <a href="#home" class="active">Home</a>
  <a href="#about">About</a>
</nav>
```

### 17. Custom Value Parser

Automatically parses custom values in classes:

```html
<div class="text-[38px] gap-[2rem] w-[80%]">
  Custom values work!
</div>
```

---

## 🚀 Getting Started

### For Development

```bash
cd hachiwastudios-web-foundation
npm install
npm run dev  # Starts live server at localhost:3000
```

### For Users (via npx)

```bash
npx @hachiwastudios/web-foundation my-project
cd my-project
# Open components/index.html in browser
```

---

## 📊 Technical Specifications

- **CSS File Size:** ~80KB (gzipped: ~18KB)
- **JS File Size:** ~35KB (gzipped: ~10KB)
- **Icons File Size:** ~15KB
- **Total Package:** ~130KB (gzipped: ~40KB)
- **Dependencies:** Zero runtime dependencies
- **Browser Support:** All modern browsers (Chrome, Firefox, Safari, Edge)
- **Performance:** Lighthouse score 95+
- **Accessibility:** WCAG 2.1 AA compliant color contrasts

---

## 🔄 Publishing to npm

```bash
# Login to npm
npm login

# Update version
npm version patch  # 1.0.0 → 1.0.1
npm version minor  # 1.0.0 → 1.1.0
npm version major  # 1.0.0 → 2.0.0

# Publish
npm publish --access public
```

---

## 📚 Additional Resources

- **User Documentation:** See `docs/USER-DOCUMENTATION.md`
- **Version Info:** See `version.txt`
- **Live Demo:** `npm run dev` → http://localhost:3000/components/
- **Official Website:** https://hachiwastudios.netlify.app/
- **GitHub:** https://github.com/hachiwastudios/web-foundation
- **Contact:** hachiwastudios@gmail.com

---

## 🎯 Design Philosophy

1. **Zero Config** - Works immediately, no build tools
2. **Mobile-First** - Responsive by default
3. **Theme-Aware** - All colors adapt to active theme
4. **Beginner-Friendly** - Clear naming, comprehensive documentation
5. **Production-Ready** - Battle-tested in real projects
6. **Performance-First** - Optimized animations, lazy loading, minimal bundle

---

## 📅 Update Schedule

This package receives **monthly updates** with:
- New features and utilities
- Bug fixes and performance improvements
- New themes and icons
- Documentation enhancements

Subscribe to our GitHub repository to stay updated!

---

## 📄 License

MIT License - Use freely in any project!

---

**Built with ❤️ by Hachi wa Studios**

*Professional web development tools for modern developers*
