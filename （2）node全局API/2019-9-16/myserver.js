/*
 *请求localhost：8081
 *响应列表
 *<ul>
 *   <li>
 *       <a href="/file?fileId=">文件名称</a>
 *   </li>
 *   <li>
 *      <a href="/file?fileId=">文件名称</a>
 *   </li> 
 *</ul>
 *
 */


const http = require("http");
const url = require("url");
const path = require("path");
const fs = require("fs");

http.createServer(httpManager).listen(8081);

function httpManager(req, res) {
    var reqObj = url.parse(req.url, true);
    var pathName = reqObj.pathname;
    switch (pathName) {
        case "/":
            showIndex(res);
            break;
        case "file":
            showFile(reqObj, res);
            break;
        default:
            res.end("gyb")
            break;
    }
    console.log(reqObj);
}

var fileList = ["t1.txt", "t2.txt"];

function showIndex(res) {
    var str = "<ul>";
    for (var i = 0; i < fileList.length; i++) {
        var liNode = "<li><a href='/file?fileId=" + i + "'>" + fileList + "</a></li>";
        str += liNode;
    }
    str = str + "</ul>";
    res.writeHead(200, {
        "Content-Type": "text/html"
    });
    res.write(str);
    res.end();
}


function showFile(reqObj, res) {
    var fileId = reqObj.query.fileId;
    var fileName = fileList[fileId];
    var filePath = path.join(_dirname, "/" + fileName);
    var fileContent = fs.readFileSync(filePath);
    res.end(fileContent);
}