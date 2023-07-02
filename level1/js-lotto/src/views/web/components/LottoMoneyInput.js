import Component from '../core/Component';

class LottoMoneyInput extends Component {
  template() {
    return `
        <div class="lotto-money-input__header">
          <h2>🎱 내 번호 당첨 확인 🎱</h2>
        </div>
        <div class="lotto-money-input__money">
          <form class="lotto-money-input__form">
            <label for="money">구입할 금액을 입력해주세요</label>
            <input type="number" id="money" placeholder="금액" />
            <button>구입</button>
          </form>
        </div>
    `;
  }

  setEvent() {
    const { buyLottos } = this.$props;
    this.addEvent('click', '.lotto-money-input__form', (e) => {
      e.preventDefault();
      if (e.target.tagName !== 'BUTTON') return;
      const amount = Number(this.$target.querySelector('#money').value);
      buyLottos(amount);
    });
  }
}

export default LottoMoneyInput;
