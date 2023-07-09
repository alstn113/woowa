import { useContext } from 'react';

import * as S from './RestaurantList.styles';
import RestaurantContext from '../../contexts/Restaurant/RestaurantContext';
import RestaurantItem from '../RestaurantItem/RestaurantItem';

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
