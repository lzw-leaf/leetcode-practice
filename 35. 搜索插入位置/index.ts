/**
 * 题目：https://leetcode-cn.com/problems/search-insert-position/
 * 思路：用二分法查找
 */
function searchInsert(nums: number[], target: number): number {
  const median = parseInt('' + nums.length / 2)
  if (nums[median] === target) return median
  if (nums.length === 1) return nums[median] > target ? 0 : median + 1
  return nums[median] > target
    ? searchInsert(nums.slice(0, median), target)
    : median + searchInsert(nums.slice(median), target)
}

/**
 * 参考优化版本
 */
function searchInsertTwo(nums: number[], target: number): number {
  const n = nums.length
  let left = 0,
    right = n - 1,
    ans = n
  while (left <= right) {
    let mid = ((right - left) >> 1) + left
    if (target <= nums[mid]) {
      ans = mid
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return ans
}
