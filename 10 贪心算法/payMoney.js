function getPayCashCount(X) {
  let count = 0;
  // let X = 628;
  const RMB = [200, 100, 20, 10, 5, 1];
  const RMBLen = RMB.length;

  for(let i = 0; i < RMBLen; i++) {
    const current = RMB[i];
    const use = Math.floor(X / current);
    count += use;

    X = X - current * use;
  }

  return count;
}

console.log('getPayCashCount:', getPayCashCount(628));