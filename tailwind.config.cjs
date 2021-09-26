const config = {
	mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	theme: {
		extend: {
			colors: {
				primary: '#FF6363',
				secondary: {
					100: '#E2E2D5',
					200: '#888883'
				  }
			},
			fontFamily: {
				petit: ['Italianno'],
				carattere: ['Carattere'],
				osv: ['Oswald'],
				caramel: ['Caramel'],
				libre:['"Gemunu Libre"']
			}
		}
	},
	plugins: []
};

module.exports = config;
