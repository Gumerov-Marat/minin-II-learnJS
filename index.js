/*
Реализуйте возможность ипользуя прототипы.
Дан массив, у него должен быть новый метод,
позволяющий удваивать значение каждого элемента
с учетом типа данных, таким образом, чтобы:
1_ Для чисел это возведение в квадрат
2_ Для строк это удваивание строки
3_ Метод не изменял существующих массив, делал новый.

Пример
[1,2,3] => [1,4,9]
[5,'Hello', 6] => [25, 'HelloHello', 36]
*/

var a = [1,2,3]
var b = [5, 'Hello', 6]

Array.prototype.double = function() {
  var newArray = this.map(function(item){
    if (typeof item === 'number'){
      return Math.pow(item, 2)
    }

    if (typeof item === 'string') {
      return item += item
    }
  })

  return newArray
}

var newA = a.double()
var newB = b.double()

console.log('A', newA);
console.log('B', newB);

