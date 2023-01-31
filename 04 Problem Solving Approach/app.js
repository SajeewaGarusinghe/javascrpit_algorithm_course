//problem
//count num of letters from each alapha numeric character in a string

//-------------attempt 1-----------------
function charCount(str) {
  var result = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    if (char !== '' && char !== ' ') {
      if (result[char] > 0) {
        result[char]++;
      } else {
        result[char] = 1;
      }
    }
  }
  return result;
}
//-------------attempt 1-----------------
function charCount1(str) {
  var result = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      if (result[char] > 0) {
        result[char]++;
      } else {
        result[char] = 1;
      }
    }
  }
  return result;
}
//-------------attempt 1-----------------
function charCount2(str) {
  var result = {};

  for (var char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      result[char] > 0 ? result[char]++ : (result[char] = 1);
    }
  }
  return result;
}
//-------------attempt 1-----------------
function isAlaphaNumeric(char1) {
  var cc = char1.charCodeAt(0);

  if ((cc > 47 && cc < 58) || (cc > 64 && cc < 91) || (cc > 96 && cc < 123)) {
    return true;
  } else {
    return false;
  }
}

function charCount3(str) {
  var result = {};

  for (var char of str) {
    if (isAlaphaNumeric(char)) {
      char = char.toLowerCase();
      result[char] > 0 ? result[char]++ : (result[char] = 1);
    }
  }
  return result;
}
