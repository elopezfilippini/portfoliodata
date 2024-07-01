/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom': 'rgb(2, 183, 175)', // Corchete de cierre agregado después de la definición del color
      } // Corchete de cierre agregado después de la extensión de colores
    } // Corchete de cierre agregado después de la extensión del tema
}, // Coma eliminada
  plugins: [
    require('tailwindcss-animated')
  ],
}