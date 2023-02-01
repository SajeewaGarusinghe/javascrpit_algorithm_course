function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctindex = arr2.indexOf(arr1[i] ** 2);
    if (correctindex === -1) {
      return false;
    }
    arr2.splice(correctindex,1)
  }
  return true;
}


//optimum solution as below
function sameSquared(firstArr, secondArr) {
    if (!firstArr || !secondArr) return false;
    if (firstArr.length !== secondArr.length) return false;
  
    const lookup = {};
    for (value of firstArr) {
      lookup[value * value] = (lookup[value * value] || 0) + 1;
    }
    for (secondValue of secondArr) {
      if (!lookup[secondValue]) return false;
      lookup[secondValue] -= 1;
    }
    return true;
  }