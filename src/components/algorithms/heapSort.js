export function heapSort(arr) {
  let animations = [];
  let newArr = [...arr];
  let n = newArr.length;
  let completedIndices = [];

  function heapify(n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && newArr[left] > newArr[largest]) {
      largest = left;
    }

    if (right < n && newArr[right] > newArr[largest]) {
      largest = right;
    }

    if (largest !== i) {
      [newArr[i], newArr[largest]] = [newArr[largest], newArr[i]];
      animations.push({
        array: [...newArr],
        activeIndices: [i, largest],
        completedIndices: [...completedIndices],
      });

      heapify(n, largest);
    }
  }

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(n, i);
  }

  for (let i = n - 1; i > 0; i--) {
    [newArr[0], newArr[i]] = [newArr[i], newArr[0]];
    animations.push({
      array: [...newArr],
      activeIndices: [0, i],
      completedIndices: [...completedIndices],
    });
    completedIndices.push(i);    

    heapify(i, 0);
  }

  completedIndices.push(0);
  animations.push({
    array: [...newArr],
    activeIndices: [],
    completedIndices: [...completedIndices],
  });

  return animations;
}
