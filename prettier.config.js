/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config & import('prettier-plugin-tailwindcss').PluginOptions}
 */
const config = {
	semi: false,
	trailingComma: 'es5',
	singleQuote: true,
	jsxSingleQuote: true,
	printWidth: 80,
	useTabs: true,
	tabWidth: 2,
	endOfLine: 'lf',
	plugins: ['prettier-plugin-tailwindcss'],
}

export default config
