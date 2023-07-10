import { useCallback } from 'react';

import * as S from './RestaurantItem.styles';
import useModalAcitons from '../../hooks/modal/useModalAcitons';
import { Restaurant } from '../../types';
import RestaurantCategoryIcon from '../RestaurantCategoryIcon/RestaurantCategoryIcon';
import RestaurantDetailModal from '../RestaurantDetailModal/RestaurantDetailModal';

interface RestaurantItemProps {
  restaurant: Restaurant;
}

const RestaurantItem = ({ restaurant }: RestaurantItemProps) => {
  const { category, description, distance, name } = restaurant;
  const dispatch = useModalAcitons();

  const handleOpenDetailModal = useCallback(() => {
    dispatch({
      type: 'OPEN_MODAL',
      payload: <RestaurantDetailModal restaurant={restaurant} />,
    });
  }, [dispatch, restaurant]);

  return (
    <S.RestaurantItemContainer onClick={handleOpenDetailModal}>
      <S.RestaurantCategoryIconWrapper>
        <RestaurantCategoryIcon category={category} />
      </S.RestaurantCategoryIconWrapper>
      <S.RestaurantInfo>
        <S.RestaurantName>{name}</S.RestaurantName>
        <S.RestaurantDistance>캠퍼스부터 {distance}분 내</S.RestaurantDistance>
        <S.RestaurantDescription>{description}</S.RestaurantDescription>
      </S.RestaurantInfo>
    </S.RestaurantItemContainer>
  );
};

export default RestaurantItem;
