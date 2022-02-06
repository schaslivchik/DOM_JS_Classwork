'use strict'

// const bodyElement  = document.body;
// // console.dir(bodyElement)

// const pElement = document.getElementById('first-p')
// console.dir(pElement)

// const [firstP, secondP] = document.getElementsByClassName('my-class')
// const pElements = document.getElementsByTagName('p')
// const h2El = document.querySelector('h2')
// const pMyClassEls = document.querySelectorAll('p.my-class')

// const clickMeBtn = document.querySelector('.click-me-btn')


// // оброботчик события  --- функция, которая принимает обьект события
// clickMeBtn.onclick = (e) => {alert('click me again')}

// const clickHanbler = e => {console.log('e :>> ', e);}

// clickMeBtn.addEventListener('click', clickHanbler )
// clickMeBtn.removeEventListener('click', clickHanbler)


// /**********атрибуты******* */

// //1
// const pEl = document.querySelector('#first-p');


// console.dir(pEl)
// pEl.title = 'i am p';
// pEl.style.color = '#ffffff';
// pEl.style.fontSize = '24px';
// pEl.style.backgroundColor = 'blue';
// // pEl.hidden = true;

// //2

// const pEl2 = document.querySelectorAll('.my-class')[1];
// pEl2.setAttribute('title', 'I am 2 p');
// pEl2.setAttribute('hidden', 'hidden');


// console.log('pEl2.getAttribute("title") :>> ', pEl2.getAttribute("title"));


// const pEl3 = document.querySelector('.p-third');
// pEl3.addEventListener('mouseover', function() {
//   this.style.fontSize = '23px';
//   this.style.backgroundColor = 'blue';
//   this.style.color = '#ffffff';
// })
// pEl3.addEventListener('mouseleave', function() {
//   this.style.fontSize = 'inherit';
//   this.style.backgroundColor = 'inherit';
//   this.style.color = 'inherit';
// })


const pEl3 = document.querySelector('.p-third');

pEl3.classList.add('green-txt');
pEl3.onclick = function() {
  this.classList.toggle('green-txt')
}

