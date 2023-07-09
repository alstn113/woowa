import { Category } from '../../types';
import 한식 from '../../assets/category-korean.png';
import 중식 from '../../assets/category-chinese.png';
import 양식 from '../../assets/category-western.png';
import 일식 from '../../assets/category-japanese.png';
import 아시안 from '../../assets/category-asian.png';
import 기타 from '../../assets/category-etc.png';

interface RestaurantCategoryIconProps {
  category: Category;
}

const RestaurantCategoryIcon = ({ category }: RestaurantCategoryIconProps) => {
  const CATEGORY_ICON_PATH: Record<Category, string> = {
    한식,
    중식,
    양식,
    일식,
    아시안,
    기타,
  } as const;

  return <img src={CATEGORY_ICON_PATH[category]} alt={category} />;
};

export default RestaurantCategoryIcon;
