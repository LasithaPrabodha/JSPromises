export function delay(milliseconds = 1) {
  // Introduce a time delay of 1 millisecond per iteration
  const startTime = Date.now();
  while (Date.now() - startTime < milliseconds) {
    // Time delay loop
  }
}

export function getTime() {
  const currentTime = new Date();

  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  return `[${hours}:${minutes}:${seconds}]`;
}

export const largeArray = Array.from({ length: 10000 }, (_, index) => index + 1);
