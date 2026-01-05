# 🚀 Hachi wa Studios Web Foundation

> Professional HTML + CSS + JavaScript starter for rapid web development

[![npm version](https://img.shields.io/npm/v/@hachiwastudios/web-foundation)](https://www.npmjs.com/package/@hachiwastudios/web-foundation)
[![license](https://img.shields.io/npm/l/@hachiwastudios/web-foundation)](./LICENSE)

**Perfect for developers with 3+ months of experience who want to build websites fast!**

**🌐 Website:** [hachiwastudios.netlify.app](https://hachiwastudios.netlify.app/)
**📅 Updates:** Monthly with new features
**📧 Contact:** hachiwastudios@gmail.com

---

## ✨ What's New in v1.5.0

- ✅ **VSCode Extension** - Real-time IntelliSense & snippets
- ✅ **112 Icon Files** - 56 outlined + 56 solid variants
- ✅ **Auto-Adaptive IntelliSense** - Always in sync with your code
- ✅ **Build System** - Automated minification (35% smaller files)
- ✅ **New Icon System** - Data-attribute injection with caching
- ✅ **Professional Structure** - src/dist separation

---

## ✨ Features

- ✅ **15 Professional Themes** - Switch instantly between color palettes
- ✅ **800+ Utility Classes** - Build layouts without writing CSS
- ✅ **112 SVG Icons** - Outlined + solid variants with auto-injection
- ✅ **20+ JavaScript Utilities** - Typewriter, modals, animations, and more
- ✅ **Custom Values** - Use `text-[38px]` syntax like Tailwind
- ✅ **VS Code Extension** - Full autocomplete & snippets
- ✅ **Auto-Adaptive IntelliSense** - IntelliSense that updates automatically
- ✅ **Zero Dependencies** - Pure HTML/CSS/JS, no build tools needed
- ✅ **Mobile-First** - Responsive design with hamburger menu

**Package Size:** ~62KB minified (~18KB gzipped) - 35% smaller than v1.0!

---

## 🚀 Quick Start

```bash
# Create a new project
npx @hachiwastudios/web-foundation my-project

# Navigate to your project
cd my-project

# Open index.html in your browser
```

That's it! Start building immediately.

---

## 🎯 VSCode Extension

Install **"Web Foundation by Hachi wa Studios"** for the best developer experience:

### Features
- 🎨 **Class Autocomplete** - 800+ utility classes
- 🎯 **Icon Autocomplete** - 56 icon names
- 📝 **HTML Snippets** - Quick templates

### Snippets
- `wf-container` - Responsive container
- `wf-card` - Card component
- `wf-button` - Button with icon
- `wf-icon` - Icon with variants
- `wf-grid` - Responsive grid
- `wf-navbar` - Navigation bar
- `wf-hero` - Hero section
- `wf-form` - Form with inputs

**Installation:** Search "Web Foundation" in VSCode Extensions

---

## 📖 Documentation

- **[User Guide](./docs/USER-DOCUMENTATION.md)** - Beginner-friendly tutorials
- **[Developer README](./docs/DEVELOPER-README.md)** - Complete technical documentation
- **[Changelog](./docs/CHANGELOG.md)** - Version history
- **[Icon System](./src/assets/icons/README.md)** - Icon usage guide

---

## 💡 Example

```html
<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Site</title>
  <link rel="stylesheet" href="assets/css/utility.min.css">
</head>
<body class="bg-body">

  <!-- Hero Section -->
  <section class="container mx-auto text-center py-20">
    <h1 data-typewriter="Build Faster. Ship Better."
        class="text-5xl font-bold mb-4">
    </h1>
    <p class="text-lg text-secondary max-w-2xl mx-auto mb-8">
      15 themes, 800+ utilities, 112 icons. Zero dependencies.
    </p>
    <button class="btn btn-primary btn-lg">
      <i data-icon="zap" data-variant="solid" class="icon"></i>
      Get Started
    </button>
  </section>

  <!-- Features Grid -->
  <section class="bg-surface-secondary py-16">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div class="card p-6" data-scroll-animate="fade-up">
          <i data-icon="code" class="icon-3xl icon-primary mb-4"></i>
          <h3 class="text-xl font-semibold mb-2">15 Themes</h3>
          <p class="text-secondary">Switch instantly</p>
        </div>

        <div class="card p-6" data-scroll-animate="fade-up" data-scroll-delay="100">
          <i data-icon="image" data-variant="solid" class="icon-3xl icon-accent mb-4"></i>
          <h3 class="text-xl font-semibold mb-2">800+ Utilities</h3>
          <p class="text-secondary">Custom values supported</p>
        </div>

        <div class="card p-6" data-scroll-animate="fade-up" data-scroll-delay="200">
          <i data-icon="star" data-variant="solid" class="icon-3xl icon-success mb-4"></i>
          <h3 class="text-xl font-semibold mb-2">112 Icons</h3>
          <p class="text-secondary">Outlined + solid variants</p>
        </div>

      </div>
    </div>
  </section>

  <script src="assets/js/hachiwa.min.js"></script>
</body>
</html>
```

---

## 🎨 15 Professional Themes

1. **default** - E-commerce blue
2. **dark** - Modern dark mode
3. **portfolio** - Gold/black elegance
4. **girly** - Soft pink/purple
5. **gaming** - Neon purple/green
6. **hacker** - Matrix green
7. **corporate** - Professional navy
8. **nature** - Earthy greens
9. **creative** - Vibrant orange
10. **minimal** - Clean black/white
11. **sunset** - Warm yellows
12. **tech** - Sky blue
13. **pastel** - Soft lavender
14. **ocean** - Deep ocean blue
15. **retro** - Vintage orange

Switch themes with one line:
```html
<html lang="en" data-theme="gaming">
```

---

## 🎯 Icon System v2.0

### New in v1.5: Standalone SVG Files
- **112 icons total** (56 outlined + 56 solid)
- **Data-attribute injection** with auto-caching
- **Resizable** with CSS classes
- **Colorable** via currentColor

```html
<!-- New way (v1.5+) - Recommended -->
<i data-icon="heart" data-variant="solid" class="icon icon-lg icon-primary"></i>

<!-- Old way (still works) - Backward compatible -->
<svg class="icon icon-lg icon-primary">
  <use href="assets/icons.svg#icon-heart"></use>
</svg>
```

**Icon Categories:** Navigation (6), Arrows (8), Actions (9), States (5), Media (6), Communication (3), E-commerce (5), Tools (5), Misc (9)

**Full list:** menu, close, home, search, user, settings, arrows, chevrons, check, plus, minus, edit, trash, download, upload, copy, share, info, alert, bell, star, heart, image, file, folder, camera, video, music, mail, message, phone, shopping-cart, credit-card, dollar, tag, gift, link, lock, unlock, eye, eye-off, clock, calendar, map-pin, globe, bookmark, flag, zap, code, play

---

## ✨ JavaScript Features

All features work with simple data attributes:

```html
<!-- Typewriter (4 styles!) -->
<h1 data-typewriter="Hello!" data-typewriter-style="hacker"></h1>

<!-- Theme switcher -->
<select data-theme-switcher>
  <option value="dark">Dark</option>
</select>

<!-- Modal -->
<button data-modal-open="myModal">Open</button>

<!-- Animations -->
<div data-scroll-animate="fade-up">Animates on scroll</div>

<!-- Icons (NEW in v1.5!) -->
<i data-icon="star" data-variant="solid" class="icon"></i>

<!-- And 15+ more utilities! -->
```

---

## 🛠️ Custom Values (Like Tailwind!)

Use any custom value with bracket syntax:

```html
<div class="text-[38px] gap-[2rem] w-[80%] p-[1.5rem]">
  Any value works!
</div>
```

Supports 17+ properties: text, size, width, height, padding, margin, gap, colors, and more.

---

## 📦 What's Included

```
my-project/
├── assets/
│   ├── css/
│   │   ├── utility.css          # Full CSS (56KB)
│   │   └── utility.min.css      # Minified (40KB) ← Use this!
│   ├── js/
│   │   ├── hachiwa.js           # Full JS (40KB)
│   │   └── hachiwa.min.js       # Minified (23KB) ← Use this!
│   ├── icons/
│   │   ├── outlined/            # 56 outlined icons
│   │   ├── solid/               # 56 solid icons
│   │   └── icons.svg            # Legacy sprite (backward compat)
│   └── images/                  # Your images
└── index.html                   # Beautiful starter template
```

---

## 🎓 Learn More

### Utility Classes

```css
/* Layout */
.flex, .grid, .container, .hidden

/* Typography */
.text-xl, .font-bold, .text-center

/* Colors (theme-aware) */
.text-primary, .bg-surface, .border-subtle

/* Spacing */
.p-4, .m-6, .gap-8

/* Icons (NEW!) */
.icon, .icon-sm, .icon-lg, .icon-xl, .icon-primary

/* Responsive */
.md:flex, .lg:grid-cols-4
```

### JavaScript Utilities

1. Typewriter (4 styles)
2. Theme Switcher
3. Hamburger Menu
4. Modals
5. Accordions
6. Tabs
7. Form Validation
8. Smooth Scroll
9. Scroll Animations
10. Parallax
11. Lazy Loading
12. Tooltips
13. Dropdowns
14. Copy to Clipboard
15. **Icon System (NEW!)**

---

## 🏗️ Development (v1.5+)

### Build System
```bash
npm run build          # Build everything
npm run build:css      # Build CSS only
npm run build:js       # Build JS only
npm run watch          # Watch mode
npm run clean          # Clean dist/
```

### Auto-Adaptive IntelliSense
IntelliSense data is automatically generated on every build:
- 107 CSS custom properties
- 536 utility classes
- 56 icon names

---

## 🤝 Contributing

**Contributions are highly welcomed!** Anyone can contribute to this project.

**How to contribute:**
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

**Or simply:**
- Report bugs via email: hachiwastudios@gmail.com
- Suggest features through GitHub Issues
- Share your ideas and feedback

All contributors will be credited in the project!

---

## 📄 License

MIT License - Use freely in any project!

See [LICENSE](./LICENSE) for details.

---

## 🙏 Credits

**Built with ❤️ by Hachi wa Studios**

Special thanks to all developers who use and contribute to this framework!

---

## 📞 Support & Contact

- **Website:** [hachiwastudios.netlify.app](https://hachiwastudios.netlify.app/)
- **Email:** hachiwastudios@gmail.com
- **GitHub:** [hachiwastudios/web-foundation](https://github.com/hachiwastudios/web-foundation)
- **GitHub Issues:** [Report bugs](https://github.com/hachiwastudios/web-foundation/issues)

For bug reports, feature requests, or any questions, email us at **hachiwastudios@gmail.com**

---

## ⭐ Show Your Support

If you find this project helpful, please give it a star on GitHub!

[![GitHub stars](https://img.shields.io/github/stars/hachiwastudios/web-foundation?style=social)](https://github.com/hachiwastudios/web-foundation)

---

**Version:** 1.5.0 | **Status:** Production Ready | **Updates:** Monthly | **License:** MIT (Open for contributions)
