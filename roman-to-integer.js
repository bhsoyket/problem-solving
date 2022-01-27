/* 
Problem: Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.
*/

// Solution

const romalValue = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

var romanToInt = function (s) {
  let result = 0;
  for (let num = 0; num < s.length; num++) {
    if (s[num] === "I") {
      result =
        s[num + 1] === "V"
          ? result + 4
          : s[num + 1] === "X"
          ? result + 9
          : result + romalValue[s[num]];
      if (["V", "X"].includes(s[num + 1])) num++;
    } else if (s[num] === "X") {
      result =
        s[num + 1] === "L"
          ? result + 40
          : s[num + 1] === "C"
          ? result + 90
          : result + romalValue[s[num]];
      if (["L", "C"].includes(s[num + 1])) num++;
    } else if (s[num] === "C") {
      result =
        s[num + 1] === "D"
          ? result + 400
          : s[num + 1] === "M"
          ? result + 900
          : result + romalValue[s[num]];
      if (["D", "M"].includes(s[num + 1])) num++;
    } else {
      result = result + romalValue[s[num]];
    }
  }
  return result;
};
