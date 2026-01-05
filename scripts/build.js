#!/usr/bin/env node

/**
 * Main build script for Hachi wa Studios Web Foundation
 * Orchestrates all build steps: CSS, JS, assets, IntelliSense
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔨 Building Hachi wa Studios Web Foundation v2.0\n');
console.log('='.repeat(60) + '\n');

const startTime = Date.now();

// Step 1: Clean dist directory
console.log('📁 Step 1/5: Cleaning dist directory...');
try {
  if (fs.existsSync('dist')) {
    execSync('npx rimraf dist', { stdio: 'inherit' });
  }
  fs.mkdirSync('dist', { recursive: true });
  console.log('✓ Cleaned\n');
} catch (error) {
  console.error('❌ Failed to clean dist directory');
  process.exit(1);
}

// Step 2: Build CSS
console.log('📁 Step 2/5: Building CSS...');
try {
  execSync('node scripts/build-css.js', { stdio: 'inherit' });
  console.log('');
} catch (error) {
  console.error('❌ CSS build failed');
  process.exit(1);
}

// Step 3: Build JavaScript
console.log('📁 Step 3/5: Building JavaScript...');
try {
  execSync('node scripts/build-js.js', { stdio: 'inherit' });
  console.log('');
} catch (error) {
  console.error('❌ JavaScript build failed');
  process.exit(1);
}

// Step 4: Copy assets
console.log('📁 Step 4/5: Copying assets...');
try {
  // Copy icons
  copyRecursive('src/assets/icons', 'dist/assets/icons');
  console.log('✓ Icons copied');

  // Create images directory (empty, for user images)
  fs.mkdirSync('dist/assets/images', { recursive: true });
  console.log('✓ Assets directory created\n');
} catch (error) {
  console.error('❌ Failed to copy assets');
  process.exit(1);
}

// Step 5: Generate IntelliSense
console.log('📁 Step 5/5: Generating IntelliSense data...');
try {
  execSync('node scripts/generate-intellisense.js', { stdio: 'inherit' });
  console.log('');
} catch (error) {
  console.warn('⚠️  IntelliSense generation failed (non-critical)\n');
}

// Build complete
const endTime = Date.now();
const duration = ((endTime - startTime) / 1000).toFixed(2);

console.log('='.repeat(60));
console.log(`✅ Build complete in ${duration}s!\n`);

// Show build output summary
console.log('📦 Build Output:');
console.log('  dist/');
console.log('  ├── css/');
console.log('  │   ├── utility.css');
console.log('  │   ├── utility.min.css');
console.log('  │   └── *.map');
console.log('  ├── js/');
console.log('  │   ├── hachiwa.js');
console.log('  │   └── hachiwa.min.js');
console.log('  └── assets/');
console.log('      └── icons/');
console.log('          ├── outlined/ (56 icons)');
console.log('          └── solid/ (56 icons)');
console.log('');

/**
 * Recursively copy directory
 */
function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) return;

  if (fs.statSync(src).isDirectory()) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach(file => {
      copyRecursive(path.join(src, file), path.join(dest, file));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}
