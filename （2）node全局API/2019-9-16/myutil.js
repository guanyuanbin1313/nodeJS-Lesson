const util=require("util")

function Parent(name){
    this.name=name
}
parent.prototype.show=function(){
    console.log(this.name);
}

function child(){

}

util.inherits(child,Parent);

/*
*1.Parent.call(this)
*child.prototype._proto_=parent.prototype
*2.child extend Parent{}
*3.util.inherits(child,parent)
*/