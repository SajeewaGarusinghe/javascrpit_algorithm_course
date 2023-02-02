z = [6, 4, 15, 10];
console.log('normal sort >>' + z.sort());

//this is because default sort order is acording to string unicode

function numberCompare(num1, num2) {
  return num1 - num2;
}

console.log('number sort' + z.sort(numberCompare));

//string sort
r = ['steel', 'colt', 'data structure', 'algorithms'];
console.log(r.sort());

function compareByLen(str1, str2) {
  return str1.length - str2.length;
}

console.log('compare string by length>> ' + r.sort(compareByLen));
