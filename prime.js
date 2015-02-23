number = 600851475143;
root = Math.sqrt(number);
result = 1;
for (i = 1; i < root; i ++){
  if ((number % i == 0) && (i % 2 != 0)) {
    variable_root = Math.sqrt(i);
    prime = true;
    for (j = 2; j < variable_root; j++){
      if (i % j == 0) {
        prime = false;
        break;
      }
    }
    if ((prime == true) && (i > result)){
      result = i;
    }
  }
}
console.log(result);
