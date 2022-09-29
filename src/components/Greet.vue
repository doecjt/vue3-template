<script setup lang="ts">
import { isDark, toggleDark } from '@/composables/dark'
</script>

<template>
  <div i-bi:github text="50px" />
  <h3>Hello vue3-template</h3>
  <div cursor-pointer text="30px" @click="toggleDark()">
    <div i="carbon-sun dark:carbon-moon" />
  </div>
</template>
