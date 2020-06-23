// объекты
// const createCar = (name, model) => {
//   return { name, model }
// }

// улучшеный

const createCar = (name, model) => ({ name, model })
 
const ford = createCar('Ford', 'focus')

console.log(ford);

const yearField = 'year'


// const bmw = {
//   name: 'BMW',
//   ['model']: 'X6 Sport',
//   [yearField]: 2018,
//   logField(){
//     console.log(this.name, this.model, this.year)
//   }
// }


// пример деструктуризации
const bmw = {
  name: 'BMW',
  ['model']: 'X6 Sport',
  [yearField]: 2018,
  logField(){
    const {name,model,year}= this
    console.log(name, model, year)
  }
}

// console.log(bmw)
// bmw.logField()

//const year = bmw.year
const {year} = bmw
console.log(year);
