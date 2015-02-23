function reverse(s){
    return s.split("").reverse().join("");
}


function palindrome_number(){
  var number = 0;
  for(i = 100; i < 999; i++){
    for(j = 100; j < 999; j++){
      var productAsString = (i * j).toString();
      if ((productAsString == reverse(productAsString)) && (i * j > number)){
        number = i * j;
      }
    }
  }
  return number;
}

console.log(palindrome_number());
