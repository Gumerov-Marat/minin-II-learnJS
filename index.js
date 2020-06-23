const form = document.querySelector('form')

form.addEventListener('submit', event =>{

  event.preventDefault()

  const title = form.title.value
  const text = form.text.value
  const description = form.description.value
  
  saveForm(title, text, description)
})

// function saveForm(data) {
//   //деструктурируем (1)
//   const {title, text, description} = data
//   const formData = {
//     date: new Date().toLocaleDateString(),
//     // title: data.title,
//     // text: data.text,
//     // description: data.description
//     title, text, description //(1)
//   }
//   console.log('Form data', formData)
  
// }

// function saveForm ({title, text, description}) {
//   const formData = {
//     date: new Date().toLocaleDateString(),
//     title, text, description //(2)
//   }
//   console.log('Form data', formData)
// }


//Spread
function saveForm (data) {
  const formData = {
    date: new Date().toLocaleDateString(),
    ...data //(3)
  }
  console.log('Form data', formData)
}

//REST
function saveForm(...args) {
  const [title,text,description]= args

  const formData = {
    date: new Date().toLocaleDateString(),
    title, text, description
  }
  console.log('Form data', formData)
}