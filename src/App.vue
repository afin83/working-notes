<script setup lang="ts">
  import MainNav from '@/components/MainNav.vue'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
</script>

<template>

<div>
  <MainNav />
</div>

  <div class="p-8">
    <h1 class="text-3xl font-bold mb-4">Making Notes</h1>

    <div class="mb-4">
      <Button>Click me!</Button>
      <Button variant="destructive" class="ml-2">Delete</Button>
      <Button variant="outline" class="ml-2">Cancel</Button>
    </div>

    <div class="max-w-xs">
      <Select>
        <SelectTrigger>
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
    </div>
  </div>
</template>
