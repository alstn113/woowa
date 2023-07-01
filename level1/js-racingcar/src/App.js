import { Console } from './utils/Console';
class App {
  constructor() {}

  async processInput() {
    try {
      const input = await Console.readLine();
      console.log(`You entered: ${input}`);
    } catch (error) {
      console.error('Error occurred:', error);
    } finally {
      Console.close();
    }
  }

  async play() {
    Console.print(
      '경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분)',
    );
    await this.processInput();

    Console.print('시도할 회수는 몇회인가요?');
  }
}

export default App;
