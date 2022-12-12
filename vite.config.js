import { sveltekit } from '@sveltejs/kit/vite'
import Icons from 'unplugin-icons/vite'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		Icons({
			compiler: 'svelte',
		}),
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
	},
}

export default config
