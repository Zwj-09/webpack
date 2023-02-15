module.exports = {
  // 插件
  plugins: [
    '@babel/plugin-transform-arrow-functions',
    '@babel/plugin-transform-block-scoping'
  ],
  // 预设
  presets: [
    [
      '@babel/preset-env',
      {
        // 指定 core-js 版本
        corejs: 3,
        /**
         * 设置以什么方式使用 polifill
         *  false
         *    不使用polifill 就可以不设置 corejs
         *  usage
         *    使用较多 babel 会自动引入需要填充的新特性
         *  entry
         *    根据入口来引入
         *    第三方库依赖 polifill 如果使用的是 usage 就会报错
         *    所以需要使用 entry
         *    需要在入口文件中引入 cores-js/stable、regenerate-runtime/runtime
         *    exclude:"node_modules"
         *      配置在webpack.config.js里面的 babel-loader处
         */
        useBuiltIns: 'usage'
      }
    ]
  ]
}
