# Binary Search

Binary search is an efficient algorithm for finding an item in a sorted list by repeatedly dividing the search interval in half. 

## How Binary Search Works

1. **Initialize**: Start with two pointers:
    - `low` pointing to the first element.
    - `high` pointing to the last element of the list.

2. **Calculate Middle**: Find the middle element's index:
    ```python
    mid = low + (high - low) // 2
    ```

3. **Comparison**:
    - If the middle element is the target value, the search is complete.
    - If the target value is less than the middle element, narrow the search to the lower half:
        ```python
        high = mid - 1
        ```
    - If the target value is greater than the middle element, narrow the search to the upper half:
        ```python
        low = mid + 1
        ```

4. **Repeat**: Repeat steps 2 and 3 until the target value is found or `low` exceeds `high`.

5. **Termination**: If `low` exceeds `high`, the target is not in the list.

## Binary Search Algorithm in Python

Here is an implementation of binary search in Python:

```python
def binary_search(arr, target):
    low = 0
    high = len(arr) - 1

    while low <= high:
        mid = (low + high) // 2
        mid_val = arr[mid]

        if mid_val == target:
            return mid  # Target found at index mid
        elif mid_val < target:
            low = mid + 1  # Target is in the upper half
        else:
            high = mid - 1  # Target is in the lower half

    return -1  # Target is not in the list

# Example usage
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
target = 7
result = binary_search(arr, target)

if result != -1:
    print(f"Element found at index {result}")
else:
    print("Element not found in the array")
```

## Key Points
- **Efficiency:** Binary search has a time complexity of **O(logn)**, making it much more efficient than linear search **(O(n))** for large datasets.
- **Precondition:** The list must be sorted before performing a binary search.
- **Applications:** Binary search is used in various applications, including finding elements in databases, solving puzzles, and optimization problems.


## Example
Let's walk through an example with the sorted list `arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]` and `target = 7`:

1. Initialize low = 0 and high = 9.
2. Calculate mid = (0 + 9) // 2 = 4. arr[mid] = 5.
3. Since 7 > 5, set low = mid + 1 = 5.
4. Calculate mid = (5 + 9) // 2 = 7. arr[mid] = 8.
5. Since 7 < 8, set high = mid - 1 = 6.
6. Calculate mid = (5 + 6) // 2 = 5. arr[mid] = 6.
7. Since 7 > 6, set low = mid + 1 = 6.
8. Calculate mid = (6 + 6) // 2 = 6. arr[mid] = 7, which is the target.

The element 7 is found at index 6.


## Conclusion
**Binary search** is a powerful algorithm for searching in sorted lists due to its logarithmic time complexity. It is fundamental in computer science for efficient data retrieval and is widely used in various applications.
