/**
 * 题目：https://leetcode-cn.com/problems/maximum-subarray/
 * 思路：
 */
function maxSubArray(nums: number[]): number {
  let finallySum = nums[0]
  let sum = 0
  for (const num of nums) {
    sum = sum > 0 ? sum + num : num
    finallySum = Math.max(sum, finallySum)
  }
  return finallySum
}
