import { computed, reactive, ref } from 'vue'
import { onBeforeRouteLeave, useRouter } from 'vue-router'
import { useRecipesStore } from '../stores/recipes'
import { useAuthStore } from '../stores/auth'
import type { Category, Difficulty } from '../types/recipe'

interface IngredientRow {
  id: number
  name: string
  amount: number | ''
  unit: string
}

interface RecipeForm {
  title: string
  slug: string
  category: Category
  difficulty: Difficulty
  time: number | ''
  servings: number | ''
  summary: string
  ingredients: IngredientRow[]
  steps: string
  calories: number | ''
  protein: number | ''
  fat: number | ''
  carbs: number | ''
}

type FormErrors = Partial<Record<'title' | 'slug' | 'summary' | 'time' | 'servings' | 'ingredients' | 'steps', string>>

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
let nextRowId = 1

const newRow = (): IngredientRow => ({ id: nextRowId++, name: '', amount: '', unit: 'г' })

export function useRecipeForm() {
  const router = useRouter()
  const store = useRecipesStore()
  const auth = useAuthStore()

  const form = reactive<RecipeForm>({
    title: '',
    slug: '',
    category: 'main',
    difficulty: 'easy',
    time: '',
    servings: 4,
    summary: '',
    ingredients: [newRow()],
    steps: '',
    calories: '',
    protein: '',
    fat: '',
    carbs: ''
  })

  const snapshot = JSON.stringify(form)
  const showErrors = ref(false)
  const isSaved = ref(false)

  const filledIngredients = () => form.ingredients.filter((row) => row.name.trim())
  const parsedSteps = () => form.steps.split('\n').map((line) => line.trim()).filter(Boolean)

  const errors = computed<FormErrors>(() => {
    const e: FormErrors = {}
    const slug = form.slug.trim()

    if (!form.title.trim()) e.title = 'Вкажіть назву рецепту'
    if (!slug) e.slug = 'Вкажіть slug'
    else if (!SLUG_PATTERN.test(slug)) e.slug = 'Тільки малі латинські літери, цифри та дефіси: my-recipe'
    else if (store.getBySlug(slug)) e.slug = 'Рецепт з таким slug уже існує'
    if (form.summary.trim().length < 10) e.summary = 'Анотація — щонайменше 10 символів'
    if (!(Number(form.time) > 0)) e.time = 'Вкажіть час приготування'
    if (!(Number(form.servings) > 0)) e.servings = 'Вкажіть кількість порцій'

    const rows = filledIngredients()
    if (!rows.length) e.ingredients = 'Додайте хоча б один інгредієнт'
    else if (rows.some((row) => !(Number(row.amount) > 0) || !row.unit.trim())) {
      e.ingredients = 'Для кожного інгредієнта вкажіть кількість та одиницю'
    }

    if (!parsedSteps().length) e.steps = 'Додайте хоча б один крок'
    return e
  })

  const visibleErrors = computed<FormErrors>(() => (showErrors.value ? errors.value : {}))

  const addIngredient = () => form.ingredients.push(newRow())
  const removeIngredient = (id: number) => {
    if (form.ingredients.length > 1) form.ingredients = form.ingredients.filter((row) => row.id !== id)
  }

  function submit() {
    showErrors.value = true
    if (Object.keys(errors.value).length) return

    const slug = form.slug.trim()
    store.add({
      slug,
      title: form.title.trim(),
      category: form.category,
      difficulty: form.difficulty,
      time: Number(form.time),
      summary: form.summary.trim(),
      servings: Number(form.servings),
      ingredients: filledIngredients().map((row) => ({
        name: row.name.trim(),
        amount: Number(row.amount),
        unit: row.unit.trim()
      })),
      steps: parsedSteps(),
      nutrition: {
        calories: Number(form.calories) || 0,
        protein: Number(form.protein) || 0,
        fat: Number(form.fat) || 0,
        carbs: Number(form.carbs) || 0
      },
      author: auth.chef
    })

    isSaved.value = true
    router.push({ name: '/recipes/[slug]', params: { slug } })
  }

  onBeforeRouteLeave(() => {
    if (!isSaved.value && JSON.stringify(form) !== snapshot) {
      return window.confirm('Форма містить незбережені дані. Покинути сторінку?')
    }
  })

  return { form, errors: visibleErrors, addIngredient, removeIngredient, submit }
}
