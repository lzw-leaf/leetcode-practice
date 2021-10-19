/**
 * 题目: https://leetcode-cn.com/problems/remove-element/
 * 注意 外部方法会根据返回的length对数组做截取，所以无需手动截取
 * 思路: 由于题目要求在原数组操作，所以可以将查询到的内容统一放到队首或者队尾
 *      然后在依此出队,返回数组长度
 *
 */
function removeElement(nums: number[], val: number): number {
  let headIndex = 0
  let tailIndex = nums.length
  while (tailIndex !== headIndex) {
    if (nums[headIndex] === val) {
      nums[headIndex] = nums[tailIndex - 1]
      tailIndex--
    } else {
      headIndex++
    }
  }
  return tailIndex
}
