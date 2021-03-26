/*
Створити функцію що  повертає масив з 50 випадкових чисел від 0 до 100. 
Числа не повинні повторюватись. Відсортувати масив за зростанням. 
Вам може знадобитися Math.random().
*/

export function randomInteger(min, max) {
  let filterArr = [];
  let even = 0;
  let odd = 0;

  for (let i = 0; i <= max; i++) {
    let rand = Math.floor(Math.random() * (max - min + 1)) + min;
    filterArr.push(rand);
    filterArr = filterArr.filter((item, index) =>  filterArr.indexOf(item) == index);
    filterArr.sort((a, b) => a - b)
  }
  
  filterArr.length = 50;

  /*
  Використовуючи масив з попереднього завдання порахувати 
  максимальне парне і максимальне непарне число. 
  */
  for (let i = 0; i < filterArr.length; i++) {
    const element = filterArr[i];
    if(element % 2 == 0) {
      even += element;
    }else{
      odd += element;
    }
  }
  
  console.log('Sum even numbers ' + even)
  console.log('Sum odd numbers ' + odd)

  return filterArr;
}

// randomInteger(0, 100);

