// const greet = function greet(name: string) {
//   return 'Hello ' + name
// }

// console.log(greet('John'))

// const greet = (name: string) => 'Hello ' + name

// console.log(greet('Johny'))

// const multiply = (x: number, y: number) => {
//   return x * y
// }

// console.log(multiply(5, 10))

const findMore = (x: number, y: number) => {
  if (x > y) {
    return x
  } else {
    return y
  }
}

console.log(findMore(15, 10))
