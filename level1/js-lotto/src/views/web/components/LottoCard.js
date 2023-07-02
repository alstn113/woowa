import Component from '../core/Component';

class LottoCard extends Component {
  template() {
    return `
        <div class="lotto-card__header">
          <h2>🎱 내 번호 당첨 확인 🎱</h2>
        </div>
        <div class="lotto-card__money">
          <form class="lotto-card__form">
            <label for="money">구입할 금액을 입력해주세요</label>
            <input type="number" id="money" placeholder="금액" />
            <button>구입</button>
          </form>
        </div>
    `;
  }

  setEvent() {
    const { setPurchaseAmount } = this.$props;
    this.addEvent('click', '.lotto-card__form', (e) => {
      e.preventDefault();
      if (e.target.tagName !== 'BUTTON') return;
      const amount = this.$target.querySelector('#money').value;
      setPurchaseAmount(amount);
    });
  }
}

export default LottoCard;
