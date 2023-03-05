<script setup>
const { data: cached } = useNuxtData("products");

const id = computed(() => useRoute().params.id);

const { data: product } = await useLazyFetch(
  () => `https://dummyjson.com/products/${id.value}`,
  {
    key: `product-${id.value}`,
    default: () =>
      cached.value?.products.find((product) => {
        return product.id === Number(id.value);
      }),
  }
);

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
    <NuxtLink v-if="product.id < 100" :to="`/products/${product.id + 1}`"
      >Next</NuxtLink
    >
  </div>
</template>
