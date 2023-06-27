const Message = Object.freeze({
  POBI_WRONG_INPUT: 'POBI_WRONG_INPUT',
  CRONG_WRONG_INPUT: 'CRONG_WRONG_INPUT',
});

/**
 * 입력이 잘못되었는지 확인하는 함수
 * @param {[number, number]} arr
 * @returns {boolean}
 */
const isWrongInput = (arr) => {
  if (arr.length !== 2) return true;
  if (arr[0] % 2 !== 1) return true;
  if (arr[0] + 1 !== arr[1]) return true;
  if (arr[0] < 1 || arr[1] > 400) return true;
  return false;
};

/**
 * 각 자리의 숫자를 모두 더한 수를 반환하는 수
 * @param {number} v
 * @returns {number}
 */
const plusAll = (v) => {
  return String(v)
    .split('')
    .map(Number)
    .reduce((acc, curr) => acc + curr);
};

/**
 * 각 자리의 숫자를 모두 곱한 수를 반환하는 함수
 * @param {number} v
 * @returns {number}
 */
const multiplyAll = (v) => {
  return String(v)
    .split('')
    .map(Number)
    .reduce((acc, curr) => acc * curr);
};

/**
 * 페이지에서 얻을 수 있는 최대 값을 찾는 함수
 * @param {[number, number]} arr
 * @returns {number}
 */
const getMaximumValue = (arr) => {
  const plus = arr.map((v) => plusAll(v));
  const multiply = arr.map((v) => multiplyAll(v));
  return Math.max(...plus, ...multiply);
};

/**
 * 주어진 문제에 대해서 승자를 반환하는 함수
 * @param {[number, number]} pobi pobi's pages
 * @param {[number, number]} crong crong's pages
 * @returns {number} 1: pobi win, 2: crong win, 0: draw, -1: error
 */
const problem1 = (pobi, crong) => {
  try {
    if (isWrongInput(pobi)) throw new Error(Message.POBI_WRONG_INPUT);
    if (isWrongInput(crong)) throw new Error(Message.CRONG_WRONG_INPUT);

    const pobiMax = getMaximumValue(pobi);
    const crongMax = getMaximumValue(crong);

    if (pobiMax > crongMax) return 1;
    if (pobiMax < crongMax) return 2;
    return 0;
  } catch {
    return -1;
  }
};

module.exports = problem1;
