/**
 * 题目：https://leetcode-cn.com/problems/valid-parentheses/
 * 思路 用栈解决， 由于是配对模式，所以字符串长度肯定是偶数，所以可以提前处理掉奇数
 */
function isValid(s: string): boolean {
  if (s.length % 2) return false
  const wordsStack = []
  const wordsMap = { ')': '(', '}': '{', ']': '[' }
  for (let index = 0; index < s.length; index++) {
    if (')]}'.includes(s[index])) {
      if (wordsStack.pop() !== wordsMap[s[index]]) return false
    } else {
      wordsStack.push(s[index])
    }
  }
  return !wordsStack.length
}
