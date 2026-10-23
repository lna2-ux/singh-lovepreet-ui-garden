import type { Meta, StoryObj } from '@storybook/react';
import { Img } from './Img';

const meta: Meta<typeof Img> = {
  title: 'Components/Img',
  component: Img,
};

export default meta;
type Story = StoryObj<typeof Img>;

const sampleImage = 'https://via.placeholder.com/300x200';

export const Default: Story = {
  args: {
    src: sampleImage,
    alt: 'Sample Image',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    src: sampleImage,
    alt: 'Disabled Sample Image',
    disabled: true,
  },
};