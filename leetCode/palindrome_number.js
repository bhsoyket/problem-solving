/* 
Problem: Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.
*/

// Solution

var isPalindrome = function (x) {
  return x === parseInt(x.toString().split("").reverse().join(""));
};
