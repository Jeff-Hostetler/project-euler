function divisibleBy(start){
  var number = 0;
  dance:
  for(i = start; i < 1000000000; i++){
    var passes = true
    for(j = 2; j < 21; j++){
      if(i % j != 0) {
        passes =  false;
        break;
      }
    }
    if (passes == true){
      number = i;
      break dance;
    }
  }
  return number;
}

console.log(divisibleBy(2520*20));
