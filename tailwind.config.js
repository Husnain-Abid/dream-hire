/** @type {import('tailwindcss').Config} */


module.exports = {
  darkMode: 'class', // Enables class-based dark mode

  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add all relevant file types
  ],
  theme: {

    extend: {


      colors: {
        customRed: "#E23744", // Add a custom name for your color
        customWhite: "#F4F4F2", // Add a custom name for your color
      },
      fontFamily: {
        'ppneuemontreal': ['PPNeueMontreal', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },

  },
  plugins: [],
};
