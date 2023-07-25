import type { Meta, StoryObj } from '@storybook/react';

import ProductItemSkeleton from './ProductItemSkeleton';

const meta = {
  title: 'components/productList/ProductItemSkeleton',
  component: ProductItemSkeleton,
  tags: ['autodocs'],
} satisfies Meta<typeof ProductItemSkeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
