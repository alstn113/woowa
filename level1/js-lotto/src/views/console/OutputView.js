import { MESSAGES } from '../../constants';
import Console from '../../utils/Console';

const OutputView = {
  print: (message) => {
    Console.print(message);
  },

  printLottos: (lottos) => {
    const lottoCount = lottos.length;
    OutputView.print(MESSAGES.PURCHASE_RESPONSE(lottoCount));
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.getNumbers().join(', ')}]`);
    });
  },

  printResult: (lottoResult) => {},
};

export default OutputView;
