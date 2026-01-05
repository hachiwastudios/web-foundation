# Hachi wa Studios Web Foundation — Developer Documentation

**Version:** 1.5.0
**License:** MIT (Open for contributions)
**Author:** Hachi wa Studios
**Website:** https://hachiwastudios.netlify.app/
**Contact:** hachiwastudios@gmail.com
**Update Schedule:** Monthly updates

---

## 🎉 What's New in v1.5.0

### Major Updates

- ✅ **VSCode Extension** - Full-featured extension with IntelliSense for 800+ classes and 56 icon names
- ✅ **Icon System v2.0** - 112 standalone SVG files (56 outlined + 56 solid) with data-attribute injection
- ✅ **Build System** - Professional src/dist architecture with automated minification
- ✅ **35% Smaller Files** - Minified CSS (40KB) and JS (23KB) for production
- ✅ **Auto-Adaptive IntelliSense** - Automatically regenerates IntelliSense data on every build
- ✅ **Icon Caching System** - Performance optimization with Map-based caching

### Technical Improvements

- Professional src/dist separation following industry standards
- PostCSS build pipeline with autoprefixer and cssnano
- Automated icon extraction from sprite sheet to standalone files
- VSCode extension with custom completion providers
- npm scripts for build, watch, and clean operations
- 100% backward compatibility maintained

---

## 📦 What This Package Contains

A complete, production-ready web development starter with:

- **15 Professional Themes** based on real color theory
- **Enhanced Utility CSS** with 800+ classes
- **Custom Value Support** like Tailwind (e.g., `text-[38px]`, `gap-[2rem]`)
- **112 SVG Icons** (56 outlined + 56 solid) with auto-injection and caching
- **20+ JavaScript Utilities** all in one file (hachiwa.js)
- **VSCode Extension** with real-time autocomplete for all utilities
- **Build System** - Automated minification and optimization
- **Mobile-First Responsive** design with hamburger menu
- **Advanced Animations** - Framer Motion-like effects made simple

---

## 📁 Project Structure

```
hachiwastudios-web-foundation/
├── src/                                    # Source files (v1.5+)
│   ├── css/
│   │   └── utility.css                     # Full CSS source (56KB)
│   ├── js/
│   │   ├── hachiwa.js                      # Full JS source (40KB)
│   │   └── features/                       # Modular features
│   │       ├── icons.js                    # Icon system v2.0
│   │       ├── typewriter.js               # 4 typewriter styles
│   │       ├── theme.js                    # Theme switcher
│   │       └── ... (15+ more)
│   └── assets/
│       └── icons/
│           ├── outlined/                   # 56 outlined icons
│           ├── solid/                      # 56 solid icons
│           └── icons.svg                   # Legacy sprite sheet
│
├── dist/                                   # Distribution files (built)
│   ├── css/
│   │   ├── utility.css                     # Full CSS (56KB)
│   │   └── utility.min.css                 # Minified CSS (40KB)
│   ├── js/
│   │   ├── hachiwa.js                      # Full JS (40KB)
│   │   └── hachiwa.min.js                  # Minified JS (23KB)
│   └── assets/
│       └── icons/                          # 112 icon files + sprite
│
├── scripts/                                # Build scripts (v1.5+)
│   ├── build.js                            # Main build orchestrator
│   ├── build-css.js                        # CSS minification
│   ├── build-js.js                         # JS minification
│   ├── extract-icons.js                    # Sprite → standalone files
│   └── generate-intellisense.js            # Auto-adaptive IntelliSense
│
├── vscode-extension/                       # VSCode Extension (v1.5+)
│   ├── extension.js                        # Extension entry point
│   ├── package.json                        # Extension manifest
│   ├── html-custom-data.json               # HTML autocomplete data
│   ├── css-custom-data.json                # CSS autocomplete data
│   └── snippets/
│       └── html.json                       # HTML snippets
│
├── .vscode/                                # Project VSCode config
│   ├── settings.json                       # Editor settings
│   ├── css-custom-data.json                # CSS variable intellisense
│   └── html-custom-data.json               # HTML attribute intellisense
│
├── bin/
│   └── cli.js                              # CLI tool for npx
│
├── template/                               # Legacy template files
│   └── assets/
│       └── css/
│           └── utility.css                 # Source CSS file
│
├── docs/
│   ├── USER-DOCUMENTATION.md               # User guide
│   ├── DEVELOPER-README.md                 # This file
│   └── CHANGELOG.md                        # Version history
│
├── package.json                            # npm configuration
├── README.md                               # Main documentation
└── LICENSE                                 # MIT License
```

### Key Directories

