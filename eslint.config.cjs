// eslint.config.cjs
const globals = require("globals");
const pluginJs = require("@eslint/js");
const tseslint = require("typescript-eslint");
const pluginVue = require("eslint-plugin-vue");

module.exports = [
  {
    files: ["**/*.{js,mjs,cjs,ts,vue}"],
    ignores: [
      "*.sh",
      "node_modules",
      "*.md",
      "*.woff",
      "*.ttf",
      ".vscode",
      ".idea",
      "dist",
      "/public",
      "/docs",
      ".husky",
      ".local",
      "/bin",
      "/src/mock/*",
      "stats.html"
    ]
  },
  {
    files: ["**/*.js"],
    languageOptions: { sourceType: "commonjs" }
  },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  { files: ["**/*.vue"], languageOptions: { parserOptions: { parser: tseslint.parser } } },
];
