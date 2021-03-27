/*
Створити функцію що  повертає масив з 50 випадкових чисел від 0 до 100. 
Числа не повинні повторюватись. Відсортувати масив за зростанням. 
Вам може знадобитися Math.random().
*/

export function randomInteger() {
  let filterArr = [];
  let even = 0;
  let odd = 0;
  let count = 0;

  do{
    count++;
    let rand = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
    filterArr.push(rand);
    // !filterArr.includes(rand)
  }while (count < 50);
  filterArr = filterArr.filter((item, index) => filterArr.indexOf(item) == index)
  filterArr.sort((a, b) => a - b)
  

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