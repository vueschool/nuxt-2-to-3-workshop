<script setup>
const text = `
# Hello world

![iphone](https://i.dummyjson.com/data/products/2/1.jpg)

`;
</script>
<template>
  <Markdown :md="text"></Markdown>
</template>
