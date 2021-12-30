// 配置tailwindcss.config.js
module.exports = {
  // 去除项目中没有用到的tailwindcss的css样式
  purge: [
    /* vue项目 */
    './dist/index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // 扩展自定义配置，不会覆盖tailwindcss原有样式
    extend: {
      flex: {
        '2': '2 2 0%',
        '3': '3 3 0%',
        '4': '4 4 0%',
        '5': '5 5 0%',
        '8': '8 8 0%'
      },
      fontSize: {
        'fs12': '12px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}