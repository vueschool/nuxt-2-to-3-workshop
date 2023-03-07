<script lang="ts" setup>
import data from "@/data.json";

const id = computed(() => useRoute().params.id);

const product = computed(() => {
  return data.products.find((p) => p.id === Number(id.value));
});

useHead({
  title: () => product.value?.title,
});
</script>

<template>
  <pre>{{ product }}</pre>
  <div v-if="product" class="opacity-50">
    <NuxtLink
      v-if="product.id > 1"
      :to="`/products/${product.id - 1}`"
      class="inline-block mr-3"
      >Previous</NuxtLink
    >
    <NuxtLink v-if="product.id < 100" :to="`/products/${product.id + 1}`"
      >Next</NuxtLink
    >
  </div>
</template>
