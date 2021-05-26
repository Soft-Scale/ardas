import { createCard } from './cards.js';

let btn = document.querySelector('.column');
btn.addEventListener('click', function(ev){
  if(ev.target.className == 'btn'){
    createCard()
    
    let headerCard = ev.target.closest('.column').querySelector('.card-header')
    headerCard.contentEditable = "true";
    // headerCard.prepend(text)
  }

  let currentCard = ev.target.closest('.card');
  // let test = ev.currentTarget.querySelector('.card').getAttribute('data-id')
  if(ev.target.className == 'btn-remove'){
    currentCard.remove();
  }
})