import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Label } from './Label';

test('renders label text visible', () => {
  render(<Label text="Test Label" />);
  expect(screen.getByText(/test label/i)).toBeVisible();
});

test('applies disabled styling when disabled prop is true', () => {
  render(<Label text="Disabled Label" disabled={true} />);
  const labelElement = screen.getByText(/disabled label/i);
  expect(labelElement).toHaveStyle('color: rgb(136, 136, 136)');
  expect(labelElement).toHaveStyle('cursor: not-allowed');
});