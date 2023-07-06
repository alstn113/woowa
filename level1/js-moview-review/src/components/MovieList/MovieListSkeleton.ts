import Component from '../../core/Component';

class MovieListSkeleton extends Component {
  template() {
    return `
    ${Array.from({ length: 20 })
      .map(() =>
        `
            <li>
              <a href="#">
                <div class="item-card">
                  <div class="item-thumbnail skeleton"></div>
                  <div class="item-title skeleton"></div>
                  <div class="item-score skeleton"></div>
                </div>
              </a>
            </li>
          `.trim(),
      )
      .join('')}`;
  }

  render() {
    this.$target.innerHTML += this.template();
  }
}

export default MovieListSkeleton;
