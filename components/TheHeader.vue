<script setup>
import { useUser } from "@/stores/User";
const user = useUser();
</script>
<template>
  <nav class="mb-10">
    <div class="flex bg-gray-800 text-white p-5 justify-between">
      <ul class="flex gap-4">
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink :to="{ name: 'products' }">Products</NuxtLink>
        </li>
      </ul>
      <ul class="flex gap-4">
        <template v-if="user.username">
          <li>
            {{ user.username }}
          </li>
          <li>
            <button @click="user.username = ''">Logout</button>
          </li>
        </template>
        <li v-else>
          <NuxtLink to="/login">Login</NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
