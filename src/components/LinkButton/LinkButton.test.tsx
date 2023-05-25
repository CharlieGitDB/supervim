import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LinkButton from './LinkButton';

describe('<LinkButton />', () => {
  test('it should mount', () => {
    render(<LinkButton />);
    
    const linkButton = screen.getByTestId('LinkButton');

    expect(linkButton).toBeInTheDocument();
  });
});