function checkAnagram(s1, s2) {
  if (!s1 || !s2) return false;
  if (s1.length !== s2.length) return false;
  let freq1 = {};

  for (ch in s1) {
    freq1[ch] = (freq1[ch] || 0) + 1;
  }
  for (ch in s2) {
    if (!freq1[ch] || freq1[ch] === 0) {
      return false;
    }
    freq1[ch] -= 1;
  }
}

function isAnagram(s1, s2) {
  if (!s1 || !s2) return false;
  if (s1.length !== s2.length) return false;
  return s1.split('').sort().join('') === s2.split('').sort().join('');
}

f1 = 'abcdefgh';
f2 = 'efcdgabh';

isAnagram(f1, f2);

let arr = [2, 4, 5, 5, 6, 7, 4, 5, 5, 6, 7, 8, 9];
let target = 5;

function check(arr, target) {
  let first;
  let last;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      if (!first && first!==0) {
        first = i;
        last = i;
        console.log(first,last);
      } else if (first>=0) {
        last = i;
      }
    }
  }
  return [first, last];
}
