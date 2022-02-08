module.exports = {
	mode: "jit",
	content: [
		"./pages/**/*.{js,ts,tsx}",
		"./components/**/*.{js,ts,tsx}",
		"./views/**/*.{js, ts, tsx}",
		"./styles/**/*.{css, scss}",
	],
	theme: {
		extend: {
			colors: {
				rojo: {
					100: "#ffaca9",
					200: "#ff7e79",
					300: "#ff716c",
					400: "#ff4d41",
				},
				"rojo-oscuro": {
					100: "#903030",
					200: "#6f1f1f",
					300: "#5a1b17",
					400: "#3f1f1e",
				},
				leche: "#fdfff8",
				"leche-oscura": "#2f2f2e",
				texto: {
					100: "#797979",
					200: "#424242",
				},
				detalle: "#f2f2f2",
			},
		},
	},
	plugins: [],
	darkMode: "class",
};
