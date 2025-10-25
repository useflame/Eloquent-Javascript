function flatten(arr) {
    return arr.reduce((a, b) => {
        a.push(...b)
        return a
    }, [])
}

// Testing
console.log(JSON.stringify(flatten([[1, 2], [3, 4]])) === JSON.stringify([1, 2, 3, 4]));
console.log(JSON.stringify(flatten([["a"], [1, 2], [true]])) === JSON.stringify(["a", 1, 2, true]));
console.log(JSON.stringify(flatten([[], [1], []])) === JSON.stringify([1]));

