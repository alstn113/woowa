import Component from '../core/Component';
import StarFilled from '../assets/star_filled.png';
import StarEmpty from '../assets/star_empty.png';
import { GENRE_MAP, MOVIE_RATING_MESSAGE, TMDB } from '../contants';

interface MovieDetailModalProps {
  id: number;
  title: string;
  score: number;
  posterURL: string;
  genreIds: number[];
  description: string;
}

interface MovieDetailModalState {
  rating: number;
}

class MovieDetailModal extends Component<
  MovieDetailModalProps,
  MovieDetailModalState
> {
  setup() {
    this.state = {
      rating: 0,
    };
  }

  template() {
    const { id, posterURL, title, score, genreIds, description } = this.props;
    const { rating } = this.state;

    const htmlTemplate = `
      <div class="modal-overlay"></div>
      <div data-id="${id}" class="modal-content">
        <div class="modal-header">  
          <h2 class="modal-title">${title}</h2>
          <button class="modal-close-btn">x</button>
        </div>
        <div class="modal-body">  
          <div class="modal-thumbnail">
            <img
              src="${TMDB.POSTER_BASE_URL}/${posterURL}"
              loading="lazy"
              alt="${title}"
            />
          </div>
          <div class="modal-info">
            <div class="modal-metadata">
              <p>${genreIds.map((genre) => GENRE_MAP[genre]).join(', ')}</p>
              <p class="modal-score"><img src="${StarFilled}" alt="별점" />${score}</p>
            </div>
            <div>줄거리</div>
            <div class="modal-description">${description}</div>
            <div>
            <div class="rating-container">
              <p>내 평점</p>
              <div class="modal-rating"></div>
              <div>${rating > 0 ? MOVIE_RATING_MESSAGE[rating] : ''}</div>
            </div>
          </div>
        </div>
      </div>
    `;

    const renderComponents = () => {
      const $rating = this.$target.querySelector(
        '.modal-rating',
      ) as HTMLElement;

      [2, 4, 6, 8, 10].map((star) => {
        $rating.insertAdjacentHTML(
          'beforeend',
          `<button class="rating" data-rating="${star}"><img src="${
            star <= this.state.rating ? StarFilled : StarEmpty
          }" alt="별점" /></button>`,
        );
      });
    };

    return {
      htmlTemplate,
      renderComponents,
    };
  }

  setEvent() {
    this.$target.addEventListener('click', (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (
        !target.classList.contains('modal-overlay') &&
        !target.classList.contains('modal-close-btn')
      )
        return;

      this.$target.innerHTML = '';
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.$target.innerHTML = '';
      }
    });

    this.$target.addEventListener('click', (e: MouseEvent) => {
      e.preventDefault();
      const target = e.target as HTMLElement;

      if (!target.closest('.rating')) return;

      const rating = Number(
        (target.closest('.rating') as HTMLElement).dataset.rating,
      );
      if (!(target.closest('.rating') as HTMLElement).dataset.rating) return;

      if (this.state.rating === rating) return;

      const id = Number(
        (target.closest('[data-id]') as HTMLElement).dataset.id,
      );

      if (this.props.id !== id) return;

      this.setState({
        rating,
      });
    });
  }
}

export default MovieDetailModal;
