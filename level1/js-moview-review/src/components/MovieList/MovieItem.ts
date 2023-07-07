import Component from '../../core/Component';
import StarFilled from '../../assets/star_filled.png';
import { TMDB } from '../../contants';
import MovieDetailModal from '../MovieDetailModal';
import { $ } from '../../utils/dom';

interface MovieItemProps {
  id: number;
  title: string;
  score: number;
  posterURL: string;
  ganreIds: number[];
  description: string;
}

class MovieItem extends Component<MovieItemProps> {
  template() {
    const { id, posterURL, title, score } = this.props;

    const htmlTemplate = `
      <li data-id="${id}">
        <a href="#">
          <div class="item-card">
            <img
              class="item-thumbnail"
              src="${TMDB.POSTER_URL(posterURL)}"
              loading="lazy"
              alt="${title}"
            />
            <p class="item-title">${title}</p>
            <p class="item-score"><img src="${StarFilled}" alt="별점" />${score}</p>
          </div>
        </a>
      </li>
    `;
    return { htmlTemplate };
  }

  render() {
    this.$target.innerHTML += this.template().htmlTemplate;
  }

  setEvent() {
    const { description, ganreIds, id, posterURL, score, title } = this.props;

    this.$target.addEventListener('click', (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const movieId = target.closest('li')?.dataset.id;
      if (this.props.id !== Number(movieId)) return;

      new MovieDetailModal($('[data-component="modal"]'), {
        id,
        posterURL,
        title,
        score,
        ganreIds,
        description,
      });
    });
  }
}

export default MovieItem;
