<template>
  <div class="portal-container">
    <div class="portal-header">
      <h1>Communication Portal Dashboard</h1>
      <div class="user-info">
        <span>Welcome, {{ authStore.profile?.full_name || 'User' }}</span>
        <button @click="handleLogout" class="logout-button">Logout</button>
      </div>
    </div>
    
    <div class="portal-content">
      <div class="dashboard-grid">
        <div class="card">
          <h3>Analytics</h3>
          <p>View community metrics and insights</p>
        </div>
        
        <div class="card">
          <h3>Members</h3>
          <p>Manage community members and roles</p>
        </div>
        
        <div class="card">
          <h3>Messages</h3>
          <p>Communication hub and notifications</p>
        </div>
        
        <div class="card">
          <h3>Settings</h3>
          <p>Configure portal preferences</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const handleLogout = async () => {
  try {
    await authStore.logout()
    router.push('/login')
  } catch (error) {
    console.error('Logout failed:', error)
  }
}
</script>

<style scoped>
.portal-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
}

.portal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.portal-header h1 {
  color: #ffffff;
  font-size: 1.8rem;
  font-weight: 600;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: rgba(255, 255, 255, 0.9);
}

.logout-button {
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 6px;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.2s ease;
}

.logout-button:hover {
  background: rgba(255, 255, 255, 0.3);
}

.portal-content {
  max-width: 1200px;
  margin: 0 auto;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.card {
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  color: #ffffff;
  transition: transform 0.2s ease;
}

.card:hover {
  transform: translateY(-2px);
}

.card h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.card p {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.5;
}
</style>
