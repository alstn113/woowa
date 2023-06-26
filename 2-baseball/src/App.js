const MissionUtils = require("@woowacourse/mission-utils");

class App {
  computer;

  constructor() {
    this.computer = [];
  }

  generateNumbers() {
    while (this.computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.computer.includes(number)) {
        this.computer.push(number);
      }
    }
  }

  enterNumbers() {
    MissionUtils.Console.print("숫자를 입력해주세요 : ");
    try {
      const input = MissionUtils.Console.readLine();
      const numbers = input.split("").map((number) => parseInt(number));
      return numbers;
    } catch (e) {
      this.enterNumbers();
    }
  }

  checkNumbers(numbers) {
    let strike = 0;
    let ball = 0;
    for (let i = 0; i < 3; i++) {
      if (this.computer[i] === numbers[i]) {
        strike++;
      } else if (this.computer.includes(numbers[i])) {
        ball++;
      }
    }

    return { strike, ball };
  }

  printResult(result) {
    const { strike, ball } = result;
    if (strike === 0 && ball === 0) {
      MissionUtils.Console.print("낫싱");
    } else if (strike > 0 && ball === 0) {
      MissionUtils.Console.print(`${strike}스트라이크`);
    } else if (strike === 0 && ball > 0) {
      MissionUtils.Console.print(`${ball}볼`);
    } else {
      MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
    }
  }

  startOrExitGame() {
    MissionUtils.Console.print(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    );
    try {
      const input = MissionUtils.Console.readLine();
      if (input !== "1" && input !== "2") {
        throw new Error("1 또는 2를 입력해주세요.");
      }
    } catch (e) {
      MissionUtils.Console.print(e.message);
      process.exit(0);
    }
    return input;
  }

  play() {
    this.generateNumbers();
    MissionUtils.Console.print(`숫자 야구 게임을 시작합니다.`);
    while (true) {
      try {
        const numbers = this.enterNumbers();
        const result = this.checkNumbers(numbers);
        this.printResult(result);

        if (result.strike === 3) {
          MissionUtils.Console.print(
            "3개의 숫자를 모두 맞히셨습니다! 게임 종료"
          );
          const v = this.endGame();
          if (v === "1") {
            this.computer = [];
            this.play();
          } else if (v === "2") {
            MissionUtils.Console.print("게임을 종료합니다.");
            break;
          }
        }
      } catch (e) {
        MissionUtils.Console.print(e.message);
        MissionUtils.Console.print("게임종료");
        break;
      }
    }
  }
}

const app = new App();
app.play();

module.exports = App;
