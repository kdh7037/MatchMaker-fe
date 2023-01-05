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
    extend: {},
  },
  plugins: [],
};
