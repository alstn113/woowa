import type { Meta, StoryObj } from '@storybook/react';

import CreditCardCompanyIcon from './CreditCardCompanyIcon';

const meta = {
  title: 'components/CreditCardCompanyIcon',
  component: CreditCardCompanyIcon,
} satisfies Meta<typeof CreditCardCompanyIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BC_Card_Icon: Story = {
  args: {
    creditCardCompanyName: 'BC카드',
    size: 100,
  },
};

export const KB_Card_Icon: Story = {
  args: {
    creditCardCompanyName: '국민카드',
    size: 100,
  },
};

export const Lotte_Card_Icon: Story = {
  args: {
    creditCardCompanyName: '롯데카드',
    size: 100,
  },
};

export const Shinhan_Card_Icon: Story = {
  args: {
    creditCardCompanyName: '신한카드',
    size: 100,
  },
};

export const Woori_Card_Icon: Story = {
  args: {
    creditCardCompanyName: '우리카드',
    size: 100,
  },
};

export const Kakao_Bank_Icon: Story = {
  args: {
    creditCardCompanyName: '카카오뱅크',
    size: 100,
  },
};

export const Hana_Card_Icon: Story = {
  args: {
    creditCardCompanyName: '하나카드',
    size: 100,
  },
};

export const Hyundai_Card_Icon: Story = {
  args: {
    creditCardCompanyName: '현대카드',
    size: 100,
  },
};
