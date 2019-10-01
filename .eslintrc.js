var path = require('path');

module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: { legacyDecorators: true }
  },
  extends: "airbnb",
  rules: {
    "class-methods-use-this": 0,
    "comma-dangle": ["error", "only-multiline"],
    "import/no-unresolved": ['error', { commonjs: true, caseSensitive: true }],
  },
  overrides: [
    {
      "files": ["*.js"],
      "rules": {
        // 'react': 'off'
        'react/jsx-filename-extension': 'off',
        'react/no-array-index-key': 'off',
        'react/prop-types': 'off',
        'import/no-extraneous-dependencies': 'off',
        'react/button-has-type': 'off',
        'react/destructuring-assignment': 'off',
        'react/jsx-one-expression-per-line': 'off'
      }
    }
  ],
  env: {
    browser: true
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['_src', path.resolve(__dirname, './src')],
          ['_common', path.resolve(__dirname, './src/common')],
        ],
        extensions: ['.js', '.less', '.jsx']
      }
    }
  }
};
