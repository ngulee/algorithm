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

console.log('SysConvert:', SysConvert(10, 2))