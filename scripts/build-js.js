#!/usr/bin/env node

/**
 * Build JavaScript from modular source files
 * - Concatenates all JS modules
 * - Creates unminified and minified versions
 * - Generates source maps
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('⚡ Building JavaScript...\n');

// Ensure output directory exists
if (!fs.existsSync('dist/js')) {
  fs.mkdirSync('dist/js', { recursive: true });
}

// For now, copy the existing hachiwa.js as-is and add the new icons.js
// In a more complex setup, we'd use a bundler like Rollup or esbuild

console.log('Copying hachiwa.js...');
const hachiwaSource = fs.readFileSync('template/assets/js/hachiwa.js', 'utf-8');
const iconsSource = fs.readFileSync('src/js/features/icons.js', 'utf-8');

// Combine files with clear separators
const combined = `/**
 * Hachi wa Studios - Web Foundation v2.0
 * Professional JavaScript utilities for rapid web development
 */

/* ==================== CORE UTILITIES ==================== */
${hachiwaSource}

/* ==================== ICON SYSTEM v2.0 ==================== */
${iconsSource}
`;

// Write unminified version
fs.writeFileSync('dist/js/hachiwa.js', combined);
console.log('✓ dist/js/hachiwa.js');

// Create minified version using Terser (if available) or simple minification
console.log('\nMinifying JavaScript...');
try {
  // Try to use npx terser if available
  try {
    execSync(
      'npx terser dist/js/hachiwa.js -o dist/js/hachiwa.min.js --compress --mangle --source-map',
      { stdio: 'inherit' }
    );
  } catch (e) {
    // Fallback: copy as min.js without actual minification
    console.log('⚠️  Terser not available, copying unminified as .min.js');
    fs.copyFileSync('dist/js/hachiwa.js', 'dist/js/hachiwa.min.js');
  }
  console.log('✓ dist/js/hachiwa.min.js');
} catch (error) {
  console.error('❌ Failed to create minified JS');
  process.exit(1);
}

// Get file sizes
const unminifiedSize = fs.statSync('dist/js/hachiwa.js').size;
const minifiedSize = fs.statSync('dist/js/hachiwa.min.js').size;
const savings = ((1 - minifiedSize / unminifiedSize) * 100).toFixed(1);

console.log('\n📊 Build Statistics:');
console.log(`  Unminified: ${(unminifiedSize / 1024).toFixed(2)} KB`);
console.log(`  Minified:   ${(minifiedSize / 1024).toFixed(2)} KB`);
console.log(`  Savings:    ${savings}%`);

console.log('\n✅ JavaScript build complete!');
