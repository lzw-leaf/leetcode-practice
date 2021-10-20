/**
 * 题目：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
 * 思路：利用双指针，一个扫描指针用来完整遍历，一个有效指针用来记录最新的有效索引。 由于本身是有序数组，并且无需实际切割数组（外部方法会自行根据返回的长度切割），所以只需要将非重复的数据放到有效指针前即可。
 * @param nums
 * @returns
 */
function removeDuplicates(nums: number[]): number {
  let validIndex = 0,
    sanIndex = 1
  while (sanIndex < nums.length) {
    if (nums[validIndex] === nums[sanIndex]) {
      sanIndex++
    } else {
      validIndex++
      nums[validIndex] = nums[sanIndex]
      sanIndex++
    }
  }
  return validIndex + 1
}
