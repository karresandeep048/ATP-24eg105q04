let marks2 = [90, 78, 65, 98];
let smallest = marks2[0];

for (let i = 1; i < marks2.length; i++) {
    if (marks2[i] < smallest) {
        smallest = marks2[i];
    }
}

console.log("Smallest element:", smallest);