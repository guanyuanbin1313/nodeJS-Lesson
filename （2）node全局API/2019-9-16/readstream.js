

const http=require("http");
const fs=require("fs");
const path=require("path");

http.createServer(function(){
    var filePath=path.join(__dirname,"/stream.txt");
    //streamReader是一个可读流对象source
    var streamReader=fs.createReadStream(filePath);
    //pipe()管道
    //res是http的响应对象，res是一个可写流对象
    //destination（数据目标）
    streamReader.pipe(res);
}).listen(8081);

console.log("server is listening 8081");