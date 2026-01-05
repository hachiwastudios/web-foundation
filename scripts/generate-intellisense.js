#!/usr/bin/env node

/**
 * Auto-Adaptive IntelliSense Generator
 * Extracts CSS classes and variables from built files
 * Generates .vscode/css-custom-data.json and html-custom-data.json
 * This ensures IntelliSense is always in sync with the actual codebase
 */

const fs = require('fs');
const path = require('path');

console.log('🧠 Generating IntelliSense data...\n');

// Check if dist/css/utility.css exists
if (!fs.existsSync('dist/css/utility.css')) {
  console.error('❌ dist/css/utility.css not found. Run build first.');
  process.exit(1);
}

// Read built CSS
const css = fs.readFileSync('dist/css/utility.css', 'utf-8');

/**
 * Extract CSS custom properties (--variables)
 */
function extractCSSVariables(cssContent) {
  const variables = new Map();
  const varRegex = /--([\w-]+):\s*([^;]+);/g;
  let match;

  while ((match = varRegex.exec(cssContent)) !== null) {
    const name = `--${match[1]}`;
    const value = match[2].trim();

    // Skip duplicates, keep first occurrence
    if (!variables.has(name)) {
      variables.set(name, value);
    }
  }

  return variables;
}

/**
 * Extract CSS class names
 */
function extractCSSClasses(cssContent) {
  const classes = new Set();
  const descriptions = new Map();

  // Match class selectors (simple approach)
  const classRegex = /\.([\w-]+)(?:\s|{|,|:|>|\+|~)/g;
  let match;

  while ((match = classRegex.exec(cssContent)) !== null) {
    const className = match[1];

    // Skip responsive prefixes when extracting base classes
    if (!className.includes(':') && !className.startsWith('md') && !className.startsWith('lg')) {
      classes.add(className);
    }
  }

  return { classes: Array.from(classes).sort(), descriptions };
}

/**
 * Extract icon names from icons directory
 */
function extractIconNames() {
  const iconsDir = 'dist/assets/icons/outlined';
  if (!fs.existsSync(iconsDir)) {
    return [];
  }

  return fs.readdirSync(iconsDir)
    .filter(f => f.endsWith('.svg'))
    .map(f => f.replace('.svg', ''))
    .sort();
}

/**
 * Generate css-custom-data.json
 */
function generateCSSCustomData() {
  console.log('Generating css-custom-data.json...');

  const variables = extractCSSVariables(css);

  const customData = {
    version: 1.1,
    properties: []
  };

  // Add CSS variables
  variables.forEach((value, name) => {
    customData.properties.push({
      name: name,
      description: `Value: ${value}`,
      syntax: value
    });
  });

  fs.writeFileSync(
    '.vscode/css-custom-data.json',
    JSON.stringify(customData, null, 2)
  );

  console.log(`✓ Generated css-custom-data.json (${variables.size} properties)`);
}

/**
 * Generate html-custom-data.json
 */
function generateHTMLCustomData() {
  console.log('Generating html-custom-data.json...');

  const { classes } = extractCSSClasses(css);
  const icons = extractIconNames();

  const customData = {
    version: 1.1,
    tags: [],
    globalAttributes: [
      {
        name: "class",
        description: "Hachi wa Studios utility classes",
        valueSet: "hachiwaClasses"
      },
      {
        name: "data-theme",
        description: "Theme selector for Hachi wa Studios",
        values: [
          { name: "default", description: "Default e-commerce theme (blue)" },
          { name: "dark", description: "Dark mode theme" },
          { name: "portfolio", description: "Elegant portfolio theme (purple)" },
          { name: "girly", description: "Girly theme (pink)" },
          { name: "gaming", description: "Gaming theme (neon green)" },
          { name: "hacker", description: "Hacker theme (matrix green)" },
          { name: "corporate", description: "Corporate theme (navy blue)" },
          { name: "nature", description: "Nature theme (earth green)" },
          { name: "creative", description: "Creative theme (vibrant orange)" },
          { name: "minimal", description: "Minimal theme (monochrome)" },
          { name: "sunset", description: "Sunset theme (orange/pink gradient)" },
          { name: "tech", description: "Tech theme (cyan/blue)" },
          { name: "pastel", description: "Pastel theme (soft colors)" },
          { name: "ocean", description: "Ocean theme (blue/teal)" },
          { name: "retro", description: "Retro theme (vintage colors)" }
        ]
      },
      {
        name: "data-icon",
        description: "Icon name for automatic injection (Icon System v2.0)",
        valueSet: "hachiwaIcons"
      },
      {
        name: "data-variant",
        description: "Icon variant (outlined or solid)",
        values: [
          { name: "outlined", description: "Outlined/stroke-based icon (default)" },
          { name: "solid", description: "Filled/solid icon" }
        ]
      },
      {
        name: "data-typewriter",
        description: "Typewriter effect type",
        values: [
          { name: "classic", description: "Classic typewriter effect" },
          { name: "smooth", description: "Smooth continuous typing" },
          { name: "glitch", description: "Glitch effect typewriter" },
          { name: "wave", description: "Wave animation typewriter" }
        ]
      },
      {
        name: "data-speed",
        description: "Typewriter speed in milliseconds",
        valueSet: "typewriterSpeed"
      }
    ],
    valueSets: []
  };

  // Add class value set
  customData.valueSets.push({
    name: "hachiwaClasses",
    values: classes.map(className => ({
      name: className,
      description: `Utility class: ${className}`
    }))
  });

  // Add icon value set
  customData.valueSets.push({
    name: "hachiwaIcons",
    values: icons.map(icon => ({
      name: icon,
      description: `Icon: ${icon}`
    }))
  });

  // Add typewriter speed value set
  customData.valueSets.push({
    name: "typewriterSpeed",
    values: [
      { name: "50", description: "Very fast (50ms)" },
      { name: "100", description: "Fast (100ms)" },
      { name: "150", description: "Normal (150ms)" },
      { name: "200", description: "Slow (200ms)" }
    ]
  });

  fs.writeFileSync(
    '.vscode/html-custom-data.json',
    JSON.stringify(customData, null, 2)
  );

  console.log(`✓ Generated html-custom-data.json (${classes.length} classes, ${icons.length} icons)`);
}

/**
 * Main function
 */
function main() {
  try {
    generateCSSCustomData();
    generateHTMLCustomData();
    console.log('\n✅ IntelliSense data generated successfully!');
    console.log('📝 Autocomplete will work in VS Code for:');
    console.log('   - CSS custom properties (CSS variables)');
    console.log('   - Utility classes in HTML class attribute');
    console.log('   - data-theme values');
    console.log('   - data-icon names (56 icons)');
    console.log('   - data-variant (outlined/solid)');
  } catch (error) {
    console.error('\n❌ Failed to generate IntelliSense data:', error.message);
    process.exit(1);
  }
}

main();
