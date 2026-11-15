<script setup lang="ts">
import { computed } from 'vue'
import { useRecipesStore } from '../../stores/recipes'
import { useAuthStore } from '../../stores/auth'
import { CATEGORY_LABELS, DIFFICULTY_LABELS } from '../../types/recipe'

const store = useRecipesStore()
const auth = useAuthStore()

const myRecipes = computed(() => store.getByAuthor(auth.chef))

function removeRecipe(slug: string, title: string) {
  if (window.confirm(`Видалити рецепт «${title}»?`)) store.remove(slug)
}
</script>

<template>
  <div v-if="myRecipes.length" class="overflow-x-auto rounded-box bg-base-100">
    <table class="table">
      <thead>
        <tr>
          <th>Назва</th>
          <th>Категорія</th>
          <th>Складність</th>
          <th>Час</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="r in myRecipes" :key="r.slug">
          <td>
            <RouterLink :to="{ name: '/recipes/[slug]', params: { slug: r.slug } }" class="link link-hover font-semibold">
              {{ r.title }}
            </RouterLink>
          </td>
          <td>{{ CATEGORY_LABELS[r.category] }}</td>
          <td>{{ DIFFICULTY_LABELS[r.difficulty] }}</td>
          <td>{{ r.time }} хв</td>
          <td class="text-right">
            <button class="btn btn-error btn-outline btn-sm" @click="removeRecipe(r.slug, r.title)">Видалити</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div v-else class="rounded-box bg-base-100 py-12 text-center">
    <p class="mb-4 text-base-content/70">У вас ще немає власних рецептів.</p>
    <RouterLink to="/kitchen/add-recipe" class="btn btn-primary">Додати перший рецепт</RouterLink>
  </div>
</template>
