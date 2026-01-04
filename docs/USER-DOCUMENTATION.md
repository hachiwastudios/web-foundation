# Hachi wa Studios Web Foundation — User Guide

**Welcome!** This guide will teach you everything you need to build amazing websites with our framework.

**Version:** 1.0.0 | **Perfect for developers with 3+ months of experience!**

**Website:** https://hachiwastudios.netlify.app/
**Update Schedule:** Monthly updates with new features
**Contact:** hachiwastudios@gmail.com

---

## 🚀 Quick Start (5 Minutes)

### Step 1: Get the Template

```bash
# Create your project
npx @hachiwastudios/web-foundation my-awesome-site

# Navigate to it
cd my-awesome-site

# Open components/index.html in your browser
```

That's it! You now have a complete website starter.

### Step 2: Edit Your HTML

Open `components/index.html` in your favorite editor and start building!

### Step 3: Choose a Theme

Add a theme selector or change the theme in the `<html>` tag:

```html
<html lang="en" data-theme="dark">
```

**Available themes (15 total):** `default`, `dark`, `portfolio`, `girly`, `gaming`, `hacker`, `corporate`, `nature`, `creative`, `minimal`, `sunset`, `tech`, `pastel`, `ocean`, `retro`

---

## 📁 Folder Structure Explained

```
my-project/
├── assets/
│   ├── css/
│   │   └── utility.css          ← All 15 themes + 800+ utility classes
│   ├── js/
│   │   └── hachiwa.js           ← All 20+ JavaScript utilities
│   ├── icons.svg                ← 50+ SVG icons
│   └── images/                  ← Put your images here
│
├── components/
│   └── index.html               ← Main showcase (start here!)
├── config/                      ← Configuration files
└── README.md                    ← Quick reference
```

### Where to Put Things

- **HTML files** → `components/` folder (index.html, about.html, etc.)
- **Images** → `assets/images/`
- **Custom CSS** → Add to `assets/css/` or inline in HTML
- **Custom JS** → Add to `assets/js/` or inline in HTML

---

## 🎨 Using CSS Utilities

Instead of writing custom CSS, use pre-built utility classes!

### Custom Values (Like Tailwind!)

Use custom values with bracket syntax:

```html
<div class="text-[38px] gap-[2rem] w-[80%]">
  Any custom value works!
</div>

<button class="size-[48px] p-[1.5rem] rounded-[20px]">
  Custom button
</button>
```

### Example 1: Make a Card

```html
<div class="card p-6 shadow-md">
  <h3 class="text-xl font-bold mb-3">Card Title</h3>
  <p class="text-secondary mb-4">Card description goes here.</p>
  <button class="btn btn-primary">Click Me</button>
</div>
```

**What each class does:**
- `card` - Card background and border
- `p-6` - 24px padding on all sides
- `shadow-md` - Medium shadow
- `text-xl` - 20px font size
- `font-bold` - Bold weight
- `mb-3` - 12px bottom margin
- `text-secondary` - Secondary text color (lighter)
- `btn btn-primary` - Primary button style

### Example 2: Center Content

```html
<div class="flex items-center justify-center h-screen">
  <h1 class="text-4xl font-bold">Perfectly Centered!</h1>
</div>
```

### Example 3: Responsive Grid

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  <div class="card">Column 1</div>
  <div class="card">Column 2</div>
  <div class="card">Column 3</div>
  <div class="card">Column 4</div>
</div>
```

- Mobile (0-768px): 1 column
- Tablet (768px-1024px): 2 columns
- Desktop (1024px+): 4 columns

---

## 🎭 15 Professional Themes

Now includes 15 professional themes!

### How to Use

```html
<!-- In HTML tag -->
<html lang="en" data-theme="gaming">

<!-- Or with theme switcher -->
<select data-theme-switcher class="p-3 border rounded">
  <option value="default">Light Theme</option>
  <option value="dark">Dark Theme</option>
  <option value="gaming">Gaming Theme</option>
  <option value="tech">Tech (NEW!)</option>
  <option value="pastel">Pastel (NEW!)</option>
  <option value="ocean">Ocean (NEW!)</option>
  <option value="retro">Retro (NEW!)</option>
