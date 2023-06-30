import { delay, getTime, largeArray } from "./helper.js";

function calculateSumAsync(array, currentIndex = 0, partialSum = 0) {
  if (currentIndex >= array.length) {
    return Promise.resolve(partialSum);
  }

  return new Promise((resolve) => {
    /**
     * JavaScript is single threaded. Only one set of instructions is processed at a time.
     * setTimeout will place the functionality inside Promise in the event stack and return the created Promise immediately.
     * If we remove setTimeout, the code execution is synchronous until the calculateSumAsync Promise is created
     */
    setTimeout(() => {
      const chunkSize = 100; // Process 100 elements at a time

      for (let i = currentIndex; i < currentIndex + chunkSize && i < array.length; i++) {
        delay();
        partialSum += array[i];
      }

      resolve(calculateSumAsync(array, currentIndex + chunkSize, partialSum));
    }, 0);
  });
}

console.log("Calculating sum...", getTime());

// Calculate the sum asynchronously
calculateSumAsync(largeArray).then((sum) => {
  console.log("Sum of the random array: " + sum, getTime());
});

console.log("Check out the next task", getTime());
