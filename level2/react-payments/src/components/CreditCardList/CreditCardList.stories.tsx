import type { Meta, StoryObj } from '@storybook/react';

import CreditCardList from './CreditCardList';
import { CreditCard } from '../../types';

const meta = {
  title: 'components/CreditCardList',
  component: CreditCardList,
} satisfies Meta<typeof CreditCardList>;

export default meta;

type Story = StoryObj<typeof meta>;

const creditCardList: CreditCard[] = [
  {
    creditCardCompany: 'BC카드',
    creditCardName: 'BC카드 오너',
    creditCardNumber: '1234-1234-1234-1234',
    creditCardExpirationDate: ['12', '23'],
    creditCardCVC: '123',
    creditCardOwnerName: '홍길동',
    creditCardPassword: '1234',
  },
  {
    creditCardCompany: '신한카드',
    creditCardName: '신한카드 오너',
    creditCardNumber: '1234-1234-1234-1234',
    creditCardExpirationDate: ['12', '23'],
    creditCardCVC: '123',
    creditCardOwnerName: '홍길동',
    creditCardPassword: '1234',
  },
  {
    creditCardCompany: '카카오뱅크',
    creditCardName: '카카오뱅크 오너',
    creditCardNumber: '1234-1234-1234-1234',
    creditCardExpirationDate: ['12', '23'],
    creditCardCVC: '123',
    creditCardOwnerName: '홍길동',
    creditCardPassword: '1234',
  },
];

export const Default: Story = {
  args: {
    creditCardList,
  },
};
