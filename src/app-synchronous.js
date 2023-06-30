import { delay, getTime, largeArray } from "./helper.js";

function calculateSum(array, currentIndex = 0, partialSum = 0) {
  if (currentIndex >= array.length) {
    return partialSum;
  }

  const chunkSize = 100; // Process 100 elements at a time

  for (let i = currentIndex; i < currentIndex + chunkSize && i < array.length; i++) {
    delay();
    partialSum += array[i];
  }

  return calculateSum(array, currentIndex + chunkSize, partialSum);
}

console.log("Calculating sum...", getTime());
// Calculate the sum (intentionally slow)
const sum = calculateSum(largeArray);
console.log("Sum of the random array: " + sum, getTime());

console.log("Check out the next task", getTime());
