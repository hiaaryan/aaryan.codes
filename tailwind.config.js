/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    cursor: {
      'default': 'url(pointer.cur), default',
      'pointer': 'url(link.cur), pointer',
    },
    extend: {
      fontFamily: {
        'mono': ['Space Grotesk', ...defaultTheme.fontFamily.mono],
			},
    },
  },
  plugins: [],
}
