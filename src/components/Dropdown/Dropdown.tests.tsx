import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Dropdown } from './Dropdown';

const sampleOptions = [
  { label: 'Option 1', value: '1' },
];

test('renders dropdown component visible', () => {
  render(<Dropdown options={sampleOptions} placeholder="Choose..." />);
  expect(screen.getByText(/choose.../i)).toBeVisible();
});

test('disables dropdown when disabled prop is true', () => {
  render(<Dropdown options={sampleOptions} disabled={true} />);
  const selectElement = screen.getByRole('combobox');
  expect(selectElement).toBeDisabled();
});