export function bubbleSort(arr) {
  let animations = [];
  let newArr = [...arr];
  let completedIndices = [];

  for (let i = 0; i < newArr.length - 1; i++) {
    for (let j = 0; j < newArr.length - i - 1; j++) {
      animations.push({
        array: [...newArr],
        activeIndices: [j, j + 1],
        completedIndices: [...completedIndices],
      });

      if (newArr[j] > newArr[j + 1]) {
        [newArr[j], newArr[j + 1]] = [newArr[j + 1], newArr[j]];

        animations.push({
          array: [...newArr],
          activeIndices: [j, j + 1],
          completedIndices: [...completedIndices],
        });
      }
    }
    completedIndices.push(newArr.length-i-1);
  }

  completedIndices.push(0);

  animations.push({
    array: [...newArr],
    activeIndices: [],
    completedIndices: [...completedIndices],
  });

  return animations;
}
