<template>
  <div class="login-container">
    <div class="login-card">
      <!-- Logo Section -->
      <div class="logo-section">
        <div class="logo">
          <div class="logo-icon">🤖</div>
          <div class="logo-text">
            <span class="logo-title">AITribes</span>
            <span class="logo-subtitle">ENTERPRISE</span>
          </div>
        </div>
        <h1 class="welcome-title">Welcome Back</h1>
        <p class="welcome-subtitle">Sign in to access your AI-powered communication portal</p>
      </div>

      <!-- Login Form -->
      <form @submit.prevent="handleLogin" class="login-form">
        <div class="form-group">
          <label for="email" class="form-label">Email Address</label>
          <div class="input-wrapper">
            <Mail class="input-icon" />
            <input
              id="email"
              v-model="loginForm.email"
              type="email"
              class="form-input"
              placeholder="Enter your email"
              required
              :disabled="isLoading"
            />
          </div>
          <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
        </div>

        <div class="form-group">
          <label for="password" class="form-label">Password</label>
          <div class="input-wrapper">
            <Lock class="input-icon" />
            <input
              id="password"
              v-model="loginForm.password"
              :type="showPassword ? 'text' : 'password'"
              class="form-input"
              placeholder="Enter your password"
              required
              :disabled="isLoading"
            />
            <button
              type="button"
              @click="togglePassword"
              class="password-toggle"
              :disabled="isLoading"
            >
              <Eye v-if="!showPassword" class="toggle-icon" />
              <EyeOff v-else class="toggle-icon" />
            </button>
          </div>
          <span v-if="errors.password" class="error-message">{{ errors.password }}</span>
        </div>

        <div class="form-options">
          <label class="checkbox-wrapper">
            <input
              v-model="loginForm.rememberMe"
              type="checkbox"
              class="checkbox"
              :disabled="isLoading"
            />
            <span class="checkbox-label">Remember me</span>
          </label>
          <a href="#" class="forgot-link" @click.prevent="handleForgotPassword">
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          class="login-button"
          :disabled="isLoading || !isFormValid"
        >
          <Loader2 v-if="isLoading" class="loading-icon" />
          <span>{{ isLoading ? 'Signing in...' : 'Sign In' }}</span>
        </button>

        <div v-if="errors.general" class="error-banner">
          <AlertCircle class="error-icon" />
          {{ errors.general }}
        </div>
      </form>

      <!-- Divider -->
      <div class="divider">
        <span class="divider-text">or continue with</span>
      </div>

      <!-- Social Login Options -->
      <div class="social-login">
        <button
          type="button"
          class="social-button google"
          @click="handleSocialLogin('google')"
          :disabled="isLoading"
        >
          <svg class="social-icon" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Google
        </button>

        <button
          type="button"
          class="social-button microsoft"
          @click="handleSocialLogin('microsoft')"
          :disabled="isLoading"
        >
          <svg class="social-icon" viewBox="0 0 24 24">
            <path fill="#f25022" d="M1 1h10v10H1z"/>
            <path fill="#00a4ef" d="M13 1h10v10H13z"/>
            <path fill="#7fba00" d="M1 13h10v10H1z"/>
            <path fill="#ffb900" d="M13 13h10v10H13z"/>
          </svg>
          Microsoft
        </button>
      </div>

      <!-- Sign Up Link -->
      <div class="signup-section">
        <p class="signup-text">
          Don't have an account?
          <a href="#" @click.prevent="handleSignUp" class="signup-link">
            Create account
          </a>
        </p>
      </div>

      <!-- Footer -->
      <div class="login-footer">
        <p class="footer-text">
          By signing in, you agree to our
          <a href="#" class="footer-link">Terms of Service</a>
          and
          <a href="#" class="footer-link">Privacy Policy</a>
        </p>
      </div>
    </div>

    <!-- Background Elements -->
    <div class="background-elements">
      <div class="bg-circle bg-circle-1"></div>
      <div class="bg-circle bg-circle-2"></div>
      <div class="bg-circle bg-circle-3"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Loader2,
  AlertCircle
} from 'lucide-vue-next'

const router = useRouter()
const authStore = useAuthStore()

// Form state
const loginForm = ref({
  email: '',
  password: '',
  rememberMe: false
})

const showPassword = ref(false)
const isLoading = ref(false)

const errors = ref({
  email: '',
  password: '',
  general: ''
})

// Computed
const isFormValid = computed(() => {
  return loginForm.value.email && 
         loginForm.value.password && 
         loginForm.value.email.includes('@')
})

// Methods
const togglePassword = () => {
  showPassword.value = !showPassword.value
}

const validateForm = () => {
  errors.value = { email: '', password: '', general: '' }
  
  if (!loginForm.value.email) {
    errors.value.email = 'Email is required'
    return false
  }
  
  if (!loginForm.value.email.includes('@')) {
    errors.value.email = 'Please enter a valid email address'
    return false
  }
  
  if (!loginForm.value.password) {
    errors.value.password = 'Password is required'
    return false
  }
  
  if (loginForm.value.password.length < 6) {
    errors.value.password = 'Password must be at least 6 characters'
    return false
  }
  
  return true
}

