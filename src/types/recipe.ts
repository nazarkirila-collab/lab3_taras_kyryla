export const CATEGORIES = ['first', 'main', 'salad', 'dessert', 'snack'] as const
export type Category = (typeof CATEGORIES)[number]

export const CATEGORY_LABELS: Record<Category, string> = {
  first: 'Перші страви',
  main: 'Другі страви',
  salad: 'Салати',
  dessert: 'Десерти',
  snack: 'Закуски'
}

export const DIFFICULTIES = ['easy', 'medium', 'hard'] as const
export type Difficulty = (typeof DIFFICULTIES)[number]

export const DIFFICULTY_LABELS: Record<Difficulty, string> = {
  easy: 'Легко',
  medium: 'Середньо',
  hard: 'Складно'
}

// повні рядки класів, щоб Tailwind їх знайшов під час збірки
export const DIFFICULTY_BADGE: Record<Difficulty, string> = {
  easy: 'badge-success',
  medium: 'badge-warning',
  hard: 'badge-error'
}

export function isCategory(value: unknown): value is Category {
  return typeof value === 'string' && (CATEGORIES as readonly string[]).includes(value)
}

export function isDifficulty(value: unknown): value is Difficulty {
  return typeof value === 'string' && (DIFFICULTIES as readonly string[]).includes(value)
}

export interface Ingredient {
  name: string
  amount: number
  unit: string
}

export interface Nutrition {
  calories: number
  protein: number
  fat: number
  carbs: number
}

export interface Recipe {
  slug: string
  title: string
  category: Category
  difficulty: Difficulty
  time: number
  summary: string
  servings: number
  ingredients: Ingredient[]
  steps: string[]
  nutrition: Nutrition
  author: string
}
