// webpack v4
// https://github.com/webpack-contrib/mini-css-extract-plugin
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const isProduction = process.env.NODE_ENV === 'production';
const AntdScssThemePlugin = require('antd-scss-theme-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  //devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }, { loader: 'eslint-loader' }]
      },
      {
        test: /\.css$/,
        use: [
          !isProduction ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              include: path.resolve(__dirname, 'src'),
              sourceMap: !isProduction
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: !isProduction,
              include: path.resolve(__dirname, 'src'),
              plugins() {
                return [autoprefixer('last 2 versions', 'ie 10')];
              }
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          !isProduction ? 'style-loader' : MiniCssExtractPlugin.loader,
          //'style-loader',
          //MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: !isProduction,
              include: path.resolve(__dirname, 'src')
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: !isProduction,
              include: path.resolve(__dirname, 'src'),
              plugins() {
                return [autoprefixer('last 2 versions', 'ie 10')];
              }
            }
          },
          AntdScssThemePlugin.themify({
            loader: 'sass-loader',
            options: {
              processCssUrls: false,
              sourceMap: !isProduction,
              include: path.resolve(__dirname, 'src'),
              data: '@import "theme.scss";'
            }
          })
        ]
      },
      {
        test: /\.less$/,
        use: [
          !isProduction ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: !isProduction,
              include: path.resolve(__dirname, 'src')
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: !isProduction,
              include: path.resolve(__dirname, 'src'),
              plugins() {
                return [autoprefixer('last 2 versions', 'ie 10')];
              }
            }
          },
          AntdScssThemePlugin.themify({
            loader: 'less-loader',
            options: {
              include: path.resolve(__dirname, 'src'),
              sourceMap: !isProduction,
              javascriptEnabled: true
            }
          })
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin('dist', {}),
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css',
      //filename: 'css/[name].css',
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/index.html',
      filename: 'index.html'
    }),
    new AntdScssThemePlugin(path.join(__dirname, 'src', 'theme.scss')),
    //new AntdScssThemePlugin('./src/theme1.scss'),
    new WebpackMd5Hash()
  ]
};
