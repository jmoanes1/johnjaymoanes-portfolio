import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';

export default [
  {
    ignores: ['dist/**', 'node_modules/**'],
  },
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: { ...globals.browser, ...globals.es2021 },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: { react },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'no-unused-vars': 'warn',
      'react/prop-types': 'off',
      'react/jsx-uses-vars': 'error',
      'react/jsx-uses-react': 'error',
    },
  },
];
