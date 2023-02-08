module.exports = {
  root: true,
  env: {
    es6: true, // 启用 ES6 语法支持以及新的 ES6 全局变量或类型
    node: true, // Node.js 全局变量和 Node.js 作用域
    browser: true // 浏览器全局变量
  },
  extends: [
    // 其他配置
    'plugin:prettier/recommended' // 解决ESLint 和 Prettier 冲突
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  // 设置一些其他的规则
  rules: {}
}
