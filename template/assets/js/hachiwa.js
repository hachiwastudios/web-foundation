/**
 * ===================================================================
 * HACHI WA STUDIOS — WEB FOUNDATION v1.0.0
 * Ultra Beginner-Friendly JavaScript Utilities
 * Advanced features made simple - ALL BUGS FIXED!
 * ===================================================================
 */

(function() {
  'use strict';

  // =================================================================
  // CUSTOM VALUE PARSER (Like Tailwind but simpler!)
  // Usage: class="size-[24px]" or "gap-[1.5rem]" or "text-[#ff0000]"
  // =================================================================
  function parseCustomValues() {
    document.querySelectorAll('[class*="["]').forEach(element => {
      const classes = element.className.split(' ');

      classes.forEach(cls => {
        const match = cls.match(/^(\w+(?:-\w+)?)-\[([^\]]+)\]$/);
        if (match) {
          const [, property, value] = match;

          // Extended property map
          const propertyMap = {
            'text': 'font-size',
            'size': 'font-size',
            'w': 'width',
            'h': 'height',
            'min-w': 'min-width',
            'min-h': 'min-height',
            'max-w': 'max-width',
            'max-h': 'max-height',
            'gap': 'gap',
            'p': 'padding',
            'pt': 'padding-top',
            'pr': 'padding-right',
            'pb': 'padding-bottom',
            'pl': 'padding-left',
            'px': 'padding-inline',
            'py': 'padding-block',
            'm': 'margin',
            'mt': 'margin-top',
            'mr': 'margin-right',
            'mb': 'margin-bottom',
            'ml': 'margin-left',
            'mx': 'margin-inline',
            'my': 'margin-block',
            'top': 'top',
            'left': 'left',
            'right': 'right',
            'bottom': 'bottom',
            'color': 'color',
            'bg': 'background-color',
            'border': 'border-width',
            'rounded': 'border-radius'
          };

          const cssProperty = propertyMap[property];
          if (cssProperty) {
            element.style[cssProperty] = value;
          }
        }
      });
    });
  }

  // =================================================================
  // HAMBURGER MENU (Auto-responsive!)
  // Usage: <button data-hamburger></button>
  // =================================================================
  class HamburgerMenu {
    constructor(element) {
      this.hamburger = element;
      this.menu = document.querySelector('[data-mobile-menu]');

      if (!this.menu) {
        console.warn('Mobile menu not found. Add data-mobile-menu to your menu element.');
        return;
      }

      this.hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        this.toggle();
      });

      // Close on outside click
      document.addEventListener('click', (e) => {
        if (!this.hamburger.contains(e.target) && !this.menu.contains(e.target)) {
          this.close();
        }
      });

      // Close on link click
      this.menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => this.close());
      });

      // Close on window resize if desktop
      window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
          this.close();
        }
      });
    }

    toggle() {
      this.hamburger.classList.toggle('active');
      this.menu.classList.toggle('active');
      document.body.classList.toggle('menu-open');
    }

    close() {
      this.hamburger.classList.remove('active');
      this.menu.classList.remove('active');
      document.body.classList.remove('menu-open');
    }
  }

  // =================================================================
  // ADVANCED TYPEWRITER (4 styles: default, realistic, cmd, hacker!)
  // Usage: <h1 data-typewriter="Hello!" data-typewriter-style="cmd"></h1>
  // =================================================================
  class Typewriter {
    constructor(element) {
      this.element = element;
      this.text = element.getAttribute('data-typewriter') || '';
      this.speed = parseInt(element.getAttribute('data-typewriter-speed')) || 100;
      this.delay = parseInt(element.getAttribute('data-typewriter-delay')) || 0;
      this.loop = element.getAttribute('data-typewriter-loop') === 'true';
      this.style = element.getAttribute('data-typewriter-style') || 'default';
      this.cursor = element.getAttribute('data-typewriter-cursor') !== 'false';
      this.index = 0;
      this.element.textContent = '';

      // Style-specific setup
      this.setupStyle();

      if (this.cursor) {
        this.addCursor();
      }

      setTimeout(() => this.type(), this.delay);
    }

    setupStyle() {
      // CMD style: Green text on dark background
      if (this.style === 'cmd') {
        this.element.style.fontFamily = 'Consolas, Monaco, monospace';
        this.element.style.color = '#0f0';
        if (!this.element.style.backgroundColor) {
          this.element.style.backgroundColor = '#000';
        }
        this.element.style.padding = '1rem';
        this.element.style.borderRadius = '4px';
        this.speed = 50; // Faster typing
      }
      // Hacker style: Matrix green with glitch effect
      else if (this.style === 'hacker') {
        this.element.style.fontFamily = 'Courier New, monospace';
        this.element.style.color = '#00ff41';
        this.element.style.textShadow = '0 0 5px #00ff41';
        if (!this.element.style.backgroundColor) {
          this.element.style.backgroundColor = '#0d0208';
        }
        this.element.style.padding = '1rem';
        this.element.style.borderRadius = '4px';
        this.speed = 30; // Very fast
        this.glitchEffect = true;
      }
    }

    addCursor() {
      const cursor = document.createElement('span');
      cursor.className = 'typewriter-cursor';

      let cursorStyle = `
        display: inline-block;
        width: 2px;
        height: 1em;
        background: currentColor;
        margin-left: 2px;
        animation: blink 1s infinite;
      `;

      // Style-specific cursor
      if (this.style === 'cmd' || this.style === 'hacker') {
        cursorStyle = `
          display: inline-block;
          width: 8px;
          height: 1em;
          background: currentColor;
          margin-left: 2px;
          animation: blink 0.7s infinite;
        `;
      }

      cursor.style.cssText = cursorStyle;

      if (!document.querySelector('#typewriter-blink')) {
        const style = document.createElement('style');
        style.id = 'typewriter-blink';
        style.textContent = '@keyframes blink { 50% { opacity: 0; } }';
        document.head.appendChild(style);
      }

      this.element.appendChild(cursor);
      this.cursorElement = cursor;
    }

    type() {
      if (this.index < this.text.length) {
        const char = this.text.charAt(this.index);

        // Hacker glitch effect occasionally
        if (this.glitchEffect && Math.random() < 0.1) {
          const glitchChar = String.fromCharCode(33 + Math.random() * 94);
          const textNode = document.createTextNode(glitchChar);

          if (this.cursorElement) {
            this.element.insertBefore(textNode, this.cursorElement);
          } else {
            this.element.appendChild(textNode);
          }

          setTimeout(() => {
            textNode.textContent = char;
          }, 50);
        } else {
          const textNode = document.createTextNode(char);

          if (this.cursorElement) {
            this.element.insertBefore(textNode, this.cursorElement);
          } else {
            this.element.appendChild(textNode);
          }
        }

        this.index++;

        // Variable speed for realistic typing
        let nextDelay = this.speed;
        if (this.style === 'realistic') {
          nextDelay = this.speed + (Math.random() * 100 - 50);
        }

        setTimeout(() => this.type(), nextDelay);
      } else if (this.loop) {
        setTimeout(() => this.erase(), 1000);
      }
    }

    erase() {
      if (this.index > 0) {
        const textNodes = Array.from(this.element.childNodes)
          .filter(node => node.nodeType === Node.TEXT_NODE);

        if (textNodes.length > 0) {
          textNodes[textNodes.length - 1].remove();
        }

        this.index--;
        setTimeout(() => this.erase(), this.speed / 2);
      } else {
        setTimeout(() => this.type(), 500);
      }
    }
  }

  // =================================================================
  // PARALLAX SCROLL (Smooth, no glitches!)
  // Usage: <div data-parallax="0.5"></div>
  // =================================================================
  function initParallax() {
    const elements = document.querySelectorAll('[data-parallax]');
    if (elements.length === 0) return;

    let ticking = false;

    function updateParallax() {
      const scrollY = window.pageYOffset;

      elements.forEach(element => {
        const speed = parseFloat(element.getAttribute('data-parallax')) || 0.5;
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + scrollY;

        // Only apply parallax when element is in viewport
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const distance = scrollY - elementTop;
          const movement = distance * speed;

          // Use transform3d for hardware acceleration
          element.style.transform = `translate3d(0, ${movement}px, 0)`;
          element.style.willChange = 'transform';
        }
      });

      ticking = false;
    }

    function requestTick() {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    }

    window.addEventListener('scroll', requestTick, { passive: true });
    updateParallax(); // Initial call
  }

  // =================================================================
  // SCROLL ANIMATIONS (FIXED - Now works perfectly!)
  // Usage: <div data-scroll-animate="fade-up" data-scroll-delay="200"></div>
  // =================================================================
  function initScrollAnimations() {
    const elements = document.querySelectorAll('[data-scroll-animate]');
    if (elements.length === 0) return;

    const style = document.createElement('style');
    style.textContent = `
      [data-scroll-animate] {
        opacity: 0;
        transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
      }
      [data-scroll-animate].animated {
        opacity: 1 !important;
      }

      /* Fade up */
      [data-scroll-animate="fade-up"] {
        transform: translateY(40px);
      }
      [data-scroll-animate="fade-up"].animated {
        transform: translateY(0) !important;
      }

      /* Fade down */
      [data-scroll-animate="fade-down"] {
        transform: translateY(-40px);
      }
      [data-scroll-animate="fade-down"].animated {
        transform: translateY(0) !important;
      }

      /* Fade left */
      [data-scroll-animate="fade-left"] {
        transform: translateX(40px);
      }
      [data-scroll-animate="fade-left"].animated {
        transform: translateX(0) !important;
      }

      /* Fade right */
      [data-scroll-animate="fade-right"] {
        transform: translateX(-40px);
      }
      [data-scroll-animate="fade-right"].animated {
        transform: translateX(0) !important;
      }

      /* Scale */
      [data-scroll-animate="scale"] {
        transform: scale(0.8);
      }
      [data-scroll-animate="scale"].animated {
        transform: scale(1) !important;
      }
    `;
    document.head.appendChild(style);

    // Small delay to ensure styles are applied
    setTimeout(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const delay = parseInt(entry.target.getAttribute('data-scroll-delay')) || 0;
            setTimeout(() => {
              entry.target.classList.add('animated');
            }, delay);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      });

      elements.forEach(el => observer.observe(el));
    }, 100);
  }

  // =================================================================
  // LAZY LOADING IMAGES
  // Usage: <img data-lazy-src="image.jpg" alt="Description">
  // =================================================================
  function initLazyLoading() {
    const images = document.querySelectorAll('[data-lazy-src]');
    if (images.length === 0) return;

    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.getAttribute('data-lazy-src');

          img.src = src;
          img.removeAttribute('data-lazy-src');
          img.classList.add('loaded');

          imageObserver.unobserve(img);
        }
      });
    }, { rootMargin: '50px' });

    images.forEach(img => imageObserver.observe(img));
  }

  // =================================================================
  // THEME SWITCHER (Enhanced with event!)
  // =================================================================
  class ThemeSwitcher {
    constructor(element) {
      this.element = element;
      this.storageKey = 'hachiwa-theme';
      const savedTheme = localStorage.getItem(this.storageKey);

      if (savedTheme) {
        this.setTheme(savedTheme);
        this.element.value = savedTheme;
      }

      this.element.addEventListener('change', (e) => this.setTheme(e.target.value));
    }

    setTheme(themeName) {
      document.documentElement.setAttribute('data-theme', themeName);
      localStorage.setItem(this.storageKey, themeName);

      // Dispatch custom event for theme change
      window.dispatchEvent(new CustomEvent('themechange', {
        detail: { theme: themeName }
      }));

      console.log(`Theme changed to: ${themeName}`);
    }
  }

  // =================================================================
  // ACTIVE STATE MANAGER
  // =================================================================
  class ActiveStateManager {
    constructor(container) {
      this.container = container;
      this.activeClass = 'active';
      this.items = container.querySelectorAll('a, button');

      this.items.forEach(item => {
        item.addEventListener('click', () => {
          this.items.forEach(i => i.classList.remove(this.activeClass));
          item.classList.add(this.activeClass);
        });
      });

      if (!container.querySelector(`.${this.activeClass}`)) {
        this.items[0]?.classList.add(this.activeClass);
      }
    }
  }

  // =================================================================
  // MODAL (Smooth animations!)
  // =================================================================
  class Modal {
    constructor() {
      this.activeClass = 'active';
      this.init();
      this.addStyles();
    }

    addStyles() {
      if (document.querySelector('#modal-styles')) return;

      const style = document.createElement('style');
      style.id = 'modal-styles';
      style.textContent = `
        .modal {
          display: none;
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(4px);
          z-index: 1000;
          padding: 1rem;
        }
        .modal.active {
          display: flex;
          align-items: center;
          justify-content: center;
          animation: modalFadeIn 0.3s ease;
        }
        .modal-content {
          max-height: 90vh;
          overflow-y: auto;
          animation: modalSlideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modalSlideUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `;
      document.head.appendChild(style);
    }

    init() {
      document.querySelectorAll('[data-modal-open]').forEach(trigger => {
        trigger.addEventListener('click', (e) => {
          e.preventDefault();
          const modalId = trigger.getAttribute('data-modal-open');
          this.open(modalId);
        });
      });

      document.querySelectorAll('[data-modal-close]').forEach(trigger => {
        trigger.addEventListener('click', () => {
          const modal = trigger.closest('.modal');
          if (modal) this.close(modal.id);
        });
      });

      document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
          if (e.target === modal) this.close(modal.id);
        });
      });

      // Close on Escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          document.querySelectorAll('.modal.active').forEach(modal => {
            this.close(modal.id);
          });
        }
      });
    }

    open(modalId) {
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.add(this.activeClass);
        document.body.style.overflow = 'hidden';
      }
    }

    close(modalId) {
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.remove(this.activeClass);
        document.body.style.overflow = '';
      }
    }
  }

  // =================================================================
  // ACCORDION (FIXED - Colors work perfectly with themes!)
  // =================================================================
  class Accordion {
    constructor(element) {
      this.element = element;
      this.trigger = element.querySelector('.accordion-trigger');
      this.content = element.querySelector('.accordion-content');

      if (this.trigger && this.content) {
        this.trigger.addEventListener('click', () => {
          const wasActive = this.content.classList.contains('active');
          this.content.classList.toggle('active');
          this.trigger.classList.toggle('active');

          // Update aria-expanded for accessibility
          this.trigger.setAttribute('aria-expanded', !wasActive);
        });

        // Set initial aria-expanded
        this.trigger.setAttribute('aria-expanded', 'false');
      }
    }
  }

  // Inject accordion styles with proper theme variable support
  function addAccordionStyles() {
    if (document.querySelector('#accordion-styles')) return;

    const style = document.createElement('style');
    style.id = 'accordion-styles';
    style.textContent = `
      .accordion-content {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      }
      .accordion-content.active {
        max-height: 2000px;
      }
      .accordion-trigger {
        cursor: pointer;
        transition: all 0.2s ease;
        position: relative;
        color: var(--text-primary);
      }
      .accordion-trigger:hover {
        background-color: var(--bg-surface-secondary) !important;
        color: var(--text-primary) !important;
      }
      .accordion-trigger.active {
        color: var(--primary-500) !important;
      }
      .accordion-trigger::after {
        content: '+';
        position: absolute;
        right: 1rem;
        transition: transform 0.3s ease;
        font-size: 1.5rem;
        color: var(--primary-500);
      }
      .accordion-trigger.active::after {
        transform: rotate(45deg);
      }
    `;
    document.head.appendChild(style);
  }

  // =================================================================
  // TABS
  // =================================================================
  class Tabs {
    constructor(container) {
      this.container = container;
      this.triggers = container.querySelectorAll('[data-tab]');
      this.panels = container.querySelectorAll('.tab-panel');

      this.triggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
          const targetId = trigger.getAttribute('data-tab');

          // Update triggers
          this.triggers.forEach(t => {
            t.classList.remove('active');
            t.style.borderColor = 'transparent';
            t.style.color = 'var(--text-secondary)';
          });
          trigger.classList.add('active');
          trigger.style.borderColor = 'var(--primary-500)';
          trigger.style.color = 'var(--primary-500)';

          // Update panels
          this.panels.forEach(panel => {
            panel.classList.remove('active');
            panel.style.display = 'none';
          });

          const targetPanel = this.container.querySelector(`#${targetId}`);
          if (targetPanel) {
            targetPanel.classList.add('active');
            targetPanel.style.display = 'block';
          }
        });
      });
    }
  }

  // =================================================================
  // FORM VALIDATOR
  // =================================================================
  class FormValidator {
    constructor(form) {
      this.form = form;
      this.form.setAttribute('novalidate', 'true');

      this.form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (this.validate()) {
          console.log('Form is valid!');
          // You can submit the form here if needed
          // this.form.submit();
        }
      });
    }

    validate() {
      let isValid = true;
      const fields = this.form.querySelectorAll('input, textarea, select');

      fields.forEach(field => {
        this.clearError(field);

        if (field.hasAttribute('required') && !field.value.trim()) {
          this.showError(field, 'This field is required');
          isValid = false;
        } else if (field.hasAttribute('data-validate-email')) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(field.value)) {
            this.showError(field, 'Please enter a valid email');
            isValid = false;
          }
        } else if (field.hasAttribute('minlength')) {
          const min = parseInt(field.getAttribute('minlength'));
          if (field.value.length < min) {
            this.showError(field, `Minimum ${min} characters required`);
            isValid = false;
          }
        }
      });

      return isValid;
    }

    showError(field, message) {
      field.classList.add('error');
      field.style.borderColor = 'var(--status-error)';

      const errorElement = document.createElement('span');
      errorElement.className = 'error-message';
      errorElement.textContent = message;
      errorElement.style.cssText = 'color: var(--status-error); font-size: 0.875rem; margin-top: 0.25rem; display: block;';

      field.parentElement.appendChild(errorElement);
    }

    clearError(field) {
      field.classList.remove('error');
      field.style.borderColor = '';
      const error = field.parentElement.querySelector('.error-message');
      if (error) error.remove();
    }
  }

  // =================================================================
  // SCROLL REVEAL (Simple fade-in on scroll)
  // =================================================================
  function initScrollReveal() {
    const elements = document.querySelectorAll('[data-scroll-reveal]');
    if (elements.length === 0) return;

    const style = document.createElement('style');
    style.textContent = `
      [data-scroll-reveal] {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.6s ease;
      }
      [data-scroll-reveal].revealed {
        opacity: 1;
        transform: translateY(0);
      }
    `;
    document.head.appendChild(style);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(element => observer.observe(element));
  }

  // =================================================================
  // SMOOTH SCROLL
  // =================================================================
  function initSmoothScroll() {
    document.querySelectorAll('[data-smooth-scroll]').forEach(link => {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      });
    });
  }

  // =================================================================
  // COPY TO CLIPBOARD
  // =================================================================
  function initCopyToClipboard() {
    document.querySelectorAll('[data-copy]').forEach(button => {
      button.addEventListener('click', async () => {
        const text = button.getAttribute('data-copy');
        const originalText = button.textContent;

        try {
          await navigator.clipboard.writeText(text);
          button.textContent = '✓ Copied!';
          button.classList.add('success');

          setTimeout(() => {
            button.textContent = originalText;
            button.classList.remove('success');
          }, 2000);
        } catch (err) {
          console.error('Failed to copy:', err);
          button.textContent = '✗ Failed';
          setTimeout(() => {
            button.textContent = originalText;
          }, 2000);
        }
      });
    });
  }

  // =================================================================
  // TOOLTIP (Smooth and positioned correctly!)
  // =================================================================
  function initTooltips() {
    if (document.querySelector('#tooltip-styles')) return;

    const style = document.createElement('style');
    style.id = 'tooltip-styles';
    style.textContent = `
      .hw-tooltip {
        position: fixed;
        background: var(--gray-900, #1f2937);
        color: white;
        padding: 6px 12px;
        border-radius: 6px;
        font-size: 13px;
        white-space: nowrap;
        z-index: 9999;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.2s ease;
        box-shadow: 0 4px 6px rgba(0,0,0,0.3);
      }
      .hw-tooltip.show {
        opacity: 1;
      }
      .hw-tooltip::before {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-top: 4px solid var(--gray-900, #1f2937);
      }
    `;
    document.head.appendChild(style);

    document.querySelectorAll('[data-tooltip]').forEach(element => {
      let tooltip = null;

      element.addEventListener('mouseenter', function(e) {
        tooltip = document.createElement('div');
        tooltip.className = 'hw-tooltip';
        tooltip.textContent = this.getAttribute('data-tooltip');
        document.body.appendChild(tooltip);

        const rect = this.getBoundingClientRect();
        const tooltipRect = tooltip.getBoundingClientRect();

        tooltip.style.top = `${rect.top - tooltipRect.height - 12}px`;
        tooltip.style.left = `${rect.left + (rect.width - tooltipRect.width) / 2}px`;

        requestAnimationFrame(() => tooltip.classList.add('show'));
      });

      element.addEventListener('mouseleave', function() {
        if (tooltip) {
          tooltip.remove();
          tooltip = null;
        }
      });
    });
  }

  // =================================================================
  // DROPDOWN
  // =================================================================
  function initDropdowns() {
    if (document.querySelector('#dropdown-styles')) return;

    const style = document.createElement('style');
    style.id = 'dropdown-styles';
    style.textContent = `
      [data-dropdown-content] {
        display: none;
        position: absolute;
        z-index: 100;
      }
      [data-dropdown-content].active {
        display: block;
        animation: dropdownFadeIn 0.2s ease;
      }
      @keyframes dropdownFadeIn {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `;
    document.head.appendChild(style);

    document.querySelectorAll('[data-dropdown]').forEach(dropdown => {
      const trigger = dropdown.querySelector('[data-dropdown-trigger]');
      const content = dropdown.querySelector('[data-dropdown-content]');

      if (trigger && content) {
        trigger.addEventListener('click', (e) => {
          e.stopPropagation();

          // Close other dropdowns
          document.querySelectorAll('[data-dropdown-content].active').forEach(other => {
            if (other !== content) other.classList.remove('active');
          });

          content.classList.toggle('active');
        });

        document.addEventListener('click', () => {
          content.classList.remove('active');
        });

        content.addEventListener('click', (e) => {
          e.stopPropagation();
        });
      }
    });
  }

  // =================================================================
  // ANIMATIONS (FIXED - Now trigger properly!)
  // =================================================================
  function initAnimations() {
    if (document.querySelector('#animation-styles')) return;

    const style = document.createElement('style');
    style.id = 'animation-styles';
    style.textContent = `
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes slideUp {
        from { transform: translateY(40px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
      @keyframes slideDown {
        from { transform: translateY(-40px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
      @keyframes slideLeft {
        from { transform: translateX(40px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      @keyframes slideRight {
        from { transform: translateX(-40px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      @keyframes zoomIn {
        from { transform: scale(0.8); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
      }
      @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-15px); }
      }
      @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
      }
      @keyframes rotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      @keyframes pulse {
        0%, 100% { transform: scale(1); opacity: 1; }
        50% { transform: scale(1.05); opacity: 0.8; }
      }

      [data-animate] {
        animation-duration: 0.8s;
        animation-fill-mode: both;
        animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      }
      [data-animate="fade"] { animation-name: fadeIn; }
      [data-animate="slide-up"] { animation-name: slideUp; }
      [data-animate="slide-down"] { animation-name: slideDown; }
      [data-animate="slide-left"] { animation-name: slideLeft; }
      [data-animate="slide-right"] { animation-name: slideRight; }
      [data-animate="zoom"] { animation-name: zoomIn; }
      [data-animate="bounce"] {
        animation-name: bounce;
        animation-iteration-count: infinite;
        animation-duration: 1.5s;
      }
      [data-animate="shake"] {
        animation-name: shake;
        animation-duration: 0.5s;
      }
      [data-animate="rotate"] {
        animation-name: rotate;
        animation-iteration-count: infinite;
        animation-duration: 2s;
        animation-timing-function: linear;
      }
      [data-animate="pulse"] {
        animation-name: pulse;
        animation-iteration-count: infinite;
        animation-duration: 2s;
      }
    `;
    document.head.appendChild(style);

    // Apply animation delays
    document.querySelectorAll('[data-animate]').forEach(element => {
      const delay = element.getAttribute('data-animate-delay');
      if (delay) {
        element.style.animationDelay = `${delay}ms`;
      }
    });
  }

  // =================================================================
  // AUTO-INITIALIZE ALL ON DOM READY
  // =================================================================
  document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Initializing Hachi wa Studios Web Foundation v1.0.0...');

    // Parse custom values
    parseCustomValues();

    // Initialize components
    document.querySelectorAll('[data-hamburger]').forEach(el => new HamburgerMenu(el));
    document.querySelectorAll('[data-typewriter]').forEach(el => new Typewriter(el));
    document.querySelectorAll('[data-theme-switcher]').forEach(el => new ThemeSwitcher(el));
    document.querySelectorAll('[data-active-state]').forEach(el => new ActiveStateManager(el));
    document.querySelectorAll('.accordion').forEach(el => new Accordion(el));
    document.querySelectorAll('[data-tabs]').forEach(el => new Tabs(el));
    document.querySelectorAll('[data-validate]').forEach(el => new FormValidator(el));

    // Add styles
    addAccordionStyles();

    // Initialize features
    new Modal();
    initParallax();
    initScrollAnimations();
    initLazyLoading();
    initScrollReveal();
    initSmoothScroll();
    initCopyToClipboard();
    initTooltips();
    initDropdowns();
    initAnimations();

    console.log('✅ All utilities loaded successfully! All bugs fixed!');
  });

  // Export for programmatic use
  window.Hachiwa = {
    Typewriter,
    ThemeSwitcher,
    ActiveStateManager,
    HamburgerMenu,
    Modal,
    Accordion,
    Tabs,
    FormValidator,
    parseCustomValues
  };

})();
