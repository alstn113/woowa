import type { Meta, StoryObj } from '@storybook/react';

import CreditCardView from './CreditCardView';

const meta = {
  title: 'components/CreditCardView',
  component: CreditCardView,
} satisfies Meta<typeof CreditCardView>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    creditCardCompany: '카카오뱅크',
    creditCardNumber: '1234-1234-1234-1234',
    creditCardExpirationDate: ['12', '23'],
    creditCardOwnerName: '홍길동',
  },
};
