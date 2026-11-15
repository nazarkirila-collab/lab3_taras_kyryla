import { createRouter, createWebHistory } from 'vue-router'
import { routes, handleHotUpdate } from 'vue-router/auto-routes'
import { useAuthStore } from '../stores/auth'
import { useRecipesStore } from '../stores/recipes'

declare module 'vue-router' {
  interface RouteMeta {
    requiresAuth?: boolean
  }
}

// маршрути генеруються з файлів у src/pages
const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to) => {
  const auth = useAuthStore()

  if (to.matched.some((record) => record.meta.requiresAuth) && !auth.isLoggedIn) {
    return { name: '/login', query: { redirect: to.fullPath } }
  }

  if (to.name === '/login' && auth.isLoggedIn) {
    return '/kitchen'
  }

  if (to.name === '/recipes/[slug]' && !useRecipesStore().getBySlug(to.params.slug)) {
    return { name: '/[...path]', params: { path: to.path.substring(1).split('/') }, query: to.query, hash: to.hash }
  }
})

if (import.meta.hot) {
  handleHotUpdate(router)
}

export default router
