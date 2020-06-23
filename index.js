var person = {
  name: 'Max',
  age: 28,
  job: 'Frontend'
}

// for (var key in person){
//   if (person.hasOwnProperty(key)){
//   console.log(person[key]);
//   }
// }

var keys = Object.keys(person)
console.log(keys);

console.log("Второй способ");

Object.keys(person).forEach(function (key) {
  console.log(person[key]);
  
})