// function greet(name: string) {
//   console.log('Hello ' + name)
// }
// greet('John')

// function greet(name: string) {
//   return 'Hello ' + name
// }

// console.log(greet('John'))

const list: number[] = [10, 20, 30]

function sum(list: number[]) {
  let total = 0
  for (const num of list) {
    total += num
  }
  return total
}

console.log(sum(list))
