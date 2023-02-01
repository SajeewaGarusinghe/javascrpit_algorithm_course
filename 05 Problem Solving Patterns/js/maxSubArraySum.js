ab = [1, 2, 3, 2, 8, 1, 5, 3, 3, 5];

function maxSubarryaSum(arr, n) {
  let max = 0;
  if (arr.length < n) {
    return undefined;
  }
  for (let i = 0; i < arr.length - n + 1; i++) {
    let sum = 0;
    for (let j = i; j < i + n; j++) {
      sum += arr[j];
      console.log(`i=${i} , j=${j} , sum=${sum} , max=${max}`);
    }
    console.log(sum);
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}

//best solution is as follow.this is called sliding window pattern
function maxSubarraySum2(arr, n) {
  let maxSum = 0;
  let sum = 0;
  if (arr.length < n) {
    return undefined;
  }
  for (i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  sum = maxSum;
  for (j = n; j < arr.length; j++) {
    console.log(` j=${j} , sum=${sum} , max=${maxSum}`);
    sum = sum - arr[j - n] + arr[j];
    if (sum > maxSum) {
      maxSum = sum;
    }
  }
  return maxSum;
}
