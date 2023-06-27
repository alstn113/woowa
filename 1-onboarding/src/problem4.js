/**
 * 대문자 알파벳을 뒤집는 함수
 * @param {string} char - 대문자 알파벳
 * @returns {string} - 뒤집힌 대문자 알파벳
 */
const reverseUpperCase = (char) => {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return upper[26 - upper.indexOf(char) - 1];
};

/**
 * 소문자 알파벳을 뒤집는 함수
 * @param {string} char - 소문자 알파벳
 * @returns {string} - 뒤집힌 소문자 알파벳
 */
const reverseLowerCase = (char) => {
  const lower = "abcdefghijklmnopqrstuvwxyz";
  return lower[26 - lower.indexOf(char) - 1];
};

/**
 * 주어진 단어에서 알파벳을 뒤집는 함수
 * @param {string} word - 뒤집어야 할 단어
 * @returns {string} - 알파벳이 뒤집힌 결과 단어
 */
const reverseWord = (word) => {
  return word
    .split("")
    .map((char) => {
      if (char >= "A" && char <= "Z") {
        return reverseUpperCase(char);
      } else if (char >= "a" && char <= "z") {
        return reverseLowerCase(char);
      } else {
        return char;
      }
    })
    .join("");
};

/**
 * 주어진 단어의 알파벳을 뒤집는 함수
 * @param {string} word - 뒤집어야 할 단어
 * @returns {string} - 알파벳이 뒤집힌 결과 단어
 */
const problem4 = (word) => {
  return reverseWord(word);
};

module.exports = problem4;
