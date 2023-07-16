import type { Meta, StoryObj } from '@storybook/react';

import CreditCardNumberInput from './CreditCardNumberInput';

const meta = {
  title: 'components/CreditCardForm/CreditCardNumberInput',
  component: CreditCardNumberInput,
} satisfies Meta<typeof CreditCardNumberInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
