function createCard(){
  let card = document.createElement("div");
  let removeBtn = document.createElement('div')
  let cardHeader = document.createElement('div')
  let cardContent = document.createElement('div')
  let target = document.querySelector('.column-content')

  cardHeader.classList.add('card-header')
  cardContent.classList.add('card-content')
  removeBtn.classList.add('btn-remove')
  card.classList.add("card");

  cardHeader.innerHTML = "Карточка";
  target.append(card)
  card.append(cardHeader)
  card.append(cardContent)
  cardHeader.append(removeBtn)

}
function removeCard(){
  let currentCard = document.querySelector('.card');
  carrentCard.remove();
}

export {createCard, removeCard};