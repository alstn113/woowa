import type { Meta, StoryObj } from '@storybook/react';

import Header from './Header';

const meta = {
  title: 'components/base/Header',
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CreditCardListHeader: Story = {
  args: {
    title: '보유 카드',
    withBackButton: false,
  },
};

export const CreditCardCreateHeader: Story = {
  args: {
    title: '카드 추가',
    withBackButton: true,
  },
};
