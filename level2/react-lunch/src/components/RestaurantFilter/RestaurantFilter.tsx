import { useContext } from 'react';

import { Category, SortedBy } from '../../types';
import Selector from '../common/Selector';
import RestaurantContext from '../../contexts/RestaurantContext';

import * as S from './RestaurantFilter.styles';

const RestaurantFilter = () => {
  const { filterByCategory, sortBy } = useContext(RestaurantContext);

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

  const handleFilterByCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value as Category;
    filterByCategory(category);
  };

  const handleSortBy = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sort = e.target.value as SortedBy;
    sortBy(sort);
  };

  return (
    <S.RestaurantFilterContainer>
      <Selector {...categorySelector} onChange={handleFilterByCategory} />
      <Selector {...sortSelector} onChange={handleSortBy} />
    </S.RestaurantFilterContainer>
  );
};

export default RestaurantFilter;
