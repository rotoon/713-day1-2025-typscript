// const add = (a: number, b: number): string => {
//   const result = a + b
//   return result.toString()
// }

// const result = add(1, 2) + 0
// console.log(result, 'type of result:', typeof result)

function findMax(list: number[]): string {
  let max = 0
  for (const num of list) {
    if (num > max) {
      max = num
    }
  }
  return max.toString()
}

console.log(findMax([1, 2, 31, 4, 5]))
