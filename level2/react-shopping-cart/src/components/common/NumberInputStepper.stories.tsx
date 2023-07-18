import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import NumberInputStepper from './NumberInputStepper';

const meta = {
  title: 'components/common/NumberInputStepper',
  component: NumberInputStepper,
  tags: ['autodocs'],
} satisfies Meta<typeof NumberInputStepper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 1,
  },
  render: (args) => {
    const [value, setValue] = useState(args.value);

    return (
      <NumberInputStepper value={value} onChange={(value) => setValue(value)} />
    );
  },
};

export const WithMinAndMax: Story = {
  args: {
    value: 5,
    min: 5,
    max: 10,
  },
  render: (args) => {
    const [value, setValue] = useState(args.value);

    return (
      <NumberInputStepper
        value={value}
        onChange={(value) => setValue(value)}
        min={args.min}
        max={args.max}
      />
    );
  },
};

export const WithSize: Story = {
  args: {
    value: 5,
    size: 'lg',
  },
  render: (args) => {
    const [value, setValue] = useState(args.value);

    return (
      <NumberInputStepper
        value={value}
        onChange={(value) => setValue(value)}
        size={args.size}
      />
    );
  },
};
