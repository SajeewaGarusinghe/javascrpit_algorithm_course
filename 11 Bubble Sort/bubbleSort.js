//bubble sort
var arr1 = [5, 1, 4, 2, 8];

function swap(arr, x, y) {
  var temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}

function bubbleSort(arr, n) {
  var i, j;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
      console.log(`i=${i} ,j=${j} ,arr=${arr}`);
    }
    console.log(`>>>>> i=${i}  ,arr=${arr}`);
  }
}
function bubbleSortV1(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
      console.log(`i=${i} ,j=${j} ,arr=${arr}`);
    }
    console.log(`_____________________>>>>> i=${i}  ,arr=${arr}`);
  }
}
//optimized vesion
//optimized with noswaps variable
function bubbleSortV2(arr) {
  var noSwaps;

  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
      console.log(`i=${i} ,j=${j} ,arr=${arr}`);
    }
    console.log(`_____________________>>>>> i=${i}  ,arr=${arr}`);
    if (noSwaps) break;
  }
}

// bubbleSort(arr1, 12);
console.log('d0ne__________________________');
bubbleSortV2(arr1);
