function findBig(a, b, c) {
    let big = a;

    if (b > big) {
        big = b;
    }

    if (c > big) {
        big = c;
    }

    return big;
}

console.log("Big number is:", findBig(10, 50, 30));