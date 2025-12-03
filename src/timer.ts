function waitAndPrint(message: string, delay: number) {
  let messageWorld = message
  setInterval(() => {
    console.log(messageWorld)
    messageWorld = messageWorld + ' world!'
  }, delay)
}

waitAndPrint('Hello, world!', 3000)
