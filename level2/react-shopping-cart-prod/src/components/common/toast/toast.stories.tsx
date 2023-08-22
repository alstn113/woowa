import type { Meta } from '@storybook/react';

import useToast from './use-toast';
import Toast from './toast';

const meta = {
  title: 'components/common/Toast',
  component: Toast,
  tags: ['autodocs'],
} satisfies Meta<typeof Toast>;

export default meta;

export const Default = {
  render: () => {
    const toast = useToast();

    return (
      <div>
        <div>
          <button
            type="button"
            onClick={() =>
              toast({
                status: 'info',
                title: 'Info Toast',
                duration: null,
              })
            }
          >
            Info Toast
          </button>
        </div>
        <div>
          <button
            type="button"
            onClick={() =>
              toast({
                status: 'success',
                description: 'Success Toast',
              })
            }
          >
            Success Toast
          </button>
        </div>
        <div>
          <button
            type="button"
            onClick={() =>
              toast({
                status: 'error',
                title: 'Error Connecting...',
                description:
                  'You do not have permissions to perform this action.',
              })
            }
          >
            Error Toast
          </button>
        </div>
      </div>
    );
  },
};
