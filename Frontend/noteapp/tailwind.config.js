/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      //colors used in the project
      colors:{
        primary: '#7321a6FF', 
        secondary: '#1D3557FF', 
      },
    },
  },
  plugins: [],
};

