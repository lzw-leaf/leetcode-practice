/**
 * 题目：https://leetcode-cn.com/problems/palindrome-number/
 * 思路：分前半和后半，将后半翻转进行对比
 */

function isPalindrome(x: number): boolean {
  if (x === 0) return true
  if (x < 0 || x % 10 === 0) return false
  let fisrtNum = x
  let lastNum = 0
  while (fisrtNum > lastNum) {
    lastNum = lastNum * 10 + (fisrtNum % 10)
    fisrtNum = Math.floor(fisrtNum / 10)
  }
  return fisrtNum === lastNum || fisrtNum === Math.floor(lastNum / 10)
}
