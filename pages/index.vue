<script setup>
const count = useCount();
const markdown = `
# Hello world

![my alt text](https://i.dummyjson.com/data/products/1/1.jpg)
`;
</script>
<template>
  <div>
    <MyBadComponent />
    <button @click="count++">{{ count }}</button>
    <Markdown :md="markdown" />
  </div>
</template>
