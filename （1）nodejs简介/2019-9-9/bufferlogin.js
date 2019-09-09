var userName = process.argv[2];
var password = process.argv[3];

if (userName != undefined && password != undefined) {
    var loginStr = userName + ":" + password;
    var buf1 = Buffer.from(loginStr, "utf-8");
    var base64Str = buf1.toString("base64");
    console.log(base64Str)
} else {
    console.log("密码不能为空")
}