var path = require('path')
var resolve = function (dir) {
  return path.join(__dirname, dir)
}

// /**源代码路径 */
var codeDir = resolve(`src`)
var outputDir = resolve('dist/')

console.log(' codeDir: ', codeDir)
// console.log('00000000000000')
