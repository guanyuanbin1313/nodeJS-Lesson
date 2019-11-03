/**
 * fork
 * 
 */

const cp = require("child_process");
var fork1=cp.fork("childProcess1.js",["javasrcipt"]);
fork1.on("close",function(chunk){
    console.log(chunk.toString)
})

fork1.send("parent");

fork1.on("message",function(msg){
    console.log(msg);
})