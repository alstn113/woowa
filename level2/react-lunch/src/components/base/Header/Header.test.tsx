import { render, screen } from '@testing-library/react';

import Header from './Header';

describe('Header', () => {
  test('renders header title correctly', () => {
    render(<Header />);
    expect(screen.getByText('점심 뭐 먹지')).toBeInTheDocument();
  });
});
