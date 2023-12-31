/**
 * step 1의 시작점이 되는 파일입니다.
 * 브라우저 환경에서 사용하는 css 파일 등을 불러올 경우 정상적으로 빌드할 수 없습니다.
 */

import LottoController from './controllers/LottoController';

class App {
  #lottoController;

  constructor() {
    this.#lottoController = null;
  }

  async play() {
    while (true) {
      this.#lottoController = new LottoController();
      await this.#lottoController.readPurchaseAmount();
      await this.#lottoController.readWinningNumbers();
      await this.#lottoController.readBonusNumber();
      this.#lottoController.printLottoResult();

      const retry = await this.#lottoController.readCommand();

      if (retry) continue;

      this.#lottoController.exit();
      break;
    }
  }
}

const app = new App();
app.play();
