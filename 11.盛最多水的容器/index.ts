/**
 * 题目：https://leetcode-cn.com/problems/roman-to-integer/
 * 思路：双指针两端聚合
 */
function maxArea(height: number[]): number {
  let headIndex = 0,
    tailIndex = height.length - 1
  let product = 0
  while (headIndex < tailIndex) {
    if (height[headIndex] > height[tailIndex]) {
      const tempProduct = height[tailIndex] * (tailIndex - headIndex)
      if (tempProduct > product) product = tempProduct
      tailIndex--
    } else {
      const tempProduct = height[headIndex] * (tailIndex - headIndex)
      if (tempProduct > product) product = tempProduct
      headIndex++
    }
  }
  return product
}
