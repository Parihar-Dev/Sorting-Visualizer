export function radixSort(arr) {
  let animations = [];
  let newArr = [...arr];
  let completedIndices = [];

  if (newArr.length === 0) return animations;

  let max = Math.max(...newArr);

  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    countingSortByDigit(newArr, exp, animations, completedIndices);
  }

  return animations;
}

function countingSortByDigit(arr, exp, animations, completedIndices) {
  let output = new Array(arr.length).fill(0);
  let count = new Array(10).fill(0);

  for (let i = 0; i < arr.length; i++) {
    let digit = Math.floor(arr[i] / exp) % 10;
    count[digit]++;
    animations.push({
      array: [...arr],
      activeIndices: [i],
      completedIndices: [...completedIndices],
    });
  }

  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    let digit = Math.floor(arr[i] / exp) % 10;
    let position = count[digit] - 1;
    output[position] = arr[i];
    count[digit]--;

    animations.push({
      array: [...output],
      activeIndices: [position],
      completedIndices: [...completedIndices],
    });
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = output[i];

    if (exp * 10 > Math.max(...arr)) {
      completedIndices.push(i);
    }

    animations.push({
      array: [...arr],
      activeIndices: [i],
      completedIndices: [...completedIndices],
    });
  }
}
