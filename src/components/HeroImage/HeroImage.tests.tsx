import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HeroImage } from './HeroImage';

test('renders hero image title and subtitle visible', () => {
  render(
    <HeroImage 
      src="https://via.placeholder.com/1200x400" 
      alt="Hero" 
      title="Hero Title" 
      subtitle="Hero Subtitle" 
    />
  );
  expect(screen.getByText(/hero title/i)).toBeVisible();
  expect(screen.getByText(/hero subtitle/i)).toBeVisible();
});

test('applies disabled styling when disabled prop is true', () => {
  render(
    <HeroImage 
      src="https://via.placeholder.com/1200x400" 
      alt="Hero" 
      title="Disabled Title" 
      disabled={true} 
    />
  );
  const heroElement = screen.getByLabelText(/hero/i);
  expect(heroElement).toHaveStyle('filter: grayscale(100%)');
  expect(heroElement).toHaveStyle('cursor: not-allowed');
});