const fs=require("fs");
const path=require("path");

var filePath = path.join(__dirname, "/file.txt");
var writePath = fs.createReadStream(filePath);
WriteStream.write("hello world");
WriteStream.end;