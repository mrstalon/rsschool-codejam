module.exports = {
    "extends": "airbnb-base",
    "env": {
        "mocha": true,
    },
    "rules": {
        "no-use-before-define": ["error", { "functions": false }]
    },
};