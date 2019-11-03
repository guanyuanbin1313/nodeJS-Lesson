const fs = require("fs");
const path = require("path");
if (process.argv[2] == 'list') {
    var list = []; //空数组
    var filePath = path.join(__dirname, "fileDir"); //文件夹
    var files = fs.readdirSync(filePath);
    for (var i = 0; i < files.length; i++) {
        var fileObj = {};
        var childPath = path.join(filePath, files[i]);
        var statObj = fs.statSync(childPath);
        fileObj.fileName = files[i]; //获取文件名
        fileObj.fileSize = statObj.size; //获取文件大小
        list.push(fileObj); //fileObj获取的数据传给list[]
    }
    console.log(list); //控制台输出文件名，文件大小
} else if (process.argv[2] == 'mkdir') {
    var name = process.argv[3];
    fs.mkdir(name, (err) => {
        if (err) {
            console.log("文件夹已存在");
            console.log("文件夹信息为",err);
        } else {
            console.log("文件夹创建完成");
        }
    });

} else {
    console.log("命令行参数错误");
}