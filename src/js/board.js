import { renderColumns, columns } from './columns.js';
import { renderCard, cards } from './cards.js';

(function boardApply(){ 
  let wrapper = document.querySelector('.wrapper');
  
  let dataColumns = columns.map(column =>{
    wrapper.append(renderColumns(column));
  })
  let colEl = document.querySelectorAll('.column');
  // cards.map(card => {
    
  //   colEl.append()
  //   console.log(card);
  // })

  cards.forEach(function(item, i){
    
    // console.log(renderCard(cards));
    
    // colEl[i].append(renderCard(cards[i]));
    // console.log(+colEl[i].getAttribute('data-column'));
    console.log(colEl[i].getAttribute('data-column'));
    // if(colEl[i].getAttribute('data-column') == item.column){
    //   // console.log(colEl);

    // }
    
  })

  
 
})();