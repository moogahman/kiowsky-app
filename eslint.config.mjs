import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
    { files: ['**/*.{s,,tsx}'] },
    { ignores: ['dist'] },
    { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
    { languageOptions: { globals: globals.browser } },
    { plugins: { 'react-hooks': reactHooks, 'react-refresh': reactRefresh } },
    { settings: { react: { version: 'detect' } } },
    js.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReactConfig,
    eslintConfigPrettier,
    {
        rules: {
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],
            // Disable this rule because we are using the new JSX transform that was added to React 17
            'react/react-in-jsx-scope': 'off',
            'react/jsx-uses-react': 'off',
        },
    },
];
