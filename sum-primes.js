function sumPrime(num){
  var sum = 0;
  for (i = 2; i <= num; i++){
    var prime = true;
    var sqrt = Math.sqrt(i);
    for (j = 2; j <= sqrt; j++){
      if (i % j == 0) {
        prime = false;
        break;
      }
    }
    if (prime == true){
      sum += i;
    }
  }

  return sum;
}

console.log(sumPrime(2000000));
