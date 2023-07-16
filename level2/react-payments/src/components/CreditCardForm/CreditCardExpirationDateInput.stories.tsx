import type { Meta, StoryObj } from '@storybook/react';

import CreditCardExpirationDateInput from './CreditCardExpirationDateInput';

const meta = {
  title: 'components/CreditCardForm/CreditCardExpirationDateInput',
  component: CreditCardExpirationDateInput,
} satisfies Meta<typeof CreditCardExpirationDateInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
