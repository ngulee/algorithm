function BinarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  while(low <= high) {
    const middle = Math.floor((low + high) / 2);
    const current = arr[middle];

    if (current === target) {
      return middle;
    } else if (target < current) {
      high = middle - 1;
    } else {
      low = middle + 1;
    }
  }
}

const sourceArr = [1, 2, 3, 4, 5, 6, 7];

console.log(BinarySearch(sourceArr, 5));