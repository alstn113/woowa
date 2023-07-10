import * as S from './RestaurantDetailModal.styles';
import useModalAcitons from '../../hooks/modal/useModalAcitons';
import { Restaurant } from '../../types';
import RestaurantCategoryIcon from '../RestaurantCategoryIcon/RestaurantCategoryIcon';

interface RestaurantDetailModalProps {
  restaurant: Restaurant;
}

const RestaurantDetailModal = ({ restaurant }: RestaurantDetailModalProps) => {
  const { category, description, distance, link, name } = restaurant;
  const dispatch = useModalAcitons();

  const handleCloseModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  return (
    <>
      <S.ModalContainer>
        <S.RestaurantDetail>
          <S.RestaurantCategoryIconWrapper>
            <RestaurantCategoryIcon category={category} />
          </S.RestaurantCategoryIconWrapper>

          <S.RestaurantInfo>
            <S.RestaurantName>{name}</S.RestaurantName>
            <S.RestaurantDistance>
              캠퍼스부터 {distance}분 내
            </S.RestaurantDistance>
            <S.RestaurantDescription>{description}</S.RestaurantDescription>
            {link ? (
              <S.RestaurantLink>
                참고 링크:{' '}
                <a href="{link}" className="text-body">
                  {link}
                </a>
              </S.RestaurantLink>
            ) : (
              ''
            )}
          </S.RestaurantInfo>
        </S.RestaurantDetail>

        <S.CancelButton onClick={handleCloseModal}>닫기</S.CancelButton>
      </S.ModalContainer>
    </>
  );
};

export default RestaurantDetailModal;
