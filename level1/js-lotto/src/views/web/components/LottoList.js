import Component from '../core/Component';

class LottoList extends Component {
  template() {
    const { lottos } = this.$props;
    const lottoCount = lottos.length;
    const lottoList = lottos.map((lotto) => lotto.getNumbers());

    return `
      <div class="lotto-list">
        <p>총 ${lottoCount}개를 구입하였습니다.<p/>
        ${lottoList
          ?.map(
            (lotto) => `
              <div class="lotto">
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
