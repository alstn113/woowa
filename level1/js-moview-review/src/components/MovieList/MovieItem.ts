import Component from '../../core/Component';
import StarFilled from '../../assets/star_filled.png';
import { TMDB } from '../../contants';

interface MovieItemProps {
  id: number;
  title: string;
  score: number;
  PosterURL: string;
}

class MovieItem extends Component<MovieItemProps> {
  template() {
    const { id, PosterURL, title, score } = this.props;

    return `
    <li data-id="${id}">
      <a href="#">
        <div class="item-card">
          <img
            class="item-thumbnail"
            src="${TMDB.POSTER_URL(PosterURL)}"
            loading="lazy"
            alt="${title}"
          />
          <p class="item-title">${title}</p>
          <p class="item-score"><img src="${StarFilled}" alt="별점" />${score}</p>
        </div>
      </a>
    </li>
  `;
  }

  render() {
    this.$target.innerHTML += this.template();
  }
}

export default MovieItem;
