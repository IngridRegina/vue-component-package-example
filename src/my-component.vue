<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>
<script setup>
const props = defineProps({
  message: {
    type: String,
    default: "Hello, world!"
  }
})
</script>
