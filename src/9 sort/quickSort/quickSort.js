const array = [9, 8, 7, 6, 5, 4, 3, 2]

let count1 = 0;
let count2 = 0;
/**
 * 最大排序次数：2n - 1
 * @param {*} arr 
 */
function quickSort(arr) {
  arr = [...arr];
  const len = arr.length;
  count1++;
  if(len <= 1) return arr;
  const left = [];
  const right = [];
  const pivot = 0;
  const pivotValue = arr[pivot];

  for(let i = 1; i < len; i++) {
    const current = arr[i];
    if (current > pivotValue) {
      right.push(current)
    } else {
      left.push(current)
    }
  }

  return [...quickSort(left), pivotValue, ...quickSort(right)]

}
/**
 * 最多排序次数：n + 1
 * @param {*} arr 
 */
function quickSort1(arr) {
  arr = [...arr];

  count2++;
  const len = arr.length;
  if(len <= 1) return arr;
  const left = [];
  const right = [];
  const pivot = Math.floor(len / 2);
  const pivotValue = arr[pivot];

  // arr.splice(pivot, 1);

  // for (let i = 0; i < arr.length; i++) {
  //   const current = arr[i];
  //   if (current > pivotValue) {
  //     right.push(current)
  //   } else {
  //     left.push(current)
  //   }
  // }
  for (let i = 0; i < len; i++) {
    if(i === pivot) continue;

    const current = arr[i];
    if (current > pivotValue) {
      right.push(current)
    } else {
      left.push(current)
    }
  }

  return [...quickSort1(left), pivotValue, ...quickSort1(right)]

}

console.log('quickSort:', quickSort(array), count1);
console.log('array:', array);
console.log('quickSort1:', quickSort1(array), count2);
