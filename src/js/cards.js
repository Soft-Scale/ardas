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
    title: 'Урок 3 по JS',
    column: 8,
  },
  {
    id: 2,
    title: 'Урок 4 по JS',
    column: 5,
  },
];


export const renderCard = card => {
  let cardEl = document.createElement('div');

  cardEl.dataset.card = card.id;
  cardEl.dataset.column = card.column;
  cardEl.innerText = card.title;
  cardEl.classList.add('card');

  return cardEl;
  
}
