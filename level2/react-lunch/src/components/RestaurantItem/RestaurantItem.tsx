import { CATEGORY_ICON_PATH } from '../../contants';
import { Restaurant } from '../../types';

import * as S from './RestaurantItem.styles';

interface RestaurantItemProps {
  restaurant: Restaurant;
}

const RestaurantItem = ({ restaurant }: RestaurantItemProps) => {
  const { category, description, distance, favorite, id, link, name } =
    restaurant;

  return (
    <S.RestaurantItemContainer>
      <S.RestaurantCategoryIcon>
        <img src={CATEGORY_ICON_PATH[category]} alt="한식" />
      </S.RestaurantCategoryIcon>
      <S.RestaurantInfo>
        <S.RestaurantName>{name}</S.RestaurantName>
        <S.RestaurantDistance>캠퍼스부터 ${distance}분 내</S.RestaurantDistance>
        <S.RestaurantDescription>${description}</S.RestaurantDescription>
      </S.RestaurantInfo>
    </S.RestaurantItemContainer>
  );
};

export default RestaurantItem;
