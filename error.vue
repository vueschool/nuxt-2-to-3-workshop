<script setup>
const props = defineProps(["error"]);
</script>
<template>
  <div class="h-[100vh] flex justify-center items-center">
    <div class="text-center">
      <h1 class="text-9xl">{{ error.statusCode }}</h1>
      <p class="text-3xl">{{ error.statusMessage }}</p>
      <AppButton class="mt-6" @click="clearError({ redirect: '/products' })"
        >Go home</AppButton
      >
    </div>
  </div>
</template>
