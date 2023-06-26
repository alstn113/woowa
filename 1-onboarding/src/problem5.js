const problem5 = (money) => {
  answer = [];
  for (m of [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1]) {
    answer.push(parseInt(money / m));
    money = money % m;
  }

  return answer;
};

module.exports = problem5;
