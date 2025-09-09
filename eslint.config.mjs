import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    rules: {
      // Next.js specific rules - set as warnings
      "@next/next/no-css-tags": "warn",
      "@next/next/no-html-link-for-pages": "warn", 
      "@next/next/no-page-custom-font": "warn",
      "@next/next/no-img-element": "warn",
      
      // React rules - set as warnings
      "react/no-unescaped-entities": "warn",
      
      // Accessibility rules - set as warnings
      "jsx-a11y/alt-text": "warn",
    },
  },
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
];

export default eslintConfig;