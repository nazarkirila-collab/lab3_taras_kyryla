<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useRecipesStore } from '../../stores/recipes'
import { useServings } from '../../composables/useServings'
import { CATEGORY_LABELS, DIFFICULTY_BADGE, DIFFICULTY_LABELS } from '../../types/recipe'

const route = useRoute('/recipes/[slug]')
const store = useRecipesStore()

const recipe = computed(() => store.getBySlug(route.params.slug))
const { servings, step, scaled, MIN, MAX } = useServings(recipe)

const hasNutrition = computed(() => !!recipe.value && Object.values(recipe.value.nutrition).some((v) => v > 0))
</script>

<template>
  <article v-if="recipe" class="space-y-6">
    <RouterLink to="/" class="btn btn-ghost btn-sm">← До бібліотеки</RouterLink>

    <header class="space-y-3 rounded-box bg-base-100 p-6">
      <div class="flex flex-wrap items-center gap-2">
        <span class="badge badge-outline">{{ CATEGORY_LABELS[recipe.category] }}</span>
        <span class="badge badge-soft" :class="DIFFICULTY_BADGE[recipe.difficulty]">{{ DIFFICULTY_LABELS[recipe.difficulty] }}</span>
        <span class="badge badge-ghost">{{ recipe.time }} хв</span>
      </div>
      <h1 class="text-3xl font-bold">{{ recipe.title }}</h1>
      <p class="text-base-content/70">{{ recipe.summary }}</p>
      <p class="text-sm text-base-content/60">Автор: {{ recipe.author }}</p>
    </header>

    <section class="space-y-3 rounded-box bg-base-100 p-6">
      <div class="flex flex-wrap items-center justify-between gap-3">
        <h2 class="text-xl font-semibold">Інгредієнти</h2>

        <label class="flex items-center gap-2">
          <span class="text-sm">Порцій:</span>
          <div class="join">
            <button type="button" class="join-item btn btn-sm" :disabled="servings <= MIN" @click="step(-1)">−</button>
            <input v-model.number="servings" type="number" :min="MIN" :max="MAX" class="input input-sm join-item w-16 text-center" />
            <button type="button" class="join-item btn btn-sm" :disabled="servings >= MAX" @click="step(1)">+</button>
          </div>
        </label>
      </div>

      <ul class="divide-y divide-base-300">
        <li v-for="ing in recipe.ingredients" :key="ing.name" class="flex justify-between py-2">
          <span>{{ ing.name }}</span>
          <span class="font-semibold">{{ scaled(ing.amount) }} {{ ing.unit }}</span>
        </li>
      </ul>
    </section>

    <section class="space-y-3 rounded-box bg-base-100 p-6">
      <h2 class="text-xl font-semibold">Приготування</h2>
      <ol class="list-decimal space-y-2 pl-5">
        <li v-for="(text, i) in recipe.steps" :key="i">{{ text }}</li>
      </ol>
    </section>

    <section class="space-y-3 rounded-box bg-base-100 p-6">
      <h2 class="text-xl font-semibold">Харчова цінність <span class="text-sm font-normal text-base-content/60">на 1 порцію</span></h2>
      <div v-if="hasNutrition" class="stats stats-vertical w-full border border-base-300 sm:stats-horizontal">
        <div class="stat"><div class="stat-title">Калорії</div><div class="stat-value text-2xl">{{ recipe.nutrition.calories }}</div><div class="stat-desc">ккал</div></div>
        <div class="stat"><div class="stat-title">Білки</div><div class="stat-value text-2xl">{{ recipe.nutrition.protein }}</div><div class="stat-desc">г</div></div>
        <div class="stat"><div class="stat-title">Жири</div><div class="stat-value text-2xl">{{ recipe.nutrition.fat }}</div><div class="stat-desc">г</div></div>
        <div class="stat"><div class="stat-title">Вуглеводи</div><div class="stat-value text-2xl">{{ recipe.nutrition.carbs }}</div><div class="stat-desc">г</div></div>
      </div>
      <p v-else class="text-base-content/70">Автор не вказав харчову цінність.</p>
    </section>
  </article>
</template>
