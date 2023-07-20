import type { Meta, StoryObj } from '@storybook/react';

import ProductItem from './ProductItem';

const meta = {
  title: 'components/productList/ProductItem',
  component: ProductItem,
  tags: ['autodocs'],
} satisfies Meta<typeof ProductItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    product: {
      id: 1,
      name: 'CJ 스팸 클래식 340gx24개',
      price: 90880,
      imageUrl:
        'https://cdn-mart.baemin.com/sellergoods/main/3956eccd-9b74-4064-9764-ba0002bc900b.jpg?h=700&w=700',
    },
    isProductInCart: false,
    productCartQuantity: 0,
  },
};
