/**
 * Hachi wa Studios - Icon System v2.0
 * Standalone SVG icon loader with caching and auto-injection
 */

const HachiIcons = {
  // Icon cache for performance
  cache: new Map(),

  // Base path to icons (relative to HTML file)
  basePath: 'assets/icons',

  // Configuration
  config: {
    defaultVariant: 'outlined',
    preloadCommon: true,
    logErrors: true
  },

  /**
   * Load an icon from file
   * @param {string} name - Icon name (e.g., 'menu', 'search')
   * @param {string} variant - 'outlined' or 'solid'
   * @returns {Promise<string>} SVG markup
   */
  async load(name, variant = null) {
    variant = variant || this.config.defaultVariant;
    const cacheKey = `${variant}/${name}`;

    // Return from cache if available
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    // Fetch SVG file
    const url = `${this.basePath}/${variant}/${name}.svg`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${url}`);
      }
      const svg = await response.text();

      // Cache for future use
      this.cache.set(cacheKey, svg);
      return svg;
    } catch (error) {
      if (this.config.logErrors) {
        console.error(`[HachiIcons] Failed to load icon: ${name} (${variant})`, error);
      }
      return this.getFallbackSVG();
    }
  },

  /**
   * Inject icon into element
   * @param {HTMLElement} element - Target element
   * @param {string} name - Icon name
   * @param {string} variant - 'outlined' or 'solid'
   */
  async inject(element, name, variant = null) {
    const svg = await this.load(name, variant);
    if (!svg) return;

    // Replace element content with SVG
    element.innerHTML = svg;

    // Copy classes from placeholder to SVG element
    const svgElement = element.querySelector('svg');
    if (svgElement) {
      // Preserve existing classes
      const existingClasses = element.className.split(' ').filter(c => c.trim());
      svgElement.className.baseVal = existingClasses.join(' ');

      // Copy ARIA attributes
      if (element.getAttribute('aria-label')) {
        svgElement.setAttribute('aria-label', element.getAttribute('aria-label'));
        svgElement.setAttribute('role', 'img');
      } else {
        svgElement.setAttribute('aria-hidden', 'true');
      }

      // Make focusable=false for accessibility
      svgElement.setAttribute('focusable', 'false');
    }
  },

  /**
   * Replace all elements with data-icon attribute
   * Usage: <i data-icon="menu" data-variant="outlined" class="icon-lg"></i>
   */
  async injectAll() {
    const elements = document.querySelectorAll('[data-icon]');
    if (elements.length === 0) return;

    const injections = Array.from(elements).map(element => {
      const name = element.getAttribute('data-icon');
      const variant = element.getAttribute('data-variant') || null;

      if (!name) {
        console.warn('[HachiIcons] Element missing data-icon attribute', element);
        return Promise.resolve();
      }

      return this.inject(element, name, variant);
    });

    await Promise.all(injections);
  },

  /**
   * Preload commonly used icons for better performance
   * @param {Array<string>} icons - Array of icon names
   * @param {string} variant - 'outlined' or 'solid'
   */
  async preload(icons, variant = null) {
    variant = variant || this.config.defaultVariant;
    const promises = icons.map(name => this.load(name, variant));
    await Promise.all(promises);
  },

  /**
   * Preload all icons from the page
   */
  async preloadFromPage() {
    const elements = document.querySelectorAll('[data-icon]');
    const icons = new Set();
    const iconsByVariant = { outlined: [], solid: [] };

    elements.forEach(el => {
      const name = el.getAttribute('data-icon');
      const variant = el.getAttribute('data-variant') || 'outlined';
      if (name && !icons.has(`${variant}/${name}`)) {
        icons.add(`${variant}/${name}`);
        iconsByVariant[variant].push(name);
      }
    });

    // Preload by variant
    const promises = [];
    if (iconsByVariant.outlined.length > 0) {
      promises.push(this.preload(iconsByVariant.outlined, 'outlined'));
    }
    if (iconsByVariant.solid.length > 0) {
      promises.push(this.preload(iconsByVariant.solid, 'solid'));
    }

    await Promise.all(promises);
  },

  /**
   * Clear icon cache
   */
  clearCache() {
    this.cache.clear();
  },

  /**
   * Get cache statistics
   */
  getCacheStats() {
    return {
      size: this.cache.size,
      keys: Array.from(this.cache.keys())
    };
  },

  /**
   * Fallback SVG for failed loads
   */
  getFallbackSVG() {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <circle cx="12" cy="12" r="10"/>
  <line x1="12" y1="8" x2="12" y2="12"/>
  <line x1="12" y1="16" x2="12.01" y2="16"/>
</svg>`;
  },

  /**
   * Set base path for icons
   * @param {string} path - New base path
   */
  setBasePath(path) {
    this.basePath = path.replace(/\/$/, ''); // Remove trailing slash
  },

  /**
   * Configure icon system
   * @param {Object} options - Configuration options
   */
  configure(options) {
    Object.assign(this.config, options);
  }
};

// Auto-inject icons when DOM is ready
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      HachiIcons.injectAll();
    });
  } else {
    // DOM already loaded
    HachiIcons.injectAll();
  }
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = HachiIcons;
}

// Export for ES modules
if (typeof window !== 'undefined') {
  window.HachiIcons = HachiIcons;
}
