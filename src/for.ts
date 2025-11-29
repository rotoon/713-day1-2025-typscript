let names: string[] = [
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
  const name = names[i]
  if (name && name.length > 6) {
    console.log(`สวัสดีคุณ ${name}`)
  } else {
    console.log(`Hello ${name}`)
  }
}
