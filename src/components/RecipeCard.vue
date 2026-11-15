<script setup lang="ts">
import { CATEGORY_LABELS, DIFFICULTY_BADGE, DIFFICULTY_LABELS, type Recipe } from '../types/recipe'

defineProps<{ recipe: Recipe }>()
</script>

<template>
  <article class="card card-border bg-base-100 hover:border-primary">
    <div class="card-body gap-2">
      <div class="flex flex-wrap items-center gap-2">
        <span class="badge badge-outline badge-sm">{{ CATEGORY_LABELS[recipe.category] }}</span>
        <span class="badge badge-soft badge-sm" :class="DIFFICULTY_BADGE[recipe.difficulty]">
          {{ DIFFICULTY_LABELS[recipe.difficulty] }}
        </span>
      </div>

      <h3 class="card-title">
        <RouterLink :to="{ name: '/recipes/[slug]', params: { slug: recipe.slug } }" class="link link-hover">
          {{ recipe.title }}
        </RouterLink>
      </h3>

      <p class="line-clamp-2 text-base-content/70">{{ recipe.summary }}</p>
      <p class="mt-auto pt-2 text-sm font-semibold text-warning">{{ recipe.time }} хв</p>
    </div>
  </article>
</template>
