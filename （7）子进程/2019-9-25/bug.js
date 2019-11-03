 //va a=1; //syntaxError  语法错误


 /** 
  * ReferenceError引用错误
  * 在某一个位置使用未定义的变量
  * **/
 //console.log(a)

const http=require("http")
 http.createServer(function(req,res){
    req.write("hello")
 }).listen(8081)