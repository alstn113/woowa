/**
 * 주어진 금액을 지폐와 동전 단위로 나누어 개수를 반환하는 함수
 * @param {number} money - 금액
 * @returns {number[]} - 지폐와 동전 단위별 개수 배열
 */
const problem5 = (money) => {
  const billLish = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  answer = [];
  for (bill of billLish) {
    answer.push(parseInt(money / bill));
    money = money % bill;
  }

  return answer;
};

module.exports = problem5;
