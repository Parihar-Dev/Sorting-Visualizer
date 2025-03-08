export function insertionSort(arr) {
  let animations = [];
  let newArr = [...arr];
  let completedIndices = [];

  for (let i = 1; i < newArr.length; i++) {
    let key = newArr[i];
    let j = i - 1;

    animations.push({
      array: [...newArr],
      activeIndices: [j, i],
      completedIndices: [...completedIndices],
    });

    while (j >= 0 && newArr[j] > key) {
      newArr[j + 1] = newArr[j];
      j--;

      animations.push({
        array: [...newArr],
        activeIndices: [j + 1, j + 2],
        completedIndices: [...completedIndices],
      });
    }
    
    newArr[j + 1] = key;

    animations.push({
      array: [...newArr],
      activeIndices: [],
      completedIndices: [...completedIndices],
    });

  }

  completedIndices = newArr.map((_, i) => i);
  animations.push({
    array: [...newArr],
    activeIndices: [],
    completedIndices: [...completedIndices],
  });

  return animations;
}
