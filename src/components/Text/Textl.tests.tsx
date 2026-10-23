import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Text } from './Text';

test('renders text content visible', () => {
  render(<Text content="Hello World" />);
  expect(screen.getByText(/hello world/i)).toBeVisible();
});

test('applies disabled styling when disabled prop is true', () => {
  render(<Text content="Disabled Text" disabled={true} />);
  const textElement = screen.getByText(/disabled text/i);
  expect(textElement).toHaveStyle('color: rgb(136, 136, 136)');
  expect(textElement).toHaveStyle('cursor: not-allowed');
});