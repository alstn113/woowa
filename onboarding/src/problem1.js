const isWrongInput = (arr) => {
  if (arr.length !== 2) return true;
  if (arr[0] % 2 !== 1) return true;
  if (arr[0] + 1 !== arr[1]) return true;
  if (arr[0] < 1 || arr[1] > 400) return true;
  return false;
};

const plusAll = (v) => {
  return String(v)
    .split("")
    .map(Number)
    .reduce((acc, curr) => acc + curr);
};

const multiplyAll = (v) => {
  return String(v)
    .split("")
    .map(Number)
    .reduce((acc, curr) => acc * curr);
};

const getMaximumValue = (arr) => {
  const plus = arr.map((v) => plusAll(v));
  const multiply = arr.map((v) => multiplyAll(v));
  return Math.max(...plus, ...multiply);
};

const problem1 = (pobi, crong) => {
  try {
    if (isWrongInput(pobi) || isWrongInput(crong)) {
      throw new Error("Wrong Input");
    }
    const pobiMax = getMaximumValue(pobi);
    const crongMax = getMaximumValue(crong);
    console.log(pobiMax, crongMax);
    if (pobiMax > crongMax) return 1;
    if (pobiMax < crongMax) return 2;
    return 0;
  } catch {
    return -1;
  }
};

module.exports = problem1;
