/**
 * 题目：https://leetcode.cn/problems/word-search/
 * 思路： 1. 从上到下，从左往右（下标 0 到最大边界）先查找符合首字符的字母
 *       2. 然后基于这第一个字母开启检测（向四周试探是否符合下一个字符）
 *       3. 如果第2步符合则继续第2步如果不符合则弹出，回退到第一步位置，找下一个首字符
 *       4. 如此反复知道遍历到最后
 *
 */
function exist(board: string[][], word: string): boolean {
  // 如果面板总字符数小于字符串数则必定false
  // 剪枝策略
  if (!board.length || board.length * board[0].length < word.length) {
    return false
  }
  const m = board.length
  const n = board[0].length
  const recordList = JSON.parse(JSON.stringify(board))
  const aroundCoordList = [
    [-1, 0], // 向上
    [1, 0], // 向下
    [0, -1], // 向左
    [0, 1] // 向右
  ]
  for (let yIndex = 0; yIndex < m; yIndex++) {
    for (let xIndex = 0; xIndex < n; xIndex++) {
      if (board[yIndex][xIndex] === word[0]) {
        // console.log('找到之前', JSON.stringify(recordList))
        recordList[yIndex][xIndex] = false
        console.log(
          '找到首字母',
          yIndex,
          xIndex,
          word[0],
          JSON.stringify(recordList)
        )
        // 剪枝策略
        if (word.length === 1) return true
        if (aroundCheck(yIndex, xIndex, 1)) return true
        recordList[yIndex][xIndex] = true
      }
      continue
    }
  }

  function aroundCheck(y, x, nextIndex) {
    for (const coords of aroundCoordList) {
      const nextY = y + coords[0]
      const nextX = x + coords[1]
      //  在容器范围内
      if (!isInArea(nextY, nextX)) {
        console.log('不在容器内', nextY, nextX)
        continue
      }
      if (!recordList[nextY][nextX]) {
        console.log('使用过了', recordList[nextY][nextX], nextY, nextX)
        continue
      }
      console.log(
        '当前字母比对',
        nextIndex,
        nextY,
        nextX,
        board[nextY][nextX],
        word[nextIndex]
      )

      if (board[nextY][nextX] === word[nextIndex]) {
        console.log('匹配成功前往下一个匹配点', word[nextIndex])
        recordList[nextY][nextX] = false
        // 如果全部匹配则返回true
        if (nextIndex >= word.length - 1) return true
        // DFS 递归到成功或者失败
        if (aroundCheck(nextY, nextX, nextIndex + 1)) return true
        recordList[nextY][nextX] = true
      }
    }
    return false
  }

  // 剪枝策略
  function isInArea(y, x) {
    return y >= 0 && y < m && x >= 0 && x < n
  }

  console.log('失败')
  return false
}
