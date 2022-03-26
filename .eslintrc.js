module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true,
        es6: true,
    },
    extends: ["prettier"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
    },
    rules: {},
};
