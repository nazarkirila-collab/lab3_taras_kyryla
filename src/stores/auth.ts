import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

const KEY = 'chef_name'

export const useAuthStore = defineStore('auth', () => {
  const _chef = ref(localStorage.getItem(KEY) ?? '')

  const chef = computed(() => _chef.value)
  const isLoggedIn = computed(() => _chef.value !== '')

  function login(name: string) {
    _chef.value = name.trim()
    localStorage.setItem(KEY, _chef.value)
  }

  function logout() {
    _chef.value = ''
    localStorage.removeItem(KEY)
  }

  return { chef, isLoggedIn, login, logout }
})
