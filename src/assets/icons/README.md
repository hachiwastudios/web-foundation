# Hachi wa Studios - Icon System v2.0

**56 Icons × 2 Variants = 112 Total Files**

## Icon Variants

- **Outlined** (`/outlined/`) - Stroke-based icons, perfect for UI elements
- **Solid** (`/solid/`) - Fill-based icons, great for emphasis and filled states

## Usage

### Method 1: Data Attribute (Recommended - Auto-Injection)

```html
<!-- Outlined icon -->
<i data-icon="menu" data-variant="outlined" class="icon icon-lg"></i>

<!-- Solid icon -->
<i data-icon="heart" data-variant="solid" class="icon icon-primary"></i>

<!-- Default variant is 'outlined' if not specified -->
<i data-icon="search" class="icon"></i>

<!-- Load hachiwa.js to enable auto-injection -->
<script src="assets/js/hachiwa.js"></script>
```

### Method 2: Manual Inline SVG (No JavaScript Required)

```html
<svg class="icon icon-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <line x1="3" y1="12" x2="21" y2="12"></line>
  <line x1="3" y1="6" x2="21" y2="6"></line>
  <line x1="3" y1="18" x2="21" y2="18"></line>
</svg>
```

### Method 3: Sprite Sheet (Legacy - Backward Compatibility)

```html
<svg class="icon icon-lg">
  <use href="assets/icons.svg#icon-menu"></use>
</svg>
```

## JavaScript API

```javascript
// Load icon manually
const svg = await HachiIcons.load('menu', 'outlined');

// Inject into element
const element = document.getElementById('my-icon');
await HachiIcons.inject(element, 'heart', 'solid');

// Preload icons for performance
await HachiIcons.preload(['menu', 'search', 'user'], 'outlined');

// Configure icon system
HachiIcons.configure({
  defaultVariant: 'solid',
  basePath: '/custom/path/icons'
});

// Get cache statistics
console.log(HachiIcons.getCacheStats());
```

## Available Icons (56)

### Navigation & UI (6)
- `menu`, `close`, `home`, `search`, `user`, `settings`

### Arrows & Chevrons (8)
- `arrow-right`, `arrow-left`, `arrow-up`, `arrow-down`
- `chevron-right`, `chevron-left`, `chevron-up`, `chevron-down`

### Actions (9)
- `check`, `plus`, `minus`, `edit`, `trash`, `download`, `upload`, `copy`, `share`

### States (5)
- `info`, `alert`, `bell`, `star`, `heart`

### Media (6)
- `image`, `file`, `folder`, `camera`, `video`, `music`

### Communication (3)
- `mail`, `message`, `phone`

### E-commerce (5)
- `shopping-cart`, `credit-card`, `dollar`, `tag`, `gift`

### Tools (5)
- `link`, `lock`, `unlock`, `eye`, `eye-off`

### Misc (9)
- `clock`, `calendar`, `map-pin`, `globe`, `bookmark`, `flag`, `zap`, `code`, `play`

## Icon Sizing

Use utility classes to control icon size:

```html
<i data-icon="star" class="icon-xs"></i>   <!-- Extra small -->
<i data-icon="star" class="icon-sm"></i>   <!-- Small -->
<i data-icon="star" class="icon"></i>      <!-- Default (20px) -->
<i data-icon="star" class="icon-md"></i>   <!-- Medium -->
<i data-icon="star" class="icon-lg"></i>   <!-- Large -->
<i data-icon="star" class="icon-xl"></i>   <!-- Extra large -->
<i data-icon="star" class="icon-2xl"></i>  <!-- 2X large -->
<i data-icon="star" class="icon-3xl"></i>  <!-- 3X large -->
```

## Icon Colors

Icons use `currentColor` by default and inherit text color:

```html
<!-- Inherits color from parent -->
<div class="text-primary">
  <i data-icon="heart" class="icon"></i>
</div>

<!-- Explicit color classes -->
<i data-icon="check" class="icon icon-success"></i>
<i data-icon="close" class="icon icon-error"></i>
<i data-icon="info" class="icon icon-info"></i>
```

## Icon States

```html
<!-- Spinning icon -->
<i data-icon="settings" class="icon icon-spin"></i>

<!-- Pulsing icon -->
<i data-icon="bell" class="icon icon-pulse"></i>
```

## Accessibility

### Decorative Icons
```html
<i data-icon="menu" class="icon" aria-hidden="true"></i>
```

### Meaningful Icons
```html
<i data-icon="search" class="icon" aria-label="Search" role="img"></i>
```

### Icons in Buttons
```html
<button aria-label="Close dialog">
  <i data-icon="close" class="icon" aria-hidden="true"></i>
</button>
```

## Performance Tips

1. **Preload common icons** at page load:
```javascript
HachiIcons.preload(['menu', 'search', 'user'], 'outlined');
```

2. **Use outlined variant by default** (smaller file size)

3. **Cache is automatic** - icons loaded once are cached

4. **Use sprite sheet** if using 30+ icons on one page

## Migration from v1.x

**Old (sprite sheet):**
```html
<svg class="icon"><use href="assets/icons.svg#icon-menu"></use></svg>
```

**New (standalone):**
```html
<i data-icon="menu" class="icon"></i>
```

Both methods still work! No breaking changes.

## File Structure

```
icons/
├── outlined/
│   ├── menu.svg
│   ├── search.svg
│   └── ... (56 icons)
├── solid/
│   ├── menu.svg
│   ├── search.svg
│   └── ... (56 icons)
├── icons.svg (sprite sheet - legacy)
└── README.md (this file)
```

## Technical Details

- **Format:** SVG
- **Size:** ~300-500 bytes per icon (optimized)
- **Viewbox:** 24×24 (scalable to any size)
- **Color:** `currentColor` (inherits from CSS)
- **Stroke width:** 2px (outlined), varies (solid)
- **Total size:** ~56KB (all 112 files)

---

**Questions?** Check the [main documentation](../../docs/api/icons.md)
