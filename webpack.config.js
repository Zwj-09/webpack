let path = require('path')

// vue插件
let { VueLoaderPlugin } = require('vue-loader/dist/index')

let { CleanWebpackPlugin } = require('clean-webpack-plugin') // clean-webpack-plugin
let HtmlWebpackPlugin = require('html-webpack-plugin') // html-webpack-plugin
let { DefinePlugin } = require('webpack') // DefinePlugin

module.exports = {
  mode: 'development',
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
  resolve: {
    // 配置别名
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    /**
     * 扩展名
     * 会根据 extensions 中的配置顺序 按顺序解析
     */
    extensions: ['.js', '.json', '.vue', '.jsx', '.ts', '.tsx'],

    /**
     * 文件名
     */
    mainFiles: ['index']
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
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      // html 文件中的 title 名称
      title: 'Webpack 学习',

      /**
       * 配置生成的打包文件中的 index.html
       * 根据此处的index.html模板 生成打包之后的模板
       */
      template: './public/index.html'
    }),
    new DefinePlugin({
      /**
       * 全局变量 其他位置 可以直接使用
       * 此处的配置 会被当做JS代码执行
       *  类似与执行 eval('xxxx')
       * 所以此处要用字符串的话 需要 "'xxxx'"
       */
      BASE_URL: "'./'"
    })
  ]
}
