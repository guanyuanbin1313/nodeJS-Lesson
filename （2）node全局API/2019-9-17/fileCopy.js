//一个文件的内容写入另一文件
const fs = require("fs");
const path = require("path");
var filePath = path.join(__dirname, "/file.txt");
var filePath1 = path.join(__dirname, "/file1.txt");
var fileContent=fs.readFileSync(filePath);
var stat=fs.statSync(filePath);//文件夹信息
//写入文件内容
fs.writeFileSync(filePath1,fileContent.toString());
//写入文件权限
fs.chmodSync(filePath1,IstaaObj.mode);