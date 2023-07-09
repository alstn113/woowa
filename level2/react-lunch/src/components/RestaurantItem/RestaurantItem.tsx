import { Restaurant } from '../../types';
import RestaurantCategoryIcon from '../RestaurantCategoryIcon/RestaurantCategoryIcon';

import * as S from './RestaurantItem.styles';

interface RestaurantItemProps {
  restaurant: Restaurant;
}

const RestaurantItem = ({ restaurant }: RestaurantItemProps) => {
  const { category, description, distance, name } = restaurant;

  return (
    <S.RestaurantItemContainer>
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
