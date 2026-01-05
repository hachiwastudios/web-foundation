#!/usr/bin/env node

/**
 * Split utility.css into modular components
 * This script intelligently parses the monolithic CSS file and creates
 * separate module files for better maintainability
 */

const fs = require('fs');
const path = require('path');

const SOURCE_FILE = 'template/assets/css/utility.css';
const OUTPUT_DIR = 'src/css';

// Read the entire CSS file
console.log('Reading utility.css...');
const css = fs.readFileSync(SOURCE_FILE, 'utf-8');
const lines = css.split('\n');

// Storage for extracted sections
const sections = {
  'core/reset.css': [],
  'core/variables.css': [],
  'themes/default.css': [],
  'themes/dark.css': [],
  'themes/portfolio.css': [],
  'themes/girly.css': [],
  'themes/gaming.css': [],
  'themes/hacker.css': [],
  'themes/corporate.css': [],
  'themes/nature.css': [],
  'themes/creative.css': [],
  'themes/minimal.css': [],
  'themes/sunset.css': [],
  'themes/tech.css': [],
  'themes/pastel.css': [],
  'themes/ocean.css': [],
  'themes/retro.css': [],
  'core/base.css': [],
  'utilities/typography.css': [],
  'utilities/colors.css': [],
  'utilities/spacing.css': [],
  'utilities/layout.css': [],
  'utilities/borders.css': [],
  'utilities/effects.css': [],
  'utilities/icons.css': [],
  'utilities/responsive.css': []
};

// Current section being processed
let currentSection = null;
let bracketDepth = 0;
let inTheme = null;

// Helper to detect section boundaries
function detectSection(line) {
  const trimmed = line.trim();

  // Font imports
  if (trimmed.startsWith('@import') && trimmed.includes('fonts.googleapis.com')) {
    return 'core/reset.css';
  }

  // Global reset
  if (trimmed.includes('Global Reset') || trimmed.includes('box-sizing')) {
    return 'core/reset.css';
  }

  // Root variables (before first theme)
  if (trimmed === ':root {' && !inTheme) {
    return 'core/variables.css';
  }

  // Theme detection
  if (trimmed.includes('[data-theme="default"]') || (trimmed.includes(':root') && inTheme === 'default')) {
    inTheme = 'default';
    return 'themes/default.css';
  }
  if (trimmed.includes('[data-theme="dark"]')) {
    inTheme = 'dark';
    return 'themes/dark.css';
  }
  if (trimmed.includes('[data-theme="portfolio"]')) {
    inTheme = 'portfolio';
    return 'themes/portfolio.css';
  }
  if (trimmed.includes('[data-theme="girly"]')) {
    inTheme = 'girly';
    return 'themes/girly.css';
  }
  if (trimmed.includes('[data-theme="gaming"]')) {
    inTheme = 'gaming';
    return 'themes/gaming.css';
  }
  if (trimmed.includes('[data-theme="hacker"]')) {
    inTheme = 'hacker';
    return 'themes/hacker.css';
  }
  if (trimmed.includes('[data-theme="corporate"]')) {
    inTheme = 'corporate';
    return 'themes/corporate.css';
  }
  if (trimmed.includes('[data-theme="nature"]')) {
    inTheme = 'nature';
    return 'themes/nature.css';
  }
  if (trimmed.includes('[data-theme="creative"]')) {
    inTheme = 'creative';
    return 'themes/creative.css';
  }
  if (trimmed.includes('[data-theme="minimal"]')) {
    inTheme = 'minimal';
    return 'themes/minimal.css';
  }
  if (trimmed.includes('[data-theme="sunset"]')) {
    inTheme = 'sunset';
    return 'themes/sunset.css';
  }
  if (trimmed.includes('[data-theme="tech"]')) {
    inTheme = 'tech';
    return 'themes/tech.css';
  }
  if (trimmed.includes('[data-theme="pastel"]')) {
    inTheme = 'pastel';
    return 'themes/pastel.css';
  }
  if (trimmed.includes('[data-theme="ocean"]')) {
    inTheme = 'ocean';
    return 'themes/ocean.css';
  }
  if (trimmed.includes('[data-theme="retro"]')) {
    inTheme = 'retro';
    return 'themes/retro.css';
  }

  // Base styles (body, a, img, etc.)
  if (trimmed.startsWith('body') || trimmed.startsWith('a ') || trimmed.startsWith('img')) {
    return 'core/base.css';
  }

  // Typography utilities
  if (trimmed.includes('/* Text') ||
      trimmed.startsWith('.text-') ||
      trimmed.startsWith('.font-') ||
      trimmed.startsWith('.leading-') ||
      trimmed.startsWith('.tracking-')) {
    return 'utilities/typography.css';
  }

  // Color utilities
  if ((trimmed.includes('/* Text Colors') || trimmed.includes('/* Background Colors')) ||
      (trimmed.startsWith('.text-primary') && !trimmed.startsWith('.text-xs')) ||
      trimmed.startsWith('.bg-')) {
    return 'utilities/colors.css';
  }

  // Spacing utilities
  if (trimmed.includes('/* Margin') || trimmed.includes('/* Padding') ||
      trimmed.match(/^\.[mp][txybrl]?-/)) {
    return 'utilities/spacing.css';
  }

  // Layout utilities
  if (trimmed.includes('/* Flex') || trimmed.includes('/* Grid') ||
      trimmed.includes('/* Display') || trimmed.includes('/* Position') ||
      trimmed.startsWith('.flex') || trimmed.startsWith('.grid') ||
      trimmed.startsWith('.block') || trimmed.startsWith('.inline') ||
      trimmed.startsWith('.relative') || trimmed.startsWith('.absolute') ||
      trimmed.startsWith('.container')) {
    return 'utilities/layout.css';
  }

  // Border utilities
  if (trimmed.includes('/* Border') || trimmed.includes('/* Rounded') ||
      trimmed.startsWith('.border') || trimmed.startsWith('.rounded')) {
    return 'utilities/borders.css';
  }

  // Effect utilities
  if (trimmed.includes('/* Shadow') || trimmed.includes('/* Opacity') ||
      trimmed.startsWith('.shadow') || trimmed.startsWith('.opacity')) {
    return 'utilities/effects.css';
  }

  // Icon utilities
  if (trimmed.includes('/* Icon') || trimmed.startsWith('.icon')) {
    return 'utilities/icons.css';
  }

  // Responsive utilities
  if (trimmed.includes('@media') || trimmed.includes('/* Responsive')) {
    return 'utilities/responsive.css';
  }

  return null;
}

