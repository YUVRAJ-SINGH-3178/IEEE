/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ieee: {
          deep: '#0A1F44',
          bright: '#0A66C2',
          cyan: '#00C2FF',
          light: '#FDFCF0', // Warm off-white/beige
          beige: '#F5F5DC'  // Standard beige
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
