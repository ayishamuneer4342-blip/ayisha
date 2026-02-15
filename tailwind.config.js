/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          400: '#D4AF37',
          500: '#C5A028',
          600: '#A4841D', // Darker for text on white
          700: '#856404', // Even darker for better contrast
        },
        deepBlue: {
          800: '#1B263B',
          900: '#0D1B2A',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // We'll need to import Inter
      }
    },
  },
  plugins: [],
}
