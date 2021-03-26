import calcYears from './js/1.js';
// import returnArr from './js/2-3.js';
// import convertToObject from './js/4.js';
// import isEmpty from './js/5.js';
// import pow from './js/6.js';
import "./styles/main.scss";


const button1 = document.querySelector('.btn-1');
const button2 = document.querySelector('.btn-2');
const button4 = document.querySelector('.btn-4');
const button5 = document.querySelector('.btn-5');
const button6 = document.querySelector('.btn-6');

button1.onclick = () => {
  import(/* webpackChunkName: "lazy" */ './js/1.js')
    .then(module => {
      console.group('----- calcYears -----')
      console.log(module.calcYears());
      console.groupEnd()
     });
};

button2.onclick = () => {
  import(/* webpackChunkName: "lazy" */ './js/2-3.js')
    .then(module => {
      console.group('----- randomInteger -----')
      console.log('Factorial is equal to:', module.randomInteger(0, 100));
      console.groupEnd()
     });
};

button4.onclick = () => {
  import(/* webpackChunkName: "lazy" */ './js/4.js')
    .then(module => {
      console.group('----- converToObj -----')
      console.log(module.converToObj());
      console.groupEnd()
     });
};

button5.onclick = () => {
  import(/* webpackChunkName: "lazy" */ './js/5.js')
    .then(module => {
      console.group('----- isEmpty -----')
      console.log('Type of data:', module.isEmpty({id: 'home', name: 'Stas'}));
      console.groupEnd()
     });
};

button6.onclick = () => {
  import(/* webpackChunkName: "lazy" */ './js/6.js')
    .then(module => {
      console.group('----- pow -----')
      console.log('Factorial is equal to:', module.pow(2, 7));
      console.groupEnd()
     });
};

console.log('Main chunk');