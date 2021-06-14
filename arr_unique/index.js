
var arr = [1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, NaN, NaN, 'NaN', 0, 0, 'a', 'a', {a: 1}, {b: 1}];
function unique1(arr = []) {
  return arr.reduce((prev, cur) => prev.includes(cur) ? prev : [...prev, cur], []);
}

function unique2(arr = []) {
  const len = arr.length;
  const cacheMap = new Map();
  const result = [];
  for(let i = 0; i < len; i++) {
    const item = arr[i];
    if (!cacheMap.has(item)) {
      result.push(item);
      cacheMap.set(item, true)
    }
  }

  return result;
}

function unique3(arr) {
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index
  })
}

function unique4(arr) {
  var obj = {};
  return arr.filter(function (item) {
    console.log(typeof item + JSON.stringify(item))
    const strItem = JSON.stringify(item);
    const itemKey = typeof item + strItem;
    return obj.hasOwnProperty(itemKey) ? false : (obj[itemKey] = true)
  })
}
console.log('unique1:', unique1(arr))
console.log('unique2:', unique2(arr))
console.log('unique3:', unique3(arr))
console.log('unique4:', unique4(arr))