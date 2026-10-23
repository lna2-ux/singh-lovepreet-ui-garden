import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from './Button';

test('renders button component visible', () => {
  render(<Button label="Test" />);
  expect(screen.getByText(/test/i)).toBeVisible();
});

test('changes background color when disabled', () => {
  render(<Button label="Disabled" disabled={true} />);
  const buttonElement = screen.getByText(/disabled/i);
  expect(buttonElement).toHaveStyle('background-color: rgb(224, 224, 224)');
  expect(buttonElement).toHaveStyle('cursor: not-allowed');
});