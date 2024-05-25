function binarySearch(arr, N, X) {
	let start = 0

	let end = N

	while (start <= end) {
		let mid = Math.floor(start + (end - start) / 2)

		if (X == arr[mid]) return mid
		else if (X < arr[mid]) start = mid + 1
		else end = mid - 1
	}

	return -1
}

const arr = [5, 4, 3, 2, 1]
const N = arr.length
const X = 5

console.log(binarySearch(arr, N, X))
