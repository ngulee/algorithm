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


function polynomialPlus(polynomial1, polynomial2){
  const result = [];

  while(polynomial1.length > 0 && polynomial2.length > 0) {
    const first1 = polynomial1[0][1];
    const first2 = polynomial2[0][1];
    if(first1 < first2) {
      result.push(polynomial1.shift())
    } else if(first1 === first2) {
      result.push([
        polynomial1[0][0] + polynomial2[0][0],
        polynomial1[0][1] + polynomial2[0][1],
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


console.log(polynomialPlus(polynomial1, polynomial2))