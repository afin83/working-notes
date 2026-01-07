<script setup lang="ts">
import { ref } from 'vue'
import MainNav from '@/components/MainNav.vue'
import { Button } from '@/components/ui/button'
import { ResponsiveSelect } from '@/components/ui/responsive-select'
import { SelectGroup, SelectItem, SelectLabel } from '@/components/ui/select'

const selectedSize = ref('medium')
const selectedColor = ref('red')

const sizeOptions = [
  { value: 'small', label: 'Small' },
  { value: 'medium', label: 'Medium' },
]

const colorOptions = [
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
]
</script>

<template>
  <div>
    <MainNav />
    <div class="container mx-auto p-8">
      <h1 class="text-4xl font-bold mb-4">Welcome to Working Notes</h1>
      <p class="text-lg text-muted-foreground mb-8">Component Showcase</p>

      <!-- Original Components -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold mb-6">Button Component</h2>
        <div class="flex gap-3 mb-8 flex-wrap">
          <Button>Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="destructive">Destructive Button</Button>
        </div>
      </section>

      <section>
        <div class="max-w-md">
          <h2 class="text-2xl font-bold mb-4">Responsive Select Test</h2>
          <p class="text-sm text-muted-foreground mb-4">
            On desktop (≥640px): Shows as dropdown. On mobile (&lt;640px): Shows as drawer.
          </p>

          <div class="space-y-6">
            <div>
              <h3 class="text-lg font-semibold mb-2">Small List (2 items)</h3>
              <p class="text-sm text-muted-foreground mb-3">
                Drawer height should fit content exactly
              </p>
              <ResponsiveSelect
                v-model="selectedSize"
                placeholder="Select a size"
                label="Choose a size"
                :options="sizeOptions"
              >
                <SelectGroup>
                  <SelectLabel>Sizes</SelectLabel>
                  <SelectItem v-for="option in sizeOptions" :key="option.value" :value="option.value">
                    {{ option.label }}
                  </SelectItem>
                </SelectGroup>
              </ResponsiveSelect>
              <p class="text-sm text-muted-foreground mt-2">
                Selected: <strong>{{ selectedSize }}</strong>
              </p>
            </div>

            <div>
              <h3 class="text-lg font-semibold mb-2">Large List (10 items)</h3>
              <p class="text-sm text-muted-foreground mb-3">
                Drawer should reach max-height (400px) and scroll
              </p>
              <ResponsiveSelect
                v-model="selectedColor"
                placeholder="Select a color"
                label="Choose a color"
                :options="colorOptions"
              >
                <SelectGroup>
                  <SelectLabel>Colors</SelectLabel>
                  <SelectItem v-for="option in colorOptions" :key="option.value" :value="option.value">
                    {{ option.label }}
                  </SelectItem>
                </SelectGroup>
              </ResponsiveSelect>
              <p class="text-sm text-muted-foreground mt-2">
                Selected: <strong>{{ selectedColor }}</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
