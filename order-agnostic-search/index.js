// An iterative binary search function.
function binarySearch(arr, start, end, x) {
	// Checking the sorted order of the given array
	const isAsc = arr[start] < arr[end]

	while (start <= end) {
		let middle = start + Math.floor((end - start) / 2)

		// Check if x is present at mid
		if (arr[middle] == x) return middle

		// Ascending order
		if (isAsc == true) {
			// If x greater, ignore left half
			if (arr[middle] < x) start = middle + 1
			// If x smaller, ignore right half
			else end = middle - 1
		}

		// Descending order
		else {
			// If x smaller, ignore left half
			if (arr[middle] > x) start = middle + 1
			// If x greater, ignore right half
			else end = middle - 1
		}
	}

	// Element is not present
	return -1
}

// Driver Code
const arr = [40, 10, 5, 2, 1]
const x = 10
const n = arr.length

console.log(binarySearch(arr, 0, n - 1, x))
