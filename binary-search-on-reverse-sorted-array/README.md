# Binary Search on Reverse Sorted Array

Given an array `arr[]` sorted in **decreasing order**, and an integer `X`, the task is to check if `X` is present in the given array or not. If `X` is present in the array, print its **index** (**0-based indexing**). Otherwise, print `-1`.

## Examples
1. **Example 1:**
    - **Input:** 
        - arr[] = {5, 4, 3, 2, 1}
        - X = 4
    - **Output:** 1
    - **Explanation:** Element X (= 4) is present at index 1. Therefore, the required output is 1.

2. **Example 2:**
    - **Input:** 
        - arr[] = {10, 8, 2, -9}
        - X = 5
    - **Output:** -1
    - **Explanation:** Element X (= 5) is not present in the array. Therefore, the required output is -1. 

## Brute Force Approach
The simplest approach to solve the problem is to **traverse** the array and for each element, check if it is equal to `X` or **not**. If any element is found to satisfy that condition, print the **index** of that element. Otherwise print `-1`. 
- **Time Complexity: O(n)**
- **Space Complexity: O(1)**

## Optimal Approach
To solve the problem, the idea is to use **Binary Search**. Follow the steps below to solve the problem: 
1. Compare X with the middle element.
2. If X matches with the middle element (arr[mid]), return the index mid.
3. If X is found to be greater than the arr[mid], then X can only lie in the subarray [start, mid-1]. So search for X in the subarray {arr[start], .., arr[mid-1]} .
4. Otherwise, search in the subarray {arr[mid+1], …., arr[end]}

Below is the implementation of the above approach:
``` js
// Function to search if element X is present in reverse sorted array
function binarySearch(arr, N, X) {
    // Store the first index of the subarray in which X lies
    let start = 0

    // Store the last index of the subarray in which X lies
    let end = N

    while (start <= end) {
        // Store the middle index of the subarray
        let mid = Math.floor(start + (end - start) / 2)

        // Check if value at middle index of the subarray equal to X
        if (X == arr[mid]) return mid // Element is found

        // If X is smaller than the value at middle index of the subarray
        else if (X < arr[mid]) start = mid + 1 // Search in right half of subarray
        else end = mid - 1 // Search in left half of subarray
    }

    // If X not found
    return -1
}

const arr = [ 5, 4, 3, 2, 1 ]
const N = arr.length
const X = 5

console.log(binarySearch(arr, N, X))
```