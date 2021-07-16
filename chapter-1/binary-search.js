const myArray = [1, 3, 5, 7, 9, 11];

//функция бинарного поиска на вход получает отсортированный массив и значение, если заданное значение есть в массиве, то функция возвращает его позицию
// сложность  O(log n)

const searchBinary = (arr, item) => {
  // создаем переменные со значениями границ массива
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2); // каждый раз алгоритм будет проверять средний элемент между границами low и high
    let guess = arr[mid]; // получаем значение из массива с рассчитаным индексом
    if (guess === item) {
      return mid;
    } else if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return null; // этого значения в массиве нет
}


console.log(searchBinary(myArray, 7))