import 'twin.macro'

module.exports = {
  content: [
    './public/*.{html,js}'],
  theme: {
    extend: { 
      backgroundImage:{
        "space1":"url('images/fondo1.jpg')",
        "space2":"url('images/fondo2.jpg')",
        "space3":"url('images/fondo3.jpg')",
        "space4":"url('images/fondo4.jpg')",
        "space5":"url('images/fondo5.jpg')",
        "space6":"url('images/img9.jpg')",
        "space7":"url('images/img10.jpg')", 
        "space8":"url('images/img11.jpg')",
        "astronauta":"url('images/astro_flot.svg')",
        

      },
      fontFamily:{
        "alkatra":['Alkatra', 'cursive'],
        "quantico":['Quantico', 'sans-serif'],

      },
      colors:{
        'cornflower-blue': {
          DEFAULT: '#6366F1',
          50: '#E1F0FC',
          100: '#D3E6FB',
          200: '#B7CFF9',
          300: '#9BB2F6',
          400: '#7F8FF4',
          500: '#6366F1',
          600: '#685AF0',
          700: '#7150EF',
          800: '#7C47EE',
          900: '#8A3EEE',
          950: '#9139ED'
        },
      }

  },
  plugins: [],
}
}

