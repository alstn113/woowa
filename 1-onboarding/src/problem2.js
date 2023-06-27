/**
 * 스택을 사용하여 중복된 문자를 제거하는 함수
 * @param {string} arr - 중복 문자를 제거할 배열
 * @returns {string} - 중복 문자가 제거된 문자열
 */
const removeDuplicates = (arr) => {
  const stack = [];
  while (arr.length > 0) {
    const v = arr.shift();
    if (stack[stack.length - 1] === v) stack.pop();
    else stack.push(v);
  }
  return stack.join("");
};

/**
 * 주어진 문제에 대해서 중복된 문자를 제거하는 함수
 * @param {string} cryptogram - 중복 문자를 제거할 문자열
 * @returns {string} - 중복 문자가 제거된 결과 문자열
 */
const problem2 = (cryptogram) => {
  const arr = cryptogram.split("");
  return removeDuplicates(arr);
};

module.exports = problem2;
