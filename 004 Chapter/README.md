# Chapter 4

### The sum of a range
Write `range(start, end, step?)` that returns an array from start to end inclusive. Add optional `step` (default 1); support negative steps. Write `sum(array)` that sums numbers. Example: `console.log(sum(range(1, 10))) // 55`, `range(1, 10, 2) // [1,3,5,7,9]`, `range(5, 2, -1) // [5,4,3,2]`.

### Reversing an array
Write `reverseArray(array)` that returns a new reversed array and `reverseArrayInPlace(array)` that reverses the given array without using `Array.prototype.reverse`.

### A list
Implement a list data structure using nested objects `{ value, rest }`.
- `arrayToList(array)` → list
- `listToArray(list)` → array
- `prepend(element, list)` → new list with element at front
- `nth(list, n)` → element at position n or `undefined` (also write a recursive version)

### Deep comparison
Write `deepEqual(a, b)` that returns `true` only if values are the same or are objects with the same properties whose values are deeply equal. Remember `typeof null === "object"` and use `Object.keys` for property enumeration.
