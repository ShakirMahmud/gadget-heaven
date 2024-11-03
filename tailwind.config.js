/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'banner': '#9538E2',
      },
      boxShadow: {
        'custom-inset': 'inset 0px 4px 50px 0px rgba(11, 11, 11, 0.15)',
      },
    },
  },
  plugins: [require('daisyui'),],
}