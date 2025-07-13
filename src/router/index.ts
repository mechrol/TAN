import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Community from '../views/Community.vue'
import CustomizeCommunity from '../views/CustomizeCommunity.vue'
import Login from '../views/Login.vue'
import AdminLogin from '../views/AdminLogin.vue'
import Portal from '../views/Portal.vue'

const routes = [
  { 
    path: '/', 
    redirect: '/admin/login' 
  },
  { 
    path: '/login', 
    component: Login,
    meta: { requiresGuest: true }
  },
  { 
    path: '/admin/login', 
    component: AdminLogin,
    meta: { requiresGuest: true }
  },
  { 
    path: '/portal', 
    component: Portal,
    meta: { requiresAuth: true }
  },
  { 
    path: '/dashboard', 
    component: Dashboard,
    meta: { requiresAuth: true }
  },
  { 
    path: '/community', 
    component: Community,
    meta: { requiresAuth: true }
  },
  { 
    path: '/community/:id/customize', 
    component: CustomizeCommunity,
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
