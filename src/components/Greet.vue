<script setup lang="ts">
import { toggleDark } from '@/composables/dark'
</script>

<template>
  <div pt-40px flex flex-col items-center>
    <div i-bi:github text="50px" />
    <h3>Hello vue3-template</h3>
    <div cursor-pointer text="30px" @click="toggleDark()">
      <div i="carbon-sun dark:carbon-moon" />
    </div>
  </div>
</template>
