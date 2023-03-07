<script setup>
useHead({
  titleTemplate: (title) => (title ? `${title} | My Store` : "My Store"),
});
</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
    <Exercise8Alert />
  </div>
</template>
