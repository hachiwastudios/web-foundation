Changelog

All notable changes to the Hachi wa Studios Web Foundation will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2026-01-05

### 🎉 Major Release - Complete Restructuring

This is a major release with significant improvements to the package structure, build system, and developer experience. **100% backward compatible** - no breaking changes for existing users!

### ✨ Added

**Build System**
- Automated build pipeline using PostCSS and npm scripts
- CSS minification with source maps (28.8% size reduction)
- JavaScript minification with Terser (42.6% size reduction)
- Watch mode for development (`npm run watch`)
- Pre-publish hooks to ensure dist/ is always built

**Icon System v2.0**
- 112 individual SVG icon files (56 outlined + 56 solid variants)
- New `data-icon` attribute for automatic icon injection
- Icon caching system for improved performance
- Comprehensive icon documentation in `src/assets/icons/README.md`
- Backward compatible sprite sheet maintained (`icons.svg`)

**Auto-Adaptive IntelliSense**
- Automatic generation of `.vscode/css-custom-data.json` (107 properties)
- Automatic generation of `.vscode/html-custom-data.json` (536 classes, 56 icons)
- IntelliSense data regenerates on every build
- Always in sync with actual CSS/JS code

**Project Structure**
- Proper `src/` and `dist/` separation
- Modular CSS architecture (26 files split from monolithic utility.css)
- Build scripts in `scripts/` directory
- Examples in `examples/` directory
- Comprehensive documentation

**CLI Tool v2.0**
- Updated to use dist/ instead of template/
- Beautiful new starter template with icon showcase
- Better terminal output with color coding
- File size information and structure preview

### 🔧 Changed

**Package Structure**
- CSS now built from modular sources (will be fully modular in v2.1)
- JavaScript includes new icon system
- CLI scaffolds optimized minified files by default
- Documentation folder now included in npm package

**Distribution**
- `dist/` folder contains all built files
- Minified files (.min.css, .min.js) recommended for production
- Source maps included for debugging
- Icon files organized by variant (outlined/solid)

### 🐛 Fixed

- Fixed syntax error in `.icon-accent` class (missing `var()` wrapper) - template/assets/css/utility.css:1855
- Removed misplaced `utility.css` from `template/assets/js/` directory
- Added `docs/` folder to package.json files array (now gets distributed)

### 📚 Documentation

- Created `IMPLEMENTATION-PLAN.md` with complete restructuring roadmap
- Created `src/assets/icons/README.md` with icon system documentation
- Updated `CHANGELOG.md` (this file)
- Updated `.vscode/` IntelliSense configurations

### 🔄 Migration from v1.x

**No changes required!** v2.0 is fully backward compatible.

**Optional upgrades:**
- Use new data-icon system: `<i data-icon="menu" class="icon"></i>`
- Use minified files for better performance
- Copy `.vscode/` folder to your project for IntelliSense

See `docs/guides/migration-v2.md` for details.

### 📦 Package Details

**File Sizes:**
- CSS: 55.48 KB → 39.51 KB minified (28.8% reduction)
- JavaScript: 39.49 KB → 22.68 KB minified (42.6% reduction)
- Icons: 112 files (~40 KB total, ~350 bytes average per icon)

**Build Statistics:**
- 26 CSS modules
- 112 icon files
- 536 utility classes
- 107 CSS custom properties
- 15 themes
- Build time: ~80 seconds

---

## [1.0.0] - 2026-01-04

### Initial Release

- 800+ utility classes for rapid development
- 15 professional themes
- 56 SVG icons (sprite sheet)
- 20+ JavaScript utilities
- CLI scaffolding tool
- VS Code IntelliSense support
- Zero dependencies for end users
- MIT License

---

## Future Roadmap

### v2.1.0 (Planned)
- Complete modular CSS (fix automated split)
- Additional icons (target: 100+)
- TypeScript definitions
- Automated testing suite
- Performance benchmarks

### v2.2.0 (Planned)
- Dark mode enhancements
- Animation library expansion
- Form validation improvements
- Accessibility audit & fixes
- GitHub Actions CI/CD

### v3.0.0 (Planned - Breaking)
- Remove sprite sheet (use standalone SVGs only)
- Container queries support
- CSS layers architecture
- Web components for complex features
- Drop IE11 support

---

[2.0.0]: https://github.com/hachiwastudios/web-foundation/releases/tag/v2.0.0
[1.0.0]: https://github.com/hachiwastudios/web-foundation/releases/tag/v1.0.0
