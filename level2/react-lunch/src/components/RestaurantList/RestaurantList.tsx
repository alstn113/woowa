import { useContext } from 'react';

import RestaurantContext from '../../contexts/Restaurant/RestaurantContext';
import RestaurantItem from '../RestaurantItem/RestaurantItem';

import * as S from './RestaurantList.styles';

const RestaurantList = () => {
  const { restaurants } = useContext(RestaurantContext);

  return (
    <section>
      <S.RestauratnListContainer>
        {restaurants.map((restaurant) => {
          return <RestaurantItem key={restaurant.id} restaurant={restaurant} />;
        })}
      </S.RestauratnListContainer>
    </section>
  );
};

export default RestaurantList;
