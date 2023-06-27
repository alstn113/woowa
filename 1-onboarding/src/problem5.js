/**
 * 지폐와 동전의 단위 리스트
 * @type {number[]}
 */
const billList = Object.freeze([
  50_000, 10_000, 5_000, 1_000, 500, 100, 50, 10, 1,
]);

/**
 * 주어진 금액을 지폐와 동전 단위로 나누어 개수를 반환하는 함수
 * @param {number} money - 금액
 * @returns {number[]} - 지폐와 동전 단위별 개수 배열
 */
const problem5 = (money) => {
  answer = [];
  for (bill of billList) {
    answer.push(parseInt(money / bill));
    money = money % bill;
  }

  return answer;
};

module.exports = problem5;
