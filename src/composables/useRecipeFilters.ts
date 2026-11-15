import { computed } from 'vue'
import { useRoute, useRouter, type LocationQueryRaw } from 'vue-router'
import { useRecipesStore } from '../stores/recipes'
import { isCategory, isDifficulty, type Category, type Difficulty } from '../types/recipe'

type FilterKey = 'category' | 'difficulty'

export function useRecipeFilters() {
  const route = useRoute()
  const router = useRouter()
  const store = useRecipesStore()

  function updateQuery(patch: Partial<Record<FilterKey, string>>) {
    const query: LocationQueryRaw = { ...route.query, ...patch }
    for (const key of Object.keys(query)) {
      if (query[key] === undefined || query[key] === 'all') delete query[key]
    }
    router.replace({ query })
  }

  const category = computed<Category | 'all'>({
    get: () => (isCategory(route.query.category) ? route.query.category : 'all'),
    set: (value) => updateQuery({ category: value })
  })

  const difficulty = computed<Difficulty | 'all'>({
    get: () => (isDifficulty(route.query.difficulty) ? route.query.difficulty : 'all'),
    set: (value) => updateQuery({ difficulty: value })
  })

  const recipes = computed(() =>
    store.items.filter(
      (r) =>
        (category.value === 'all' || r.category === category.value) &&
        (difficulty.value === 'all' || r.difficulty === difficulty.value)
    )
  )

  const reset = () => router.replace({ query: {} })

  return { category, difficulty, recipes, reset }
}
