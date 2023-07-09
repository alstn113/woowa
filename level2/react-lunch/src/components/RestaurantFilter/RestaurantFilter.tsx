import Selector from '../common/Selector';

import * as S from './RestaurantFilter.styles';

const RestaurantFilter = () => {
  const categorySelector = {
    name: 'category',
    options: [
      { value: '전체', name: '전체' },
      { value: '한식', name: '한식' },
      { value: '중식', name: '중식' },
      { value: '일식', name: '일식' },
      { value: '양식', name: '양식' },
      { value: '아시안', name: '아시안' },
      { value: '기타', name: '기타' },
    ],
  };

  const sortSelector = {
    name: 'sort',
    options: [
      { value: 'name', name: '이름순' },
      { value: 'distance', name: '거리순' },
    ],
  };

  return (
    <S.RestaurantFilterContainer>
      <Selector {...categorySelector} />
      <Selector {...sortSelector} />
    </S.RestaurantFilterContainer>
  );
};

export default RestaurantFilter;
