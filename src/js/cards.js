function createCard() {
  let card = document.createElement("div");
  let removeBtn = document.createElement("div");
  let cardHeader = document.createElement("div");
  let cardContent = document.createElement("div");
  let target = document.querySelector(".column-content");

  cardHeader.classList.add("card-header");
  cardContent.classList.add("card-content");
  removeBtn.classList.add("btn-remove");
  card.classList.add("card");
  card.dataset.cardId = Math.floor(Math.random() * 9999);

  cardHeader.innerHTML = "Карточка";
  target.append(card);
  card.append(cardHeader);
  card.append(cardContent);
  cardHeader.append(removeBtn);
}
// createCard()

/* -------------------- Все что выше можно коментировать--------------------- */


const cards = [
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
function getCards(arr){
  let target = document.querySelector(".column");


  for (let i = 0; i < arr.length; i++) {
    let card = document.createElement("div");
    const element = arr[i];

    card.classList.add('card')
    card.innerHTML = `${element.title}`
    card.dataset.card = `${element.column}`
    card.dataset.columnId = `${element.id}`
    target.append(card);
    // console.log(element);
  }
  return arr;
}
let currentElement = document.querySelectorAll('.column');
for (let i = 0; i < currentElement.length; ++i) {
  console.log(currentElement[i]);
  // currentElement[i].style.color = "green";
}
// console.log(currentElement);
getCards(cards)


export { createCard, getCards};
