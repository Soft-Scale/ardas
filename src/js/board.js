import { renderColumns, columns } from './columns.js';
import { renderCard, cards } from './cards.js';

(function boardApply(){
  let dataColumns = columns.map (column =>{
    renderColumns(column);
  })
})();