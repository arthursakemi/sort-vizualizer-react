import { delay } from './delay';

const mergeSort = async (originalArray, setArray) => {
  let array = [...originalArray];
  await innerMergeSort(0, array.length, array, setArray);
};

const innerMergeSort = async (start, end, array, setArray) => {
  if (start < end - 1) {
    const mid = Math.floor((start + end) / 2);
    await innerMergeSort(start, mid, array, setArray);
    await innerMergeSort(mid, end, array, setArray);
    await merge(start, mid, end, array, setArray);
  }
};

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
