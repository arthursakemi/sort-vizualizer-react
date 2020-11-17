import { delay } from '../helperFunctions/delay';
/**
 * @param {Number[]} originalArray the array to be sorted
 * @param {Function} setArray setter for the array state
 */

export default async function bubbleSort(originalArray, setArray) {
  let array = [...originalArray];

  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < array.length - i; j++) {
      await compareAndSwap(array, j, setArray);
    }
  }
}

async function compareAndSwap(array, j, setArray) {
  if (array[j + 1] < array[j]) {
    swap(array, j);
    await delay(1);
    setArray([...array]);
  }
}

function swap(array, j) {
  let temp = array[j + 1];
  array[j + 1] = array[j];
  array[j] = temp;
}
