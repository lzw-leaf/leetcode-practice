/**
 * 题目：https://leetcode-cn.com/problems/hanota-lcci/
 * 思路： 栈的特性，需要输出每一个步骤
 *
 *
 */
function hanota(A: number[], B: number[], C: number[]): void {
  const [a, b, c] = [
    { type: 'A', value: A },
    { type: 'B', value: B },
    { type: 'C', value: C }
  ]

  const moveToTarget = function (
    length: number,
    origin: { type: string; value: number[] },
    middle: { type: string; value: number[] },
    target: { type: string; value: number[] }
  ) {
    // 如果只有一位 只需将a->c
    if (length === 1) {
      console.log(`${origin.type} => ${target.type}`)
      target.value.push(origin.value.pop() as number)
    } else {
      // 将较大的盘子移植到目标盘
      moveToTarget(length - 1, origin, target, middle)
      // 将数据源移动到目标源
      target.value.push(origin.value.pop() as number)
      console.log(`${origin.type} => ${target.type}`)
      // 大盘移植后，将小的补齐
      moveToTarget(length - 1, middle, origin, target)
    }
  }
  moveToTarget(A.length, a, b, c)

  console.log('最终结果', c)
}

hanota([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], [], [])
