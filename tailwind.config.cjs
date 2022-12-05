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

	plugins: [require('@skeletonlabs/skeleton/tailwind/theme.cjs')],
};

module.exports = config;
