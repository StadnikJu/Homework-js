/*
Попробуйте написать свою версию метода `map`. Ваша задача — создать функцию `map`, которая принимает два параметра:

- `array` (массив, над которым выполняется операция),
- `callback` (функция, которая вызывается для каждого элемента массива).

Функция `callback` должна иметь возможность принимать следующие параметры:

- `element` (текущий элемент массива),
- `index` (индекс текущего элемента),

Ваша функция `map` должна возвращать новый массив, где каждый элемент является результатом вызова функции `callback` на каждом элементе исходного массива.
*/

/*
Пример использования вашей функции:

const numbers = [1, 2, 3, 4, 5]

const doubledNumbers = map(numbers, (element, index) => {
  return element * 2
})

console.log(doubledNumbers) // Должен вывести: [2, 4, 6, 8, 10]
*/



let arr3 = [ 3, 34, 2, 5, 6, 7];

const map = (array, callback) => {

  let newArr = [];

  for(let i = 0; i < array.length; i++) {
    let element = array[i];
    let index = i;
    newArr.push(callback(element, index));
  }

  return newArr;

}


function maper(element, index) {
  if(index % 2 === 0) {
    return element * 2;
  } else {
    return element + 2;
  }
}

console.log(map(arr3, maper));