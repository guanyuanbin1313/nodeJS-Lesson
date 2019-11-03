const http = require("http");
const url = require("url");
const fs = require("fs");

http.createServer(function (req, res) {
    var urlObj = url.parse(req.url);
    if (urlObj.pathname == "/") {
        var fileContent = fs.readFileSync("postfile.html");
        res.writeHead(200, {
            "Content-type": "text/html"
        });
        res.end(fileContent);
    } else if (urlObj.pathname == "/upload") {
        var strData = "";
        req.setEncoding("binary");
        req.on("data", function (chunk) {
            strData += chunk;
        })
        req.on("end", function () {
            var dataArr=strData.split("\r\n");
            console.log(dataArr);
            var fileData=dataArr.slice(4,dataArr.length-2);
            fileData=fileData.join("\r\n");
            console.log(fileData);
            var buf=Buffer.from(fileData,"binary");

            fs.writeFileSync("file.png",buf,{"encoding":"binary"})
            res.end("上传成功")
        })
    }
}).listen(8081);
console.log("server is listening 8081")