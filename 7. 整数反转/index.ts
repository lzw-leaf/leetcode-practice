/**
 * 题目：https://leetcode-cn.com/problems/reverse-integer/
 * 思路：偷个懒，转成字符串再转成数组reverse一下
 *      还有个思路是%10
 */
function reverse(x: number): number {
  const isMinus = x < 0
  const absNum = parseInt(('' + Math.abs(x)).split('').reverse().join(''))
  const num = isMinus ? -absNum : absNum
  if (num > Math.pow(2, 31) - 1 || num < Math.pow(-2, 31)) return 0
  return num
}
