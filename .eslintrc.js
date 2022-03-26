module.exports = {
    root: true,
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        "prettier",
        "javascriptreact",
        // prettier 관련 규칙 모음
    ],

    rules: {
        // 추가하고 싶은 rule을 더 추가해줍니다.
    },
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
    },
};
