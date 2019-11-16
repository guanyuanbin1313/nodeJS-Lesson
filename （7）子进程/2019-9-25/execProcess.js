const cp = require("child_process");

/** 
 * err启动子进程过程异常得到的错误对象
 * stdout子进程的输出
 * stderr子进程执行过程的错误对象
 */
cp.exec("node childProcess.js", function (err, stdout, stderr) {
    if (err) {
        console.log(err)
    } else {
        console.log(stdout);
        console.log(stderr);
    }
})


