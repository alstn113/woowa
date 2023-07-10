import * as S from './RestaurantList.styles';
import useRestaurantsStates from '../../hooks/restaurants/useRestaurantsStates';
import RestaurantItem from '../RestaurantItem/RestaurantItem';

const RestaurantList = () => {
  const { restaurants } = useRestaurantsStates();

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
