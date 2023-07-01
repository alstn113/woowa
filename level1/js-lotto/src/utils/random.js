export const pickNumberInRange = (startInclusive, endInclusive) => {
  return (
    Math.floor(Math.random() * (endInclusive - startInclusive + 1)) +
    startInclusive
  );
};

export const pickUniqueNumbersInRange = (
  startInclusive,
  endInclusive,
  count,
) => {
  const numbers = [];

  while (numbers.length < count) {
    const number = pickNumberInRange(startInclusive, endInclusive);
    if (numbers.includes(number)) continue;
    numbers.push(number);
  }
  return numbers;
};
