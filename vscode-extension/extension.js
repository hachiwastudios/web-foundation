/**
 * Web Foundation by Hachi wa Studios - VSCode Extension
 * Provides IntelliSense for utility classes and HTML elements
 */

const vscode = require('vscode');

/**
 * Activate extension
 */
function activate(context) {
  console.log('Web Foundation extension is now active!');

  // Class name completion provider for HTML
  const classCompletionProvider = vscode.languages.registerCompletionItemProvider(
    ['html', 'javascript', 'javascriptreact', 'typescript', 'typescriptreact'],
    {
      provideCompletionItems(document, position) {
        const linePrefix = document.lineAt(position).text.substr(0, position.character);

        // Check if we're inside class attribute
        if (!linePrefix.includes('class=')) {
          return undefined;
        }

        const completionItems = [];

        // Add utility class completions
        const utilityClasses = getUtilityClasses();
        utilityClasses.forEach(cls => {
          const item = new vscode.CompletionItem(cls.name, vscode.CompletionItemKind.Class);
          item.detail = 'Web Foundation';
          item.documentation = new vscode.MarkdownString(cls.description);
          completionItems.push(item);
        });

        return completionItems;
      }
    },
    '"', "'"  // Trigger on quote
  );

  // Icon name completion for data-icon attribute
  const iconCompletionProvider = vscode.languages.registerCompletionItemProvider(
    'html',
    {
      provideCompletionItems(document, position) {
        const linePrefix = document.lineAt(position).text.substr(0, position.character);

        if (!linePrefix.includes('data-icon=')) {
          return undefined;
        }

        const icons = getIconNames();
        return icons.map(icon => {
          const item = new vscode.CompletionItem(icon, vscode.CompletionItemKind.Value);
          item.detail = 'Web Foundation Icon';
          item.documentation = `Icon: ${icon}`;
          return item;
        });
      }
    },
    '"', "'"
  );

  // HTML element snippets with Web Foundation classes
  const snippetProvider = vscode.languages.registerCompletionItemProvider(
    'html',
    {
      provideCompletionItems(document, position) {
        const snippets = getHTMLSnippets();
        return snippets.map(snippet => {
          const item = new vscode.CompletionItem(snippet.prefix, vscode.CompletionItemKind.Snippet);
          item.insertText = new vscode.SnippetString(snippet.body.join('\n'));
          item.detail = snippet.description;
          item.documentation = 'Web Foundation snippet';
          return item;
        });
      }
    }
  );

  context.subscriptions.push(classCompletionProvider, iconCompletionProvider, snippetProvider);
}

/**
 * Get utility classes for autocomplete
 */
