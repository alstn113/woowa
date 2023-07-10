import { render, fireEvent, screen } from '@testing-library/react';

import Selector from './Selector';

describe('Selector', () => {
  const options = [
    { value: 'option1', name: 'Option 1' },
    { value: 'option2', name: 'Option 2' },
    { value: 'option3', name: 'Option 3' },
  ];

  test('renders options with correct name', () => {
    const handleChange = jest.fn();

    render(
      <Selector
        name="test-selector"
        options={options}
        onChange={handleChange}
      />,
    );

    const selectElement = screen.getByRole('combobox', { name: '' });

    expect(selectElement).toBeInTheDocument();
    expect(selectElement.tagName).toBe('SELECT');
    expect(selectElement).toHaveAttribute('name', 'test-selector');
  });

  test('triggers onChange callback', () => {
    const handleChange = jest.fn();

    render(
      <Selector
        name="test-selector"
        options={options}
        onChange={handleChange}
      />,
    );

    const selectElement = screen.getByRole('combobox', { name: '' });

    fireEvent.change(selectElement, { target: { value: 'option2' } });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });
});
