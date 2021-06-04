export const columns = [
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

export const renderColumns = col =>{
  let columnEl = document.createElement('div');
  
  columnEl.dataset.column = col.id;
  columnEl.innerText = col.title;
  columnEl.classList.add('column');
  // wrapper.append(columnEl);
  return columnEl;
}