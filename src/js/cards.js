// function createCard() {
//   let card = document.createElement("div");
//   let removeBtn = document.createElement("div");
//   let cardHeader = document.createElement("div");
//   let cardContent = document.createElement("div");
//   let target = document.querySelector(".column-content");

//   cardHeader.classList.add("card-header");
//   cardContent.classList.add("card-content");
//   removeBtn.classList.add("btn-remove");
//   card.classList.add("card");
//   card.dataset.cardId = Math.floor(Math.random() * 9999);

//   cardHeader.innerHTML = "Карточка";
//   target.append(card);
//   card.append(cardHeader);
//   card.append(cardContent);
//   cardHeader.append(removeBtn);
// }
// createCard()

/* -------------------- Все что выше можно коментировать--------------------- */


export const cards = [
  {
    id: 15,
    title: 'Зробити домашку',
    column: 7,
  },
  {
    id: 9,
    title: 'Встановити Node.js',
    column: 8,
  },
];
export function renderCard(){
  let cardEl = document.createElement('div')
  
}
// export { renderCard};
