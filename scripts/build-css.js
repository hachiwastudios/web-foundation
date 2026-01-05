#!/usr/bin/env node

/**
 * Build CSS from modular source files
 * - Imports all modules via index.css
 * - Processes with PostCSS (autoprefixer)
 * - Creates unminified and minified versions
 * - Generates source maps
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🎨 Building CSS...\n');

// Ensure output directory exists
if (!fs.existsSync('dist/css')) {
  fs.mkdirSync('dist/css', { recursive: true });
}

// Build unminified version - use original for now
// TODO: Switch to modular CSS when split is properly refined
console.log('Building unminified CSS (using original)...');
try {
  const css = fs.readFileSync('template/assets/css/utility.css', 'utf-8');
  fs.writeFileSync('dist/css/utility.css', css);
  console.log('✓ dist/css/utility.css');
} catch (error) {
  console.error('❌ Failed to copy CSS');
  process.exit(1);
}

// Build minified version
console.log('\nMinifying CSS...');
try {
  execSync(
    'npx cleancss -o dist/css/utility.min.css --source-map --source-map-inline-sources dist/css/utility.css',
    { stdio: 'inherit' }
  );
  console.log('✓ dist/css/utility.min.css');
} catch (error) {
  console.error('❌ Failed to minify CSS');
  process.exit(1);
}

// Get file sizes
const unminifiedSize = fs.statSync('dist/css/utility.css').size;
const minifiedSize = fs.statSync('dist/css/utility.min.css').size;
const savings = ((1 - minifiedSize / unminifiedSize) * 100).toFixed(1);

console.log('\n📊 Build Statistics:');
console.log(`  Unminified: ${(unminifiedSize / 1024).toFixed(2)} KB`);
console.log(`  Minified:   ${(minifiedSize / 1024).toFixed(2)} KB`);
console.log(`  Savings:    ${savings}%`);

console.log('\n✅ CSS build complete!');
