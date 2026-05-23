/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          500: '#10b981', // Emerald 500
          600: '#059669', // Emerald 600
        }
      }
    },
  },
  plugins: [],
}
