import { delay } from '../helperFunctions/delay';
/**
 * @param {Number[]} originalArray the array to be sorted
 * @param {Function} setArray setter for the array state
 */
async function bubbleSort(originalArray, setArray) {
  let array = [...originalArray];

  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < array.length - i; j++) {
      if (array[j + 1] < array[j]) {
        let temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
        await delay(1);
        setArray(array);
        array = [...array];
      }
    }
  }
}

export default bubbleSort;