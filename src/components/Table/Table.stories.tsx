import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
};

export default meta;
type Story = StoryObj<typeof Table>;

const sampleColumns = [
  { header: 'ID', accessor: 'id' },
  { header: 'Name', accessor: 'name' },
  { header: 'Role', accessor: 'role' },
];

const sampleData = [
  { id: '1', name: 'Alice Smith', role: 'Developer' },
  { id: '2', name: 'Bob Jones', role: 'Designer' },
  { id: '3', name: 'Charlie Brown', role: 'Manager' },
];

export const Default: Story = {
  args: {
    columns: sampleColumns,
    data: sampleData,
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    columns: sampleColumns,
    data: sampleData,
    disabled: true,
  },
};