/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
const breakpoints = Object.assign({}, defaultTheme.screens, { '2xl': '1440px' })
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './assets/**/*.svg',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        red: {
          60: '#FF4343',
          ...defaultTheme.colors.red,
        },
        primary: {
          50: '#eeeeff',
          100: '#e1e1fe',
          200: '#c8c8fd',
          300: '#aaa7fa',
          400: '#9184f5',
          500: '#8067ed',
          600: '#734ae1',
          700: '#633cc6',
          800: '#5133a0',
          900: '#2a1e4f',
        },
      },
      zIndex: {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
      },
    },
    screens: breakpoints,
    container(theme) {
      return {
        center: true,
        padding: theme('spacing.4'),
      }
    },
  },
  plugins: [],
}
