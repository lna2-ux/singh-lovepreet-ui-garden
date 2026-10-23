import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    color: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    text: 'Form Field Label',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    text: 'Disabled Label',
    disabled: true,
  },
};