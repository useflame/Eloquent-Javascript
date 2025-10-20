function deepEqual(a, b) {
    if (a === b) return true
    
    if (a == null || b == null) return false
    
    if (typeof a !== "object" || typeof b !== "object") return false
    
    const keysA = Object.keys(a)
    const keysB = Object.keys(b)
    
    if (keysA.length !== keysB.length) return false
    
    for (let key of keysA) {
        if (!keysB.includes(key)) return false
        if (!deepEqual(a[key], b[key])) return false
    }
    
    return true
}

console.log(deepEqual(1, 1));
console.log(deepEqual(1, 2));
console.log(deepEqual({a: 1, b: 2}, {a: 1, b: 2}));
console.log(deepEqual({a: 1, b: 2}, {a: 1, b: 3}));
console.log(deepEqual({a: 1, b: {c: 3}}, {a: 1, b: {c: 3}}));
console.log(deepEqual(null, null));
console.log(deepEqual(null, {}));
