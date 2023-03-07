<script setup>
const route = useRoute();

// handle skip
const skip = ref(route.query.skip | 0);
watch(skip, () => useRouter().push({ query: { skip: skip.value } }));

// Fetch product data
const perPage = 30;
const { data, pending } = await useFetch(
  () => `https://dummyjson.com/products?skip=${skip.value}&limit=${perPage}`,
  { key: "products" }
);
const products = computed(() => data.value.products);

// handle loading
const pendingDebounced = refDebounced(pending, 1000);
</script>
<template>
  <div v-if="pendingDebounced">loading...</div>
  <div v-else>
    <ul>
      <li v-for="product in products" :key="product.id">
        <NuxtLink :to="`/products/${product.id}`"
          >{{ product.id }} {{ product.title }}</NuxtLink
        >
      </li>
    </ul>
    <div class="opacity-50">
      <a
        @click.prevent="skip = skip - perPage"
        v-if="data.skip !== 0"
        class="inline-block mr-3 cursor-pointer"
        >Previous</a
      >
      <a
        v-if="data.skip + perPage < data.total"
        @click.prevent="skip = skip + perPage"
        class="cursor-pointer"
        >Next</a
      >
    </div>
  </div>
</template>
