var str = "asddfssssaasswef";

function getMaxCountCharset(str) {
  const obj = {};
  let maxChar = '';
  let maxCount = 0;

  for(let i = 0, len = str.length; i < len; i++) {
    const char = str[i];
    if(obj[char]) {
      obj[char] += 1;
    } else {
      obj[char] = 1;
    }
    const currCount = obj[char];
    if (currCount > maxCount) {
      maxChar = char;
      maxCount = currCount;
    }
  }

  return {
    char: maxChar,
    count: maxCount
  }
}

console.log('getMaxCountCharset:', getMaxCountCharset(str));