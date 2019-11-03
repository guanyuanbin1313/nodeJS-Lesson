const https = require("https");

/**
 * https是在http基础上进行了SSL加密 
 * 让数据不再明文传输
 */
http.get("https://localhost:8081", function (res) {
    var result = "";
    res.on("data", function (chunk) {
        result += chunk;
    })
    res.on("end", function () {
        console.log(result);
    })
})