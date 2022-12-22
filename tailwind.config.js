/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function({ addComponents, theme }) {
			addComponents({
				'.placeholder-content': {
					overflow: 'hidden',
					background: theme('colors.white'),
					position: 'relative',
					animationDuration: '1s',
					animationFillMode: 'forwards',
					animationIterationCount: 'infinite',
					animationTimingFunction: 'linear',
					animationName: 'placeholderAnimate',
					background: `linear-gradient(to right, ${theme('colors.slate.50')} 2%, ${theme('colors.slate.200')} 18%, ${theme('colors.slate.50')} 33%)`,
					backgroundSize: '1300px'
				},
				'@keyframes placeholderAnimate': {
					'0%': { backgroundPosition: '-650px 0' },
					'100%': { backgroundPosition: '650px 0' }
				}
			})
		}
  ]
}
