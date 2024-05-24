module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
    overrides: [
      {
        env: {
          node: true,
        },
        files: [".eslintrc.{js,cjs}"],
        parserOptions: {
          sourceType: "script",
        },
      },
    ],
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: ["react"],
    rules: {
        // 사용안한 변수는 error가 아니고 warn (경고)를 띄우겠디.
        // off경고도 띄우지 않겠다.
        "no-unused-vars": "off",
        "react/prop-types": "off",
        "react/react-in-jsx-scope": "off",
        "no-undef": "off"
    },
  };