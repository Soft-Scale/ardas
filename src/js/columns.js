import { createCard, getCards, cards } from "./cards.js";
// function addColumn() {
//   let container = document.querySelector(".wrapper");
//   let column = document.createElement("div");
//   let columnHeader = document.createElement("div");
//   let columnContent = document.createElement("div");
//   let columnAddButton = document.createElement("div");

//   columnHeader.classList.add("column-header");
//   columnContent.classList.add("column-content");
//   columnAddButton.classList.add("btn");
//   column.classList.add("column");
//   column.dataset.columnId = Math.floor(Math.random() * 9999);

//   columnHeader.innerHTML = "<div class='column-name'>Колонка</div>";
//   columnAddButton.innerHTML = "&#10010;";
//   columnHeader.append(columnAddButton);
//   column.append(columnHeader);
//   column.append(columnContent);

//   container.append(column);
// }
// addColumn();

// function createBtn() {
//   let container = document.querySelector(".wrapper");
//   let addColumn = document.createElement("div");

//   container.prepend(addColumn);
//   addColumn.classList.add("btn-add-column");
//   addColumn.innerHTML = "&#10010;";
// }
// createBtn();

// let btn = document.querySelector(".wrapper");
// btn.addEventListener("click", function (ev) {
//   if (
//     ev.target.className === "btn" &&
//     ev.target.closest(".column").dataset.columnId
//   ) {
//     console.log(ev.target.closest(".column").dataset.columnId);
//     createCard();

//     // let headerCard = ev.target.closest(".column").querySelector(".card-header");
//     // headerCard.contentEditable = "true";
//   }

//   if (ev.target.matches(".btn-remove")) {
//     let currentCard = ev.target.closest(".card");
//     console.log(currentCard.dataset.cardId);

//     currentCard.remove();
//   }
// });

// let btnAdd = document.querySelector(".btn-add-column");
// btnAdd.addEventListener("click", function () {
//   addColumn();
// });
/* -------------------- Все что выше можно коментировать--------------------- */


const columns = [
  {
    id: 5,
    title: 'ToDo',
  },
  {
    id: 7,
    title: 'In Progress',
  },
  {
    id: 8,
    title: 'Done',
  }
];

function getColumns(arr){
  let target = document.querySelector(".wrapper");

  for (let i = 0; i < arr.length; i++) {
    let column = document.createElement("div");
    const elementColumn = arr[i];

    column.classList.add('column')
    column.innerHTML = `${elementColumn.title}`
    column.dataset.column = `${elementColumn.id}`
    target.append(column);
    // console.log(column.matches('data-card-id'));
      // console.log(column.dataset.column);
    // if(column.dataset.column === card.dataset.columnId){
    // }
  }
  return arr;
}
getColumns(columns)




export default { getColumns };
