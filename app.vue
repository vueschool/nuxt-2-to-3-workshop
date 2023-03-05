<script setup>
const count = useCount();
useHead({
  titleTemplate: (title) => (title ? `${title} | My Site` : "My Site"),
});
</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
      {{ count }}
    </NuxtLayout>
  </div>
</template>

<style>
body {
  background: black;
  color: white;
}
</style>
