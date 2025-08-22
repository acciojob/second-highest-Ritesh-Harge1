function secondHighest(arr) {
    // If array has less than 2 elements, return -Infinity
    if (!arr || arr.length < 2) return -Infinity;

    let first = -Infinity;   // Highest element
    let second = -Infinity;  // Second highest element

    for (let num of arr) {
        if (num > first) {
            // New highest found, update second
            second = first;
            first = num;
        } else if (num < first && num > second) {
            // Candidate for second highest
            second = num;
        }
    }

    return second;
}

// Example usage:

// Test 1
console.log(secondHighest([5, 1, 2, 3, 4])); // Output: 4

// Test 2
console.log(secondHighest([-1, -2, -3, -4, -5])); // Output: -2

// Test 3
console.log(secondHighest([])); // Output: -Infinity

// Test 4
console.log(secondHighest([1])); // Output: -Infinity

// Test 5
console.log(secondHighest([1, 1, 1, 1, 1])); // Output: -Infinity


