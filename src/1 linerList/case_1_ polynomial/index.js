var polynomial1 = [
  [2, 1],
  [5, 3],
  [-7, 4],
  [6, 17],
];

var polynomial2 = [
  [3, 0],
  [5, 3],
  [2, 5],
  [3, 7],
  [23, 12]
];
var polynomial3 = [
  [3, 2],
  [5, 4],
  [2, 5],
  [3, 8],
  [23, 10]
];


function polynomialPlusByShift(polynomial1 = [], polynomial2 = []){
  const result = [];

  while(polynomial1.length > 0 && polynomial2.length > 0) {
    const first1 = polynomial1[0][1];
    const first2 = polynomial2[0][1];
    if(first1 < first2) {
      result.push(polynomial1.shift())
    } else if(first1 === first2) {
      const constantTerm = polynomial1[0][0] + polynomial2[0][0];

      constantTerm !== 0 && result.push([
        constantTerm,
        polynomial1[0][1],
      ])

      polynomial1.shift();
      polynomial2.shift();
    } else {
      result.push(polynomial2.shift())
    }
  }

  while(polynomial1.length > 0) {
    result.push(polynomial1.shift())
  }
  while(polynomial2.length > 0) {
    result.push(polynomial2.shift())
  }

  return result;
}

function polynomialPlusByIdx(polynomial1 = [], polynomial2 = []) {
  const result = [];
  let idx1 = 0;
  let idx2 = 0;
  let len1 = polynomial1.length;
  let len2 = polynomial2.length;

  while(idx1 < len1 && idx2 < len2) {
    const orderTerm1 = polynomial1[idx1][1];
    const orderTerm2 = polynomial2[idx2][1];

    if(orderTerm1 < orderTerm2) {

      result.push(polynomial1[idx1]);
      idx1++;

    } else if(orderTerm1 === orderTerm2) {

      const constTerm = polynomial1[idx1][0] + polynomial2[idx2][0];
      constTerm !== 0 && result.push([
        constTerm,
        orderTerm2
      ])
      idx1++;
      idx2++;

    } else {

      result.push(polynomial2[idx2]);
      idx2++;
    }
  }

  if(idx1 < len1) {
    result.push(polynomial1[idx1]);
    idx1++;
  }

  if(idx2 < len2) {
    result.push(polynomial2[idx2]);
    idx2++;
  }

  return result;
}

var polynomialPlus = function fn(result = [], ...polynomials) {
  result = result.length === 0 ? polynomials.shift() : result;

  result = polynomialPlusByIdx(result, polynomials.shift());

  if(polynomials.length > 0) {
    return fn(result, ...polynomials);
  }

  return result;
}
var polynomialPlusV1 = function fn (result = [], startIdx = 0, ...polynomials) {
  if(result.length === 0) {
    result = polynomials[startIdx];
    startIdx++;
  }

  result = polynomialPlusByIdx(result, polynomials[startIdx++])

  if(startIdx < polynomials.length) {
    return fn(result, startIdx, ...polynomials);
  }

  return result;
}


// console.log(polynomialPlusByIdx(polynomial1, polynomial2))
console.log(polynomialPlus([],  polynomial1, polynomial2, polynomial3));
console.log(polynomialPlusV1([], 0,  polynomial1, polynomial2, polynomial3));

