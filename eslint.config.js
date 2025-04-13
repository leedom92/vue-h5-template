import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'

// 导入 ESLint 推荐配置
const compat = new FlatCompat({
  recommendedConfig: js.configs.recommended, // 关键：添加 recommendedConfig
  // 其他参数（如项目根目录）
  baseDirectory: import.meta.dirname, // import.meta.dirname is available after Node.js v20.11.0
})

const eslintConfig = [
  js.configs.recommended, // 直接使用推荐配置
  ...compat.extends('@leedomjs/eslint-config', '.eslintrc-auto-import.json'), // 兼容旧版 extends 语法
]

export default eslintConfig
