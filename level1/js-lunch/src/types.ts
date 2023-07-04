export interface Restaurant {
  id: number;
  category: Category;
  name: string;
  distance: Distance;
  description: string;
  link: string;
  favorite: boolean;
}

export type CreateRestaurant = Omit<Restaurant, 'id' | 'favorite'>;

export type Category = '한식' | '중식' | '일식' | '아시안' | '양식' | '기타';

export type FilterCategory = '전체' | Category;

export type Distance = 5 | 10 | 15 | 20 | 30;

export type SortedBy = 'distance' | 'name';
