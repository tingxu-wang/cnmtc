var path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // devServer: {
  //   port: 8081,
  //   proxy: {
  //     '/api*': {
  //       target: 'localhost:3000'
  //     }
  //   }
  // },
  // resolve: {
  //   extensions: ['.js', '.vue', '.json'],
  //   alias: {
  //     'service$': resolve('service')
  //   }
  // },
}
