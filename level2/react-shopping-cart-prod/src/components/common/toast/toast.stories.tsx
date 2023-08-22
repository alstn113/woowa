import { useState } from 'react';

import type { Meta } from '@storybook/react';
import styled from '@emotion/styled';

import useToast from './use-toast';
import { ToastStatus } from './toast-types';
import { ToastPosition } from './toast-placement';
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

    const handleClick = () => {
      toast({
        title: 'Error Connecting...',
        description: 'You do not have permissions to perform this action.',
        status: 'error',
        position: 'top-left',
        duration: 5000,
      });
    };

    return (
      <Container>
        <Button type="button" onClick={handleClick}>
          Show Toast
        </Button>
      </Container>
    );
  },
};

export const Status = {
  render: () => {
    const toast = useToast();
    const statuses: ToastStatus[] = ['success', 'error', 'info'];
    const handleClick = (status: ToastStatus) => {
      toast({
        title: 'Title',
        description: 'Description',
        status,
      });
    };

    return (
      <Container>
        {statuses.map((status) => (
          <Button
            key={status}
            type="button"
            onClick={() => handleClick(status)}
            style={{ marginRight: '1rem' }}
          >
            {status}
          </Button>
        ))}
      </Container>
    );
  },
};

export const Duration = {
  render: () => {
    const toast = useToast();
    const [duration, setDuration] = useState(5000);

    const handleClick = () => {
      toast({
        title: 'Title',
        description: `${duration}ms Toast`,
        status: 'success',
        duration,
      });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setDuration(Number(e.target.value));
    };

    return (
      <Container>
        <input
          type="number"
          value={duration}
          onChange={handleChange}
          style={{
            marginRight: '1rem',
            border: '1px solid #ccc',
          }}
        />
        <Button
          type="button"
          onClick={handleClick}
          style={{
            marginRight: '1rem',
          }}
        >
          {duration}ms Toast
        </Button>
        <Button
          type="button"
          onClick={() => {
            toast({
              title: 'Title',
              description: 'Description',
              status: 'success',
              duration: null,
            });
          }}
        >
          Infinity Toast
        </Button>
      </Container>
    );
  },
};

export const Placement = {
  render: () => {
    const toast = useToast();
    const positions = [
      'top-left',
      'top-center',
      'top-right',
      'bottom-left',
      'bottom-center',
      'bottom-right',
    ] as ToastPosition[];

    const handleClick = (position: ToastPosition) => {
      toast({
        title: 'Title',
        description: 'Description',
        status: 'success',
        position,
      });
    };

    return (
      <Container>
        {positions.map((position) => (
          <Button
            key={position}
            type="button"
            onClick={() => handleClick(position)}
            style={{ marginRight: '1rem' }}
          >
            {position}
          </Button>
        ))}
      </Container>
    );
  },
};

const Container = styled.div`
  position: fixed;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
`;

const Button = styled.button`
  border-radius: 10px;
  padding: 0.5rem 0.75rem;
  border: 1px solid #ccc;
  background-color: #fff;
  color: #333;
  cursor: pointer;
  margin-right: 1rem;
  font-size: 1rem;
  &:hover {
    background-color: #eee;
  }
  transition: background-color 0.2s ease;
`;
