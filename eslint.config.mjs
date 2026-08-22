import js from "@eslint/js";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import importPlugin from "eslint-plugin-import";

const config = [
  {
    ignores: [
      ".next/**",
      "out/**",
      "coverage/**",
      "playwright-report/**",
      "test-results/**",
    ],
  },
  js.configs.recommended,
  ...nextCoreWebVitals,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    settings: {
      ...importPlugin.flatConfigs.typescript.settings,
      "import/resolver": {
        typescript: true,
        node: true,
      },
    },
    rules: {
      ...importPlugin.flatConfigs.recommended.rules,
      ...importPlugin.flatConfigs.typescript.rules,
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            ["sibling", "parent"],
            "index",
            "object",
            "type",
          ],
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
    },
  },
];

export default config;
