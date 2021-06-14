
const sortArr = [49, 38, 65, 97, 23, 22, 76, 1, 5, 8, 2, 0, -1, 22];

function quickSortRecursion(arr, low, high) {
  if(low < high) {
    const index = getIndex(arr, low, high);
    quickSortRecursion(arr, low, index - 1);
    quickSortRecursion(arr, index + 1, high);
  }
}

function getIndex(arr, low, high) {
  const privot = arr[low];
  while(low < high) {
    while (low < high && arr[high] >= privot) {
      high--;
    }
    arr[low] = arr[high];

    while(low < high && arr[low] <= privot) {
      low++;
    }
    arr[high] = arr[low]
  }
  arr[low] = privot;
  return low;
}

function quickSort(arr) {
  quickSortRecursion(arr, 0, arr.length - 1);
  return arr;
}



console.log('quickSort:', quickSort(sortArr));