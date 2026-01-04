#!/usr/bin/env node

/**
 * ===================================================================
 * HACHI WA STUDIOS — WEB FOUNDATION CLI
 * Scaffolds a new web project with Hachi wa Studios standards
 * ===================================================================
 */

const fs = require('fs');
const path = require('path');

// ANSI color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  cyan: '\x1b[36m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m'
};

/**
 * Print colored message to console
 */
function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

/**
 * Print error and exit
 */
function error(message) {
  log(`\n✗ Error: ${message}`, 'red');
  process.exit(1);
}

/**
 * Print success message
 */
function success(message) {
  log(`✓ ${message}`, 'green');
}

/**
 * Copy directory recursively
 */
function copyDirectory(source, destination) {
  // Create destination directory if it doesn't exist
  if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination, { recursive: true });
  }

  // Read all items in source directory
  const items = fs.readdirSync(source);

  items.forEach(item => {
    const sourcePath = path.join(source, item);
    const destPath = path.join(destination, item);

    // Check if item is a directory
    if (fs.statSync(sourcePath).isDirectory()) {
      copyDirectory(sourcePath, destPath);
    } else {
      // Copy file
      fs.copyFileSync(sourcePath, destPath);
    }
  });
}

/**
 * Main scaffolding function
 */
function scaffold(projectName) {
  log('\n┌─────────────────────────────────────────────┐', 'cyan');
  log('│  Hachi wa Studios — Web Foundation         │', 'cyan');
  log('│  Professional Web Development Toolkit      │', 'cyan');
  log('└─────────────────────────────────────────────┘\n', 'cyan');

  // Validate project name
  if (!projectName) {
    projectName = 'my-web-project';
    log(`No project name provided. Using default: ${projectName}`, 'yellow');
  }

  // Check if directory already exists
  const projectPath = path.join(process.cwd(), projectName);
  if (fs.existsSync(projectPath)) {
    error(`Directory "${projectName}" already exists. Please choose a different name.`);
  }

  log(`Creating project: ${projectName}\n`, 'bright');

  // Get template directory path
  const templateDir = path.join(__dirname, '..', 'template');

  try {
    // Copy template to new project directory
    success('Copying template files...');
    copyDirectory(templateDir, projectPath);

    // Create empty images directory
    const imagesDir = path.join(projectPath, 'assets', 'images');
    if (!fs.existsSync(imagesDir)) {
      fs.mkdirSync(imagesDir, { recursive: true });
    }

    success('Project structure created');

    // Print success message with instructions
    log('\n┌─────────────────────────────────────────────┐', 'green');
    log('│  ✓ Project Created Successfully!           │', 'green');
    log('└─────────────────────────────────────────────┘\n', 'green');

    log('Next steps:', 'bright');
    log(`  1. cd ${projectName}`, 'cyan');
    log('  2. Open index.html in your browser', 'cyan');
    log('  3. Start building your website!\n', 'cyan');

    log('File structure:', 'bright');
    log('  assets/', 'cyan');
    log('    ├── css/utility.css     (15 themes + utilities)', 'cyan');
    log('    ├── js/hachiwa.js       (JavaScript helpers)', 'cyan');
    log('    └── images/             (Your images)', 'cyan');
    log('  components/', 'cyan');
    log('    └── index.html          (Example page)', 'cyan');

    log('Available themes:', 'bright');
    log('  default, dark, portfolio, girly, gaming, hacker,', 'cyan');
    log('  corporate, nature, creative, minimal, sunset,', 'cyan');
    log('  tech, pastel, ocean, retro\n', 'cyan');

    log('Documentation: Check README.md for detailed usage\n', 'yellow');
    log('Happy coding! 🚀\n', 'green');

  } catch (err) {
    error(`Failed to create project: ${err.message}`);
  }
}

// Get project name from command line arguments
const projectName = process.argv[2];

// Run scaffolding
scaffold(projectName);