- **src/** - Source files for development
- **dist/** - Built files for distribution (users get this)
- **scripts/** - Build automation scripts
- **vscode-extension/** - VSCode extension source code
- **docs/** - Documentation files

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

## 🎨 Icon System v2.0 (112 SVG Icons)

### NEW in v1.5: Data-Attribute Injection

**Technical Implementation:**

```javascript
// src/js/features/icons.js
const HachiIcons = {
  cache: new Map(),
  basePath: 'assets/icons',

  async load(name, variant = 'outlined') {
    const cacheKey = `${variant}/${name}`;
    if (this.cache.has(cacheKey)) return this.cache.get(cacheKey);

    const url = `${this.basePath}/${variant}/${name}.svg`;
    const response = await fetch(url);
    const svg = await response.text();
    this.cache.set(cacheKey, svg);
    return svg;
  },

  async inject(element, name, variant) {
    const svg = await this.load(name, variant);
    element.innerHTML = svg;
    element.classList.add('icon-injected');
  }
};
```

### Icon Categories (56 unique, 112 with variants)

- **Navigation (6):** menu, close, home, search, user, settings
- **Arrows (8):** arrow-up, arrow-down, arrow-left, arrow-right, chevron-up, chevron-down, chevron-left, chevron-right
- **Actions (9):** check, plus, minus, edit, trash, download, upload, copy, share
- **States (5):** info, alert, bell, star, heart
- **Media (6):** image, file, folder, camera, video, music
- **Communication (3):** mail, message, phone
- **E-commerce (5):** shopping-cart, credit-card, dollar, tag, gift
- **Tools (5):** link, lock, unlock, eye, eye-off
- **Misc (9):** clock, calendar, map-pin, globe, bookmark, flag, zap, code, play

### Icon Usage

```html
<!-- NEW: Data-attribute injection (v1.5+ Recommended) -->
<i data-icon="heart" data-variant="solid" class="icon icon-lg icon-primary"></i>
<i data-icon="star" data-variant="outlined" class="icon icon-xl"></i>
<i data-icon="zap" class="icon"></i> <!-- defaults to outlined -->

<!-- OLD: Sprite sheet (still works for backward compatibility) -->
<svg class="icon icon-lg icon-primary">
  <use href="assets/icons.svg#icon-heart"></use>
</svg>
```

### Icon Sizes

- `icon-xs` - 12px
- `icon-sm` - 16px
- `icon-md` - 20px (default)
- `icon-lg` - 24px
- `icon-xl` - 32px
- `icon-2xl` - 48px
- `icon-3xl` - 64px

### Icon Colors

- `icon-primary` - Primary theme color
- `icon-accent` - Accent color
- `icon-success` - Success green
- `icon-error` - Error red
- `icon-warning` - Warning yellow

### Icon Extraction Process

Icons are automatically extracted from the sprite sheet during build:

```bash
npm run build
# Runs: node scripts/extract-icons.js
# Creates: src/assets/icons/outlined/*.svg (56 files)
# Creates: src/assets/icons/solid/*.svg (56 files)
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

## 🏗️ Build System (v1.5+)

### Build Commands

```bash
# Clean dist/ folder
npm run clean

# Build everything (CSS + JS + icons + IntelliSense)
npm run build

# Build only CSS
npm run build:css

# Build only JavaScript
npm run build:js

# Watch mode (rebuilds on file changes)
npm run watch

# Pre-publish hook (runs automatically before npm publish)
npm run prepublishOnly
```

### Build Process

1. **CSS Build** (`scripts/build-css.js`)
   - Reads `template/assets/css/utility.css`
   - Adds vendor prefixes with autoprefixer
   - Minifies with cssnano
   - Outputs to `dist/css/utility.min.css`
   - **Result:** 28.8% size reduction (56KB → 40KB)

2. **JavaScript Build** (`scripts/build-js.js`)
   - Reads `src/js/hachiwa.js`
   - Minifies with Terser
   - Outputs to `dist/js/hachiwa.min.js`
   - **Result:** 42.6% size reduction (40KB → 23KB)

3. **Icon Extraction** (`scripts/extract-icons.js`)
   - Parses `template/assets/icons.svg`
   - Extracts 56 `<symbol>` elements
   - Creates 56 outlined SVG files
   - Creates 56 solid SVG files
   - **Result:** 112 standalone icon files

4. **IntelliSense Generation** (`scripts/generate-intellisense.js`)
   - Parses built CSS for classes and variables
   - Extracts icon names from `src/assets/icons/`
   - Generates `.vscode/html-custom-data.json`
   - Generates `.vscode/css-custom-data.json`
   - Updates `vscode-extension/` IntelliSense files
   - **Result:** Auto-adaptive IntelliSense (536 classes, 107 properties, 56 icons)

### Build Dependencies

```json
{
  "devDependencies": {
    "autoprefixer": "^10.4.14",
    "chokidar-cli": "^3.0.0",
    "clean-css-cli": "^5.6.2",
    "cssnano": "^6.0.1",
    "npm-run-all": "^4.1.5",
    "postcss": "^8.4.24",
    "postcss-cli": "^10.1.0",
    "rimraf": "^5.0.1",
    "terser": "^5.19.0"
  }
}
```

## 🎨 VSCode Extension (v1.5+)

### Extension Features

1. **Class Autocomplete**
   - 800+ utility class suggestions
   - Context-aware in `class=""` attributes
   - Class descriptions and documentation

2. **Icon Name Autocomplete**
   - 56 icon name suggestions
   - Context-aware in `data-icon=""` attributes
   - Works with both variants (outlined/solid)

3. **HTML Snippets**
   - `wf-container` - Responsive container
   - `wf-card` - Card component
   - `wf-button` - Button with icon
   - `wf-icon` - Icon with variant selector
   - `wf-grid` - Responsive grid
   - `wf-navbar` - Navigation bar
   - `wf-hero` - Hero section
   - `wf-form` - Form with inputs

### Extension Development

```bash
cd vscode-extension
npm install

# Package extension
npx @vscode/vsce package

# Result: web-foundation-1.5.0.vsix
```

### Extension Structure

```javascript
// vscode-extension/extension.js
function activate(context) {
  // Class completion provider
  const classCompletionProvider = vscode.languages.registerCompletionItemProvider(
    ['html', 'javascript'],
    {
      provideCompletionItems(document, position) {
        // Returns 800+ class suggestions
      }
    },
    '"', "'"
  );

  // Icon completion provider
  const iconCompletionProvider = vscode.languages.registerCompletionItemProvider(
    'html',
    {
      provideCompletionItems(document, position) {
        // Returns 56 icon names
      }
    },
    '"', "'"
  );

  context.subscriptions.push(classCompletionProvider, iconCompletionProvider);
}
```

## 🚀 Getting Started

### For Development

```bash
cd hachiwastudios-web-foundation
npm install

# Build the project
npm run build

# Watch mode for development
npm run watch
```

### For Users (via npx)

```bash
npx @hachiwastudios/web-foundation my-project
cd my-project
# Open index.html in browser
```

### After Making Changes

```bash
# Rebuild everything
npm run build

# IntelliSense data will be automatically regenerated

# Test with CLI
node bin/cli.js test-project
```

---

## 📊 Technical Specifications

### File Sizes (v1.5+)

**Source Files:**
- CSS Source: 56KB (`src/css/utility.css`)
- JS Source: 40KB (`src/js/hachiwa.js`)

**Minified Files (Production):**
- CSS Minified: 40KB (`dist/css/utility.min.css`) - 28.8% reduction
- JS Minified: 23KB (`dist/js/hachiwa.min.js`) - 42.6% reduction
- Icons: 112 files + sprite sheet (~25KB total)

**Gzipped:**
- CSS: ~18KB (gzipped)
- JS: ~10KB (gzipped)
- Total: ~62KB minified, ~35KB gzipped

**Comparison:**
- v1.0: ~95KB minified
- v1.5: ~62KB minified
- **Improvement: 35% smaller**

### System Requirements

- **Dependencies:** Zero runtime dependencies
- **Build Dependencies:** PostCSS, Terser, clean-css (dev only)
- **Browser Support:** All modern browsers (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- **Node Version:** 16+ (for development)
- **VSCode Version:** 1.80+ (for extension)

### Performance

- **Lighthouse Score:** 95+
- **First Contentful Paint:** <1s
- **Time to Interactive:** <2s
- **Icon Loading:** Cached after first load
- **Bundle Size:** 62KB minified, 35KB gzipped

### Accessibility

- **WCAG 2.1 AA Compliant:** All theme color contrasts
- **Keyboard Navigation:** Full support
- **Screen Reader:** Semantic HTML support
- **Focus Indicators:** Visible on all interactive elements

---

## 🔄 Publishing to npm

### Pre-Publish Checklist

1. **Build Everything**
   ```bash
   npm run build
   ```

2. **Test CLI**
   ```bash
   node bin/cli.js test-project
   cd test-project
   # Verify files are correct
   ```

3. **Verify IntelliSense**
   - Check `.vscode/html-custom-data.json` exists
   - Check `vscode-extension/html-custom-data.json` updated

4. **Update Version**
   ```bash
   npm version patch  # 1.5.0 → 1.5.1
   npm version minor  # 1.5.0 → 1.6.0
   npm version major  # 1.5.0 → 2.0.0
   ```

5. **Publish**
   ```bash
   npm login
   npm publish --access public
   # prepublishOnly hook automatically runs npm run build
   ```

### Publishing the VSCode Extension

```bash
cd vscode-extension

# Package extension
npx @vscode/vsce package

# Result: web-foundation-1.5.0.vsix

# Publish to marketplace (requires publisher account)
npx @vscode/vsce publish

# Or install manually
# Extensions → Install from VSIX → Select .vsix file
```

### What Gets Published

The `package.json` `files` array determines what goes to npm:

```json
{
  "files": [
    "bin/",
    "dist/",
    "docs/",
    ".vscode/",
    "README.md",
    "LICENSE",
    "CHANGELOG.md"
  ]
}
```

**Excluded:** `src/`, `scripts/`, `template/`, `vscode-extension/`, `node_modules/`

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
