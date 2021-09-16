 const path = require('path')

 const HTMLWebpackPlugin = require('html-webpack-plugin')
 const {
     CleanWebpackPlugin
 } = require('clean-webpack-plugin')

 module.exports = {
     entry: "./src/index.ts",
     output: {
         path: path.resolve(__dirname, 'dist'),
         filename: "index.js",
         clean: true, //取代CleanWebpackPlugin
         //告诉webpack不使用箭头函数
         environment: {
             arrowFunction: false
         }
     },
     module: {
         rules: [{
                 test: /\.ts$/,
                 use: [{
                         loader: 'babel-loader',
                         //设置babel
                         options: {
                             //设置预定义环境
                             presets: [
                                 [
                                     //指定环境插件
                                     "@babel/preset-env",
                                     //配置信息
                                     {
                                         //要兼容的目标浏览器
                                         targets: {
                                             'chrome': '58',
                                             'ie': '11'
                                         },
                                         //指定corejs版本
                                         'corejs': '3',
                                         //使用corejs的方式，‘usage’按需加载
                                         'useBuiltIns': 'usage'
                                     }
                                 ]
                             ]
                         }
                     },
                     'ts-loader'
                 ],
                 exclude: /node_modules/
             },
             {
                 test: /\.less$/,
                 use: [
                     "style-loader",
                     "css-loader",
                     //postcss 相当于babel 处理css的兼容
                     {
                         loader: "postcss-loader",
                         options: {
                             postcssOptions: {
                                 plugins: [
                                     [
                                         "postcss-preset-env",
                                         {
                                             browsers: "last 2 versions"
                                         }
                                     ]
                                 ]
                             }
                         }
                     },
                     "less-loader"
                 ]
             }
         ]
     },
     plugins: [
         //    new CleanWebpackPlugin(),
         new HTMLWebpackPlugin({
             template: './src/index.html'
         })
     ],
     //设置引用模块
     resolve: {
         extensions: ['.ts', '.js'], //以ts和js结尾的文件都可以作为模块引用
     },
     mode: "development",
     devServer: {
        //  static: {
        //      directory: path.join(__dirname, 'public'),
        //  },
        //  compress: true,
         port: 9000,
     },

 }