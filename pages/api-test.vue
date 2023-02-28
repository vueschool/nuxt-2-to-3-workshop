<script setup>
const { data } = useFetch("/api/test/1?hello=world");
</script>
<template>
  <pre>{{ data }}</pre>
</template>
