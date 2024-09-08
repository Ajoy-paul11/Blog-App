/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        navitem: '#00FFF5',
        footeritem: '#00ADB5'
      }
    },
  },
  plugins: [],
}

