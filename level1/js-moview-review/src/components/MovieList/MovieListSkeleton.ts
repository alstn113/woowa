import Component from '../../core/Component';

class MovieListSkeleton extends Component {
  template() {
    const htmlTemplate = `
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

    return { htmlTemplate };
  }

  render() {
    this.$target.innerHTML += this.template().htmlTemplate;
  }
}

export default MovieListSkeleton;
