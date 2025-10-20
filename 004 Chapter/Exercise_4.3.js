function arrayToList(array) {
    let list = null
    for (let i = array.length - 1; i >= 0; i--) {
        list = { value: array[i], rest: list }
    }
    return list
}

function listToArray(list) {
    let link = list
    const array = []
    while(link) {
        array.push(link.value)
        link = link.rest
    }

    return array
}
function prepend(element, list) {
    list.rest = {value: element, rest: null}
    return list
}
function nth(list, n) {
    let current = list
    for (let i = 0; i < n; i++) {
        if (!current) return undefined
        current = current.rest
    }
    return current ? current.value : undefined
}

function nthRecursive(list, n) {
    if (!list) return undefined
    if (n === 0) return list.value
    return nthRecursive(list.rest, n - 1)
}

console.log(arrayToList([1, 2, 3]));
console.log(listToArray({ value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }));
console.log(prepend(0, { value: 1, rest: null }));
console.log(nth({ value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }, 1));
