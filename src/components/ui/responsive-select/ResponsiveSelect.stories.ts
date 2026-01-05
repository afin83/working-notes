import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { ResponsiveSelect } from './index'
import { SelectGroup, SelectItem, SelectLabel } from '../select'

const meta = {
  title: 'UI/ResponsiveSelect',
  component: ResponsiveSelect,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'text',
      description: 'The selected value',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when no option is selected',
    },
    label: {
      control: 'text',
      description: 'Label for the select (shown in mobile drawer header)',
    },
    options: {
      control: 'object',
      description: 'Array of options with value and label properties',
    },
  },
} satisfies Meta<typeof ResponsiveSelect>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { ResponsiveSelect, SelectGroup, SelectItem, SelectLabel },
    setup() {
      const selected = ref('apple')
      return { args, selected }
    },
    template: `
      <div class="max-w-md">
        <ResponsiveSelect
          v-model="selected"
          :placeholder="args.placeholder"
          :label="args.label"
          :options="args.options"
        >
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem v-for="option in args.options" :key="option.value" :value="option.value">
              {{ option.label }}
            </SelectItem>
          </SelectGroup>
        </ResponsiveSelect>
        <p class="text-sm text-muted-foreground mt-4">
          Selected: <strong>{{ selected }}</strong>
        </p>
      </div>
    `,
  }),
  args: {
    placeholder: 'Select a fruit',
    label: 'Choose your favorite fruit',
    options: [
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana' },
      { value: 'orange', label: 'Orange' },
      { value: 'grape', label: 'Grape' },
      { value: 'watermelon', label: 'Watermelon' },
    ],
  },
}

export const SmallList: Story = {
  render: (args) => ({
    components: { ResponsiveSelect, SelectGroup, SelectItem, SelectLabel },
    setup() {
      const selected = ref('small')
      return { args, selected }
    },
    template: `
      <div class="max-w-md">
        <p class="text-sm text-muted-foreground mb-3">
          On mobile, drawer height fits content exactly (2 items)
        </p>
        <ResponsiveSelect
          v-model="selected"
          :placeholder="args.placeholder"
          :label="args.label"
          :options="args.options"
        >
          <SelectGroup>
            <SelectLabel>Sizes</SelectLabel>
            <SelectItem v-for="option in args.options" :key="option.value" :value="option.value">
              {{ option.label }}
            </SelectItem>
          </SelectGroup>
        </ResponsiveSelect>
        <p class="text-sm text-muted-foreground mt-4">
          Selected: <strong>{{ selected }}</strong>
        </p>
      </div>
    `,
  }),
  args: {
    placeholder: 'Select a size',
    label: 'Choose a size',
    options: [
      { value: 'small', label: 'Small' },
      { value: 'large', label: 'Large' },
    ],
  },
}

export const LargeList: Story = {
  render: (args) => ({
    components: { ResponsiveSelect, SelectGroup, SelectItem, SelectLabel },
    setup() {
      const selected = ref('red')
      return { args, selected }
    },
    template: `
      <div class="max-w-md">
        <p class="text-sm text-muted-foreground mb-3">
          On mobile, drawer reaches max-height (400px) and scrolls (10 items)
        </p>
        <ResponsiveSelect
          v-model="selected"
          :placeholder="args.placeholder"
          :label="args.label"
          :options="args.options"
        >
          <SelectGroup>
            <SelectLabel>Colors</SelectLabel>
            <SelectItem v-for="option in args.options" :key="option.value" :value="option.value">
              {{ option.label }}
            </SelectItem>
          </SelectGroup>
        </ResponsiveSelect>
        <p class="text-sm text-muted-foreground mt-4">
          Selected: <strong>{{ selected }}</strong>
        </p>
      </div>
    `,
  }),
  args: {
    placeholder: 'Select a color',
    label: 'Choose a color',
    options: [
      { value: 'red', label: 'Red' },
      { value: 'blue', label: 'Blue' },
      { value: 'green', label: 'Green' },
      { value: 'yellow', label: 'Yellow' },
      { value: 'purple', label: 'Purple' },
      { value: 'orange', label: 'Orange' },
      { value: 'pink', label: 'Pink' },
      { value: 'brown', label: 'Brown' },
      { value: 'black', label: 'Black' },
      { value: 'white', label: 'White' },
    ],
  },
}

export const NoInitialSelection: Story = {
  render: (args) => ({
    components: { ResponsiveSelect, SelectGroup, SelectItem, SelectLabel },
    setup() {
      const selected = ref()
      return { args, selected }
    },
    template: `
      <div class="max-w-md">
        <ResponsiveSelect
          v-model="selected"
          :placeholder="args.placeholder"
          :label="args.label"
          :options="args.options"
        >
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem v-for="option in args.options" :key="option.value" :value="option.value">
              {{ option.label }}
            </SelectItem>
          </SelectGroup>
        </ResponsiveSelect>
        <p class="text-sm text-muted-foreground mt-4">
          Selected: <strong>{{ selected || 'None' }}</strong>
        </p>
      </div>
    `,
  }),
  args: {
    placeholder: 'Select a fruit',
    label: 'Choose your favorite fruit',
    options: [
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana' },
      { value: 'orange', label: 'Orange' },
    ],
  },
}

export const ResponsiveBehavior: Story = {
  render: (args) => ({
    components: { ResponsiveSelect, SelectGroup, SelectItem, SelectLabel },
    setup() {
      const selected = ref('apple')
      return { args, selected }
    },
    template: `
      <div class="max-w-md">
        <div class="bg-muted p-4 rounded-md mb-4">
          <h3 class="font-semibold mb-2">Responsive Behavior:</h3>
          <ul class="text-sm space-y-1">
            <li>• <strong>Desktop (≥640px):</strong> Shows as dropdown menu</li>
            <li>• <strong>Mobile (&lt;640px):</strong> Shows as bottom drawer</li>
          </ul>
          <p class="text-xs text-muted-foreground mt-2">
            Try resizing your browser window to see the behavior change!
          </p>
        </div>
        <ResponsiveSelect
          v-model="selected"
          :placeholder="args.placeholder"
          :label="args.label"
          :options="args.options"
        >
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem v-for="option in args.options" :key="option.value" :value="option.value">
              {{ option.label }}
            </SelectItem>
          </SelectGroup>
        </ResponsiveSelect>
        <p class="text-sm text-muted-foreground mt-4">
          Selected: <strong>{{ selected }}</strong>
        </p>
      </div>
    `,
  }),
  args: {
    placeholder: 'Select a fruit',
    label: 'Choose your favorite fruit',
    options: [
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana' },
      { value: 'orange', label: 'Orange' },
      { value: 'grape', label: 'Grape' },
      { value: 'watermelon', label: 'Watermelon' },
    ],
  },
}
