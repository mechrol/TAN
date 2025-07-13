<template>
  <div class="login-container">
    <!-- Left Sidebar - Feature Preview -->
    <div class="sidebar">
      <div class="sidebar-content">
        <div class="logo-section">
          <div class="logo">
            <div class="logo-icon">🚀</div>
            <h1>CommPortal</h1>
          </div>
          <p class="tagline">Advanced Community Management Platform</p>
        </div>

        <div class="features">
          <div class="feature-item">
            <div class="feature-icon">📊</div>
            <div class="feature-content">
              <h3>Analytics Dashboard</h3>
              <p>Real-time insights into community engagement and growth metrics</p>
            </div>
          </div>

          <div class="feature-item">
            <div class="feature-icon">👥</div>
            <div class="feature-content">
              <h3>Member Management</h3>
              <p>Comprehensive tools for managing users, roles, and permissions</p>
            </div>
          </div>

          <div class="feature-item">
            <div class="feature-icon">💬</div>
            <div class="feature-content">
              <h3>Communication Hub</h3>
              <p>Centralized messaging and notification system for all channels</p>
            </div>
          </div>

          <div class="feature-item">
            <div class="feature-icon">⚡</div>
            <div class="feature-content">
              <h3>Automation Tools</h3>
              <p>Smart workflows and automated responses to streamline operations</p>
            </div>
          </div>
        </div>

        <div class="stats">
          <div class="stat">
            <div class="stat-number">10K+</div>
            <div class="stat-label">Active Communities</div>
          </div>
          <div class="stat">
            <div class="stat-number">500K+</div>
            <div class="stat-label">Members Managed</div>
          </div>
          <div class="stat">
            <div class="stat-number">99.9%</div>
            <div class="stat-label">Uptime</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Right Side - Login Form -->
    <div class="login-section">
      <div class="login-form-container">
        <div class="login-header">
          <h2>Welcome Back</h2>
          <p>Sign in to access your community dashboard</p>
        </div>

        <form @submit.prevent="handleLogin" class="login-form">
          <div class="form-group">
            <label for="email">Email Address</label>
            <input
              id="email"
              v-model="credentials.email"
              type="email"
              required
              placeholder="Enter your email"
              :disabled="authStore.isLoading"
            />
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <input
              id="password"
              v-model="credentials.password"
              type="password"
              required
              placeholder="Enter your password"
              :disabled="authStore.isLoading"
            />
          </div>

          <div class="form-options">
            <label class="checkbox-container">
              <input
                v-model="credentials.rememberMe"
                type="checkbox"
                :disabled="authStore.isLoading"
              />
              <span class="checkmark"></span>
              Remember me
            </label>
            <button type="button" class="forgot-password">
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            class="login-button"
            :disabled="authStore.isLoading"
          >
            <span v-if="authStore.isLoading" class="loading-spinner"></span>
            {{ authStore.isLoading ? 'Signing in...' : 'Sign In' }}
          </button>

          <div v-if="authStore.error" class="error-message">
            {{ authStore.error }}
          </div>
        </form>

        <div class="signup-prompt">
          <p>Don't have an account? <button class="signup-link">Sign up</button></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import type { LoginCredentials } from '../stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const credentials = ref<LoginCredentials>({
  email: '',
  password: '',
  rememberMe: false
})

const handleLogin = async () => {
  try {
    await authStore.login(credentials.value)
    router.push('/portal')
  } catch (error) {
    // Error is handled by the store
    console.error('Login failed:', error)
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.sidebar {
  flex: 1;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.sidebar-content {
  max-width: 500px;
}

.logo-section {
  margin-bottom: 3rem;
}

.logo {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.logo-icon {
  font-size: 2.5rem;
}

.logo h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #ffffff;
}

.tagline {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 300;
}

.features {
  margin-bottom: 3rem;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.feature-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.feature-content h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.feature-content p {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.4;
}

.stats {
  display: flex;
  gap: 2rem;
}

.stat {
  text-align: center;
}

.stat-number {
  font-size: 1.8rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.25rem;
}

.stat-label {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.login-section {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
}

.login-form-container {
  width: 100%;
  max-width: 400px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.login-header {
  text-align: center;
  margin-bottom: 2rem;
}

.login-header h2 {
  font-size: 1.8rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.login-header p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-size: 0.9rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
}

.form-group input {
  padding: 0.75rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  font-size: 0.9rem;
  transition: all 0.2s ease;
}

.form-group input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.form-group input:focus {
  outline: none;
  border-color: rgba(255, 255, 255, 0.6);
  background: rgba(255, 255, 255, 0.15);
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.checkbox-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
}

.checkbox-container input[type="checkbox"] {
  width: auto;
  margin: 0;
}

.forgot-password {
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  cursor: pointer;
  text-decoration: underline;
}

.forgot-password:hover {
  color: #ffffff;
}

.login-button {
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 8px;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.login-button:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.login-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.loading-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid #ffffff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.error-message {
  padding: 0.75rem;
  background: rgba(239, 68, 68, 0.2);
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: 8px;
  color: #fca5a5;
  font-size: 0.9rem;
  text-align: center;
}

.signup-prompt {
  text-align: center;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.signup-prompt p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
}

.signup-link {
  background: none;
  border: none;
  color: #ffffff;
  font-weight: 600;
  cursor: pointer;
  text-decoration: underline;
}

.signup-link:hover {
  color: rgba(255, 255, 255, 0.8);
}

@media (max-width: 768px) {
  .login-container {
    flex-direction: column;
  }
  
  .sidebar {
    flex: none;
    padding: 2rem;
  }
  
  .sidebar-content {
    max-width: none;
  }
  
  .features {
    display: none;
  }
  
  .stats {
    justify-content: center;
  }
  
  .login-section {
    flex: 1;
    padding: 1rem;
  }
  
  .login-form-container {
    padding: 2rem;
  }
}
</style>
