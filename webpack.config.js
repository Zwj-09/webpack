let path = require('path')

module.exports = {
  // 入口
  entry: './src/main.js',
  output: {
    // 出口文件名
    filename: 'bundle.js',

    // 出口文件 绝对路径
    path: path.resolve(__dirname, './bundle')

    // 配置资源模块名称(所有的)
    // assetModuleFilename: "test.png",
  },
  // 配置 loader 规则
  module: {
    rules: [
      {
        // 告诉webpack 需要匹配什么文件
        test: /\.css$/,
        // loader使用顺序 从下到上 从右到左 ( 从后往前使用的 )
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' }
        ]
      },
      {
        // 告诉webpack 需要匹配什么文件
        test: /\.less$/,
        // loader使用顺序 从下到上 从右到左 ( 从后往前使用的 )
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'less-loader' },
          { loader: 'postcss-loader' }
        ]
      },
      {
        test: /\.(png|jpe?g|svg|gif)/,
        type: 'asset', // 资源类型 ( asset module type )

        /**
         * 资源图片重命名
         *  占位符
         *    [name] 指向原来的名称
         *    [ext] 扩展名
         *    [hash:<截取几位哈希值>] 哈希值
         */
        generator: {
          filename: 'imges/[name]_[hash][ext]'
        },
        parser: {
          dataUrlCondition: {
            maxSize: 100 * 1024 // 4kb
          }
        }
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  }
}
