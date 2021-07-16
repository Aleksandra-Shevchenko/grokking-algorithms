const array = [
  62, 82, 33, 66, 77,  3, 94, 52, 64, 78, 33, 55,
  90, 98, 17, 41, 52, 34, 87, 33, 51,  6, 57, 47,
  14,  9, 38, 39, 69, 31, 59, 23, 75, 85,  7, 96,
  24, 54, 60, 20, 75, 74,  7, 75, 53, 58, 11, 34,
  50, 89, 97,  0, 15, 81,  1, 28, 94, 72, 27, 28,
  74, 15,  8, 44, 13, 99, 83, 14, 61, 83, 64, 44,
  79, 73, 77, 91, 87, 62, 15, 95,  9, 11, 55, 91,
  25, 71,  4, 58, 51, 97, 88, 13, 56, 95,  6, 57,
  29, 71, 92, 44
];

// Вариант приближенный к книжному
// сложность O(n*n)

function findSmallest(arr) {
  let smallest = arr[0]; // для хранения наименьшего значения
  let smallestIndex = 0; // для хранения индекса наименьшего значения
  
  for (let i = 0; i < arr.length; i++) { // обходим массив и сравниваем значение с наименьшим числом
    if (arr[i] < smallest) { // если условие выполняется, перезаписываем наименьшее значение
      smallest = arr[i];
      smallestIndex = i;
    }
  }

  return smallestIndex;
}

function selectionSort(arr) { // сортируем массив
  const length = arr.length;
  const newArr = [];
  
  for (let i = 0; i < length; i++) {
    const smallestIndex = findSmallest(arr);  // находим наименьший элемент в массиве, 
    newArr.push(arr.splice(smallestIndex, 1)[0]); // вырезаем его и добавляем в новый массив
  }
  
  return newArr;    
}
  
selectionSort(array);


