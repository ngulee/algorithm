Array.prototype.delete = function(targetIdx) {
  const len = this.length;
  if(targetIdx < 0 || targetIdx >= len) return false;

  const deleteElement = this[targetIdx];

  while(targetIdx < len) {
    this[targetIdx] = this[targetIdx+1];
    targetIdx++;
  }
  this.length = len - 1;

  return deleteElement;
}

Array.prototype.delete1 = function(targetIdx) {
  const len = this.length;
  if(targetIdx < 0 || targetIdx >= len) return false;

  const deleteElement = this[targetIdx];

  for(let i = targetIdx; i < len - 1; i++) {
    this[i] = this[i+1];
  }

  this.length = len - 1;

  return deleteElement;
}

const arr = [1,3, 5, 6, 7];
var a = arr.delete1(0);

console.log('arr:', a, arr);