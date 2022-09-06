<script setup lang="ts">
const count = ref(0)
</script>

<template>
  <h3>Hello vue3-template</h3>
  <p>{{ count }}</p>
  <div class="bg-sky">click</div>
  <div bg-orange>xixi</div>
  <div
    i-twemoji-grinning-face-with-smiling-eyes
    text-80px
    hover:i-twemoji-face-with-tears-of-joy
    cursor-pointer
  />
  <p
    text="30px #1578ff"
  >attributify</p>
</template>
