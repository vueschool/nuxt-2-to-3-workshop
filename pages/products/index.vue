<script setup>
import data from "@/data.json";
const products = data.products;
</script>
<template>
  <div>
    <ul>
      <li v-for="product in products" :key="product.id">
        <NuxtLink :to="`/products/${product.id}`"
          >{{ product.id }} {{ product.title }}</NuxtLink
        >
      </li>
    </ul>
    <div class="opacity-50">
      <a class="inline-block mr-3">Previous</a>
      <a>Next</a>
    </div>
  </div>
</template>
