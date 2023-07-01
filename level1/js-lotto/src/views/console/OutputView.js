import { MESSAGES, PRIZE_DESCRIPTIONS, PRIZE_AMOUNTS } from '../../constants';
import Console from '../../utils/Console';

const OutputView = {
  print: (message) => {
    Console.print(message);
  },

  printLottos: (lottos) => {
    const lottoCount = lottos.length;
    OutputView.print(MESSAGES.PURCHASE_RESPONSE(lottoCount));
    lottos.forEach((lotto) => {
      OutputView.print(`[${lotto.getNumbers().join(', ')}]`);
    });
  },

  printResult: (lottoResult) => {
    const profitRate = lottoResult.getProfitRate();
    const matches = lottoResult.getMatches();

    OutputView.print('\n당첨 통계');
    OutputView.print('---');
    matches.forEach((count, idx) => {
      OutputView.print(
        `${PRIZE_DESCRIPTIONS[idx]} (${PRIZE_AMOUNTS[
          idx
        ].toLocaleString()}원) - ${count}개`,
      );
    });
    OutputView.print(`총 수익률은 ${profitRate}%입니다.`);
  },
};

export default OutputView;
