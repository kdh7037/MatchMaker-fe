// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.tsx',
    './src/pages/**/*.tsx',
  ],
  theme: {
    screens: {
      '2xs': '380px',
      'xs': '460px',
      ...defaultTheme.screens,
    },
    extend: {
      keyframes: {
        showToast: {
          from: {
            opacity: 0,
            transform: 'translateY(1rem)',
          },
          to: {
            opacity: 1,
            transform: 'translateY(0)',
          },
        }
      },
      animation: {
        showToast: 'showToast 0.25s cubic-bezier(.15,.78,.25,.98)',
      },
    },
  },
  plugins: [],
};
