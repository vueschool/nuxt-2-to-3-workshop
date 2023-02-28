<script setup>
import data from "@/data.json";
const products = data.products;
const product = computed(() => {
  return products.find((product) => {
    return product.id === Number(useRoute().params.id);
  });
});

useHead({
  title: () => product.value.title,
});
</script>
<template>
  <pre class="mb-5">{{ product }}</pre>
  <div class="opacity-50">
    <NuxtLink
      v-if="product.id > 1"
      :to="`/products/${product.id - 1}`"
      class="inline-block mr-3"
      >Previous</NuxtLink
    >
    <NuxtLink v-if="product.id < data.limit" :to="`/products/${product.id + 1}`"
      >Next</NuxtLink
    >
  </div>
</template>
