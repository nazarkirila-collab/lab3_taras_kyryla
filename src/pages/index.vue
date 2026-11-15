<script setup lang="ts">
import RecipeCard from '../components/RecipeCard.vue'
import { useRecipeFilters } from '../composables/useRecipeFilters'
import { CATEGORIES, CATEGORY_LABELS, DIFFICULTIES, DIFFICULTY_LABELS } from '../types/recipe'

const { category, difficulty, recipes, reset } = useRecipeFilters()
</script>

<template>
  <section class="space-y-6">
    <div>
      <h1 class="text-3xl font-bold">Бібліотека рецептів</h1>
      <p class="text-base-content/70">Знайдено: {{ recipes.length }}</p>
    </div>

    <form class="flex flex-wrap items-end gap-4 rounded-box bg-base-100 p-4" @submit.prevent>
      <fieldset class="fieldset min-w-52 flex-1">
        <legend class="fieldset-legend">Категорія</legend>
        <select v-model="category" class="select w-full">
          <option value="all">Усі категорії</option>
          <option v-for="c in CATEGORIES" :key="c" :value="c">{{ CATEGORY_LABELS[c] }}</option>
        </select>
      </fieldset>

      <fieldset class="fieldset min-w-52 flex-1">
        <legend class="fieldset-legend">Складність</legend>
        <select v-model="difficulty" class="select w-full">
          <option value="all">Будь-яка</option>
          <option v-for="d in DIFFICULTIES" :key="d" :value="d">{{ DIFFICULTY_LABELS[d] }}</option>
        </select>
      </fieldset>

      <button type="button" class="btn btn-ghost" @click="reset">Скинути</button>
    </form>

    <div v-if="recipes.length" class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <RecipeCard v-for="r in recipes" :key="r.slug" :recipe="r" />
    </div>
    <p v-else class="rounded-box bg-base-100 py-12 text-center text-base-content/70">
      За цими параметрами рецептів не знайдено.
    </p>
  </section>
</template>
