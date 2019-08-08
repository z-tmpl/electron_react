const path = require('path')

/**
 * @type {import("@evolify/react-scripts")}
 */
module.exports = {
  outputDir: path.resolve(__dirname, 'app'),
  typescript: true,
  webpack: {
    target: 'electron-renderer',
    devServer: {
      open: false
    }
  },
  babel: {
    plugins: [
      'react-directive'
    ]
  }
}