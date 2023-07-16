import type { Meta, StoryObj } from '@storybook/react';

import CreditCardOwnerNameInput from './CreditCardOwnerNameInput';

const meta = {
  title: 'components/CreditCardForm/CreditCardOwnerNameInput',
  component: CreditCardOwnerNameInput,
} satisfies Meta<typeof CreditCardOwnerNameInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
