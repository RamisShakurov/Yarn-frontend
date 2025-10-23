import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import eslintConfigPrettier from 'eslint-config-prettier/flat'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import { defineConfig } from 'eslint/config'
import reactHooks from 'eslint-plugin-react-hooks'
import storybook from 'eslint-plugin-storybook'
import reactRefresh from 'eslint-plugin-react-refresh'

export default defineConfig([
	{
		settings: {
			react: {
				version: 'detect',
			},
		},
	},
	tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
	eslintConfigPrettier,
	eslintPluginPrettierRecommended,
	reactHooks.configs['recommended-latest'],
	...storybook.configs['flat/recommended'],
	reactRefresh.configs.recommended,
	{
		ignores: [
			'**/node_modules/**',
			'**/dist/**',
			'**/build/**',
			'**/.vite/**',
			'**/.storybook/**',
			'**/storybook-static/**',
			'**/sb-manager/**',
			'**/*.d.ts',
			'**/stories/**',
		],
	},
	{
		files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
		plugins: {
			js,
		},
		rules: {
			'react/react-in-jsx-scope': 'off',
		},

		extends: ['js/recommended'],
		languageOptions: { globals: globals.browser },
	},
])
