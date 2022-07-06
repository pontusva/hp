/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"vomblue": "#05386b",
				"vom": "#5cdb95",
				"scarlet-red": "#A10000",
				"cream": "#edf5e1",
			},
			fontFamily: {
				"montserrat": ['Montserrat', 'sans-serif'],
			}
		},
	},
	plugins: [],
};
