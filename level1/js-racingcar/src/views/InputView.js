import Console from '../utils/Console.js';

class InputView {
  async readCarNames() {
    const input = await Console.readLine();
    return input;
  }

  async readTryCount() {
    const input = await Console.readLine();
    return input;
  }
}

export default InputView;
