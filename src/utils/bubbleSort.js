import { delay } from './delay';
/**
 * @param {Number[]} originalArray the array to be sorted
 * @param {Function} setArray setter for the array state
 */
async function bubbleSort(originalArray, setArray) {
  let array = [...originalArray];

  for (let i = 1; i < array.length; i += 1) {
    for (let j = 0; j < array.length - i; j += 1) {
      if (array[j + 1] < array[j]) {
        let temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
      }
      await delay(1);
      setArray(array);
      array = [...array];
    }
  }
}

export default bubbleSort;
