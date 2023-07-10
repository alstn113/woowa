import { render, fireEvent, screen } from '@testing-library/react';

import useModalAcitons from '../../hooks/modal/useModalAcitons';
import useModalStates from '../../hooks/modal/useModalStates';
import ModalProvider from '../../state/contexts/modal/ModalProvider';

describe('ModalProvider', () => {
  const TestComponent = () => {
    const { isOpen } = useModalStates();
    const dispatch = useModalAcitons();

    return (
      <>
        <div data-testid="isOpen">{isOpen ? 'open' : 'close'}</div>
        <button
          onClick={() =>
            dispatch({ type: 'OPEN_MODAL', payload: 'Test Modal' })
          }
        >
          Open Modal
        </button>
        <button onClick={() => dispatch({ type: 'CLOSE_MODAL' })}>
          Close Modal
        </button>
      </>
    );
  };

  test('renders modal closed by default', () => {
    render(
      <ModalProvider>
        <TestComponent />
      </ModalProvider>,
    );

    const isOpenElement = screen.getByTestId('isOpen');

    expect(isOpenElement.textContent).toBe('close');
  });

  test('opens and closes modal correctly', () => {
    render(
      <ModalProvider>
        <TestComponent />
      </ModalProvider>,
    );

    const openModalButton = screen.getByText('Open Modal');
    const closeModalButton = screen.getByText('Close Modal');
    const isOpenElement = screen.getByTestId('isOpen');

    fireEvent.click(openModalButton);
    expect(isOpenElement.textContent).toBe('open');

    expect(screen.getByText('Test Modal')).toBeInTheDocument();

    fireEvent.click(closeModalButton);
    expect(isOpenElement.textContent).toBe('close');
  });
});
