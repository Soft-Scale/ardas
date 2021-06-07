import { renderColumns, columns } from './columns.js';
import { renderCard, cards } from './cards.js';

(function boardApply(){ 
  let wrapper = document.querySelector('.wrapper');
  
  columns.map(column =>{
    wrapper.append(renderColumns(column));
  });
  let colEl = document.querySelectorAll('.column');

  cards.map(card => {
    document.querySelector(`[data-column="${card.column}"]`).append(renderCard(card))
  })

  cards.forEach(function(item, i){

  });

  
 
})();