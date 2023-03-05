<script setup lang="ts">
const user = useUser();
definePageMeta({
  layout: "plain-centered",
});
</script>
<template>
  <form @submit.prevent="$router.push('/')">
    <label class="block mb-5">
      Username
      <input
        v-model="user.username"
        type="text"
        class="block border-[1px] border-gray-300 rounded"
      />
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
