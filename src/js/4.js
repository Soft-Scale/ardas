/* 
  Маючи масив користувачів (приклад нижче) перетворіть його на об’єкт
  у якого property будуть ідентифікаторами користувачів, 
  а значеннями самі користувачі за допомогою reduce().
*/

let users = [
  {
    id: 1,
    name: 'Mihail'
  },
  {
    id: 2,
    name: 'Marina'
  },
  {
    id: 3,
    name: 'Andrew'
  },
  {
    id: 4,
    name: 'Ilya'
  },
];

export function converToObj(){
  let resultUsers = users.reduce(function(accumulator, current){
    accumulator[current.id] = current;
    return accumulator;
  }, {})
  
  console.log(resultUsers)
}