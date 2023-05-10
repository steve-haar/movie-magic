import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    color: {
      description: 'The color of the component',
      control: 'radio',
      options: ['default', 'primary', 'secondary'],
      table: {
        defaultValue: { summary: 'default' },
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic = {
  args: {
    color: 'primary',
    children: 'Button',
  },
} satisfies Story;
