function search(arr, val) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    if (arr[middle] === val) {
      return middle;
    } else if (arr[middle] > val) {
      max = middle - 1;
    } else {
      min = middle + 1;
    }
  }
  return -1;
}
