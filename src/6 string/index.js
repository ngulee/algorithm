
/**
 * 时间复杂度O((m/2)^(n/2))
 * @param {*} parentStr 
 * @param {*} childStr 
 */
function stringMatch(parentStr, childStr) {
  let i = 0;
  let j = 0;
  let pLen = parentStr.length;
  let cLen = childStr.length;
  let count = 0;

  while(i < pLen && j < cLen) {
    count++;
    if(parentStr[i] === childStr[j]) {
      i++;
      j++;
    } else {
      i =  i - j + 1;
      j = 0;
    }
  }

  console.log('j:', j, count)

  return j === cLen ? (i - j) : -1
}

function stringMatch1(parentStr, childStr) {
  const matchResult = parentStr.match(childStr);

  return matchResult ? matchResult.index : -1;
}

// BBC ABCDBA ABCDABCDABDE
function getNext(subStr) {
  const sLen = subStr.length;
  const next = [];
  next[0] = -1;
  let k = -1;
  let j = 0;

  while(j < sLen - 1) {
    // debugger
    if (k === -1 || subStr[k] === subStr[j]) {
      // debugger
      k++;
      j++;
      // debugger
      if(subStr[j] !== subStr[k]) {
        next[j] = k;
      } else {
        next[j] = next[k];
      }

    } else {
      k = next[k];
      // debugger
    }
  }

  return [...next];
}

function KpmSearch(parentStr, subStr) {
  let i = 0;
  let j = 0;

  const pLen = parentStr.length;
  const sLen = subStr.length;
  const next = getNext(subStr);

  while(i < pLen && j < sLen) {
    if (j === -1 || parentStr[i] === subStr[j]) {
      i++;
      j++;
    } else {
      j = next[j]
    }
  }

  return j === sLen ? (i - j) : -1
}


// console.log('stringMatch:', stringMatch('abcabcabcd', 'abcd'))
// console.log('stringMatch1:', stringMatch1('abcabcabcd', 'abcd'))
console.log('getNext(ABCDABCEFGHABC):', getNext('ABCDABCEFGHABC'))
console.log('KMP(ABCDABCEFGHABC, EFG):', KpmSearch('ABCDABCEFGHABC', 'EFG'))
