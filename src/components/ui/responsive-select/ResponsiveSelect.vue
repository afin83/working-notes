<script setup lang="ts">
import { ref, computed } from 'vue'
import { useMediaQuery } from '@vueuse/core'
import { Check, ChevronDown } from 'lucide-vue-next'
import { Select, SelectContent, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'

interface ResponsiveSelectProps {
  modelValue?: string
  placeholder?: string
  label?: string
  options: Array<{
    value: string
    label: string
  }>
}

const props = defineProps<ResponsiveSelectProps>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const isDesktop = useMediaQuery('(min-width: 640px)')
const drawerOpen = ref(false)

const selectedOption = computed(() => {
  return props.options.find((opt) => opt.value === props.modelValue)
})

const handleSelect = (value: string) => {
  emit('update:modelValue', value)
  drawerOpen.value = false
}
</script>

<template>
  <!-- Desktop: Regular Select -->
  <Select
    v-if="isDesktop"
    :model-value="modelValue"
    @update:model-value="(value) => value && emit('update:modelValue', value as string)"
  >
    <SelectTrigger class="w-full">
      <SelectValue :placeholder="placeholder" />
    </SelectTrigger>
    <SelectContent class="responsive-select-content">
      <slot />
    </SelectContent>
  </Select>

  <!-- Mobile: Drawer -->
  <Sheet v-else v-model:open="drawerOpen">
    <SheetTrigger as-child>
      <Button
        variant="outline"
        class="w-full justify-between font-normal"
        :aria-label="`${label || 'Select an option'}. Current selection: ${selectedOption?.label || 'None'}`"
      >
        <span>{{ selectedOption?.label || placeholder }}</span>
        <ChevronDown class="h-4 w-4 opacity-50 shrink-0" aria-hidden="true" />
      </Button>
    </SheetTrigger>
    <SheetContent side="bottom" class="h-auto max-h-[400px]" hide-close>
      <SheetHeader class="border-b pb-4">
        <SheetTitle>{{ label || 'Select an option' }}</SheetTitle>
      </SheetHeader>
      <div
        role="listbox"
        :aria-label="label || 'Select an option'"
        class="flex flex-col gap-0.5 px-3 pt-3 pb-5 overflow-y-auto max-h-[calc(400px-4rem)]"
      >
        <div
          v-for="option in options"
          :key="option.value"
          role="option"
          :aria-selected="option.value === modelValue"
          :tabindex="0"
          class="relative flex items-center justify-between min-h-[48px] px-2 pl-8 rounded-md cursor-pointer transition-all duration-100"
          :class="
            option.value === modelValue
              ? 'bg-accent text-accent-foreground'
              : 'hover:bg-accent hover:text-accent-foreground'
          "
          @click="handleSelect(option.value)"
          @keydown.enter="handleSelect(option.value)"
          @keydown.space.prevent="handleSelect(option.value)"
        >
          <span>{{ option.label }}</span>
          <Check
            v-if="option.value === modelValue"
            class="h-4 w-4 absolute left-2"
            aria-hidden="true"
          />
        </div>
      </div>
    </SheetContent>
  </Sheet>
</template>

<style>
@import './responsive-select.css';
</style>
