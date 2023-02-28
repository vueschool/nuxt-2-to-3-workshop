<script setup>
useHead({
  titleTemplate: (title) => (title ? `${title} | My Site` : "My Site"),
});
</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
