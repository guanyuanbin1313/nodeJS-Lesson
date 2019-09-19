//1.引入event模块
const events=require("events");
//2.实例化event对象
var eventEmitter=new events.EventEmitter();
//3.绑定事件，事件监听
eventEmitter.on("hello",function(){
    console.log("hello world");
    console.log(arg1,arg2)
})
//4.触发事件
eventEmitter.emit("hello","node","good");
