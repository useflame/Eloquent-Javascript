function range(start, end, step = 1) {
    if (step <= 0 && end > start) {
        return NaN
    }
    
    const result = []
    if (start > end && step < 0) {
        for (let i = start; i >= end; i+=step)  {
            result.push(i)
        }

        return result
    }

    for (let i = start; i <= end; i += step) {
        result.push(i)
    }

    return result
}

function sum(numbers) {
    return numbers.reduce((a, b) => {return a + b})
}

console.log(sum(range(1, 10)));
console.log(range(1, 10, 2));
console.log(range(5, 2, -1));
