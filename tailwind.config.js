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
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      }
    }
  },
  plugins: []
}
