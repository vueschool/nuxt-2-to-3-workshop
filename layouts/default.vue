<template>
  <nav class="mb-10">
    <div class="flex bg-gray-800 text-white p-5 justify-between">
      <ul class="flex gap-4">
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/products">Products</NuxtLink>
        </li>
      </ul>
      <ul class="flex">
        <li>
          <NuxtLink to="/login">Login</NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
  <div class="max-w-[1200px] mx-auto">
    <slot></slot>
  </div>
</template>
