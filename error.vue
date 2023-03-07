<script setup>
const props = defineProps(["error"]);
</script>
<template>
  <button @click="clearError({ redirect: '/products' })">Go home</button>
  <pre>{{ error }}</pre>
</template>
