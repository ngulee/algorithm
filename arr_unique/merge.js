function mergeSortedArr(arr1, arr2) {
  const result = [];
  let m = 0;
  let n = 0;

  while (m < arr1.length && n < arr2.length) {
    if (arr1[m] < arr2[n]) {
      result.push(arr1[m])
      m++;
    } else {
      result.push(arr2[n])
      n++;
    }
  }
  while (m < arr1.length) {
    result.push(arr1[m]);
    m++;
  }
  while (n < arr2.length) {
    result.push(arr2[n]);
    n++;
  }

  return result;
}

const arr1 = [1, 3, 5, 7, 9, 10];
const arr2 = [1, 2, 4, 6, 8, 10];

console.log('mergeSortedArr:', mergeSortedArr(arr1, arr2))