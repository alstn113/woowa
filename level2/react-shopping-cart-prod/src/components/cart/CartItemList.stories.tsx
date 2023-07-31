import type { Meta, StoryObj } from '@storybook/react';

import CartItemList from './CartItemList';

const meta = {
  title: 'components/cart/CartItemList',
  component: CartItemList,
  tags: ['autodocs'],
} satisfies Meta<typeof CartItemList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cartItems: [
      {
        id: 1,
        product: {
          id: 1,
          name: 'KP 아이스컵 107파이 32온스(국산형)',
          price: 50900,
          imageUrl:
            'https://cdn-mart.baemin.com/sellergoods/main/89b11021-4575-48cf-9221-ac527db698e9.jpg?h=700&w=700',
        },
        quantity: 1,
        checked: false,
      },
      {
        id: 2,
        product: {
          id: 2,
          name: '[코코넛용기] 92파이 16온스 아이스컵 (국산)',
          price: 43500,
          imageUrl:
            'https://cdn-mart.baemin.com/sellergoods/main/46c5529d-462a-48cb-9a26-457531a1e9dc.jpg?h=700&w=700',
        },
        quantity: 14,
        checked: false,
      },
      {
        id: 3,
        product: {
          id: 3,
          name: '서울우유 멸균우유 1Lx10개',
          price: 24600,
          imageUrl:
            'https://cdn-mart.baemin.com/sellergoods/main/24f2cc63-ad5b-4704-ade7-070777d90e11.jpg?h=300&w=300',
        },
        quantity: 14,
        checked: false,
      },
    ],
  },
};
