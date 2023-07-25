import type { Meta, StoryObj } from '@storybook/react';

import PaymentSummary from './PaymentSummary';

const meta = {
  title: 'components/cart/PaymentSummary',
  component: PaymentSummary,
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentSummary>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    totalProductPrice: 10000,
    totalDeliveryFee: 2500,
    totalPrice: 12500,
  },
};
