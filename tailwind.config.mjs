/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			"color-main": "#2A2A48",
			"color-main-dark": "#1E1E1E",
			"color-main-light": "#E5E5E5",
			"color-main-yellow": "#FFD705",
			"color-main-blue": "#17C3FA",
			"color-main-pink": "#FA1DFF"
		},
		extend: {},

	},
	plugins: [],
}
