import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: 'primaryBtn',
    text: 'Primary Button'
  },
};

export const Secondary: Story = {
  args: {
    label: 'secondaryBtn',
    text: 'Secondary Button'
  },
};
