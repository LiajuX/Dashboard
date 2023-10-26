/** @type {import('tailwindcss').Config} */

export const content = [
  './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
]

export const theme = {
  extend: {
    gridTemplateColumns: {
      base: '2fr 6fr',
    },

    borderRadius: {
      'top-left': '100% 200% 0 0',
    },

    transformOrigin: {
      'center-top': 'center top',
    },

    colors: {
      brand: {
        blue: '#0C9CD1',
        aqua: '#0AD2AB',
        green: '#0BFD2B',
      },

      white: {
        'opacity-5': '#0E181D',
        'opacity-10': '#1A2429',
      },

      red: {
        'opacity-80': '#B23F40',
        900: '#702F33',
        500: '#DE4C4C',
        400: '#E36E6E',
        300: '#E9A0A0',
      },

      yellow: {
        'opacity-80': '#A1B440',
        500: '#CADE4C',
        400: '#D2E36E',
      },

      green: {
        'opacity-80': '#46B440',
        500: '#58DE4C',
        400: '#77E36E',
      },

      lightgreen: {
        400: '#A2BEA5',
        300: '#B0CFB4',
        200: '#BFE4C4',
        100: '#D8FFDD',
        50: '#F4FFF6',
      },

      petrol: {
        900: '#010C11',
        800: '#02131B',
        700: '#021F2A',
        600: '#142E39',
        500: '#1B3945',
        400: '#21404C',
        300: '#32505E',
        200: '#667F8A',
      },
    },

    dropShadow: {
      blue: '0px 4px 50px rgba(12, 156, 209, 0.25)',
      'green-lg': '0px 4px 50px #58DE4C',
      'red-lg': '0px 4px 50px #DE4C4C',
    },

    fontSize: {
      '3xl': '2rem',
    },
  },
}
export const plugins = []
