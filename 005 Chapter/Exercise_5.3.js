function everyLoop(array, predicate) {
    for (let i of array) {
        if (!predicate(i)) {
            return false
        }
    }
    return true
}

function everySome(array, predicate) {
    return array.some(predicate) && !array.some((i) => !predicate(i))
}

// Testing
console.log(everyLoop([1, 2, 3], n => n > 0) === true);
console.log(everyLoop([1, 2, -3], n => n > 0) === false);

console.log(everySome([1, 2, 3], n => n > 0) === true);
console.log(everySome([1, 2, -3], n => n > 0) === false);