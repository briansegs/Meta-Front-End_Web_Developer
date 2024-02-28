// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
function logDairy() {
    for (obj of dairy) {
        console.log(obj)
    }
}
logDairy()

// Task 2
const animal = {canJump: true};
const bird = Object.create(animal);

bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
    for (const entrie of Object.entries(bird)) {
        console.log(`${entrie[0]}: ${entrie[1]}`)
    }
}
birdCan()

// Task 3
function animalCan() {
    for (prop in bird) {
        console.log(`${prop}: ${bird[prop]}`)
    }
}
animalCan()