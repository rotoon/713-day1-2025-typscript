// const object = {
//   name: 'John',
//   age: 30,
//   city: 'New York',
// }

// console.log(object.name)
// const jsonStr = JSON.stringify(object)
// console.log('Object: ', object)
// console.log('json String: ', jsonStr)

interface Student {
  name: string
  lastName: string
  age: number
  grade: number
}

function retriedCheck(student: Student): string {
  if (student.grade > 2) {
    return JSON.stringify(student)
  }
  return `คุณ ${student.name} พ้นสภาพ`
}

console.log(retriedCheck({ name: 'John', lastName: 'Doe', age: 20, grade: 1 }))
console.log(retriedCheck({ name: 'Jane', lastName: 'Doe', age: 20, grade: 3 }))
