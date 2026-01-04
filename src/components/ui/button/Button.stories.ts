import type { Meta, StoryObj } from '@storybook/vue3'
import { Button } from './index'

const meta = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link']
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon']
    }
  }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    default: 'Click me'
  }
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    default: 'Delete'
  }
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    default: 'Cancel'
  }
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    default: 'Secondary'
  }
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    default: 'Ghost'
  }
}

export const Link: Story = {
  args: {
    variant: 'link',
    default: 'Link'
  }
}
