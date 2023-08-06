import type { Meta, StoryObj } from '@storybook/react';

import DateField from './index';

const meta = {
  title: 'components/common/DateField',
  component: DateField,
  tags: ['autodocs'],
} satisfies Meta<typeof DateField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
