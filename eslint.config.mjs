import js from "@eslint/js";
import next from "@next/eslint-plugin-next";
import tseslint from "typescript-eslint";
import boundaries from "eslint-plugin-boundaries";
import prettier from "eslint-config-prettier";
import globals from "globals";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  /* ===== GLOBAL IGNORES ===== */
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "dist/**",
      "build/**",
      "eslint.config.mjs",
    ],
  },

  /* ===== BASE JS ===== */
  js.configs.recommended,

  /* ===== TYPESCRIPT (TYPE-CHECKED) ===== */
  {
    files: ["**/*.{ts,tsx}"],

    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.eslint.json",
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },

    plugins: {
      "@typescript-eslint": tseslint.plugin,
      "@next/next": next,
      boundaries,
    },

    rules: {
      /* Next.js */
      ...next.configs["core-web-vitals"].rules,

      /* TypeScript */
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/consistent-type-imports": "warn",
      "@typescript-eslint/no-misused-promises": "error",

      /* FSD boundaries */
      "boundaries/element-types": [
        "error",
        {
          default: "disallow",
          rules: [
            { from: "shared", allow: ["shared"] },
            { from: "entities", allow: ["shared", "entities"] },
            {
              from: "features",
              allow: ["shared", "entities", "features"],
            },
            {
              from: "widgets",
              allow: ["shared", "entities", "features", "widgets"],
            },
            {
              from: "pages",
              allow: ["shared", "entities", "features", "widgets", "pages"],
            },
            {
              from: "app",
              allow: [
                "shared",
                "entities",
                "features",
                "widgets",
                "pages",
                "app",
              ],
            },
          ],
        },
      ],
    },

    settings: {
      "boundaries/elements": [
        { type: "shared", pattern: "shared/**" },
        { type: "entities", pattern: "entities/**" },
        { type: "features", pattern: "features/**" },
        { type: "widgets", pattern: "widgets/**" },
        { type: "pages", pattern: "pages/**" },
        { type: "app", pattern: "app/**" },
      ],
    },
  },

  /* ===== app/ = orchestration layer ===== */
  {
    files: ["app/**"],
    rules: {
      "boundaries/element-types": "off",
    },
  },

  /* ===== PRETTIER ===== */
  prettier,
];
