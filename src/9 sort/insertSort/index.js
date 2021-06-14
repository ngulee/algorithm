const array = [1, 2, 3, 9, 8, 7, 6];

function insertSort(arr) {
  arr = [].concat(arr);
  var len = arr.length;
  for(let i = 1; i < len; i++) {
    if(arr[i] > arr[i-1]) continue;

    var j;
    var current = arr[i];

    for(j = i - 1; j  >= 0 && current < arr[j]; j--) {
      arr[j+1] = arr[j];
    }
    arr[j+1] = current;
  }

  return arr;
}

console.log('insertSort:', insertSort(array));