// Function: Search element in array
function searchElement(arr, key) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === key) {
            return i; // return index if found
        }
    }
    return "not found";  // if not found
}

console.log(searchElement([10, 20, 30, 40], 30)); 
console.log(searchElement([10, 20, 30, 40], 50)); 