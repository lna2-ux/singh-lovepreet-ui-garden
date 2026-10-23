import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Table } from './Table';

const sampleColumns = [{ header: 'Name', accessor: 'name' }];
const sampleData = [{ name: 'Lovepreet' }];

test('renders table headers and data visible', () => {
  render(<Table columns={sampleColumns} data={sampleData} />);
  expect(screen.getByText(/name/i)).toBeVisible();
  expect(screen.getByText(/lovepreet/i)).toBeVisible();
});

test('applies disabled styling when disabled prop is true', () => {
  const { container } = render(<Table columns={sampleColumns} data={sampleData} disabled={true} />);
  const wrapper = container.firstChild;
  expect(wrapper).toHaveStyle('opacity: 0.6');
  expect(wrapper).toHaveStyle('cursor: not-allowed');
});