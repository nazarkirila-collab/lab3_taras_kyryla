<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const auth = useAuthStore()
const route = useRoute()
const router = useRouter()
const name = ref('')
const error = ref('')

function submit() {
  if (name.value.trim().length < 2) {
    error.value = "Введіть ім'я шеф-кухаря (щонайменше 2 символи)"
    return
  }
  auth.login(name.value)
  const redirect = route.query.redirect
  router.push(typeof redirect === 'string' && redirect.startsWith('/kitchen') ? redirect : '/kitchen')
}
</script>

<template>
  <section class="mx-auto max-w-md">
    <form class="card card-border bg-base-100" novalidate @submit.prevent="submit">
      <div class="card-body gap-3">
        <h1 class="card-title text-2xl">Вхід для шеф-кухарів</h1>

        <fieldset class="fieldset">
          <legend class="fieldset-legend">Ім'я шеф-кухаря</legend>
          <input v-model="name" class="input w-full" :class="{ 'input-error': error }" placeholder="Наприклад, Олена" />
          <p v-if="error" class="label text-error">{{ error }}</p>
        </fieldset>

        <button type="submit" class="btn btn-primary">Увійти</button>
      </div>
    </form>
  </section>
</template>
