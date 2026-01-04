# 🚀 Hachi wa Studios Web Foundation

> Professional HTML + CSS + JavaScript starter for rapid web development

[![npm version](https://img.shields.io/npm/v/@hachiwastudios/web-foundation)](https://www.npmjs.com/package/@hachiwastudios/web-foundation)
[![license](https://img.shields.io/npm/l/@hachiwastudios/web-foundation)](./LICENSE)

**Perfect for developers with 3+ months of experience who want to build websites fast!**

**🌐 Website:** [hachiwastudios.netlify.app](https://hachiwastudios.netlify.app/)
**📅 Updates:** Monthly with new features
**📧 Contact:** hachiwastudios@gmail.com

---

## ✨ Features

- ✅ **15 Professional Themes** - Switch instantly between color palettes
- ✅ **800+ Utility Classes** - Build layouts without writing CSS
- ✅ **50+ SVG Icons** - Beautiful icon system with sizing/coloring
- ✅ **20+ JavaScript Utilities** - Typewriter, modals, animations, and more
- ✅ **Custom Values** - Use `text-[38px]` syntax like Tailwind
- ✅ **VS Code Intellisense** - Full autocomplete support
- ✅ **Zero Dependencies** - Pure HTML/CSS/JS, no build tools
- ✅ **Mobile-First** - Responsive design with hamburger menu

**Package Size:** ~130KB (~40KB gzipped)

---

## 🚀 Quick Start

```bash
# Create a new project
npx @hachiwastudios/web-foundation my-project

# Navigate to your project
cd my-project

# Open components/index.html in your browser
```

That's it! Start building immediately.

---

## 📖 Documentation

- **[Developer README](./DEVELOPER-README.md)** - Complete technical documentation
- **[User Guide](./docs/USER-DOCUMENTATION.md)** - Beginner-friendly tutorials
- **[Publishing Guide](./PUBLISHING-GUIDE.md)** - How to publish updates
- **[Version Info](./version.txt)** - Current version details

---

## 💡 Example

```html
<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Site</title>
  <link rel="stylesheet" href="../assets/css/utility.css">
</head>
<body class="bg-body">

  <!-- Hero Section -->
  <section class="container mx-auto text-center py-20">
    <h1 data-typewriter="Build Faster. Ship Better."
        class="text-5xl font-bold mb-4">
    </h1>
    <p class="text-lg text-secondary max-w-2xl mx-auto mb-8">
      15 themes, 800+ utilities, 50+ icons. Zero dependencies.
    </p>
    <button class="btn btn-primary btn-lg">Get Started</button>
  </section>

  <!-- Features Grid -->
  <section class="bg-surface-secondary py-16">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div class="card p-6" data-scroll-animate="fade-up">
          <h3 class="text-xl font-semibold mb-2">15 Themes</h3>
          <p class="text-secondary">Switch instantly</p>
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

  <script src="../assets/js/hachiwa.js"></script>
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

## 🎯 50+ Icons

All icons are SVG sprites with sizing and coloring support:

```html
<!-- Basic usage -->
<svg class="icon icon-lg icon-primary">
  <use href="assets/icons.svg#icon-heart"></use>
</svg>
```

**Categories:** Navigation, Actions, States, Media, Communication, E-commerce, Tools

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
│   │   └── utility.css      # All themes + 800+ utilities
│   ├── js/
│   │   └── hachiwa.js       # All JavaScript features
│   ├── icons.svg            # 50+ SVG icons
│   └── images/              # Your images
├── components/
│   └── index.html           # Example page
└── config/                  # Configuration files
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
15. And more!

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
- **GitHub Issues:** [Report bugs](https://github.com/hachiwastudios/web-foundation/issues)
- **Future:** Contact form coming soon on our website!

For bug reports, feature requests, or any questions, email us at **hachiwastudios@gmail.com**

---

## ⭐ Show Your Support

If you find this project helpful, please give it a star on GitHub!

[![GitHub stars](https://img.shields.io/github/stars/hachiwastudios/web-foundation?style=social)](https://github.com/hachiwastudios/web-foundation)

---

**Version:** 1.0.0 | **Status:** Production Ready | **Updates:** Monthly | **License:** MIT (Open for contributions)
