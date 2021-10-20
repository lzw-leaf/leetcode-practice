function strStr(haystack: string, needle: string): number {
  return haystack.indexOf(needle)
}

function strStrTwo(haystack: string, needle: string): number {
  if (needle === '') return 0
  if (needle.length > haystack.length) return -1
  let tailIndex = 0
  let headIndex = 0
  while (
    headIndex < haystack.length - 1 &&
    tailIndex - headIndex < needle.length
  ) {
    if (haystack[tailIndex] === needle[tailIndex - headIndex]) {
      tailIndex++
    } else {
      headIndex++
      tailIndex = headIndex
    }
  }
  return tailIndex - headIndex < needle.length ? -1 : headIndex
}
