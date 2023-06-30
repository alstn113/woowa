/**
 * 숫자에 대해서 박수를 쳐야하는 지 확인하는 함수
 * @param {number} digit 확인할 숫자
 * @returns {boolean} 박수를 쳐야하는 경우 true, 아닌 경우 false
 */
const shouldClap = (digit) => {
  return [3, 6, 9].includes(digit);
};

/**
 * 주어진 숫자에 대해 3, 6, 9의 개수를 세는 함수
 * @param {number} number - 세어야 할 숫자
 * @returns {number} - 3, 6, 9의 개수
 */
const count369 = (number) => {
  const strNumber = String(number);
  let count = 0;
  for (let i = 0; i < strNumber.length; i++) {
    const digit = parseInt(strNumber[i]);
    if (shouldClap(digit)) {
      count++;
    }
  }
  return count;
};

/**
 * 주어진 숫자까지의 숫자에 대한 3, 6, 9의 개수의 합을 구하는 함수
 * @param {number} number - 합을 구해야 할 숫자
 * @returns {number} - 3, 6, 9의 개수의 합
 */
const problem3 = (number) => {
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    answer += count369(i);
  }
  return answer;
};

module.exports = problem3;
