function quickSort(array, start, end) {
    if (start < end) {
      let pivotIndex = partition(array, start, end);
      quickSort(array, start, pivotIndex - 1);
      quickSort(array, pivotIndex + 1, end);
    }
  }
  
  function partition(array, start, end) {
    let pivot = array[end];
    let pivotIndex = start;
    for (let i = start; i < end; i++) {
      if (array[i] <= pivot) {
        swap(array, i, pivotIndex);
        pivotIndex++;
      }
    }
    swap(array, end, pivotIndex);
    return pivotIndex;
  }
  
  function swap(array, a, b) {
    let temp = array[a];
    array[a] = array[b];
    array[b] = temp;
  }
  

  function partition1(arr,start,end){
    let pivot=arr[end]
    let pivotIndex=start
    for (let i = 0; i < end; i++) {
        if(arr[i]<=pivot){

        }
        
    }
  }

  function swap1(arr,a,b){
    let temp=arr[a]
    arr[a]=arr[b]
    arr[b]=temp
  }