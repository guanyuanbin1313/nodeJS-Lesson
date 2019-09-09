var i = 0;

process.stdin.on("data",function(data) {
    i++;
    if( i == 4) {
        process.exit();
    }
    else {
        console.log(data.toString());
    }

})
