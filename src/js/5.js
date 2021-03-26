/*
Реалізуйте функцію isEmpty() яка приймає об’єкт в якості аргумента 
і повертає true у випадку коли він порожній. Якщо він не порожній 
чи вам передали не об’єкт функція повинна повертати false.
*/
export function isEmpty(obj){
  if(typeof obj === 'object' && Object.keys(obj).length === 0 && obj.constructor === Object){
    console.log('This is object ' + obj);
    return true;
  }else{
    console.log('Type of data: ' + typeof obj);
    return false;
  }
}

// isEmpty({id: 'home', name: 'Stas'})