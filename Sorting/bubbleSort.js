const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  let length = array.length
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (array[j] > array[j+1]) {
        let temp = array[j+1];
        array[j+1] = array[j];
        array[j] = temp;
      }
    }
  }
  return array
}

bubbleSort(numbers);