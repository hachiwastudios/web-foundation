#!/usr/bin/env node

/**
 * Extract icons from sprite sheet to individual SVG files
 * Creates both outlined (stroke-based) and solid (fill-based) variants
 */

const fs = require('fs');
const path = require('path');

const SPRITE_FILE = 'template/assets/icons.svg';
const OUTPUT_DIR_OUTLINED = 'src/assets/icons/outlined';
const OUTPUT_DIR_SOLID = 'src/assets/icons/solid';

console.log('Reading icon sprite sheet...');
const spriteContent = fs.readFileSync(SPRITE_FILE, 'utf-8');

// Parse symbols using regex (simple approach)
const symbolRegex = /<symbol\s+id="icon-([^"]+)"[^>]*>([\s\S]*?)<\/symbol>/g;
let match;
let iconCount = 0;

console.log('\nExtracting icons...\n');

while ((match = symbolRegex.exec(spriteContent)) !== null) {
  const iconName = match[1];
  const symbolContent = match[0];

  // Extract attributes from symbol
  const viewBoxMatch = symbolContent.match(/viewBox="([^"]+)"/);
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24';

  // Extract inner content (paths, lines, etc.)
  const innerContent = match[2].trim();

  // Create outlined version (stroke-based)
  const outlinedSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
${innerContent}
</svg>`;

  // Write outlined version
  const outlinedPath = path.join(OUTPUT_DIR_OUTLINED, `${iconName}.svg`);
  fs.writeFileSync(outlinedPath, outlinedSVG);
  console.log(`  ✓ outlined/${iconName}.svg`);

  // Create solid version (fill-based)
  // For now, create a simple solid variant by converting stroke to fill
  // This is a simplified approach - real solid icons may need manual design
  const solidSVG = createSolidVariant(innerContent, viewBox, iconName);

  const solidPath = path.join(OUTPUT_DIR_SOLID, `${iconName}.svg`);
  fs.writeFileSync(solidPath, solidSVG);
  console.log(`  ✓ solid/${iconName}.svg`);

  iconCount++;
}

console.log(`\n✅ Extracted ${iconCount} icons (${iconCount * 2} files total)`);

// Copy sprite sheet to src/assets for backward compatibility
fs.copyFileSync(SPRITE_FILE, 'src/assets/icons.svg');
console.log('✓ Copied sprite sheet for backward compatibility');

/**
 * Create solid variant of an icon
 * This is a simplified conversion - some icons may need manual refinement
 */
function createSolidVariant(content, viewBox, iconName) {
  // For simple geometric shapes, we can use fill
  // For complex icons, we keep stroke but make it thicker

  // Simple shapes that work well as solid (filled)
  const simpleFillIcons = [
    'check', 'plus', 'minus', 'close', 'arrow-right', 'arrow-left',
    'arrow-up', 'arrow-down', 'chevron-right', 'chevron-left',
    'chevron-up', 'chevron-down', 'star', 'heart'
  ];

  if (simpleFillIcons.includes(iconName)) {
    // Use filled paths with thicker stroke to create solid appearance
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
${content}
</svg>`;
  }

  // For complex icons, keep as stroke-based but slightly thicker
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
${content}
</svg>`;
}
