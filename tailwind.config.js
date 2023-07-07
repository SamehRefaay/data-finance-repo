/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				transparent: 'transparent',
				black: '#000',
				white: '#fff',
				primary: '#000300',
				secondary: '#00df9a',
			},
		},
	},
	plugins: [],
};
