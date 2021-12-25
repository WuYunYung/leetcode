function debounce(wait, func) {
  let timeout = null

  return function (...args) {
    timeout && clearTimeout(timeout)
    timeout = setTimeout(
      () => func.apply(this, args),
      wait
    )
  }
}


const somebody = {
  name: 'Pippy',
  sayName: debounce(200, function (number) {
    console.log(this.name + number)
  })
}

somebody.sayName(1)
somebody.sayName(2)
somebody.sayName(3)
somebody.sayName(4)