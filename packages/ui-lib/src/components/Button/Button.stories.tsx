import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultButton: Story = {
  args: {
    children: 'Button',
  },
};

export const PrimaryButton: Story = {
  args: {
    color: 'primary',
    children: 'Button',
  },
};

export const SecondaryButton: Story = {
  args: {
    color: 'secondary',
    children: 'Button',
  },
};
