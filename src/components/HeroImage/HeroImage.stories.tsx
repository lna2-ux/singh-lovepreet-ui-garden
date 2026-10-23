import type { Meta, StoryObj } from '@storybook/react';
import { HeroImage } from './HeroImage';

const meta: Meta<typeof HeroImage> = {
  title: 'Components/HeroImage',
  component: HeroImage,
};

export default meta;
type Story = StoryObj<typeof HeroImage>;

const sampleHeroImg = 'https://via.placeholder.com/1200x400';

export const Default: Story = {
  args: {
    src: sampleHeroImg,
    alt: 'Hero Banner',
    title: 'Welcome to Our Component Library',
    subtitle: 'Building clean and scalable React UI components.',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    src: sampleHeroImg,
    alt: 'Disabled Hero Banner',
    title: 'Disabled Hero Banner',
    subtitle: 'This hero section is disabled.',
    disabled: true,
  },
};