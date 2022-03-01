<script setup lang="ts">
defineProps<{
  name: string;
  title: string;
  age: number;
  location: string;
}>();
</script>

<template>
  <div class="mt-2 d-flex justify-content-center">
    <h1>{{ name }}</h1>
  </div>
  <h2 class="mt-5 d-flex justify-content-center">{{ age }}, {{ title }}</h2>
  <h3 class="mt-2 d-flex justify-content-center">{{ location }}</h3>
</template>

<style scoped></style>
