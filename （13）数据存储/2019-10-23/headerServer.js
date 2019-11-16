const http = require('http');


http.createServer (function(req,res){
    // res.writeHead(200,{'Content-Type':'text/html'})
    //Content-Length 响应到客户端的数据的长度("Content-Length",Buffer.byteLength)
    res.setHeader("Content-Length",10);
    // res.setHeader('Content-Encoding',"gzip"); 服务端压缩方式设置 
    res.setHeader('Date',(new Date()).toLocaleString());
    //cookie是服务器向浏览器发送并保存在本地的一小块数据，若再次进行同样操作，就随命令携带再次传到浏览器上
    //保存在本地，不咋安全，放不重要数据，自定义设置，浏览器行为跟踪
    res.setHeader("Set-Cookie",'name=zhangsan');
    res.statusCode = 404;
    res.end('hello node');
}).listen(8081);
console.log('server is listening 8081')