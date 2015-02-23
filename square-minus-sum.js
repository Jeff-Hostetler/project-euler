function squareMinusSum(start, finish) {
  var sum = 0;
  var big = 0;
  var little = 0;
  for(i = start; i <= finish; i++){
    little += Math.pow(i, 2);
    sum += i;
  }
  big = Math.pow(sum, 2)
  return (big - little)
}

console.log(squareMinusSum(1, 100));
