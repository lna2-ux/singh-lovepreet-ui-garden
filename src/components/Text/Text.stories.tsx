import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    color: { control: 'color' },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    content: 'This is body text rendered inside the Text component.',
    size: 'medium',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    content: 'This is disabled text rendered inside the Text component.',
    size: 'medium',
    disabled: true,
  },
};