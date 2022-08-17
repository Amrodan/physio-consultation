module.exports = {
	content: [ './src/**/*.{js,jsx,ts,tsx}' ],
	important: true,
	theme: {
		extend: {
			backgroundColor: (theme) => ({
				cadetBlue: '#5f9ea0',
				darkseagreen: ' #8fbc8f',
				danger: '#e3342f'
			})
		},
		maxWidth: {
			'1/10': '96px'
		}
	},
	plugins: []
};
