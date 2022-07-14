const input = [8, 7, 7, 9, 5, 4, 2, 9];

function result(input) {
  let sortArray = input.sort();
  let middleIndex = Math.floor(input.length / 2);
  let oddLength = input.length % 2 != 0;
  let median = 0;
  if (oddLength) {
    median = sortArray[middleIndex];
  } else {
    median = (sortArray[middleIndex] + sortArray[middleIndex - 1]) / 2;
  }
  return median;
}

console.log(result(input));
