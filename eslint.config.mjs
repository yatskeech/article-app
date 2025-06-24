import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintImportPlugin from 'eslint-plugin-import';
import i18nextPlugin from 'eslint-plugin-i18next';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { ignores: ['node_modules', 'dist'] },
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.jest, ...globals.node },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ...pluginReact.configs.flat.recommended,
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  eslintPluginPrettierRecommended,
  eslintPluginReactHooks.configs['recommended-latest'],
  eslintImportPlugin.flatConfigs.recommended,
  eslintImportPlugin.flatConfigs.typescript,
  i18nextPlugin.configs['flat/recommended'],
  {
    rules: {
      'import/no-unresolved': 'off',
      'react/no-deprecated': 'warn',
      'react/react-in-jsx-scope': 'off',
    },
  },
];
