let names = [
  'Johney Deph',
  'Jane Doe',
  'Joey Gana',
  'Jared',
  'David',
  'Diana',
  'Derek',
  'Ronaldo',
]
for (let i = 0; i < names.length; i++) {
  if (names[i] && names[i].length > 6) {
    console.log(`สวัสดีคุณ ${names[i]}`)
  } else {
    console.log(`Hello ${names[i]}`)
  }
}
