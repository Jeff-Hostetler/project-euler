
result = [1, 2];
evens = [2]
sum = 2;
for (i = 2, j = 1; i < 100; i++){
  result[i] = result[i-2] + result[i-1];
  if ((result[i] < 4000000) && (result[i] % 2 == 0)){
    sum += result[i]
    evens[j] = result[i];
    j += 1
  }
}
console.log(sum);
