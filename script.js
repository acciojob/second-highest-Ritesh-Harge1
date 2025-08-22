function secondHighest(arr) {
    if (!arr || arr.length < 2) return -Infinity;

    let first = -Infinity;
    let second = -Infinity;

    for (let num of arr) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num < first && num > second) {
            second = num;
        }
    }

    return second === -Infinity ? -Infinity : second;
}

// Test cases
console.log(secondHighest([5, 1, 2, 3, 4])); // 4
console.log(secondHighest([-1, -2, -3, -4, -5])); // -2
console.log(secondHighest([])); // -Infinity
console.log(secondHighest([1])); // -Infinity
console.log(secondHighest([1, 1, 1, 1, 1])); // -Infinity