</select>
```

### All 15 Themes

1. **default** - Clean blue for e-commerce
2. **dark** - Modern dark mode
3. **portfolio** - Elegant gold/black for creatives
4. **girly** - Soft pink/purple
5. **gaming** - Neon purple/green
6. **hacker** - Matrix green terminal
7. **corporate** - Professional navy
8. **nature** - Earthy greens
9. **creative** - Vibrant orange
10. **minimal** - Clean black/white
11. **sunset** - Warm yellows
12. **tech** - Vibrant sky blue (NEW!)
13. **pastel** - Soft lavender/pink (NEW!)
14. **ocean** - Deep ocean blue (NEW!)
15. **retro** - Vintage orange/mustard (NEW!)

---

## 🎯 50+ SVG Icons

Built-in icon system with 50+ SVG icons!

### How to Use Icons

```html
<!-- Basic icon -->
<svg class="icon">
  <use href="assets/icons.svg#icon-heart"></use>
</svg>

<!-- Sized icons -->
<svg class="icon icon-sm">  <!-- 16px -->
  <use href="assets/icons.svg#icon-star"></use>
</svg>

<svg class="icon icon-lg">  <!-- 24px -->
  <use href="assets/icons.svg#icon-home"></use>
</svg>

<!-- Colored icons -->
<svg class="icon icon-primary">
  <use href="assets/icons.svg#icon-check"></use>
</svg>

<svg class="icon icon-success">
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
- `icon-success` - Green
- `icon-error` - Red
- `icon-warning` - Yellow

### Available Icons (50+)

**Navigation:** menu, close, home, search, user, settings, arrow-up, arrow-down, arrow-left, arrow-right, chevron-up, chevron-down, chevron-left, chevron-right

**Actions:** check, plus, minus, x, edit, trash, download, upload, copy, share, external-link

**States:** info, alert-circle, alert-triangle, bell, star, heart, bookmark, flag, eye, eye-off

**Media:** image, file, camera, video, music, mic

**Communication:** mail, message, phone, send

**E-commerce:** shopping-cart, credit-card, dollar, tag, gift, package

**Tools:** link, lock, unlock, clock, calendar, map-pin, globe, filter, refresh

---

## ✨ JavaScript Features (20+ Utilities!)

Just add data attributes - no coding needed!

### 1. Typewriter Animation (4 Styles!)

Advanced typewriter with CMD and Hacker styles!

```html
<!-- Default typewriter -->
<h1 data-typewriter="Welcome to my site!" data-typewriter-speed="100"></h1>

<!-- CMD terminal style (green on black) -->
<h2 data-typewriter="$ Initializing..." data-typewriter-style="cmd"></h2>

<!-- Hacker/Matrix style with glitch effects -->
<h2 data-typewriter="ACCESS GRANTED" data-typewriter-style="hacker"></h2>

<!-- Realistic typing (variable speed) -->
<p data-typewriter="Loading..." data-typewriter-style="realistic"></p>

<!-- Looping typewriter -->
<p data-typewriter="Hello!" data-typewriter-loop="true"></p>
```

**Options:**
- `data-typewriter-style` - `default`, `realistic`, `cmd`, `hacker`
- `data-typewriter-speed` - Speed in ms (default: 100)
- `data-typewriter-delay` - Delay before start
- `data-typewriter-loop` - Set to "true" to loop
- `data-typewriter-cursor` - Set to "false" to hide cursor

### 2. Theme Switcher

```html
<select data-theme-switcher class="p-3 border rounded">
  <option value="default">Light Theme</option>
  <option value="dark">Dark Theme</option>
  <option value="gaming">Gaming Theme</option>
</select>
```

The selected theme is saved automatically!

### 3. Hamburger Menu (Mobile-Responsive!)

Built-in hamburger menu for mobile navigation!

