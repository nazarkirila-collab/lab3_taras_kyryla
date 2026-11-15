<script setup lang="ts">
import { useAuthStore } from '../stores/auth'

definePage({
  meta: { requiresAuth: true },
  redirect: '/kitchen/add-recipe'
})

const auth = useAuthStore()
</script>

<template>
  <section class="space-y-6">
    <div>
      <h1 class="text-3xl font-bold">Кухня шеф-кухаря</h1>
      <p class="text-base-content/70">Ласкаво просимо, {{ auth.chef }}</p>
    </div>

    <nav role="tablist" class="tabs tabs-border">
      <RouterLink to="/kitchen/add-recipe" role="tab" class="tab" active-class="tab-active">Додати рецепт</RouterLink>
      <RouterLink to="/kitchen/my-recipes" role="tab" class="tab" active-class="tab-active">Мої рецепти</RouterLink>
    </nav>

    <RouterView />
  </section>
</template>
