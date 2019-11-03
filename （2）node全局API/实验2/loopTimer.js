function loop() {
    console.log("i will loop forever!")
}

var timer = setInterval(loop , 500);

var timerId = setTimeout(function() {
    console.log("game over");
},5000);


timer.unref();