function throttle(wait, func) {
  let timeout = null
  return function (...args) {
    if (timeout) return
    func.apply(this, args)
    timeout = setTimeout(
      () => {
        clearTimeout(timeout)
        timeout = null
      },
      wait
    )
  }
}


const somebody = {
  name: 'Pippy',
  sayName: throttle(200, function (number) {
    console.log(this.name + number)
  })
}
setTimeout(() => somebody.sayName(1), 100)
setTimeout(() => somebody.sayName(2), 200)
setTimeout(() => somebody.sayName(3), 300)
setTimeout(() => somebody.sayName(4), 400)
setTimeout(() => somebody.sayName(5), 500)
setTimeout(() => somebody.sayName(6), 600)
setTimeout(() => somebody.sayName(7), 700)
setTimeout(() => somebody.sayName(8), 800)
setTimeout(() => somebody.sayName(9), 900)