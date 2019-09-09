const http = require("http");
const fs = require("fs");
const path = require("path");

/*
*1.将图片的二进制数据转化为base64字符串编码格式
*将base64 字符编码直接存到网页中，浏览器可以识别该
*编码的，将该编码转化为一个图片显示
2.适用于图片较小的情况，减少http请求数量，提高网页
*性能
*
*/
http.createServer(function (req, res) {
    var imgPath = path.join(__dirname, "kj.png");
    var imgBuffer = fs.readFileSync(imgPath);
    var base64Data = imgBuffer.toString("base64");
    console.log(base64Data);
    var imgSrc = "data:/png;base64," + base64Data;
    var htmlStr = "<!DOCTYPE html><head></head>" + "<body><img src='" + imgSrc + "'/></body>" + "</html>"
    res.writeHead(200, {
        "Content-Type": "text/html"
    });
    res.write(htmlStr);
    res.end();
}).listen(8081);

console.log("listen is listening 8081")