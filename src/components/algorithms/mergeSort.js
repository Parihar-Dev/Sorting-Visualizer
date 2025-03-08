export function mergeSort(arr) {
  let animations = [];
  let newArr = [...arr];
  let completedIndices = [];

  function merge(left, mid, right) {
    let leftArr = newArr.slice(left, mid + 1);
    let rightArr = newArr.slice(mid + 1, right + 1);

    let i = 0,
      j = 0,
      k = left;

    while (i < leftArr.length && j < rightArr.length) {
      animations.push({
        array: [...newArr],
        activeIndices: [left + i, mid + 1 + j],
        completedIndices: [...completedIndices],
      });

      if (leftArr[i] <= rightArr[j]) {
        newArr[k] = leftArr[i];
        i++;
      } else {
        newArr[k] = rightArr[j];
        j++;
      }
      
      animations.push({
        array: [...newArr],
        activeIndices: [k],
        completedIndices: [...completedIndices],
      });
      k++;
    }

    while (i < leftArr.length) {
      newArr[k] = leftArr[i];
      animations.push({
        array: [...newArr],
        activeIndices: [k],
        completedIndices: [...completedIndices],
      });
      i++;
      k++;
    }

    while (j < rightArr.length) {
      newArr[k] = rightArr[j];
      animations.push({
        array: [...newArr],
        activeIndices: [k],
        completedIndices: [...completedIndices],
      });
      j++;
      k++;
    }
  }

  function mergeSortHelper(left, right) {
    if (left < right) {
      let mid = Math.floor((left + right) / 2);
      mergeSortHelper(left, mid);
      mergeSortHelper(mid + 1, right);
      merge(left, mid, right);
    }
  }

  mergeSortHelper(0, newArr.length - 1);

  completedIndices = newArr.map((_,i) => i);
  animations.push({
    array: [...newArr],
    activeIndices: [],
    completedIndices: [...completedIndices],
  });

  return animations;
}
