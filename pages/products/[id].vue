<script lang="ts" setup>
import data from "@/data.json";

const id = computed(() => useRoute().params.id);

const product = computed(() => {
  return data.products.find((p) => p.id === Number(id.value));
});
</script>

<template>
  <pre>{{ product }}</pre>
</template>
