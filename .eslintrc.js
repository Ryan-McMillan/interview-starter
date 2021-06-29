module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "plugins": [
        "svelte3"
    ],
    "overrides": [
        {
            "files": ["**/*.svelte"],
            "processor": "svelte3/svelte3"
        }
    ],
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
