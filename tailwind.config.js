module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
       Dosis: ["Dosis", "sans-serif"],
       Londrina: ["Londrina Shadow","cursive"],
       Hand:["Just Another Hand", "cursive"],
       Lato:["Lato"],
       Poppins:["Poppins"],
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("daisyui"),
    require('@tailwindcss/forms'),
    require('tailwindcss-textshadow'),
    require('tailwindcss-writing-mode')({
      variants: ['responsive', 'hover']
  })
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],
  },
  
}