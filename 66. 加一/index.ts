/**
 * 题目：https://leetcode-cn.com/problems/plus-one/
 * 思路： 1. 由于可能存在的大数精度问题不能转换成整数进行加1再转换成数组
         2. 可以从数组的末尾+1然后如果大于等于10就逐级向上进一，直到小于10为止
         3. 如果0小标需要向前进1，则数组unshift(1)
 *
 */
function plusOne(digits: number[]): number[] {
  let scaleIndex = digits.length - 1
  digits[scaleIndex]++
  while (digits[scaleIndex] >= 10) {
    digits[scaleIndex] = digits[scaleIndex] - 10
    if (!scaleIndex) {
      digits.unshift(1)
    } else {
      scaleIndex--
      digits[scaleIndex]++
    }
  }
  return digits
}
