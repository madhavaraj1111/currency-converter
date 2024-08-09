/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'outerspace':'#394648',
      },
      fontFamily:{
        "poppins":'"Poppins", sans-serif',
      }
    },
  },
  plugins: [],
};
