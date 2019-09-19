const event = require("events");
var EventEmitter = events.EventEmitter;

function Dog(name, energy) {
    EventEmitter.call(this);
    this.name = name;
    this.energy = energy;
}
Dog