import Component from '../core/Component';
import StarFilled from '../assets/star_filled.png';
import { TMDB } from '../contants';

interface MovieDetailModalProps {
  id: number;
  title: string;
  score: number;
  posterURL: string;
  ganreIds: number[];
  description: string;
}

class MovieDetailModal extends Component<MovieDetailModalProps> {
  template() {
    const { posterURL, title, score } = this.props;

    const htmlTemplate = `
      <div class="modal-content">
        <div class="modal-header">  
          <h2 class="modal-title">${title}</h2>
          <button class="modal-close-btn">X</button>
        </div>
        <div class="modal-body">  
          <div class="modal-thumbnail">
            <img
              src="${TMDB.POSTER_URL(posterURL)}"
              loading="lazy"
              alt="${title}"
            />
          </div>
          <div class="modal-info">
            <p class="modal-score"><img src="${StarFilled}" alt="별점" />${score}</p>
            <p class="modal-description">${this.props.description}</p>
          </div>
        </div>
      </div>
    `;

    return {
      htmlTemplate,
    };
  }

  setEvent() {
    this.$target.addEventListener('keyup', (e) => {
      if (e.key === 'Escape') {
        this.$target.classList.remove('active');
      }
    });
  }
}

export default MovieDetailModal;
