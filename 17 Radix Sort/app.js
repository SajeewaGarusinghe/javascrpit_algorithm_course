function getDigit(num, i) {
  return Math.floor((Math.abs(num) / Math.pow(10, i)) % 10);
}

// function digitCount(number) {
//   let count = 0;
//   if (number === 0) return 1;
//   number = Math.abs(number);
//   while (number > 0) {
//     number = Math.floor(number / 10);
//     console.log(number);
//     count++;
//   }
//   return count;
// }

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
  let maxDigit = 0;
  for (let i = 0; i < arr.length; i++) {
    maxDigit = Math.max(digitCount(arr[i]), maxDigit);
  }
  return maxDigit;
}

function radixSort(arr) {
  let maxDigits = mostDigits(arr);
  for (let k = 0; k < maxDigits; k++) {
    let bucket = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < arr.length; i++) {
      let kthDigit = getDigit(arr[i], k);
      bucket[kthDigit].push(arr[i]);
    }
    arr = [].concat(...bucket);
    // console.log(arr);
  }
  console.log(arr);
  return arr
}

radixSort([23,345,5467,12,2345,9852])