```html
<!-- Header with hamburger -->
<header>
  <nav class="flex items-center justify-between">
    <h1>My Site</h1>

    <!-- Hamburger button (mobile only) -->
    <button class="hamburger" data-hamburger>
      <span></span>
      <span></span>
      <span></span>
    </button>

    <!-- Mobile menu -->
    <div class="mobile-menu" data-mobile-menu>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </div>
  </nav>
</header>
```

### 4. Modal/Popup

```html
<!-- Open button -->
<button data-modal-open="myModal" class="btn btn-primary">
  Open Modal
</button>

<!-- Modal -->
<div id="myModal" class="modal">
  <div class="modal-content bg-surface p-8 rounded-lg max-w-md">
    <h2 class="text-2xl font-bold mb-4">Modal Title</h2>
    <p class="mb-4">Modal content here</p>
    <button data-modal-close class="btn btn-primary w-full">
      Close
    </button>
  </div>
</div>
```

### 5. Accordion/Collapsible

```html
<div class="accordion mb-4">
  <button class="accordion-trigger w-full text-left p-4 bg-surface rounded">
    Click to expand
  </button>
  <div class="accordion-content">
    <div class="p-4 bg-surface mt-2 rounded">
      Hidden content here
    </div>
  </div>
</div>
```

### 6. Tabs

```html
<div data-tabs>
  <!-- Tab Buttons -->
  <div class="flex gap-2 mb-4">
    <button data-tab="tab1" class="btn active">Tab 1</button>
    <button data-tab="tab2" class="btn">Tab 2</button>
  </div>

  <!-- Tab Content -->
  <div>
    <div id="tab1" class="tab-panel active">
      <p>Content for tab 1</p>
    </div>
    <div id="tab2" class="tab-panel hidden">
      <p>Content for tab 2</p>
    </div>
  </div>
</div>
```

### 7. Form Validation

```html
<form data-validate class="max-w-md mx-auto">
  <div class="mb-4">
    <label class="block mb-2">Email</label>
    <input
      type="email"
      required
      data-validate-email
      class="w-full p-3 border rounded">
  </div>

  <div class="mb-4">
    <label class="block mb-2">Name (min 3 characters)</label>
    <input
      type="text"
      required
      minlength="3"
      class="w-full p-3 border rounded">
  </div>

  <button type="submit" class="btn btn-primary w-full">
    Submit
  </button>
</form>
```

### 8. Smooth Scrolling

```html
<nav>
  <a href="#home" data-smooth-scroll>Home</a>
  <a href="#about" data-smooth-scroll>About</a>
  <a href="#contact" data-smooth-scroll>Contact</a>
</nav>

<section id="home">...</section>
<section id="about">...</section>
<section id="contact">...</section>
```

### 9. Scroll Animations

```html
<!-- Simple reveal (fades in) -->
<div data-scroll-reveal>Fades in when scrolled into view</div>

<!-- Advanced animations -->
<div data-scroll-animate="fade-up">Slides up from bottom</div>
<div data-scroll-animate="fade-down">Slides down from top</div>
<div data-scroll-animate="scale">Scales up</div>

<!-- With delay -->
<div data-scroll-animate="fade-up" data-scroll-delay="200">
  Animates after 200ms delay
</div>
```

**Animation types:** `fade-up`, `fade-down`, `fade-left`, `fade-right`, `scale`

### 10. Page Load Animations

```html
<!-- Fades in on page load -->
<div data-animate="fade">Fades in smoothly</div>

<!-- Slides up on page load -->
<div data-animate="slide-up">Slides from bottom</div>

<!-- With delay -->
<div data-animate="zoom" data-animate-delay="200">
  Zooms in after 200ms
</div>

<!-- Infinite animations -->
<div data-animate="bounce">Bounces forever</div>
<div data-animate="pulse">Pulses forever</div>
```

**Available animations:** `fade`, `slide-up`, `slide-down`, `slide-left`, `slide-right`, `zoom`, `bounce`, `shake`, `rotate`, `pulse`

