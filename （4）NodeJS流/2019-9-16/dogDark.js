var Dog = require("./Dog.js");
var dog1 = new Dog("teddy", 5);

function barkFun() {
    console.log(this.name + "barked!!!");
    console.log(this.energy);
}
dog1.on("bark", barkFun);
var intervalId = setInterval(function () {
    if (dog1.energy >= 0) {
        dog1.emit("bark");
    }
    else{
        clearInterval(intervalId);
    }
}, 1000);