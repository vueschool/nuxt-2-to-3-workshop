<script setup>
const count = useCount();
</script>
<template>
  <button @click="count++">{{ count }}</button>
  <div>Hello world</div>
</template>
