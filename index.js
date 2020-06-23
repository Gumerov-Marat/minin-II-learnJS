var person = {
  age: 28,
  name: 'Max',
  job: 'Frontend',
  displayInfo: function(ms){
    //var self = this //(2)

    setTimeout(function () {
      // console.log('Name', this.name) // (1)
      // console.log('Job', this.job) // (1)
      // console.log('Age', this.age) // (1)

      // console.log('Name', self.name) // (3)
      // console.log('Job', self.job) // (3)
      // console.log('Age', self.age) // (3)

      console.log('Name', this.name) // (4)
      console.log('Job', this.job) // (4)
      console.log('Age', this.age) // (4)
    }.bind(this), ms) //(4) добавили  bind(this)
  }
}

person.displayInfo(100)

/*
Объяснение:

setTimeout(function () {} =  функция создает свою
область видимости.(скоуп). И у нее своя  this
относящаяся к Сет таймаут - а она в свою очередь объект 
виндов.

Как с этим бороться?
(2) - создаем переменную в нее положим this
(3) - обращаемся не к this а  к  self

(4) -  добавили байнд
*/