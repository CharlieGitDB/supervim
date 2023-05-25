import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MiddleOfScreen from './MiddleOfScreen';

describe('<MiddleOfScreen />', () => {
  test('it should mount', () => {
    render(<MiddleOfScreen />);
    
    const middleOfScreen = screen.getByTestId('MiddleOfScreen');

    expect(middleOfScreen).toBeInTheDocument();
  });
});