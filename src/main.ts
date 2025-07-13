import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { useAuthStore } from './stores/auth'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)

// Initialize auth store and set up auth state listener
const authStore = useAuthStore()
authStore.initializeAuth()

// Check for existing session on app start
authStore.checkAuth()

// Navigation guards
router.beforeEach(async (to, _from, next) => {
  // Wait for auth check to complete
  if (authStore.isLoading) {
    await new Promise(resolve => {
      const unwatch = authStore.$subscribe(() => {
        if (!authStore.isLoading) {
          unwatch()
          resolve(true)
        }
      })
    })
  }

  const isAuthenticated = authStore.isAuthenticated
  
  if (to.meta.requiresAuth && !isAuthenticated) {
    // Redirect to appropriate login based on route
    if (to.path === '/dashboard' || to.path === '/community' || to.path.startsWith('/community/')) {
      next('/admin/login')
    } else {
      next('/login')
    }
  } else if (to.meta.requiresGuest && isAuthenticated) {
    next('/dashboard')
  } else {
    next()
  }
})

app.mount('#app')