### 11. Parallax Scrolling

```html
<div data-parallax="0.5">
  Moves slower than scroll (50% speed)
</div>

<div data-parallax="1.5">
  Moves faster than scroll (150% speed)
</div>
```

### 12. Tooltip

```html
<button data-tooltip="I'm a helpful tooltip!" class="btn btn-primary">
  Hover me
</button>
```

### 13. Copy to Clipboard

```html
<button data-copy="This text will be copied" class="btn btn-outline">
  Copy Text
</button>
```

Shows "Copied!" feedback automatically!

### 14. Dropdown Menu

```html
<div data-dropdown>
  <button data-dropdown-trigger class="btn btn-primary">
    Menu ▼
  </button>
  <div data-dropdown-content class="bg-surface border rounded shadow-lg">
    <a href="#" class="block p-3 hover:bg-surface-secondary">Item 1</a>
    <a href="#" class="block p-3 hover:bg-surface-secondary">Item 2</a>
  </div>
</div>
```

### 15. Lazy Loading Images

```html
<img data-lazy-src="large-image.jpg" alt="Description">
```

Images load automatically when scrolled into view!

---

## 📱 Responsive Design Made Easy

Use responsive prefixes: `sm:`, `md:`, `lg:`

### Breakpoints

- `sm:` - Screens ≥640px (landscape phones)
- `md:` - Screens ≥768px (tablets)
- `lg:` - Screens ≥1024px (laptops/desktops)

### Examples

```html
<!-- Hide on mobile, show on desktop -->
<div class="hidden md:block">Desktop only content</div>

<!-- Stack on mobile, row on desktop -->
<div class="flex flex-col md:flex-row gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- Different text sizes -->
<h1 class="text-2xl md:text-4xl lg:text-5xl">
  Responsive heading
</h1>

<!-- Different grid columns -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  <div>Column</div>
</div>
```

---

## 📐 Spacing System (Easy to Remember!)

We use a **4px scale** that's easy to memorize:

| Class | Pixels |
|-------|--------|
| `p-1` or `m-1` | 4px |
| `p-2` or `m-2` | 8px |
| `p-3` or `m-3` | 12px |
| `p-4` or `m-4` | 16px |
| `p-6` or `m-6` | 24px |
| `p-8` or `m-8` | 32px |
| `p-12` or `m-12` | 48px |

### Padding Examples

```html
<div class="p-4">16px padding on all sides</div>
<div class="px-6 py-4">24px horizontal, 16px vertical</div>
<div class="pt-8 pb-4">32px top, 16px bottom</div>
```

### Margin Examples

```html
<div class="m-4">16px margin on all sides</div>
<div class="mx-auto">Horizontally centered (auto left/right)</div>
<div class="mt-8 mb-6">32px top, 24px bottom</div>
```

---

## 🎨 Color System

All colors adapt to the active theme!

### Text Colors

```html
<p class="text-primary">Main heading color</p>
<p class="text-secondary">Body text color (lighter)</p>
<p class="text-tertiary">Caption color (lightest)</p>

<p class="text-success">Success message (green)</p>
<p class="text-error">Error message (red)</p>
<p class="text-warning">Warning message (yellow)</p>
```

### Background Colors

```html
<div class="bg-body">Page background</div>
<div class="bg-surface">Card/panel background</div>
<div class="bg-surface-secondary">Section background</div>

<div class="bg-primary-500 text-white p-4">Branded section</div>
```

---

## 🏗️ Complete Page Example

