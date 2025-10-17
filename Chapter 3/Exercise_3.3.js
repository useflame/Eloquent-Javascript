function countChar(str, ch) {
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ch) count++
    }
    return count
}

function countBs(str) {
    return countChar(str, 'B')
}

console.log(countBs('BBC'))
console.log(countBs('abc'))
console.log(countBs('BBBBB'))
console.log(countChar('kakkerlak', 'k'))
console.log(countChar('Mississippi', 's'))