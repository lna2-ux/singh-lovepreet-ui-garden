import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Img } from './Img';

test('renders image with src and alt text visible', () => {
  render(<Img src="https://via.placeholder.com/150" alt="Test Image" />);
  const imgElement = screen.getByAltText(/test image/i);
  expect(imgElement).toBeVisible();
  expect(imgElement).toHaveAttribute('src', 'https://via.placeholder.com/150');
});

test('applies disabled styling when disabled prop is true', () => {
  render(<Img src="https://via.placeholder.com/150" alt="Disabled Image" disabled={true} />);
  const imgElement = screen.getByAltText(/disabled image/i);
  expect(imgElement).toHaveStyle('filter: grayscale(100%)');
  expect(imgElement).toHaveStyle('cursor: not-allowed');
});