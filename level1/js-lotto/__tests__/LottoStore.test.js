import LottoStore from '../src/domains/LottoStore';

describe('LottoStore', () => {
  test('구입 금액을 입력하면 로또를 발급한다.', () => {
    const purchaseAmount = 5000;
    const lottoStore = new LottoStore();

    const lottos = lottoStore.buyLottos(purchaseAmount);

    expect(lottos.length).toBe(5);
  });

  describe('구입 금액 유효성 검사', () => {
    test('구입 금액이 1000원 미만일 경우 에러가 발생한다.', () => {
      const purchaseAmount = 999;
      const lottoStore = new LottoStore();

      expect(() => lottoStore.buyLottos(purchaseAmount)).toThrow();
    });

    test('구입 금액이 1000원 단위가 아닐 경우 에러가 발생한다.', () => {
      const purchaseAmount = 1001;
      const lottoStore = new LottoStore();

      expect(() => lottoStore.buyLottos(purchaseAmount)).toThrow();
    });
  });
});
