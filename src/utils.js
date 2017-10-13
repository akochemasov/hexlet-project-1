export const getRndInteger = max => Math.floor(Math.random() * max);

export const getRndIntegerInRange = (min, max) =>
  Math.floor(Math.random() * ((max - min) + 1)) + min;
