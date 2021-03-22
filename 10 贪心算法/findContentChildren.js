const g = [5, 10, 29, 5, 9];
const s = [6, 5, 20, , 10];

function findContentChild(G, S) {
  G.sort(compare);
  S.sort(compare);
  let child = 0;
  let cookies = 0;

  while (G[child] && S[cookies]) {
    if (G[child] <= S[cookies]) {
      child++;
    }
    cookies++;
  }

  return child;
}

function compare(a, b) {
  return a - b
}
console.log('findContentChild:', findContentChild(g, s))