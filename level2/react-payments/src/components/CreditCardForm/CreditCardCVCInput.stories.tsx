import type { Meta, StoryObj } from '@storybook/react';

import CreditCardCVCInput from './CreditCardCVCInput';

const meta = {
  title: 'components/CreditCardForm/CreditCardCVCInput',
  component: CreditCardCVCInput,
} satisfies Meta<typeof CreditCardCVCInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
