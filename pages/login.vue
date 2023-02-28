<script setup lang="ts">
definePageMeta({
  layout: "plain-centered",
});
</script>
<template>
  <form>
    <label class="block mb-5">
      Username
      <input type="text" class="block border-[1px] border-gray-300 rounded" />
    </label>
    <label class="block mb-5">
      Password
      <input
        type="password"
        class="block border-[1px] border-gray-300 rounded"
      />
    </label>
    <button class="bg-blue-500 p-2 rounded text-white">Login</button>
  </form>
</template>
