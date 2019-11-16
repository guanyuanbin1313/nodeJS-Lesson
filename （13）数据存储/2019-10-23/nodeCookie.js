const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');
const querystring = require('querystring');



 http.createServer(function(req,res){
    //true将字符串转化成对象
    var urlObj = url.parse(req.url,true);
    switch(urlObj.pathname){
        case'/':
            showLogin(res);
            // console.log(res);
        case '/login':
            //需要接收数据，所以请求对象和响应对象都应该传入
            loginIn(req,res);
            break;
        case'/home':
            showHome(req,res);
            break;

    }
    // var filepath = 
}).listen(8081);
console.log('server is listening 8081');


function showLogin(res){
    var filePath = path.join(__dirname,"login.html");
    var fileContent = fs.readFileSync(filePath);
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end(fileContent);
}


function loginIn(req,res){
    //post提交表单应该怎么接收数据，on
    var formData = "";
    req.on('data',function(chunk){
        formData += chunk;
    });
    req.on('end',function(){
        // console.log(formDate);
        var formObj = querystring.parse(formData);
        if(formObj.username=='zhangsan'&&formObj.password=='123'){
            // alert(1);不能用！！！
            res.setHeader('Set-Cookie','username=zhangsan');
            res.end('login Success');
        }else{
            res.end('login error');
        }
    });
 }
 function showHome(req,res){
     var cookie = req.headers['cookie'];
    if(cookie==undefined){
        showLogin(res);
    }else if(cookie.indexOf("username=")>=0){
        res.end('home page')
    }else{
        showLogin(res);
    }
}