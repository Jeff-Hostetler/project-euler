//print the sum of numbers divisible by 5 or 3 0<x<1000
function total(number) {
  sum = 0;
  for(i = 0 ; i < number; i++ ){
    if ((i % 3 == 0) || (i % 5 == 0)){
      sum += i
    }
  }
  console.log(sum);
}
total(1000);
