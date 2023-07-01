/**
 * min ~ max 사이의 랜덤한 숫자를 반환한다.
 * @param {*} min 최소값
 * @param {*} max 최대값
 * @returns {number} min ~ max 사이의 랜덤한 숫자
 */
export const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
