function MaxSum(arr, num) {
  if (num > arr.length) {
    return null;
  }
 
  let maxSum = 0;
  let tempSum = 0;
 
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
 
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
 
  return maxSum;
}

module.exports = MaxSum;