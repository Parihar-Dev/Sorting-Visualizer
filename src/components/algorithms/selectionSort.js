export function selectionSort(arr) {
  let animations = [];
  let newArr = [...arr];
  let completedIndices = [];

  for (let i = 0; i < newArr.length - 1; i++) {
    let minIndex = i;

    animations.push({
      array: [...newArr],
      activeIndices: [minIndex],
      completedIndices: [...completedIndices],
    });

    for (let j = i + 1; j < newArr.length; j++) {
      animations.push({
        array: [...newArr],
        activeIndices: [minIndex, j],
        completedIndices: [...completedIndices],
      });

      if (newArr[j] < newArr[minIndex]) {
        minIndex = j;

        animations.push({
          array: [...newArr],
          activeIndices: [minIndex],
          completedIndices: [...completedIndices],
        });
      }
    }

    if (minIndex !== i) {
      [newArr[i], newArr[minIndex]] = [newArr[minIndex], newArr[i]];

      animations.push({
        array: [...newArr],
        activeIndices: [i, minIndex],
        completedIndices: [...completedIndices],
      });
    }
    completedIndices.push(i);
  }

  completedIndices.push(newArr.length-1);

  animations.push({
    array: [...newArr],
    activeIndices: [],
    completedIndices: [...completedIndices],
  });


  return animations;
}
