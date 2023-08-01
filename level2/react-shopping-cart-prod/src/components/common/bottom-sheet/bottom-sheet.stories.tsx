import { useState } from 'react';

import type { Meta } from '@storybook/react';

import BottomSheet from './index';

const meta = {
  title: 'components/common/BottomSheet',
  component: BottomSheet,
  tags: ['autodocs'],
} satisfies Meta<typeof BottomSheet>;

export default meta;

export const Default = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen((prev) => !prev);
    return (
      <div>
        <button type="button" onClick={toggle}>
          open bottom sheet
        </button>
        <BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <BottomSheet.Header />
          <BottomSheet.Content>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              eligendi voluptates totam repellat sint, consequatur ipsa corporis
              labore cupiditate beatae sed non architecto, aliquam similique
              corrupti officiis sit voluptate dolorum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              eligendi voluptates totam repellat sint, consequatur ipsa corporis
              labore cupiditate beatae sed non architecto, aliquam similique
              corrupti officiis sit voluptate dolorum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              eligendi voluptates totam repellat sint, consequatur ipsa corporis
              labore cupiditate beatae sed non architecto, aliquam similique
              corrupti officiis sit voluptate dolorum.
            </p>
          </BottomSheet.Content>
        </BottomSheet>
      </div>
    );
  },
};
