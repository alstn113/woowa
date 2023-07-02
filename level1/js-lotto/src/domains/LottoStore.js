import { LOTTO } from '../constants';
import { pickUniqueNumbersInRange } from '../utils/Random';
import { validatePurchaseAmount } from '../validators';
import Lotto from './Lotto';

class LottoStore {
  buyLottos(purchaseAmount) {
    validatePurchaseAmount(purchaseAmount);
    const lottoCount = parseInt(purchaseAmount / LOTTO.PRICE);
    const lottos = this.#generateLottos(lottoCount);
    return lottos;
  }

  #generateLottos(lottoCount) {
    return Array.from({ length: lottoCount }).map(() => {
      const numbers = pickUniqueNumbersInRange(
        LOTTO.MIN_NUMBER,
        LOTTO.MAX_NUMBER,
        LOTTO.COUNT,
      );

      return new Lotto(numbers);
    });
  }
}

export default LottoStore;
