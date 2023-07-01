import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const Console = {
  readLine: (query) => {
    return new Promise((resolve) => {
      rl.question(query, (input) => resolve(input));
    });
  },

  print: (query) => {
    console.log(query);
  },

  close: () => {
    rl.close();
  },
};

export default Console;
