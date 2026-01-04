<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>

<template>
  <div class="p-8">
    <h1 class="text-3xl font-bold mb-4">Making Notes</h1>
    <Button>Click me!</Button>
    <Button variant="destructive" class="ml-2">Delete</Button>
    <Button variant="outline" class="ml-2">Cancel</Button>
  </div>
</template>
