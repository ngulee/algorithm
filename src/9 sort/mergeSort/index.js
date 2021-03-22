function mergeSort(arr) {
  const len = arr.length;
  if(len < 2) return arr;

  const middleIndex = Math.floor(len / 2);
  const left = arr.slice(0, middleIndex);
  const right = arr.slice(middleIndex);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  const minLen = Math.min(left.length, right.length);
  let m = 0;
  let n = 0;
  while(m < minLen && n < minLen) {
    if(left[m] <= right[n]) {
      result.push(left[m]);
      ++m;
    } else {
      result.push(right[n]);
      ++n;
    }
  }

  for(let i = m; i < left.length; i++) {
    result.push(left[i]);
  }
  for(let j = n; j < left.length; j++) {
    result.push(right[j]);
  }

  return result;
}

console.log('merge:', merge([1, 4], [2, 5]));
console.log('mergeSort:', mergeSort([28, 13, 19, 21, 50]));