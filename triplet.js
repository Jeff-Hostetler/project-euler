function triplet(sum){
  var product = 0;
  for (c = 1; c < sum; c++){
    for(b = 1; b < sum; b++){
      for(a = 1; a < sum; a++){
        if ((a +  b + c == sum) && (Math.pow(a, 2) + Math.pow(b, 2) == Math.pow(c,2))){
          product = a*b*c
        }
      }
    }
  }
  return product;
}


console.log(triplet(1000));
