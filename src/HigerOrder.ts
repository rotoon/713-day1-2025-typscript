// const n = [1, 2, 3, 4, 5]
// const square = n.map((num) => num * num)
// console.log(square)

// const n = [1, 2, 3, 4, 5]
// const even = n.filter((num) => num % 2 === 0)
// console.log(even)

const modularThree = (num: number) => num % 3 === 0

const powerThree = (num: number) => num * num * num

const n = [1, 2, 3, 4, 5, 6]
const result = n.filter(modularThree).map(powerThree)
console.log(result)
