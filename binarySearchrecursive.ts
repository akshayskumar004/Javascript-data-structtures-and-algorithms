//binary search recursive function

//Binary search can only done on a sorted array because we are searching by making the array in to 2 parts. Of we use binary for un sorted array we get the unpredictable and unreliable results

let arr = [-5, 2, 4, 6, 10];

let indexOfNumber = (arr, target) => {
  return search(arr, target, 0, arr.length - 1);
};

let search = (arr, target, leftIndex, rightIndex) => {
  if (leftIndex > rightIndex) return -1;

  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

  if (target === arr[middleIndex]) return middleIndex;

  return target < arr[middleIndex]
    ? search(arr, target, leftIndex, middleIndex - 1)
    : search(arr, target, middleIndex + 1, rightIndex);
};

console.log(indexOfNumber(arr, 6));
