/**
 *
 * Author: chylvina@gmail.com
 * Since: 13-6-13 下午4:26
 * Description:
 */

var UglifyJS = require("uglify-js");

var minified = UglifyJS.minify([ "var a = '123';", "a.js"]);

console.log(minified.code);