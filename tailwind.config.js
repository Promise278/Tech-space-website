 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/img/blockfusemain-removebg-preview.png')",
      }
    },
  },
  plugins: [],
}