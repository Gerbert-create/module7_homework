function Device (name) {
  this.name = name
}

Device.prototype.getDevice = function (power) {
    console.log(`${power}Вт`)
    if (power <= 60000) {
      console.log("Прибор для домашнего пользования")
    } else {
      console.log("Прибор не для домашнего пользования")
    }
  }


const NOTE_BOOK = new Device("Honor")
const GENERATOR = new Device("Generator")
console.log(GENERATOR)
console.log(GENERATOR.getDevice(250000))
console.log(NOTE_BOOK)
console.log(NOTE_BOOK.getDevice(1000))