function searchElement(arr, key) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === key) {
            return i;
        }
    }
    return "not found";
}

console.log(searchElement([10, 20, 30, 40], 30)); 
console.log(searchElement([10, 20, 30, 40], 50)); 