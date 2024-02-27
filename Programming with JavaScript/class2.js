// classes 2
class Train {
    constructor (color, lightsOn, testing) {
        this.color = color;
        this.lightsOn = lightsOn;
        this.testing = testing;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this)
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto)
    }
    test() {
        console.log(`Testing status: ${this.testing}`)
    }

}

var train1 = new Train('red', false, false);

console.log(train1.color, train1.lightsOn)

train1.toggleLights();
train1.lightsStatus();
train1.getSelf();
train1.getPrototype();

class HighSpeedTrain extends Train {
    constructor (passengers, highSpeedOn, color, lightsOn) {
        super (color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }
    toggleLights() {
        super.toggleLights();
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }
}

var train2 = new Train('blue', false, true);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);

train2.toggleLights();
train2.lightsStatus();
train2.test();
console.log('-----------');

highSpeed1.toggleLights();
highSpeed1.lightsStatus();
highSpeed1.getSelf();
highSpeed1.getPrototype();
highSpeed1.test();
