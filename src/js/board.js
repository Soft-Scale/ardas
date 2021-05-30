import { getColumns, addColumn } from './columns.js';
// import { createCard } from './cards.js';
import { getCards, cards, createCard } from './cards.js';


// let columnData = document.querySelectorAll('.column');
// let cardData = document.querySelectorAll('.card');
// for (let i = 0; i < columnData.length; i++) {
//   const elementColumn = columnData[i];
//   const elementCard = columnData[i];
//   if(elementColumn.dataset.column == elementCard.dataset.card){
//     getCards(cards)
//   }


  
// }

// let btn = document.querySelector('.column');
// btn.addEventListener('click', function(ev){
//   if(ev.target.className == 'btn'){
//     createCard()
    
//     let headerCard = ev.target.closest('.column').querySelector('.card-header')
//     headerCard.contentEditable = "true";
//     // headerCard.prepend(text)
//   }

//   let currentCard = ev.target.closest('.card');
//   // let test = ev.currentTarget.querySelector('.card').getAttribute('data-id')
//   if(ev.target.className == 'btn-remove'){
//     currentCard.remove();
//   }
// })