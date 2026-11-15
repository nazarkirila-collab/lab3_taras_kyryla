<script setup lang="ts">
import { useRecipeForm } from '../../composables/useRecipeForm'
import { CATEGORIES, CATEGORY_LABELS, DIFFICULTIES, DIFFICULTY_LABELS } from '../../types/recipe'

const { form, errors, addIngredient, removeIngredient, submit } = useRecipeForm()
</script>

<template>
  <form class="max-w-2xl space-y-2 rounded-box bg-base-100 p-6" novalidate @submit.prevent="submit">
    <fieldset class="fieldset">
      <legend class="fieldset-legend">Назва</legend>
      <input v-model="form.title" class="input w-full" :class="{ 'input-error': errors.title }" />
      <p v-if="errors.title" class="label text-error">{{ errors.title }}</p>
    </fieldset>

    <fieldset class="fieldset">
      <legend class="fieldset-legend">Slug (адреса сторінки)</legend>
      <input v-model="form.slug" class="input w-full" :class="{ 'input-error': errors.slug }" placeholder="my-recipe" />
      <p v-if="errors.slug" class="label text-error">{{ errors.slug }}</p>
    </fieldset>

    <div class="grid gap-4 sm:grid-cols-2">
      <fieldset class="fieldset">
        <legend class="fieldset-legend">Категорія</legend>
        <select v-model="form.category" class="select w-full">
          <option v-for="c in CATEGORIES" :key="c" :value="c">{{ CATEGORY_LABELS[c] }}</option>
        </select>
      </fieldset>
      <fieldset class="fieldset">
        <legend class="fieldset-legend">Складність</legend>
        <select v-model="form.difficulty" class="select w-full">
          <option v-for="d in DIFFICULTIES" :key="d" :value="d">{{ DIFFICULTY_LABELS[d] }}</option>
        </select>
      </fieldset>
      <fieldset class="fieldset">
        <legend class="fieldset-legend">Час приготування, хв</legend>
        <input v-model.number="form.time" type="number" min="1" class="input w-full" :class="{ 'input-error': errors.time }" />
        <p v-if="errors.time" class="label text-error">{{ errors.time }}</p>
      </fieldset>
      <fieldset class="fieldset">
        <legend class="fieldset-legend">Кількість порцій (для інгредієнтів)</legend>
        <input v-model.number="form.servings" type="number" min="1" class="input w-full" :class="{ 'input-error': errors.servings }" />
        <p v-if="errors.servings" class="label text-error">{{ errors.servings }}</p>
      </fieldset>
    </div>

    <fieldset class="fieldset">
      <legend class="fieldset-legend">Коротка анотація</legend>
      <textarea v-model="form.summary" rows="2" class="textarea w-full" :class="{ 'textarea-error': errors.summary }"></textarea>
      <p v-if="errors.summary" class="label text-error">{{ errors.summary }}</p>
    </fieldset>

    <fieldset class="fieldset">
      <legend class="fieldset-legend">Інгредієнти</legend>
      <div v-for="row in form.ingredients" :key="row.id" class="mb-2 flex gap-2">
        <input v-model="row.name" class="input min-w-0 flex-1" placeholder="Назва" />
        <input v-model.number="row.amount" type="number" min="0" step="any" class="input w-24" placeholder="К-сть" />
        <input v-model="row.unit" class="input w-20" placeholder="г" />
        <button type="button" class="btn btn-ghost btn-square" aria-label="Видалити інгредієнт" @click="removeIngredient(row.id)">✕</button>
      </div>
      <p v-if="errors.ingredients" class="label text-error">{{ errors.ingredients }}</p>
      <button type="button" class="btn btn-outline btn-sm self-start" @click="addIngredient">+ Додати інгредієнт</button>
    </fieldset>

    <fieldset class="fieldset">
      <legend class="fieldset-legend">Кроки (кожен крок з нового рядка)</legend>
      <textarea v-model="form.steps" rows="6" class="textarea w-full" :class="{ 'textarea-error': errors.steps }"></textarea>
      <p v-if="errors.steps" class="label text-error">{{ errors.steps }}</p>
    </fieldset>

    <fieldset class="fieldset">
      <legend class="fieldset-legend">Харчова цінність на порцію (необов'язково)</legend>
      <div class="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <input v-model.number="form.calories" type="number" min="0" class="input w-full" placeholder="ккал" />
        <input v-model.number="form.protein" type="number" min="0" class="input w-full" placeholder="білки, г" />
        <input v-model.number="form.fat" type="number" min="0" class="input w-full" placeholder="жири, г" />
        <input v-model.number="form.carbs" type="number" min="0" class="input w-full" placeholder="вугл., г" />
      </div>
    </fieldset>

    <button type="submit" class="btn btn-primary">Опублікувати рецепт</button>
  </form>
</template>
