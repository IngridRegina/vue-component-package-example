<template>
  <div>
    <h1 class="heading">{{ message }}</h1>
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
<style scoped>
.heading {
  color: red;
}
</style>
