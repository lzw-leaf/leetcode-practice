// 题目：https://leetcode-cn.com/problems/two-sum/
function twoSum(nums: number[], target: number): number[] {
  // step 1: 通过map or object 来做映射来减少不必要的查找
  const indexMap = new Map()
  for (let i = 0; i < nums.length; i++) {
    // step 2: 通过利用差值去map里进行内存映射查找，若存在则直接返回
    const diff = target - nums[i]
    if (indexMap.has(diff)) return [indexMap.get(diff), i]
    // step 3: 若不存在则将数据set到map中，供后续映射使用
    indexMap.set(nums[i], i)
  }
}
