function reverseArray(array) {
    const result = []
    for (let i = array.length - 1; i >= 0; i--) {
        result.push(array[i])
    }

    return result
}

function reverseArrayInPlace(array) {
    const result = reverseArray(array)
    for (let i = 0; i < array.length; i++) {
        array[i] = result [i]
    }
    
}

console.log(reverseArray([1, 2, 3, 4]));
const arr = [1, 2, 3, 4];
reverseArrayInPlace(arr);
console.log(arr);
