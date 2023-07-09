import { Restaurant } from '../../types';
import RestaurantCategoryIcon from '../RestaurantCategoryIcon/RestaurantCategoryIcon';

interface RestaurantDetailModalProps {
  restaurant: Restaurant;
}

const RestaurantDetailModal = ({ restaurant }: RestaurantDetailModalProps) => {
  const { category, description, distance, link, name } = restaurant;

  return (
    <>
      <div className="modal-container">
        <div className="restaurant-detail">
          <div className="restaurant__detail">
            <div>
              <div className="restaurant__category">
                <RestaurantCategoryIcon category={category} />
              </div>
              <button className="restaurant__favorite-button">
                <img src="{FavoriteIcon}" alt="즐겨찾기" />
              </button>
            </div>
            <div className="restaurant__info">
              <h3 className="restaurant__name text-subtitle">{name}</h3>
              <span className="restaurant__distance text-body">
                캠퍼스부터 {distance}분 내
              </span>
              <p className="restaurant__detail__description text-body">
                {description}
              </p>
              {link ? (
                <div className="restaurant__link">
                  참고 링크:
                  <a href="{link}" className="text-body">
                    {link}
                  </a>
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>

        <button className="button button--primary text-caption">닫기</button>
      </div>
    </>
  );
};

export default RestaurantDetailModal;
