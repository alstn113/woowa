import { MESSAGES } from '../constants';
import Console from '../utils/Console';

class OutputView {
  printStartGame() {
    Console.print(MESSAGES.START_GAME);
  }

  printRaceResult() {
    Console.print(MESSAGES.RACE_RESULT);
    //TODO: 자동차 경주 과정 출력
    Console.print(); // 12,  321가 최종 우승했습니다. //TODO: 우승자 배열로 출력
  }
}

export default OutputView;
