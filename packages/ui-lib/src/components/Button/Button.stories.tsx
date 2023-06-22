import { Button, buttonVariants, DefaultButtonProps } from './Button';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    className: {
      description: 'Additional style to apply',
    },
    variant: {
      description: 'The variant to use',
      control: 'radio',
      options: buttonVariants,
      table: {
        defaultValue: { summary: DefaultButtonProps.variant },
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    children: 'Button',
  },
} satisfies Story;

export const Variants = {
  render: () => (
    <div>
      {buttonVariants.map((variant) => (
        <Button className="mr-2" key={variant} variant={variant}>
          Button
        </Button>
      ))}
    </div>
  ),
} satisfies Story;
