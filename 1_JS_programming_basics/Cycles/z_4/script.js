function findLargestIncreasingSubsequence(arr) {
    let currentSubsequence = [arr[0]];
    let maxSubsequence = [arr[0]];    
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > arr[i - 1]) {
        currentSubsequence.push(arr[i]);
      } else {
        currentSubsequence = [arr[i]];
      }
  
      if (currentSubsequence.length > maxSubsequence.length) {
        maxSubsequence = currentSubsequence.slice();
      }
    }
  
    return maxSubsequence;
  }
  
 
  const numbers = prompt('введите числа');
  const largestIncreasingSubsequence = findLargestIncreasingSubsequence(numbers);
  console.log(largestIncreasingSubsequence);  
  