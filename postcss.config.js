module.exports = {
  plugins: {
    'postcss-import': {},
    'autoprefixer': {
      overrideBrowserslist: [
        'last 2 versions',
        '> 1%',
        'not dead'
      ]
    }
  }
};