function getUtilityClasses() {
  return [
    // Layout
    { name: 'flex', description: 'Display flex container' },
    { name: 'flex-col', description: 'Flex direction column' },
    { name: 'flex-row', description: 'Flex direction row' },
    { name: 'grid', description: 'Display grid container' },
    { name: 'container', description: 'Responsive container' },
    { name: 'mx-auto', description: 'Center horizontally' },

    // Spacing
    { name: 'p-4', description: 'Padding: 1rem (16px)' },
    { name: 'p-8', description: 'Padding: 2rem (32px)' },
    { name: 'px-4', description: 'Padding left/right: 1rem' },
    { name: 'py-4', description: 'Padding top/bottom: 1rem' },
    { name: 'm-4', description: 'Margin: 1rem (16px)' },
    { name: 'mb-4', description: 'Margin bottom: 1rem' },
    { name: 'gap-4', description: 'Gap: 1rem (16px)' },

    // Typography
    { name: 'text-xs', description: 'Font size: 12px' },
    { name: 'text-sm', description: 'Font size: 14px' },
    { name: 'text-base', description: 'Font size: 16px' },
    { name: 'text-lg', description: 'Font size: 18px' },
    { name: 'text-xl', description: 'Font size: 20px' },
    { name: 'text-2xl', description: 'Font size: 24px' },
    { name: 'text-3xl', description: 'Font size: 32px' },
    { name: 'text-4xl', description: 'Font size: 48px' },
    { name: 'text-5xl', description: 'Font size: 56px' },
    { name: 'font-bold', description: 'Font weight: 700' },
    { name: 'font-semibold', description: 'Font weight: 600' },
    { name: 'text-center', description: 'Text align center' },
    { name: 'text-primary', description: 'Primary text color' },
    { name: 'text-secondary', description: 'Secondary text color' },

    // Colors
    { name: 'bg-primary', description: 'Primary background color' },
    { name: 'bg-accent', description: 'Accent background color' },
    { name: 'bg-surface', description: 'Surface background color' },

    // Components
    { name: 'btn', description: 'Button base styles' },
    { name: 'btn-primary', description: 'Primary button' },
    { name: 'btn-secondary', description: 'Secondary button' },
    { name: 'btn-accent', description: 'Accent button' },
    { name: 'card', description: 'Card component' },

    // Icons
    { name: 'icon', description: 'Icon base class' },
    { name: 'icon-sm', description: 'Small icon (16px)' },
    { name: 'icon-lg', description: 'Large icon (24px)' },
    { name: 'icon-xl', description: 'Extra large icon (32px)' },
    { name: 'icon-primary', description: 'Primary colored icon' },

    // Responsive
    { name: 'md:flex', description: 'Flex on medium screens and up' },
    { name: 'lg:grid', description: 'Grid on large screens and up' },
    { name: 'md:grid-cols-2', description: '2 columns on medium screens' },
    { name: 'lg:grid-cols-3', description: '3 columns on large screens' }
  ];
}

/**
 * Get icon names
 */
function getIconNames() {
  return [
    'menu', 'close', 'home', 'search', 'user', 'settings',
    'arrow-right', 'arrow-left', 'arrow-up', 'arrow-down',
    'chevron-right', 'chevron-left', 'chevron-up', 'chevron-down',
    'check', 'plus', 'minus', 'edit', 'trash', 'download', 'upload',
    'copy', 'share', 'info', 'alert', 'bell', 'star', 'heart',
    'image', 'file', 'folder', 'camera', 'video', 'music',
    'mail', 'message', 'phone', 'shopping-cart', 'credit-card',
    'dollar', 'tag', 'gift', 'link', 'lock', 'unlock', 'eye', 'eye-off',
    'clock', 'calendar', 'map-pin', 'globe', 'bookmark', 'flag', 'zap', 'code', 'play'
  ];
}

/**
 * Get HTML snippets with Web Foundation classes
 */
function getHTMLSnippets() {
  return [
    {
      prefix: 'wf-container',
      description: 'Responsive container',
      body: ['<div class="container mx-auto p-8">', '\t$0', '</div>']
    },
    {
      prefix: 'wf-card',
      description: 'Card component',
      body: ['<div class="card p-6">', '\t<h3 class="text-xl font-semibold mb-2">$1</h3>', '\t<p class="text-secondary">$2</p>', '</div>']
    },
    {
      prefix: 'wf-button',
      description: 'Primary button',
      body: ['<button class="btn btn-primary">', '\t$1', '</button>']
    },
    {
      prefix: 'wf-icon',
      description: 'Icon with Web Foundation',
      body: ['<i data-icon="$1" data-variant="outlined" class="icon"></i>']
    },
    {
      prefix: 'wf-grid',
      description: 'Responsive grid',
      body: ['<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">', '\t$0', '</div>']
    },
    {
      prefix: 'wf-flex',
      description: 'Flex container with gap',
      body: ['<div class="flex gap-4">', '\t$0', '</div>']
    },
    {
      prefix: 'wf-navbar',
      description: 'Navigation bar',
      body: [
        '<nav class="flex justify-between items-center p-4 bg-surface">',
        '\t<div class="text-xl font-bold">$1</div>',
        '\t<div class="flex gap-4">',
        '\t\t$0',
        '\t</div>',
        '</nav>'
      ]
    }
  ];
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};
