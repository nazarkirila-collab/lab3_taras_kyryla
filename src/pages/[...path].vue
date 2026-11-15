<script setup lang="ts">
// повторюваний параметр: адреса залишається без змін, навіть якщо в ній є «/»
definePage({ path: '/:path(.*)*' })
</script>

<template>
  <section class="space-y-3 py-12 text-center">
    <p class="text-8xl font-extrabold text-primary">404</p>
    <h1 class="text-2xl font-bold">Сторінку не знайдено</h1>
    <p class="text-base-content/70">Такого рецепту або сторінки не існує.</p>
    <RouterLink to="/" class="btn btn-primary">До бібліотеки рецептів</RouterLink>
  </section>
</template>
