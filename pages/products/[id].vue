<script setup lang="ts">
import type { Product } from "@/types";

// get the cached products from the index page
const { data: cached } = useNuxtData("products");

const id = computed(() => useRoute().params.id);

// change to useLazyFetch so that cached can display while fetching
const { data: product } = await useLazyFetch(
  () => `https://dummyjson.com/products/${id.value}`,
  {
    // must give a key here for each product
    key: `product-${id.value}`,
    // use default to display cached while loading
    default: () =>
      cached.value?.products.find((product: Product) => {
        return product.id === Number(id.value);
      }),
  }
);

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
        class="block mr-3 border-blue border-2 rounded"
      />
    </div>
    <pre class="my-5">{{ product }}</pre>
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
