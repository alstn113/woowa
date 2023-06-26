const problem3 = (number) => {
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    v = String(i).split("");
    tmp = 0;
    for (let j = 0; j < v.length; j++) {
      if (v[j] === "3" || v[j] === "6" || v[j] === "9") {
        tmp += 1;
      }
    }
    answer += tmp;
  }

  return answer;
};

module.exports = problem3;
