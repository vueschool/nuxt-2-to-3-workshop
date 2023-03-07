<script setup>
const { data: cached } = useNuxtData("products");

const id = computed(() => useRoute().params.id);

const { data: product, error } = await useLazyFetch(
  () => `https://dummyjson.com/products/${id.value}`,
  {
    key: `product-${id.value}`,
    default: () =>
      cached.value?.products.find((product) => {
        return product.id === Number(id.value);
      }),
  }
);

if (error.value) throw createError(error.value);

useHead({
  title: () => product.value?.title,
});
</script>
<template>
  <div v-if="product">
    <div class="flex">
      <NuxtImg
        v-for="image in product.images"
        :src="image"
        :alt="product.title"
        width="200"
        height="200"
      />
    </div>

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
  </div>
</template>
