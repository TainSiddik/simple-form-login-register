/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'costume-image': "url('./image/bg.webp')"
      }
    },
  },
  plugins: [],
}