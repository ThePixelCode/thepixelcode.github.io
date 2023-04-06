/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      "height":{
        "half-screen": "50vh"
      },
      "gridTemplateRows":{
        "auto-1fr-auto": "auto 1fr auto"
      }
    },
  },
  plugins: [],
}
