function recursiveOddSumTo(number) {
    if (number <= 1) {
      return 1;
    }  
    if (number % 2 === 0) {
      return recursiveOddSumTo(number - 1);
    }
    return number + recursiveOddSumTo(number - 2);
    
  }
  function iterativeOddSumTo(number) {
    let sum = 0;
    for (let i = 1; i <= number; i += 2) {
      sum += i;
    }
    return sum;
  }
  console.log(recursiveOddSumTo(1));
  console.log(recursiveOddSumTo(10));
  
  console.log(iterativeOddSumTo(1));
  console.log(iterativeOddSumTo(10));