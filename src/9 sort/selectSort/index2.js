let len;
const array = [3, 12, 7, 0, 2, 46, 15];
function heapSort(arr) {
  buildMaxHeap(arr);
  for(let i = arr.length - 1; i > 0; i--) {
    swap(arr, 0, i);
    len--;
    adjustHeadp(arr, 0);
  }
  return arr;
}

function buildMaxHeap(arr) {
  len = arr.length;

  for(let i = Math.floor(len / 2); i>= 0; i--) {
    adjustHeadp(arr, i);
  }
}

function swap(arr, a, b) {
  [arr[a], arr[b]] = [arr[b], arr[a]];
}

function adjustHeadp(arr, i) {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if(left < len && arr[left] > arr[largest]) {
    largest = left;
  }

  if(right < len && arr[right] > arr[largest]) {
    largest = right;
  }

  if(largest !== i) {
    swap(arr, i, largest);
    adjustHeadp(arr, largest);
  }
}

console.log('array:', heapSort(array))