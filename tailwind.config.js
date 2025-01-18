import colorPreset from '@leedomjs/tailwindcss-color-preset'

const { addDynamicIconSelectors } = require('@iconify/tailwind')

/** @type {import('tailwindcss').Config} */
export default {
  presets: [
    /**
     * 因为该模版用的是vant-ui，所以预设会默认启用vant
     *
     * 下面配置可简写为：
     * colorPreset()
     *
     * 若不想启用则设置为false：
     * colorPreset({ vant: false })
     *
     * 如果你喜欢 element-ui 或者 naive-ui 的主题色，
     * 你也可以启用它们：
     * colorPreset({
     *   element: true,
     *   naive: true
     * })
     *
     * 不使用该预设可以直接注释，或者传false
     * colorPreset(false)
     *
     * 启用所有主题色
     * colorPreset(true)
     */
    colorPreset(),
  ],
  content: ['./src/**/*.{vue,js}'],
  theme: {
    extend: {},
  },
  plugins: [
    addDynamicIconSelectors(['logos']),
  ],
}
