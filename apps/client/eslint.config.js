// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angularTemplateParser = require("@angular-eslint/template-parser");
const angularTemplatePlugin = require("@angular-eslint/eslint-plugin-template");

module.exports = tseslint.config(
  // ===== TypeScript =====
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
    ],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
    },
  },

  // ===== Angular HTML templates =====
  {
    files: ["**/*.html"],
    languageOptions: {
      parser: angularTemplateParser, // ✅ objet, pas string
    },
    plugins: {
      "@angular-eslint/template": angularTemplatePlugin, // ✅ objet, pas tableau
    },
    rules: {
      // règles explicites (pas de spread)
      "@angular-eslint/template/banana-in-box": "error",
      "@angular-eslint/template/eqeqeq": "error",
      "@angular-eslint/template/no-negated-async": "error",
    },
  },
);
