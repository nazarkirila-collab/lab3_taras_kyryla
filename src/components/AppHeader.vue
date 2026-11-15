<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const auth = useAuthStore()
const router = useRouter()

function logout() {
  auth.logout()
  router.push('/')
}
</script>

<template>
  <header class="navbar bg-base-100 px-4 shadow-sm">
    <div class="flex-1 gap-2">
      <RouterLink to="/" class="btn btn-ghost text-xl">Платформа Рецептів</RouterLink>
      <ul class="menu menu-horizontal gap-1">
        <li><RouterLink to="/" active-class="menu-active">Рецепти</RouterLink></li>
        <li><RouterLink to="/kitchen" active-class="menu-active">Кухня шефа</RouterLink></li>
      </ul>
    </div>

    <div class="flex items-center gap-3">
      <template v-if="auth.isLoggedIn">
        <span class="hidden text-sm sm:inline">{{ auth.chef }}</span>
        <button class="btn btn-outline btn-sm" @click="logout">Вийти</button>
      </template>
      <RouterLink v-else to="/login" class="btn btn-primary btn-sm">Увійти</RouterLink>
    </div>
  </header>
</template>
