import { createCard } from './cards.js';
function addColumn(){
  let container = document.querySelector('.wrapper');
  let column = document.createElement("div");
  let columnHeader = document.createElement("div");
  let columnContent = document.createElement("div");
  let columnAddButton = document.createElement("div");

  columnHeader.classList.add("column-header");
  columnContent.classList.add("column-content");
  columnAddButton.classList.add("btn");
  column.classList.add("column");

  columnHeader.innerHTML = "<div class='column-name'>Колонка</div>";
  columnAddButton.innerHTML = "Добавить";
  columnHeader.append(columnAddButton)
  column.append(columnHeader)
  column.append(columnContent)

  container.append(column);
}
addColumn()



let btn = document.querySelector('.column');
btn.addEventListener('click', function(ev){
  if(ev.target.className == 'btn'){
    createCard()
    
    let headerCard = ev.target.closest('.column').querySelector('.card-header')
    headerCard.contentEditable = "true";
    console.log(headerCard);
    headerCard.prepend(text)
  }

  if(ev.target.className == 'btn-remove'){
    let currentCard = ev.target.closest('.card');
    console.log(currentCard);
    currentCard.remove();
  }
})

export default {addColumn};