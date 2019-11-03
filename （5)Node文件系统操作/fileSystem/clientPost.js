const http = require("http");
const querystring = require("querystring");

var options = {
    host: "localhost",
    port: 8081,
    method: "post"
};
var userName = process.argv[2];
var pwd = process.argv[3];
var postData = {
    userName: userName,
    pwd: pwd
};
postData = querystring.stringify(postData);

var req = http.request(options, function (res) {

});
res.write(postData);
res.end();