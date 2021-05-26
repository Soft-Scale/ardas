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
  // let count = 0;
  let target = document.querySelector(".column");


  for (let i = 0; i < arr.length; i++) {
    let card = document.createElement("div");
    card.classList.add('card')
    const element = arr[i];
    card.innerHTML = `${element.title}`
    card.dataset.column = `${element.column}`
    card.setAttribute('id', `card-${element.id}`)
    target.append(card);
    console.log(element);
  }
  return arr;
}
getCards(cards)


export { createCard, getCards };
