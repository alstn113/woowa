import Component from '../core/Component';
import store from '../store';

class WinningNumbersInput extends Component {
  template() {
    const { lottos } = store.state;
    const isLoading = lottos.length === 0;
    if (isLoading) return '';

    return `
    <form>
      <p>지난 주 당첨번호 6개와 보너스 번호 1개를 입력해주세요.</p>
      <div>
        <div>당첨 번호</div>
        <div>보너스 번호</div>
      </div>

      <div class="winning-numbers-wrapper">
        <input type="number" class="winning-number" value="" />
        <input type="number" class="winning-number" value="" />
        <input type="number" class="winning-number" value="" />
        <input type="number" class="winning-number" value="" />
        <input type="number" class="winning-number" value="" />
        <input type="number" class="winning-number" value="" />
        <input type="number" class="bonus-number" />
      </div>

      <button class="result-button" type="button">결과 확인하기</button>
    </form>
    `;
  }

  setEvent() {
    const { enterWinningNumbers } = this.$props;
    this.addEvent('click', '.winning-numbers-input', (e) => {
      e.preventDefault();
      if (e.target.tagName !== 'BUTTON') return;

      const winningNumbers = [
        ...this.$target.querySelectorAll('.winning-number'),
      ].map((el) => Number(el.value));

      const bonusNumber = Number(
        this.$target.querySelector('.bonus-number').value,
      );
      enterWinningNumbers(winningNumbers, bonusNumber);
    });
  }
}

export default WinningNumbersInput;
