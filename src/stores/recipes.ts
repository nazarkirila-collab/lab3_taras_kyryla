import { computed, ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { seedRecipes } from '../data/recipes'
import type { Recipe } from '../types/recipe'

const KEY = 'recipes'

function load(): Recipe[] {
  try {
    const saved = JSON.parse(localStorage.getItem(KEY) ?? 'null')
    if (Array.isArray(saved) && saved.length) return saved
  } catch {
    // пошкоджені дані — беремо початковий набір
  }
  return seedRecipes
}

export const useRecipesStore = defineStore('recipes', () => {
  const _items = ref<Recipe[]>(load())

  watch(_items, (value) => localStorage.setItem(KEY, JSON.stringify(value)), { deep: true })

  const items = computed(() => _items.value)

  const getBySlug = (slug: string) => _items.value.find((r) => r.slug === slug)
  const getByAuthor = (name: string) => _items.value.filter((r) => r.author === name)

  function add(recipe: Recipe) {
    _items.value.unshift(recipe)
  }

  function remove(slug: string) {
    _items.value = _items.value.filter((r) => r.slug !== slug)
  }

  return { items, getBySlug, getByAuthor, add, remove }
})
