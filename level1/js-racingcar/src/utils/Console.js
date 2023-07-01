import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const Console = {
  readLine: (query) => {
    // 비동기 처리를 위해 Promise 객체를 반환합니다.
    return new Promise((resolve) => {
      rl.question(query, (input) => resolve(input));
    });
  },

  print: (text) => {
    console.log(text);
  },

  close: () => {
    rl.close();
  },
};

export default Console;
