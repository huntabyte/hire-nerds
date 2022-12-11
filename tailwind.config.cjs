const plugin = require('tailwindcss/plugin')

const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		require('path').join(
			require.resolve('@skeletonlabs/skeleton'),
			'../**/*.{html,js,svelte,ts}',
		),
	],
	theme: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@skeletonlabs/skeleton/tailwind/theme.cjs'),
		plugin(({ addComponents }) => {
			try {
				addComponents(require('./components.cjs'))
			} catch {
				console.log('Failed to load styles')
			}
		}),
	],
}

module.exports = config
