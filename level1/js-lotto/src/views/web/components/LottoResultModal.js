import Component from '../core/Component';
import store from '../store';

class LottoResultModal extends Component {
  template() {
    const { isModalOpen, lottoResult } = store.state;

    if (!isModalOpen) return ``;

    const matches = lottoResult.getMatches();
    const profitRate = lottoResult.getProfitRate();
    return `
    <div class="modal-overlay">
    <div class="modal-content">
      <h3 class="modal-content__header">🏆 당첨 통계 🏆</h3>
      <ul class="modal-content__body">
        <li>
          <h4>일치 갯수</h4>
          <h4>당첨금</h4>
          <h4>당첨 갯수</h4>
        </li>
        <li>
          <h4>3개</h4>
          <h4>5,000원</h4>
          <h4>${matches[0]}</h4>
        </li>
        <li>
          <h4>4개</h4>
          <h4>50,000원</h4>
          <h4>${matches[1]}</h4>
        </li>

        <li>
          <h4>5개</h4>
          <h4>1,500,000</h4>
          <h4>${matches[2]}</h4>
        </li>
        <li>
          <h4>5개 + 보너스볼</h4>
          <h4>30,000,000</h4>
          <h4>${matches[3]}</h4>
        </li>
        <li>
          <h4>6개</h4>
          <h4>2,000,000,000</h4>
          <h4>${matches[4]}</h4>
        </li>
      </ul>
      <div class="modal-content__footer">
        <h4>당신의 수익률은 ${profitRate}%입니다.</h4>
        <button class="lotto-retry-button">다시 시작하기</button>
      </div>
    </div>
  </div>
  `;
  }

  setEvent() {
    const { restartLottoGame } = this.$props;
    this.addEvent('click', '.lotto-retry-button', (e) => {
      if (e.target.tagName === 'BUTTON') {
        store.setState({ isModalOpen: false });
        restartLottoGame();
      }
    });

    this.addEvent('click', '.modal-overlay', () => {
      store.setState({ isModalOpen: false });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        store.setState({ isModalOpen: false });
      }
    });
  }
}

export default LottoResultModal;
