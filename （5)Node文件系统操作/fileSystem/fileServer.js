/** 
 *1.debugger设置断点
 *2.node inspect(debug) 文件名
 *3.c继续执行s o
 *4.watch('变量名')
 *5.
 **/

const http = require("http");
const fs = require("fs");
const url = require("url");
const path = require("path");

http.createServer(function (req, res) {
    var urlObj = url.parse(req.url, true);
    var pathName = urlObj.pathname;
    switch (pathName) {
      //http://localhost:8081
      case "/":
        showIndex(res);
        break;
        /*

          */
      case "/1.png":
        showImg(res);
        break;
      case "/getfilelist":
        showList(res);
        break;
      case "/delfile":
        delFile(urlObj, res);
        break;
      case "/getfile":
        getFile(urlObj, res);
        break;
      case "/getchildfile":
        getChildFile(urlObj, res);
        break;
    }
  })
  .listen(8081);
console.log("server is listening 8081");

function showIndex(res) {
  var indexPath = path.join(__dirname, "index.html");
  var fileContent = fs.readFileSync(indexPath);
  res.writeHead(200, {
    "Content-type": "text/html"
  });
  res.write(fileContent);
  res.end();
}

function showImg(res) {
  var imgPath = path.join(__dirname, "1.png");
  var imgContent = fs.readFileSync(imgPath);
  res.writeHead(200, {
    "Content-type": "image/png"
  });
  res.write(imgContent);
  res.end();
}

var list = [];

function showList(res) {
  list = [];
  var filePath = path.join(__dirname, "fileDir");
  var files = fs.readdirSync(filePath);

  for (var i = 0; i < files.length; i++) {
    var fileObj = {};
    var childPath = path.join(filePath, files[i]);
    var statObj = fs.statSync(childPath);
    if (statObj.isFile()) {
      fileObj.fileType = "file";
    } else if (statObj.isDirectory()) {
      fileObj.fileType = "folder";
    }
    fileObj.fileName = files[i];
    fileObj.fileSize = statObj.size;
    var brithTimer = new Date(statObj.birthtime);
    fileObj.createTime =
      brithTimer.getFullYear() +
      "-" +
      (brithTimer.getMonth() + 1) +
      "-" +
      brithTimer.getDate() +
      "-" +
      brithTimer.getHours() +
      ":" +
      brithTimer.getMinutes() +
      ":" +
      brithTimer.getSeconds();
    list.push(fileObj);
  }
  var listStr = JSON.stringify(list);
  res.writeHead(200, {
    "Content-type": "text/plain"
  });
  res.write(listStr);
  res.end();
}

function delFile(urlObj, res) {
  var timer = urlObj.query.createtime;
  for (var i = 0; i < list.length; i++) {
    if (list[i].createTime == timer) {
      deleteRealFile(list[i].fileName);
    }
  }
  res.end("success");
}

function deleteRealFile(fileName) {
  var filePath = path.join(__dirname, "fileDir", fileName);
  var statObj = fs.statSync(filePath);
  if (statObj.isFile()) {
    fs.unlinkSync(filePath);
  } else if (statObj.isDirectory()) {
    delDir(filePath);
  }
  console.log(fileName);
}

function delDir(filePath) {
  var files = fs.readdirSync(filePath);
  for (var i = 0; i < files.length; i++) {
    var childPath = path.join(filePath, files[1]);
    var childStatObj = fs.statSync(childPath);
    if (childStatObj.isFile()) {
      fs.unlinkSync(childPath);
    } else if (childStatObj.isDirectory()) {
      delDir(childPath);
    }
    fs.rmdirSync(filePath);
  }
}

function getFile(urlObj, res) {
  var createTime = urlObj.query.createtime;
  for (var i = 0; i < list.length; i++) {
    if (list[i].createTime == createTime) {
      showContent(list[i].fileName, res);
    }
  }
}

function showContent(fileName, res) {
  var filePath = path.join(__dirname, "fileDir", fileName);
  fs.readFile(filePath, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      res.end(data);
    }
  });
}

function getChildFile(urlObj, res) {

  var createTime = urlObj.query.createtime;
  for (var i = 0; i < list.length; i++) {
    if (list[i].createTime == createTime) {
      console.log("hello");
      getChildList(list[i].fileName, res);
    }
  }
}

function getChildList(fileName, res) {
  var filePath = path.join(__dirname, "fileDir", fileName);
  var files = fs.readdirSync(filePath);
  var childList = [];
  for (var i = 0; i < files.length; i++) {
    var fileObj = {};
    var statObj = fs.statSync(path.join(filePath, files[i]));
    if (statObj.isFile()) {
      fileObj.fileType = "file";
    } else if (statObj.isDirectory()) {
      fileObj.fileType = "folder";
    }
    fileObj.fileName = files[i];
    fileObj.fileSize = statObj.size;
    var brithTimer = new Date(statObj.birthtime);
    fileObj.createTime =
      brithTimer.getFullYear() +
      "-" +
      (brithTimer.getMonth() + 1) +
      "-" +
      brithTimer.getDate() +
      "-" +
      brithTimer.getHours() +
      ":" +
      brithTimer.getMinutes() +
      ":" +
      brithTimer.getSeconds();
    childList.push(fileObj);
  }
  var childStr = JSON.stringify(childList);
  res.end(childStr);
}