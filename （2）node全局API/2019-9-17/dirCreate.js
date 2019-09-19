const fs = require("fs");
const path=require("path");
fs.mkdirSync("hello");
//新建一个文件夹
var list=fs.readdirSync(__dirname);
console.log(list);
//删除一个文件夹
fs.rmdirSync(path.join(__dirname,"node"))