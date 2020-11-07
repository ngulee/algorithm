Array.prototype.delete = function(targetIdx) {
  const len = this.length;
  if(targetIdx < 0 || targetIdx >= len) return this;

  while(targetIdx < len) {
    this[targetIdx] = this[targetIdx+1];
    targetIdx++;
  }
  this.length = len - 1;

}
Array.prototype.delete1 = function(targetIdx) {
  const len = this.length;
  if(targetIdx < 0 || targetIdx >= len) return this;

  for(let i = targetIdx; i < len - 1; i++) {
    this[i] = this[i+1];
  }

  this.length = len - 1;

}

const arr = [1,3, 5, 6, 7];
arr.delete1(0);

console.log('arr:', arr);