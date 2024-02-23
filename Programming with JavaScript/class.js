// Classes
class Car {
    constructor(color, speed) {
        this.color = color;
        this.speed = speed;
        this.turbo = false;
    }
    turboOn() {
        this.turbo = true;
        console.log('turbo is on!')
    }
    turboOff() {
        this.turbo = false;
        console.log('turbo is off')
    }
}

car1  = new Car('red', '200mph')
console.log(`My new car's color and speed: ${car1.color}, ${car1.speed}`)
console.log('Time to hit the turbo!')
car1.turboOn()
console.log(`Is my turbo still on?: ${car1.turbo}`)