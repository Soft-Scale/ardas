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
  {
    id: 10,
    title: 'Новый урок по JS',
    column: 8,
  },
  {
    id: 2,
    title: 'Новый урок по JS',
    column: 8,
  },
];


export const renderCard = card => {
  let res = document.querySelector('.column');
  let cardEl = document.createElement('div');
  cardEl.dataset.columnId = card.id;
  cardEl.dataset.column = card.column;
  cardEl.innerText = card.title;
  cardEl.classList.add('card');
  // res.append(cardEl);
  // console.log(cardEl);
  return cardEl;
  
}
