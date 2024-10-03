// function that calculates velocity 

function calculateVelocity(initialVelocity, acceleration, time){
    return initialVelocity + acceleration * time
}
console.log(calculateVelocity(5, 2, 3));
console.log(calculateVelocity(0, 10, 5));
console.log(calculateVelocity(20, -3, 4));
console.log(calculateVelocity(15, 1, 10));
