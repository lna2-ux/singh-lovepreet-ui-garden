import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Radio } from './Radio';

test('renders radio component visible', () => {
  render(<Radio label="Radio Test" name="test" value="1" />);
  expect(screen.getByText(/radio test/i)).toBeVisible();
});

test('disables radio button when disabled prop is true', () => {
  render(<Radio label="Disabled Radio" name="test" value="1" disabled={true} />);
  const radioElement = screen.getByRole('radio');
  expect(radioElement).toBeDisabled();
});