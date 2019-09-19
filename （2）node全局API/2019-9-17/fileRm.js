const fs = require("fs");
const path = require("path");
var filePath = path.join(__dirname, "/file.txt");
/*
    删除unliinSync(文件路径)
*/
fs.unlinSync(filePath);