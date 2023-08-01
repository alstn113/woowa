import type { Meta, StoryObj } from '@storybook/react';

import Calendar from './calendar';

const meta = {
  title: 'components/common/Calendar',
  component: Calendar,
  tags: ['autodocs'],
} satisfies Meta<typeof Calendar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
