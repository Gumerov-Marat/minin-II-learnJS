function printObject (objName) {
  console.log('Printing object: ', objName);
  
  for (var key in this){
    if (this.hasOwnProperty(key)){
      console.log('['+ key + ']', this[key]);
    }
  }
}

var person = {
  firstName: 'Max',
  job: 'BackEnd',
  age: 29,
  friends: ['Elena', 'Igor']
}

var car = {
  name: 'Ford',
  model: 'Focus',
  year: 2017
}
// (1)
//printObject.bind(person) // bind возвращает новую функцию с уже привязаным контекстом
var printPerson = printObject.bind(person)// теперь  this это   от объекта персон
printPerson('person') // запускаем printObject('person)

//(2)
/*
call делает тоже самое что и байнт
но только еще и сразу вызывает
первый параметр объект (который
  мы хотим передать в качестве контекста
  ), второй параметр
его имя для printObject
*/
printObject.call(car, 'Car')

//(3)
printObject.apply(person, ['Person'])
