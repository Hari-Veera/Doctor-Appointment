// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    colors: {
      primary: '#5f6FFF',        // Indigo-600
    },
    gridTemplateColumns:{
      'auto':'repeat(auto-fill, minmax(250pX, 1fr))'
    }
  },
},
  darkMode: 'class', // Enable dark mode support
  plugins: [],
}