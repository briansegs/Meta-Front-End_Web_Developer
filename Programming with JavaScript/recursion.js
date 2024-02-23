var counter = 3;
function example () {
    console.log("line", counter);
    counter = counter - 1;
    if (counter === 0) {
        return
    }
    example();
}
example();