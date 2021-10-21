/**
 * 题目：https://leetcode-cn.com/problems/roman-to-integer/
 * 思路：循环遍历匹配，注意规则
 */
function romanToInt(s: string): number {
  const wordMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  let sum = 0
  let preNum = wordMap[s.charAt(0)]
  for (let i = 1; i < s.length; i++) {
    const num = wordMap[s.charAt(i)]
    sum = preNum < num ? sum - preNum : sum + preNum
    preNum = num
  }
  sum += preNum
  return sum
}
