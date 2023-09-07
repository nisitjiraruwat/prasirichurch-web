/* eslint-disable @typescript-eslint/no-var-requires */

const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{ts,tsx}',
    './layouts/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './plugins/**/*.{ts,tsx}',
    './nuxt.config.ts',
    './app.vue'
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          DEFAULT: colors.neutral[800]
        }
      },
      spacing: {
        ...[...Array(52)].reduce((spaces, _, index) => {
          const key = 4 + (index + 1) * 0.5
          const size = 0.25 * key
          return { ...spaces, [`${key}`]: `${size}rem` }
        }, {})
      },
      fontSize: {
        sm: ['14px', `${14 * 1.5}px`]
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      }
    }
  },
  plugins: []
}
