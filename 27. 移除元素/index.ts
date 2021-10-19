// 题目: https://leetcode-cn.com/problems/remove-element/
/**
 * 思路: 由于题目要求在原数组操作，所以可以将查询到的内容统一放到队首或者队尾
 *      然后在依此出队,返回数组长度
 *
 */
function removeElement(nums: number[], val: number): number {
  let headIndex = 0
  let tempValue = null
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      tempValue = nums[i]
      nums[i] = nums[headIndex]
      nums[headIndex] = tempValue
      headIndex++
    }
  }
  for (let i = 0; i < headIndex; i++) {
    nums.shift()
  }
  return nums.length
}
