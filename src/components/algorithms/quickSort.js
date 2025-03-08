export function quickSort(arr) {
  let animations = [];
  let newArr = [...arr];
  let completedIndices = [];

  function partition(low, high) {
    let pivot = newArr[high];
    let i = low - 1;

    animations.push({
      array: [...newArr],
      activeIndices: [high],
      completedIndices: [...completedIndices],
    });

    for (let j = low; j < high; j++) {
      animations.push({
        array: [...newArr],
        activeIndices: [j, high],
        completedIndices: [...completedIndices],
      });

      if (newArr[j] < pivot) {
        i++;
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];

        animations.push({
          array: [...newArr],
          activeIndices: [i, j],
          completedIndices: [...completedIndices],
        });
      }
    }

    [newArr[i + 1], newArr[high]] = [newArr[high], newArr[i + 1]];
    animations.push({
      array: [...newArr],
      activeIndices: [i + 1, high],
      completedIndices: [...completedIndices],
    });
    completedIndices.push(i+1);

    return i + 1;
  }

  function quickSortHelper(low, high) {
    if (low < high) {
      let pi = partition(low, high);

      quickSortHelper(low, pi - 1);
      quickSortHelper(pi + 1, high);
    }
  }

  quickSortHelper(0, newArr.length - 1);

  completedIndices = newArr.map((_,i) => i);
  animations.push({
    array: [...newArr],
    activeIndices: [],
    completedIndices: [...completedIndices],
  });

  return animations;
}
