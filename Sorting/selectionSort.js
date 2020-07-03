const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  let length = array.length;
  for (let i = 0; i < length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < length; j++) {
      if (array[min] > array[j]) {
        min = j;
      }
    }
    let temp = array[min];
    array[min] = array[i];
    array[i] = temp;
  }
  return array
}

selectionSort(numbers);