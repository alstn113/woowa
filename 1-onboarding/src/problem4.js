const problem4 = (word) => {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";

  return word
    .split("")
    .map((v) => {
      if (upper.includes(v)) {
        return upper[26 - upper.indexOf(v) - 1];
      } else if (lower.includes(v)) {
        return lower[26 - lower.indexOf(v) - 1];
      } else {
        return v;
      }
    })
    .join("");
};

console.log(problem4("I love you"));

module.exports = problem4;
