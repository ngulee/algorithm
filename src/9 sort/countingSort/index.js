const array = [9,9, 8,8, 7, 1, 2, 4, 7, 1, 7, 7, 2, 6, 2, 7];

function countingSort(arr, maxValue) {
  const bucket = new Array(maxValue + 1);
  let sortIndex = 0;
  const arrLen = arr.length;
  const bucketLen = bucket.length;

  for (let i = 0; i < arrLen; i++) {
    if (!bucket[arr[i]]) {
      bucket[arr[i]] = 0;
    }
    bucket[arr[i]]++;
  }

  console.log('bucket:', bucket)

  for(let j = 0; j < bucketLen; j++) {
    while(bucket[j] > 0) {
      arr[sortIndex++] = j;
      bucket[j]--;
    }
  }

  return arr;
}

console.log('countingSort:', countingSort(array, 9));
