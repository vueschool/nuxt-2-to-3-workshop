<script setup>
const route = useRoute();

// handle skip
const skip = ref(route.query.skip | 0);
watch(skip, () => {
  refresh();
  useRouter().push({ query: { skip: skip.value } });
});

// Fetch data
const perPage = 30;
const { data, refresh, pending } = await useFetch(
  () => `https://dummyjson.com/products?skip=${skip.value}&limit=${perPage}`
);
const products = computed(() => data.value.products);
</script>
<template>
  <div v-if="pending">loading...</div>
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
        class="inline-block mr-3"
        >Previous</a
      >
      <a
        v-if="data.skip + perPage < data.total"
        @click.prevent="skip = skip + perPage"
        >Next</a
      >
    </div>
  </div>
</template>
