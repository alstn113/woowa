import { MESSAGES } from '../constants';
import Console from '../utils/Console';

const OutputView = {
  print: (message) => {
    Console.print(message);
  },

  printStartGame: () => {
    OutputView.print(MESSAGES.START_GAME);
  },

  printRaceResult: () => {
    OutputView.print(MESSAGES.RACE_RESULT);
  },

  printRaceProgress: (cars) => {
    cars.forEach((car) => {
      const name = car.getName();
      const progress = '-'.repeat(car.getPosition());
      OutputView.print(`${name} : ${progress}`);
    });
    OutputView.print('');
  },

  printFinalWinners: (winners) => {
    const winnerNames = winners.map((winner) => winner.getName()).join(', ');
    OutputView.print(`${winnerNames}가 최종 우승했습니다.`);
  },
};

export default OutputView;
