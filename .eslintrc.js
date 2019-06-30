module.exports = {
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": { "legacyDecorators": true }
    },
    // "extends": "airbnb",
    "rules": {
        "class-methods-use-this": 0,
        'comma-dangle': ['error', 'only-multiline'],
        // "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        // "react/destructuring-assignment": [0, "never", { "ignoreClassFields": true }]
    },
    "env": {
        "browser": true
    }
}
