import Component from '../core/Component';
import store from '../store';

class LottoList extends Component {
  template() {
    const lottos = store.state.lottos;
    const lottoCount = lottos.length;
    const lottoList = lottos.map((lotto) => lotto.getNumbers());

    return `
      <p>총 ${lottoCount}개를 구입하였습니다.</p>
      <div class="lotto-list">
        ${lottoList
          ?.map(
            (lotto) => `
              <div class="lotto-item">
                <span class="lotto-numbers">
                  ${lotto.join(',')}
                </span>
              </div>
            `,
          )
          .join('')}
      </div>
    `;
  }
}

export default LottoList;
