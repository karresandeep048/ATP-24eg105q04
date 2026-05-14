 // Find biggest among 3 numbers
let x = 10;
let y = 25;
let z = 15;

let big = x; // assume x is biggest initially
// compare y with current biggest
if (y > big) {
    big = y;
}
// compare z with current biggest
if (z > big) {
    big = z;
}

console.log("Big number is:", big);