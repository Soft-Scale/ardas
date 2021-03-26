/* Вивести всі високосні роки в діапазоні років. 
Початковий і кінцевий рік діапазона питати у користувача 
двома запитами за допомогою prompt(). 
Якщо користувач вводить некоректний рік (порожній, не число) 
використовувати замість нього поточний рік.*/

export function calcYears(year) {

  let startYear = prompt('Введите начальный год')
  let endYear = prompt('Введите конечный год')

  if((isNaN(startYear) || startYear === null || startYear === '') && (isNaN(endYear) || endYear === null || endYear === '')){
    console.log(startYear = 2021);
    console.log(endYear = 2021);
  }
  for (let year = startYear; year <= endYear; year++) {
    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
      console.log(year)
    }
  }
}
// calcYears()