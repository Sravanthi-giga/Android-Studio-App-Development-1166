/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brown': {
          500: '#8B4513',
        }
      },
      fontFamily: {
        'android': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}