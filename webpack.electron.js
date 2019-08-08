const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

/**
 * @type {import('webpack')}
 */
module.exports = {
  mode: process.env.NODE_ENV === 'development' ? 'development': 'production',
  target: 'electron-main',
  node: {
    __dirname: false
  },
  entry: './src/main/main.js',
  output: {
    path: path.resolve(__dirname, 'app'),
    filename: '[name].js',
    publicPath: '',
  },
  module: {
    rules: [{
      test: /\.(j|t)sx?$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/typescript'
          ]
        }
      }
    }]
  },
  resolve:{
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  plugins: [
    new CopyWebpackPlugin([
      {from: './src/main/package.json', to: 'package.json'}
    ])
  ]
}