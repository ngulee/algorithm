function SysConvert(decimalism, cardinal = 10) {
  let result = '';

  while(decimalism) {

    let quotient = Math.floor(decimalism / cardinal);
    let remainder = decimalism % cardinal;

    result = remainder + `${result}`;

    decimalism = quotient;
  }

  return Number(result);
}

// console.log('SysConvert:', SysConvert(10, 2))

function bracketsMatch(brackets) {
  console.time('bracketsMatch')
  let isMatch = true;
  const bracketsReg = /[^\{\}\[\]\(\)]/g;
  if (!brackets || bracketsReg.test(brackets)) return !isMatch;

  let index = 0;
  const cacheStack = [];
  const len = brackets.length;
  const bracktesConfig = {
    ')': '(',
    ']': '[',
    '}': '{',
  }

  const leftBracketsReg = /[\{\[\(]/;
  const rightBracketsReg = /[\)\]\}]/;

  while (index < len && isMatch) {
    let bracket = brackets[index];
    if (leftBracketsReg.test(bracket)) {
      cacheStack.push(bracket)
    } else {
      if (rightBracketsReg.test(bracket)) {
        const topStack = cacheStack.pop();
        
        isMatch = topStack === bracktesConfig[bracket];

        console.log(isMatch, bracktesConfig[bracket], bracket)
      }
    }

    index++;
  }
  console.timeEnd('bracketsMatch')
  return isMatch;
}

function validBraces(braces) {
  console.time('validBraces')
  const bracketsReg = /\(\)|\[\]|\{\}/g;
  while (bracketsReg.test(braces)) {
    braces = braces.replace(bracketsReg, "")
  }
  console.timeEnd('validBraces')
  return !braces.length;
}

console.log('bracketsMatch:', bracketsMatch('(){[]}'))

console.log('validBraces:', validBraces('([])'))