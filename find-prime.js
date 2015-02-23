function findPower(x) {
  result = [];
  for(i = 2, n = 0; i < 10000000; i++){
    var passes = true;
    for(j = 2; j<= Math.sqrt(i); j++){
      if (i % j == 0){
        passes = false;
        break;
      }
    }
    if (passes == true){
      result[n] = i;
      n += 1
    }
  }
  return result[x - 1];
}


console.log(findPower(10001));
