import { computed, type Ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { Recipe } from '../types/recipe'

const MIN = 1
const MAX = 24

export function useServings(recipe: Ref<Recipe | undefined>) {
  const route = useRoute()
  const router = useRouter()

  // кількість порцій живе в query string: ?servings=4
  const servings = computed({
    get: () => {
      const fromUrl = Number(route.query.servings)
      if (Number.isInteger(fromUrl) && fromUrl >= MIN && fromUrl <= MAX) return fromUrl
      return recipe.value?.servings ?? MIN
    },
    set: (value: number) => {
      if (!value) return
      const next = Math.min(MAX, Math.max(MIN, Math.round(value)))
      router.replace({ query: { ...route.query, servings: String(next) } })
    }
  })

  const step = (delta: number) => {
    servings.value = servings.value + delta
  }

  function scaled(amount: number): string {
    const base = recipe.value?.servings ?? 1
    const value = (amount * servings.value) / base
    return Number(value.toFixed(2)).toLocaleString('uk-UA')
  }

  return { servings, step, scaled, MIN, MAX }
}
