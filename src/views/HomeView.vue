<script setup lang="ts">
import MainNav from '@/components/MainNav.vue'
import { Button } from '@/components/ui/button'
</script>

<template>
  <div>
    <MainNav />
    <div class="container mx-auto p-8">
      <h1 class="text-4xl font-bold mb-4">Welcome to Working Notes</h1>
      <p class="text-lg text-muted-foreground mb-6">Your personal note-taking application.</p>

      <div class="flex gap-3">
        <Button>Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="outline">Outline Button</Button>
        <Button variant="destructive">Destructive Button</Button>
      </div>
    </div>
  </div>
</template>
