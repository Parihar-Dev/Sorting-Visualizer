export function countingSort(arr) {
  let animations = [];
  let newArr = [...arr];
  let completedIndices = [];

  if (newArr.length === 0) return animations;

  let min = Math.min(...newArr);
  let max = Math.max(...newArr);
  let range = max - min + 1;

  let count = new Array(range).fill(0);

  for (let i = 0; i < newArr.length; i++) {
    count[newArr[i] - min]++;
    animations.push({
      array: [...newArr],
      activeIndices: [i],
      completedIndices: [...completedIndices],
    });
  }

  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  let sortedArr = new Array(newArr.length);

  for (let i = newArr.length - 1; i >= 0; i--) {
    let value = newArr[i];
    let position = count[value - min] - 1;
    sortedArr[position] = value;
    count[value - min]--;

    animations.push({
      array: [...sortedArr],
      activeIndices: [position],
      completedIndices: [...completedIndices],
    });
  }

  for (let i = 0; i < newArr.length; i++) {
    newArr[i] = sortedArr[i];
    completedIndices.push(i);
    animations.push({
      array: [...newArr],
      activeIndices: [i],
      completedIndices: [...completedIndices],
    });
  }

  return animations;
}
