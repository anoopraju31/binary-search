const binarySearch = (arr, target) => {
	let start = 0
	let end = arr.length

	while (start <= end) {
		let mid = start + Math.floor((end - start) / 2) // mid = Math.floor((start + end) / 2)

		if (arr[mid] === target) return mid
		else if (arr[mid] > target) end = mid - 1
		else start = mid + 1
	}

	return -1
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const target = 2

console.log(binarySearch(arr, target))
