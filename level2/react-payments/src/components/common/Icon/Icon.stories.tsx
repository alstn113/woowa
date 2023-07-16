import type { Meta, StoryObj } from '@storybook/react';

import Icon from './Icon';

const meta = {
  title: 'components/common/Icon',
  component: Icon,
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'https://avatars.githubusercontent.com/u/75781414?v=4',
    alt: 'avatar',
    w: 100,
    h: 100,
  },
};
