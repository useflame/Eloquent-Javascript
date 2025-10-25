function loop(value, test, update, body) {
    while(test(value)) {
        body(value)
        value = update(value)
    }
}

// Testing
let result1 = [];
loop(3, n => n > 0, n => n - 1, n => result1.push(n));
console.log(JSON.stringify(result1) === JSON.stringify([3, 2, 1]));

let result2 = [];
loop(0, n => n < 3, n => n + 1, n => result2.push(n));
console.log(JSON.stringify(result2) === JSON.stringify([0, 1, 2]));

let result3 = [];
loop(5, n => n > 0, n => n - 2, n => result3.push(n));
console.log(JSON.stringify(result3) === JSON.stringify([5, 3, 1]));
