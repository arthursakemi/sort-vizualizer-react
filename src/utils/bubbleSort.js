import { delay } from './delay';

const bubbleSort = async (originalArray, setArray) => {
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
};

export default bubbleSort;
