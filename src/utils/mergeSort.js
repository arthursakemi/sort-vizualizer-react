import { delay } from './delay';

/**
 * Inplace implementation of mergesort for vizualization purposes.
 * "Overload" method with fewer parameters to ease of use
 * @param {Number[]} originalArray the array to be sorted
 * @param {Function} setArray setter for the array state
 */
const mergeSort = async (originalArray, setArray) => {
  let array = [...originalArray];
  await innerMergeSort(0, array.length, array, setArray);
};

/**
 * Inplace implementation of mergesort for vizualization purposes
 * @param { number } start index of the start of the subArray
 * @param { number } end index of the end of the subArray
 * @param { number[] } array the array to be sorted
 * @param { Function } setArray setter for the array state
 */
const innerMergeSort = async (start, end, array, setArray) => {
  if (start < end - 1) {
    const mid = Math.floor((start + end) / 2);
    await innerMergeSort(start, mid, array, setArray);
    await innerMergeSort(mid, end, array, setArray);
    await merge(start, mid, end, array, setArray);
  }
};

/**
 *  Function to merge inplace both parts of the array
 * @param { number } start index of the start of the subArray
 * @param { number } mid index of the midpoint of the subArray
 * @param { number } end index of the end of the subArray
 * @param { number[] } array the array to be sorted
 * @param { Function } setArray setter for the array state
 */
const merge = async (start, mid, end, array, setArray) => {
  let i = start;
  let j = mid;
  while (i < mid && j < end) {
    if (array[i] < array[j]) {
      i++;
    } else {
      let temp = array[j];
      array.splice(j++, 1);
      array.splice(i++, 0, temp);
      mid++;
    }
    await delay(5);
    setArray([...array]);
  }
  while (i < mid) {
    i++;
    await delay(5);
  }
  while (j < end) {
    let temp = array[j];
    array.splice(j++, 1);
    array.splice(i++, 0, temp);
    await delay(5);
    setArray([...array]);
  }
};

export default mergeSort;
