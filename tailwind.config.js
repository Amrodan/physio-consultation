const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: [ './src/**/*.{js,jsx,ts,tsx}' ],

	theme: {
		screens: {
			sm: { min: '640px', max: '767' },
			md: { min: '768', max: '1023' },
			lg: { min: '1024', max: '1280' },
			...defaultTheme.screens
		},
		extend: {
			backgroundColor: (theme) => ({
				cadetBlue: '#5f9ea0',
				darkseagreen: ' #8fbc8f',
				danger: '#e3342f',
				yellow_10: '#E9C46A'
			})
		},
		maxWidth: {
			'1/10': '96px'
		}
	},
	plugins: []
};
