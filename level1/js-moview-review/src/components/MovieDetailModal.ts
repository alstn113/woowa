import Component from '../core/Component';
import StarFilled from '../assets/star_filled.png';
import { GENRE_MAP, TMDB } from '../contants';
import { $ } from '../utils/dom';

interface MovieDetailModalProps {
  id: number;
  title: string;
  score: number;
  posterURL: string;
  genreIds: number[];
  description: string;
}

class MovieDetailModal extends Component<MovieDetailModalProps> {
  template() {
    const { posterURL, title, score, genreIds, description } = this.props;

    const htmlTemplate = `
      <div class="modal-overlay"></div>
      <div class="modal-content">
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
            <p>내 평점</p>
          </div>
          </div>
        </div>
      </div>
    `;

    return {
      htmlTemplate,
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
  }
}

export default MovieDetailModal;
