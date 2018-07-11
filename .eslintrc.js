module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
		"es6": true,
		"jquery": true,
		"jasmine": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
	},
	"globals": {
        "allFeeds": false,
        "Handlebars": false,
		"google": false,
		"getJasmineRequireObj": true,
		"jasmineRequire": false,
		"loadFeed": false,
    },
    "rules": {
        "indent": [
            "error",
			"tab",
			{ "SwitchCase": 1 }
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "warn",
            "single"
        ],
        "semi": [
            "error",
            "always"
		],
		"no-unused-vars": [
			"warn",
			{ "vars": "all", "args": "after-used", "ignoreRestSiblings": false }
		],
		"no-console": [
			"off"
		]
    }
};