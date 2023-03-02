<script setup>
const route = useRoute();

const title = ref("My title");

useHead({
  title,
  meta: [{ name: "description", content: "My amazing site." }],
});

// handle skip
const skip = ref(route.query.skip | 0);

// Fetch data
const perPage = 30;
const { data, pending } = await useFetch(
  () => `/products?skip=${skip.value}&limit=${perPage}`,
  {
    baseURL: "https://dummyjson.com/",
    onRequest() {
      useRouter().push({ query: { skip: skip.value } });
    },
  }
);
const pendingDebounced = refDebounced(pending, 1000);
const products = computed(() => data.value.products);
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
