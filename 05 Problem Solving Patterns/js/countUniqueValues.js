let a = [1, 1, 2, 2, 3, 4, 5, 5, 6, 6, 7, 7, 7, 8, 8, 8,23,24,25,25];

function countUniqueValues(arr) {
  let elements = 1;
  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      let val = arr[i];
      if (arr[i] !== arr[i + 1]) {
        elements++;
        // console.log(elements);
      }
    }
    return elements - 1;
  }
  return elements - 1;
}
