<template>
  <form @submit.prevent="$router.push('/')">
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
    <AppButton>Login</AppButton>
  </form>
</template>