```html
<!DOCTYPE html>
<html lang="en" data-theme="default">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Landing Page</title>
  <link rel="stylesheet" href="../assets/css/utility.css">
</head>
<body class="bg-body">

  <!-- Header -->
  <header class="bg-surface border-b border-subtle sticky top-0 z-50">
    <nav class="container mx-auto py-4 flex items-center justify-between">
      <h1 class="text-2xl font-bold text-primary-500">My Brand</h1>

      <!-- Theme Switcher -->
      <select data-theme-switcher class="p-2 border rounded">
        <option value="default">Light</option>
        <option value="dark">Dark</option>
      </select>
    </nav>
  </header>

  <!-- Hero Section -->
  <section class="container mx-auto text-center py-20">
    <h2 class="text-5xl font-bold mb-4"
        data-typewriter="Build Faster. Ship Better."
        data-typewriter-cursor="true">
    </h2>
    <p class="text-lg text-secondary max-w-2xl mx-auto mb-8">
      15 themes, 800+ utilities, 50+ icons. Zero dependencies.
    </p>
    <button class="btn btn-primary btn-lg">Get Started</button>
  </section>

  <!-- Features -->
  <section class="bg-surface-secondary py-16">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div class="card p-6" data-scroll-animate="fade-up">
          <h3 class="text-xl font-semibold mb-2">15 Themes</h3>
          <p class="text-secondary">Switch themes instantly</p>
        </div>

        <div class="card p-6" data-scroll-animate="fade-up" data-scroll-delay="100">
          <h3 class="text-xl font-semibold mb-2">800+ Utilities</h3>
          <p class="text-secondary">Custom values supported</p>
        </div>

        <div class="card p-6" data-scroll-animate="fade-up" data-scroll-delay="200">
          <h3 class="text-xl font-semibold mb-2">50+ Icons</h3>
          <p class="text-secondary">Beautiful SVG sprites</p>
        </div>

      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="py-8 text-center text-secondary">
    <p>&copy; 2026 My Brand</p>
  </footer>

  <script src="../assets/js/hachiwa.js"></script>
</body>
</html>
```

---

## 🎯 Pro Tips

### 1. Start with a Theme

Always add a theme to your HTML tag:
```html
<html lang="en" data-theme="dark">
```

### 2. Use Custom Values

Don't be limited by predefined classes:
```html
<div class="text-[38px] gap-[2rem]">Custom values!</div>
```

### 3. Theme-Aware Colors

Use `bg-primary-500` instead of hardcoded colors so your site adapts to themes!

### 4. Mobile-First

Always test on mobile first, then add `md:` and `lg:` classes

### 5. Combine Utilities

```html
<div class="flex items-center gap-4 p-6 bg-surface rounded shadow-md">
  Utilities work together!
</div>
```

---

## 🐛 Troubleshooting

### Styles not applying?

1. Check class name spelling
2. Make sure `utility.css` is linked correctly
3. Check browser DevTools for errors

### JavaScript not working?

1. Make sure `hachiwa.js` is included
2. Check browser console for errors
3. Verify data attribute spelling

### Animations not smooth?

1. Clear browser cache (Ctrl+Shift+R)
2. Check if element is inside viewport
3. Try adjusting `data-scroll-delay` values

### Theme not changing?

1. Check `data-theme` attribute on `<html>` tag
2. Clear browser cache
3. Check localStorage in DevTools

---

## 🆘 Need Help?

- Check the **DEVELOPER-README.md** for technical details
- Review the examples in `components/index.html`
- Experiment in the browser DevTools
- Visit our website: https://hachiwastudios.netlify.app/
- **Email us:** hachiwastudios@gmail.com
- **Future:** Contact form will be available on our website

---

## 📅 Monthly Updates

**This package is updated monthly!**

We add new features, fix bugs, and improve performance every month. Current version includes:

- ✅ **15 Professional Themes**
- ✅ **800+ CSS Utilities**
- ✅ **50+ SVG Icons**
- ✅ **Custom Value Support** - Use `text-[38px]` like Tailwind
- ✅ **4 Typewriter Styles** (default, realistic, cmd, hacker)
- ✅ **Hamburger Menu** for mobile
- ✅ **Smooth Animations** - All optimized
- ✅ **VS Code Intellisense** - Full autocomplete

Stay tuned for monthly improvements!

---

## 🎉 You're Ready!

You now know everything to build amazing websites!

**Start building and have fun! 🚀**

---

**Built with ❤️ by Hachi wa Studios**

*Professional web development tools made simple for everyone*
