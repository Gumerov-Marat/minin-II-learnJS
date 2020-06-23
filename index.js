var createCounter = function (countername) {
  var counter = 0
  return {
    increment: function () {
      counter++
    },
    decrement: function () {
      counter--
    },
    getCounter: function () {
      return counter
    }
  }
}

var counterA = createCounter('Counter A')
var counterB = createCounter('Counter B')

counterA.increment()
counterA.increment()
counterA.increment()

counterB.decrement()
counterB.decrement()

/*
 Памятка для меня самого - замыкание по сути не правильный термин. на английском замыкание - Локинг - блокирование.
 Блокируется переменная внутри функции, после чего можно ею манипулировать. При этом передавать копию функции можно и вместе 
 копией не будут копироваться данные.  Каждая переменная будет уникальна хоть и с одно имя. (разные ячейки памяти)
*/