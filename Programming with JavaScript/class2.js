// classes 2
class Train {
    constructor (color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
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
}

var train1 = new Train('red', false);

console.log(train1.color, train1.lightsOn)

train1.toggleLights();
train1.lightsStatus();
train1.getSelf();
train1.getPrototype();
