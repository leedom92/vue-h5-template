/** @type {import('tailwindcss').Config} */
import colorPreset from '@leedomjs/tailwindcss-color-preset'

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
     */
    colorPreset(),
  ],
  content: ['./src/**/*.{vue,js}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
