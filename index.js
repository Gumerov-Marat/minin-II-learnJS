// const crateLink = ({path, name}) => '<a target="_blank" href="'+path+'">'+name+'</a>'

// const ul = document.querySelector('ul')

// const google = '<li>' + crateLink({path:'https://google.com', name: 'Google'}) + '</li>'
// const yandex = '<li>' + crateLink({path:'https://ya.ru', name: 'yandex'}) + '</li>'


// ul.insertAdjacentHTML('afterbegin', google)
// ul.insertAdjacentHTML('afterbegin', yandex)

const crateLink = ({path, name}) => `<a target="_blank" href="${path}">${name}</a>`
const ul = document.querySelector('ul')

const google = `<li> ${crateLink({path:'https://google.com', name: 'Google'})}</li>`
const yandex = `<li> ${crateLink({path:'https://ya.ru', name: 'yandex'})}</li>`



ul.insertAdjacentHTML('afterbegin', google)
ul.insertAdjacentHTML('afterbegin', yandex)