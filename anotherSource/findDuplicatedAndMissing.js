/*Find duplicated and missing number in an array 1 to n with an error */

const arr1 = [1,2,3,4,3]
const arr2 = [1,2,2]
const arr3 = [5,4,2,1,2]

let findDuplicatedAndMissing = (arr) => {
  let arrSorted = arr.sort()
  let n = arrSorted.length;
  let sum = (n * (n + 1)) / 2;
  let squareSum = (n * (n + 1) * (2 * n + 1)) / 6;
  let arrSum = arrSorted.reduce((a, b) => a + b);
  let arrSquareSum = arrSorted.reduce((a, b) => a + b * b);
  let diff = arrSum - sum;
  let add = (arrSquareSum - squareSum) / diff;
  let twice = (add + diff) / 2;
  let missing = add - twice;
  return [twice, missing];
}

console.log(findDuplicatedAndMissing(arr3))