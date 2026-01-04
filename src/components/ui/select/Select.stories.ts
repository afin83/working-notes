import type { Meta, StoryObj } from '@storybook/vue3'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from './index'

const meta = {
  title: 'UI/Select',
  component: Select,
  tags: ['autodocs'],
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue },
    template: `
      <Select>
        <SelectTrigger class="w-[180px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="orange">Orange</SelectItem>
            <SelectItem value="grape">Grape</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    `,
  }),
}

export const WithMultipleGroups: Story = {
  render: () => ({
    components: { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue },
    template: `
      <Select>
        <SelectTrigger class="w-[180px]">
          <SelectValue placeholder="Select a food" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="orange">Orange</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>Vegetables</SelectLabel>
            <SelectItem value="carrot">Carrot</SelectItem>
            <SelectItem value="broccoli">Broccoli</SelectItem>
            <SelectItem value="spinach">Spinach</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    `,
  }),
}

export const Disabled: Story = {
  render: () => ({
    components: { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue },
    template: `
      <Select disabled>
        <SelectTrigger class="w-[180px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    `,
  }),
}
