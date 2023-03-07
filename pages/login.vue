<template>
  <form @submit.prevent="$router.push('/')">
    <div class="form-field mb-5">
      <label for="username" class="block"> Username </label>
      <input
        id="username"
        type="text"
        class="block border-[1px] border-gray-300 rounded"
      />
    </div>

    <div class="form-field mb-5">
      <label class="block" for="password"> Password </label>
      <input
        id="password"
        type="password"
        class="block border-[1px] border-gray-300 rounded"
      />
    </div>

    <AppButton>Login</AppButton>
  </form>
</template>
