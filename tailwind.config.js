/** @type {import('tailwindcss').Config} */
import colorPreset from '@leedomjs/tailwindcss-color-preset'

export default {
  presets: [
    colorPreset,
  ],
  content: ['./src/**/*.{vue,js}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
