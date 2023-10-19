function findPrimeNumbersInRange(start, end) {
    const primeNumbers = [];
  
    for (let number = start; number <= end; number++) {
      if (isPrime(number)) {
        primeNumbers.push(number);
      }
    }
  
    return primeNumbers;
  }
  
  function isPrime(num) {
    if (num <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  const startRange = 1;
  const endRange = 50;
  const primeNumbersInRange = findPrimeNumbersInRange(startRange, endRange);
  console.log(primeNumbersInRange); 
  