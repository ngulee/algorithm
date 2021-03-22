const array = [9, 8, 7, 6]
const array1 = [,9, 8, 7, 6];
const array2 = [,9, 8, 7, 6];

/**
 * 普通版本
 * @param {*} arr 
 */
function insertSort(arr) {
  const len = arr.length;
  for(let i = 1; i < len; i++) {
    // 如果当前元素比已经排序的最后的一个元素大，则直接跳过
    if (arr[i] > arr[i - 1]) return;

    const current = arr[i];
    let j;
    for (j = i - 1; j >= 0 && current < arr[j]; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j+1] = current;
  }
  return arr;
}
/**
 * 加哨兵版本
 * @param {*} arr 
 */
function insertSort1(arr) {
  const len = arr.length;
  for(let i = 2; i < len; i++) {
    // 如果当前元素比已经排序的最后的一个元素大，则直接跳过
    if(arr[i] > arr[i-1]) return;

    const current = arr[i];
    arr[0] = current;
    let j;
    for (j = i - 1; current < arr[j]; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j+1] = current;
  }
  return arr;
}

function BInsertSort(source) {
  const arr = [...source];
  const len = arr.length;
  for(let i = 2; i < len; i++) {
    // 如果当前元素比已经排序的最后的一个元素大，则直接跳过
    if (arr[i] > arr[i - 1]) return;
    arr[0] = arr[i];
    let j;
    let low = 1;
    let high = i - 1;
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      const midValue = arr[mid];
      if(arr[0] < midValue) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    for (j = i -1; j >= high + 1 ; j--) {
      arr[j+1] = arr[j];
    }
    arr[high+1] = arr[0];
  }
  return arr;
}

console.log('insertSort:', insertSort(array))
console.log('insertSort:', insertSort1(array1))
console.log('insertSort:', BInsertSort(array2))