#!/usr/bin/env node

/**
 * ===================================================================
 * HACHI WA STUDIOS — WEB FOUNDATION CLI v2.0
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
  if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination, { recursive: true });
  }

  const items = fs.readdirSync(source);

  items.forEach(item => {
    const sourcePath = path.join(source, item);
    const destPath = path.join(destination, item);

    if (fs.statSync(sourcePath).isDirectory()) {
      copyDirectory(sourcePath, destPath);
    } else {
      fs.copyFileSync(sourcePath, destPath);
    }
  });
}

/**
 * Main scaffolding function
 */
function scaffold(projectName) {
  log('\n┌─────────────────────────────────────────────┐', 'cyan');
  log('│  Hachi wa Studios — Web Foundation v1.5    │', 'cyan');
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

  // Get dist directory path (built files)
  const distDir = path.join(__dirname, '..', 'dist');

  // Check if dist exists
  if (!fs.existsSync(distDir)) {
    error('Distribution files not found. This package may not be properly built.');
  }

  try {
    // Create project structure
    success('Creating project structure...');
    fs.mkdirSync(projectPath, { recursive: true });
    fs.mkdirSync(path.join(projectPath, 'assets'), { recursive: true });

    // Copy CSS
    success('Copying CSS files...');
    copyDirectory(path.join(distDir, 'css'), path.join(projectPath, 'assets', 'css'));

    // Copy JavaScript
    success('Copying JavaScript files...');
    copyDirectory(path.join(distDir, 'js'), path.join(projectPath, 'assets', 'js'));

    // Copy icons
    success('Copying icon system (112 icons)...');
    copyDirectory(path.join(distDir, 'assets', 'icons'), path.join(projectPath, 'assets', 'icons'));

    // Create empty images directory
    const imagesDir = path.join(projectPath, 'assets', 'images');
    fs.mkdirSync(imagesDir, { recursive: true });

    // Create starter index.html
    success('Creating starter files...');
    const indexHTML = createStarterHTML(projectName);
    fs.writeFileSync(path.join(projectPath, 'index.html'), indexHTML);

    // Print success message
    log('\n┌─────────────────────────────────────────────┐', 'green');
    log('│  ✓ Project Created Successfully!           │', 'green');
    log('└─────────────────────────────────────────────┘\n', 'green');

    log('Next steps:', 'bright');
    log(`  1. cd ${projectName}`, 'cyan');
    log('  2. Open index.html in your browser', 'cyan');
    log('  3. Start building your website!\n', 'cyan');

    log('File structure:', 'bright');
    log('  assets/', 'cyan');
    log('    ├── css/', 'cyan');
    log('    │   ├── utility.css        (Unminified)', 'cyan');
    log('    │   └── utility.min.css    (Minified - recommended)', 'cyan');
    log('    ├── js/', 'cyan');
    log('    │   ├── hachiwa.js         (Unminified)', 'cyan');
    log('    │   └── hachiwa.min.js     (Minified - recommended)', 'cyan');
    log('    ├── icons/', 'cyan');
    log('    │   ├── outlined/          (56 outlined icons)', 'cyan');
    log('    │   └── solid/             (56 solid icons)', 'cyan');
    log('    └── images/                (Your images)\n', 'cyan');

    log('Available themes:', 'bright');
    log('  default, dark, portfolio, girly, gaming, hacker,', 'cyan');
    log('  corporate, nature, creative, minimal, sunset,', 'cyan');
    log('  tech, pastel, ocean, retro\n', 'cyan');

    log('Documentation:', 'bright');
    log('  https://hachiwastudios.netlify.app/\n', 'cyan');

    log('Happy coding! 🚀\n', 'green');

  } catch (err) {
    error(`Failed to create project: ${err.message}`);
  }
}

/**
 * Create starter HTML template
 */
function createStarterHTML(projectName) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${projectName} | Hachi wa Studios</title>
    <link rel="stylesheet" href="assets/css/utility.min.css">
</head>
<body data-theme="default">
    <div class="container mx-auto p-8">
        <header class="text-center mb-12">
            <h1 class="text-5xl font-bold text-primary mb-4">
                <i data-icon="star" data-variant="solid" class="icon-auto"></i>
                Welcome to ${projectName}!
            </h1>
            <p class="text-xl text-secondary">
                Built with Hachi wa Studios Web Foundation v1.5
            </p>
        </header>

        <main>
            <div class="card p-8 mb-8">
                <h2 class="text-3xl font-semibold mb-4">Getting Started</h2>
                <p class="text-lg mb-6">
                    Your project is ready! Start editing this file to build your website.
                </p>

                <div class="flex gap-4 flex-wrap">
                    <button class="btn btn-primary">
                        <i data-icon="zap" class="icon"></i>
                        Primary Button
                    </button>
                    <button class="btn btn-secondary">
                        <i data-icon="heart" data-variant="outlined" class="icon"></i>
                        Secondary Button
                    </button>
                    <button class="btn btn-accent">
                        <i data-icon="star" data-variant="solid" class="icon"></i>
                        Accent Button
                    </button>
                </div>
            </div>

            <div class="grid md:grid-cols-3 gap-6">
                <div class="card p-6 text-center">
                    <i data-icon="code" class="icon-3xl icon-primary mb-4"></i>
                    <h3 class="text-xl font-semibold mb-2">800+ Utilities</h3>
                    <p class="text-secondary">
                        Comprehensive utility classes for rapid development
                    </p>
                </div>

                <div class="card p-6 text-center">
                    <i data-icon="image" data-variant="solid" class="icon-3xl icon-accent mb-4"></i>
                    <h3 class="text-xl font-semibold mb-2">112 Icons</h3>
                    <p class="text-secondary">
                        56 icons in outlined and solid variants
                    </p>
                </div>

                <div class="card p-6 text-center">
                    <i data-icon="settings" class="icon-3xl icon-success mb-4"></i>
                    <h3 class="text-xl font-semibold mb-2">15 Themes</h3>
                    <p class="text-secondary">
                        Professional themes for every use case
                    </p>
                </div>
            </div>
        </main>

        <footer class="text-center mt-12 pt-8 border-t border-subtle">
            <p class="text-secondary">
                Made with <i data-icon="heart" data-variant="solid" class="icon icon-sm icon-error"></i> using Hachi wa Studios Web Foundation
            </p>
        </footer>
    </div>

    <script src="assets/js/hachiwa.min.js"></script>
</body>
</html>`;
}

// Get project name from command line arguments
const projectName = process.argv[2];

// Run scaffolding
scaffold(projectName);
