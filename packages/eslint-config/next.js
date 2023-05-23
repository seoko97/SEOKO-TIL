module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import"],
  extends: ["next", "turbo", "prettier", "plugin:prettier/recommended"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "parent"],
        pathGroups: [
          {
            pattern: "{react,react/*}",
            group: "builtin",
            position: "before",
          },
          {
            pattern: "{next,next/*}",
            group: "builtin",
          },
        ],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        "newlines-between": "always-and-inside-groups",
      },
    ],
    "import/default": "off",
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
  },
};
