
const array = [9, 8, 7, 6];

function bubbleSort(arr) {
  const len = [...arr].length;
  let i = len;
  while(i > 0) {
    for(let j = 0; j < i; j++) {
      const a = arr[j];
      const b = arr[j+1];
      if(b < a) {
        arr[j] = b;
        arr[j+1] = a;
      }
    }
    i--;
  }
  return arr;
}

function bubbleSort1(arr) {
  const len = [...arr].length;
  let count = 0;
  for(let i = len; i > 0; i--) {
    for(let j = 0; j < i; j++) {
      const x = arr[j];
      const y = arr[j+1];
      count++;
      if(y < x) {
        arr[j] = x;
        arr[j+1] = y;
      }
    }
  }
  console.log('count1:', count);
  return arr;
}
/**
 * 冒泡排序改进版
 * @param {*} arr 
 */
function bubbleSort2(arr) {
  const len = [...arr].length;
  let flag = 1;
  let count = 0;
  for (let i = len; i > 0 && flag === 1; i--) {
    for(let j = 0; j < i; j++) {
      flag = 0;
      count++;
      const x = arr[j];
      const y = arr[j+1];
      if(y < x) {
        arr[j] = x;
        arr[j+1] = y;
        flag = 1;
      }
    }
  }
  console.log('count2:', count);
  return arr;
}


function bubbleSort3(arr) {
  arr = [].concat(arr);
  var i = arr.length;
  var flag = 1;
  while(i > 0) {
    for (let j = 0; j < i && flag === 1; j++) {
      var a = arr[j];
      var b = arr[j+1];
      flag = 0;
      if(a > b) {
        arr[j] = b;
        arr[j+1] = a;
        flag = 1;
      }
    }
    i--;
  }
  return arr;
}

// console.log('bubbleSort:', bubbleSort(array));
// console.log('bubbleSort1:', bubbleSort1(array));
// console.log('bubbleSort2:', bubbleSort2(array));
console.log('bubbleSort3:', bubbleSort3(array));