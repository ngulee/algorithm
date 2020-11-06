function insert(arr = [], element, location) {
  const len = arr.length;
  let startIdx = len - 1;

  if(location < 0) {
    location = 0;
  };


  if(location >= len) {
    arr[len] = element;
  } else {
    while(startIdx >= location) {
      arr[startIdx + 1] = arr[startIdx];
      startIdx--;
    }
    arr[startIdx+1] = element;
  }

  return arr;
}

function insert(arr = [], element, location) {
  const len = arr.length;

  if(location < 0) {
    location = 0;
  };


  if(location >= len) {
    arr[len] = element;
  } else {
    let i = len - 1;

    for(; i >= location; i--) {
      arr[i + 1] = arr[i];
    }

    arr[i + 1] = element;

  }

  return arr;
}

var arr = [1,2,3,4,5,6];

console.log(insert(arr, 10, -1));