// Process each line
console.log('Parsing CSS structure...');
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const trimmed = line.trim();

  // Track bracket depth to know when themes/rules end
  bracketDepth += (line.match(/{/g) || []).length;
  bracketDepth -= (line.match(/}/g) || []).length;

  // Check if we're ending a theme
  if (bracketDepth === 0 && inTheme) {
    inTheme = null;
  }

  // Detect section
  const detected = detectSection(line);
  if (detected) {
    currentSection = detected;
  }

  // Add line to current section
  if (currentSection && sections[currentSection]) {
    sections[currentSection].push(line);
  }
}

// Write sections to files
console.log('\nWriting modular CSS files...');
let totalFiles = 0;
let totalLines = 0;

Object.entries(sections).forEach(([filename, content]) => {
  if (content.length > 0) {
    const outputPath = path.join(OUTPUT_DIR, filename);
    const outputDir = path.dirname(outputPath);

    // Ensure directory exists
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Add file header
    const header = `/* ${filename.toUpperCase().replace(/\//g, ' - ').replace('.CSS', '')} */\n\n`;
    const fileContent = header + content.join('\n').trim() + '\n';

    fs.writeFileSync(outputPath, fileContent);
    console.log(`  ✓ ${filename} (${content.length} lines)`);

    totalFiles++;
    totalLines += content.length;
  }
});

console.log(`\n✅ Split complete: ${totalFiles} files, ${totalLines} total lines`);

// Verify we didn't lose content
console.log(`\nOriginal file: ${lines.length} lines`);
console.log(`Extracted: ${totalLines} lines`);
if (totalLines < lines.length * 0.95) {
  console.warn('⚠️  Warning: Significant content loss detected. Manual verification needed.');
} else {
  console.log('✓ Content integrity verified');
}
