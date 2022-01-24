/* 
Problem: An integer has sequential digits if and only if each digit in the number is one more than the previous digit.
         Return a sorted list of all the integers in the range [low, high] inclusive that have sequential digits.
*/

// Sequential Digits

// Using DFS - Final Ans
let result = [];
let sequentialDigits = function (low, high) {
  for (let i = 1; i <= 9; i++) {
    dfs(low, high, i, 0);
  }
  return result.sort(function (a, b) {
    return a - b;
  });
};

const dfs = function (low, high, i, num) {
  if (num >= low && num <= high) {
    result.push(num);
  }
  if (num > high || i > 9) {
    return;
  }
  dfs(low, high, i + 1, num * 10 + i);
};

// Using Map
var sequentialDigits = function (low, high) {
  let result = [];
  for (let i = low; i < high; i++) {
    let status = true;
    const data = i.toString().split("");
    data.map((e, i) => {
      if (status) {
        if (parseInt(e) === parseInt(data[i - 1]) + 1) {
          status = true;
        } else {
          if (i > 0) status = false;
        }
      }
    });
    if (status) result.push(i);
  }
  return result;
};

// Using For Loop
var sequentialDigits = function (low, high) {
  let result = [];
  for (let i = low; i < high; i++) {
    let status = true;
    const data = i.toString().split("");
    for (let j = 1; j < data.length; j++) {
      if (status) {
        if (parseInt(data[j]) === parseInt(data[j - 1]) + 1) {
          status = true;
        } else {
          if (i > 0) {
            status = false;
          }
          break;
        }
      }
    }
    if (status) result.push(i);
  }
  return result;
};
