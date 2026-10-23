import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Card } from './Card';

test('renders card component visible', () => {
  render(<Card title="Test Title" description="Test Description" />);
  expect(screen.getByText(/test title/i)).toBeVisible();
});

test('changes background color when disabled', () => {
  render(<Card title="Disabled Card" description="Desc" disabled={true} />);
  const cardElement = screen.getByText(/disabled card/i).closest('div');
  expect(cardElement).toHaveStyle('background-color: rgb(240, 240, 240)');
  expect(cardElement).toHaveStyle('cursor: not-allowed');
});