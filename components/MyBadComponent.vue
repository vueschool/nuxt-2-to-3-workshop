<script setup></script>
<template>
  <NuxtErrorBoundary>
    <button @click="throw createError('oh noes!');">Click Me</button>
    <template #error="{ error }">
      Error
      <button @click="error = null">Reload</button>
    </template>
  </NuxtErrorBoundary>
</template>
