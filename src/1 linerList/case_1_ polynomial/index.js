var polynomial1 = [
  [2, 1],
  [5, 3],
  [-7, 4],
  [6, 17],
];

var polynomial2 = [
  [3, 0],
  [4, 3],
  [2, 5],
  [3, 7],
  [23, 12]
];

function polynomialPlus(polynomial1, polynomial2) {
  const result = [];

  const len1 = polynomial1.length;
  const len2 = polynomial2.length;

  const minPolynomial = len1 < len2 ? polynomial1 : polynomial2;
  const maxPolynomial = len1 < len2 ? polynomial2 : polynomial1;

  const minLen = minPolynomial.length;
  const maxLen = maxPolynomial.length;

  let minIdx = 0;
  let maxIdx = 0;

  while(minIdx < minLen) {
    
    if(minIdx <= maxIdx) {
      console.log('maxIdx:', minIdx, maxIdx)
      const [minConstTerm, minOrderTerm] = minPolynomial[minIdx];
      
      const [maxConstTerm, maxOrderTerm] = maxPolynomial[maxIdx];

      if(minOrderTerm < maxOrderTerm) {
        result.push([
          minConstTerm,
          minOrderTerm,
        ])
        minIdx++;
      } else if(minOrderTerm === maxOrderTerm) {
        result.push([
          minConstTerm + maxConstTerm,
          minOrderTerm,
        ])
        minIdx++;
        maxIdx++;
      } else {
        result.push([
          maxConstTerm,
          maxOrderTerm,
        ])
        maxIdx++;
      }
    } else {
      result.push(maxPolynomial[maxIdx])
      maxIdx++;
    }
  }

  while(maxIdx < maxLen) {
    result.push(maxPolynomial[maxIdx])
    maxIdx++;
  }

  return result;
}

console.log(polynomialPlus(polynomial1, polynomial2))