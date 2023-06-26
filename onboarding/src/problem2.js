const problem2 = (cryptogram) => {
  arr = cryptogram.split("");
  stack = [];
  while (arr.length > 0) {
    v = arr.shift();
    if (stack[stack.length - 1] === v) {
      stack.pop();
    } else {
      stack.push(v);
    }
  }

  return stack.join("");
};

module.exports = problem2;