const handleLogin = async () => {
  if (!validateForm()) return
  
  isLoading.value = true
  errors.value.general = ''
  
  try {
    await authStore.login({
      email: loginForm.value.email,
      password: loginForm.value.password,
      rememberMe: loginForm.value.rememberMe
    })
    
    // Redirect to dashboard on success
    router.push('/dashboard')
  } catch (error) {
    errors.value.general = 'Invalid email or password. Please try again.'
  } finally {
    isLoading.value = false
  }
}

const handleSocialLogin = async (provider: 'google' | 'microsoft') => {
  isLoading.value = true
  errors.value.general = ''
  
  try {
    // TODO: Implement social login functionality
    console.log(`Social login with ${provider}`)
    // For now, just show a message
    errors.value.general = `Social login with ${provider} is not yet implemented.`
  } catch (error) {
    errors.value.general = `Failed to sign in with ${provider}. Please try again.`
  } finally {
    isLoading.value = false
  }
}

const handleForgotPassword = () => {
  // TODO: Implement forgot password functionality
  console.log('Forgot password clicked')
}

const handleSignUp = () => {
  // TODO: Navigate to sign up page
  console.log('Sign up clicked')
}
</script>

<style scoped>
.login-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
  position: relative;
  overflow: hidden;
}

.background-elements {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.bg-circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  animation: float 6s ease-in-out infinite;
}

.bg-circle-1 {
  width: 200px;
  height: 200px;
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.bg-circle-2 {
  width: 150px;
  height: 150px;
  top: 60%;
  right: 15%;
  animation-delay: 2s;
}

.bg-circle-3 {
  width: 100px;
  height: 100px;
  bottom: 20%;
  left: 20%;
  animation-delay: 4s;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

.login-card {
  background: white;
  border-radius: 20px;
  padding: 40px;
  width: 100%;
  max-width: 440px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1;
}

.logo-section {
  text-align: center;
  margin-bottom: 32px;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 24px;
}

.logo-icon {
  font-size: 32px;
}

.logo-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.logo-title {
  font-size: 24px;
  font-weight: 700;
  color: #1e293b;
  line-height: 1;
}

.logo-subtitle {
  font-size: 10px;
  color: #64748b;
  font-weight: 500;
  letter-spacing: 1px;
}

.welcome-title {
  font-size: 28px;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 8px;
}

.welcome-subtitle {
  color: #64748b;
  font-size: 16px;
  line-height: 1.5;
}

.login-form {
  margin-bottom: 24px;
}

.form-group {
  margin-bottom: 20px;
}

.form-label {
  display: block;
  font-weight: 600;
  color: #374151;
  margin-bottom: 8px;
  font-size: 14px;
}

.input-wrapper {
  position: relative;
}

.input-icon {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  color: #9ca3af;
}

.form-input {
  width: 100%;
  padding: 16px 16px 16px 48px;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  font-size: 16px;
  transition: all 0.2s;
  background: #fafafa;
}

.form-input:focus {
  outline: none;
  border-color: #3b82f6;
  background: white;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.form-input:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.password-toggle {
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.password-toggle:hover {
  background-color: #f3f4f6;
}

.toggle-icon {
  width: 20px;
  height: 20px;
  color: #6b7280;
}

.error-message {
  color: #ef4444;
  font-size: 14px;
  margin-top: 4px;
  display: block;
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.checkbox-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.checkbox {
  width: 16px;
  height: 16px;
  accent-color: #3b82f6;
}

.checkbox-label {
  font-size: 14px;
  color: #374151;
}

.forgot-link {
  color: #3b82f6;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.2s;
}

.forgot-link:hover {
  color: #2563eb;
}

.login-button {
  width: 100%;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
  border: none;
  padding: 16px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.login-button:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
}

.login-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.loading-icon {
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.error-banner {
  background-color: #fef2f2;
  border: 1px solid #fecaca;
  color: #dc2626;
  padding: 12px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 16px;
  font-size: 14px;
}

.error-icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

.divider {
  position: relative;
  text-align: center;
  margin: 24px 0;
}

.divider::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background: #e5e7eb;
}

.divider-text {
  background: white;
  padding: 0 16px;
  color: #6b7280;
  font-size: 14px;
  position: relative;
}

.social-login {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 24px;
}

.social-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  background: white;
  color: #374151;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.social-button:hover:not(:disabled) {
  border-color: #d1d5db;
  background: #f9fafb;
}

.social-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.social-icon {
  width: 20px;
  height: 20px;
}

.signup-section {
  text-align: center;
  margin-bottom: 24px;
}

.signup-text {
  color: #6b7280;
  font-size: 14px;
}

.signup-link {
  color: #3b82f6;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s;
}

.signup-link:hover {
  color: #2563eb;
}

.login-footer {
  text-align: center;
  padding-top: 24px;
  border-top: 1px solid #e5e7eb;
}

.footer-text {
  color: #6b7280;
  font-size: 12px;
  line-height: 1.5;
}

.footer-link {
  color: #3b82f6;
  text-decoration: none;
  transition: color 0.2s;
}

.footer-link:hover {
  color: #2563eb;
}

@media (max-width: 480px) {
  .login-card {
    padding: 24px;
    margin: 10px;
  }
  
  .welcome-title {
    font-size: 24px;
  }
  
  .social-login {
    grid-template-columns: 1fr;
  }
}
</style>
