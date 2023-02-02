// Follow the below steps to solve the problem:

//     Initialize minimum value(min_idx) to location 0.
//     Traverse the array to find the minimum element in the array.
//     While traversing if any element smaller than min_idx is found then swap both the values.
//     Then, increment min_idx to point to the next element.
//     Repeat until the array is sorted.

var arr2 = [5, 1, 4, 2, 8,3,1,6,2];

function swap(arr, x, y) {
  var temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length-1; i++) {
    let min_idx = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min_idx] > arr[j]) {
        min_idx = j;
      }
      console.log(`i=${i} ,min_idx=${min_idx}, j=${j} ,arr=${arr}`);
    }
    swap(arr, i, min_idx);
  }
  console.log(arr2);
}

selectionSort(arr2);
