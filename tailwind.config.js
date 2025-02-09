/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui', 'sans-serif'],
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        'primary-green': '#2EAE60',
        'primary-green-hover': '#259652',
        'primary-blue': '#2E86DE',
        'primary-blue-hover': '#2874C4',
        'primary-dark': '#1B2A3B',
        'primary-green-light': '#D4ECD9',
        'primary-blue-light': '#D4E5F7',
      },
    },
  },
  plugins: [],
}
