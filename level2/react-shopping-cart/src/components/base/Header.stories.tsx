import type { Meta, StoryObj } from '@storybook/react';

import Header from './Header';

const meta = {
  title: 'components/base/Header',
  component: Header,
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
