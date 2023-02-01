function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  str2 = str2.split('');
  for (let i = 0; i < str1.length; i++) {
    let correctindex = str2.indexOf(str1[i]);
    if (correctindex === -1) {
      return false;
    }
    str2.splice(correctindex, 1);
  }
  return true;
}

// optimum solution as below
function isAnagram2(firstStr, secondStr) {
    if (!firstStr || !secondStr) return false;
    if (firstStr.length !== secondStr.length) return false;     

    const lookup = {};
    for (value of firstStr) {
      lookup[value] = (lookup[value] || 0) + 1;
    }
    for (secondValue of secondStr) {
      if (!lookup[secondValue]) return false;
      lookup[secondValue] -= 1;
    }
    return true;
  }
