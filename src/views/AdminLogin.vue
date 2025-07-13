<template>
  <div class="admin-login">
    <!-- Left Side - Illustration & Content -->
    <div class="left-section">
      <div class="illustration-container">
        <div class="illustration">
          <img src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
               alt="AI Community Illustration" class="main-illustration">
          <div class="illustration-overlay">
            <div class="people-group">
              <div class="person person-1">
                <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop" 
                     alt="Person 1" class="person-avatar">
              </div>
              <div class="person person-2">
                <img src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop" 
                     alt="Person 2" class="person-avatar">
              </div>
              <div class="person person-3">
                <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop" 
                     alt="Person 3" class="person-avatar">
              </div>
              <div class="person person-4">
                <img src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop" 
                     alt="Person 4" class="person-avatar">
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="content-section">
        <h1 class="main-title">Create and nurture vibrant AI communities.</h1>
        <p class="main-description">
          Connect with fellow enthusiasts, exchange insights, and collaborate on innovative projects. Join us to revolutionize your AI networking experience!
        </p>
      </div>
    </div>

    <!-- Right Side - Login Form -->
    <div class="right-section">
      <div class="login-container">
        <!-- Logo -->
        <div class="logo-section">
          <div class="logo">
            <div class="logo-icon">🤖</div>
            <span class="logo-text">AITribes</span>
          </div>
        </div>

        <!-- Login Form -->
        <div class="form-section">
          <div class="form-header">
            <div class="signin-icon">
              <User class="user-icon" />
            </div>
            <h2 class="form-title">Admin Sign In</h2>
            <p class="form-subtitle">Sign in to your admin account to continue.</p>
          </div>

          <form @submit.prevent="handleLogin" class="login-form">
            <div class="form-group">
              <input
                v-model="loginForm.email"
                type="email"
                class="form-input"
                placeholder="admin@example.com"
                required
                :disabled="authStore.isLoading"
              />
            </div>

            <div class="form-group">
              <input
                v-model="loginForm.password"
                type="password"
                class="form-input"
                placeholder="••••••••••••"
                required
                :disabled="authStore.isLoading"
              />
            </div>

            <div class="form-options">
              <label class="remember-me">
                <input
                  type="checkbox"
                  v-model="loginForm.rememberMe"
                  :disabled="authStore.isLoading"
                />
                <span class="checkmark"></span>
                Remember me
              </label>
              
              <a href="#" @click.prevent="handleForgotPassword" class="forgot-link">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              class="signin-button"
              :disabled="authStore.isLoading || !isFormValid"
            >
              <LogIn v-if="!authStore.isLoading" class="signin-icon" />
              <Loader2 v-else class="loading-icon" />
              <span>{{ authStore.isLoading ? 'Signing in...' : 'Sign In' }}</span>
            </button>

            <div v-if="authStore.error" class="error-message">
              {{ authStore.error }}
            </div>
          </form>

          <!-- Sign Up Link -->
          <div class="signup-section">
            <p class="signup-text">
              Don't have an admin account?
              <button @click="showSignUpForm = true" class="signup-link">
                Request Access
              </button>
            </p>
          </div>

          <!-- Language Selection -->
          <div class="language-section">
            <div class="language-grid">
              <button 
                v-for="language in languages" 
                :key="language.code"
                @click="setLanguage(language.code)"
                class="language-btn"
                :class="{ active: selectedLanguage === language.code }"
              >
                <span class="flag">{{ language.flag }}</span>
                <span class="lang-name">{{ language.name }}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Sign Up Modal -->
    <div v-if="showSignUpForm" class="modal-overlay" @click="showSignUpForm = false">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h3 class="modal-title">Request Admin Access</h3>
          <button @click="showSignUpForm = false" class="modal-close">
            <X class="close-icon" />
          </button>
        </div>
        
        <form @submit.prevent="handleSignUp" class="signup-form">
          <div class="form-group">
            <input
              v-model="signUpForm.fullName"
              type="text"
              class="form-input"
              placeholder="Full Name"
              required
              :disabled="authStore.isLoading"
            />
          </div>
          
          <div class="form-group">
            <input
              v-model="signUpForm.email"
              type="email"
              class="form-input"
              placeholder="Email Address"
              required
              :disabled="authStore.isLoading"
            />
          </div>
          
          <div class="form-group">
            <input
              v-model="signUpForm.password"
              type="password"
              class="form-input"
              placeholder="Password (min. 6 characters)"
              required
              minlength="6"
              :disabled="authStore.isLoading"
            />
          </div>
          
          <button
            type="submit"
            class="signup-button"
            :disabled="authStore.isLoading || !isSignUpFormValid"
          >
            <UserPlus v-if="!authStore.isLoading" class="signup-icon" />
            <Loader2 v-else class="loading-icon" />
            <span>{{ authStore.isLoading ? 'Creating Account...' : 'Create Account' }}</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import {
  User,
  LogIn,
  Loader2,
  UserPlus,
  X
} from 'lucide-vue-next'

const router = useRouter()
const authStore = useAuthStore()

// Form state
const loginForm = ref({
  email: '',
  password: '',
  rememberMe: false
})

const signUpForm = ref({
  fullName: '',
  email: '',
  password: ''
})

const selectedLanguage = ref('en')
const showSignUpForm = ref(false)

// Languages
const languages = ref([
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'id', name: 'Indonesian', flag: '🇮🇩' },
  { code: 'da', name: 'Dansk', flag: '🇩🇰' }
])

// Computed
const isFormValid = computed(() => {
  return loginForm.value.email && 
         loginForm.value.password && 
         loginForm.value.email.includes('@')
})

const isSignUpFormValid = computed(() => {
  return signUpForm.value.fullName &&
         signUpForm.value.email &&
         signUpForm.value.password &&
         signUpForm.value.email.includes('@') &&
         signUpForm.value.password.length >= 6
})

// Methods
const handleLogin = async () => {
  if (!isFormValid.value) return
  
  try {
    await authStore.login({
      email: loginForm.value.email,
      password: loginForm.value.password,
      rememberMe: loginForm.value.rememberMe
    })
    
    // Redirect to dashboard on success
    router.push('/dashboard')
  } catch (error) {
    // Error is handled by the store
    console.error('Login failed:', error)
  }
}

const handleSignUp = async () => {
  if (!isSignUpFormValid.value) return
  
  try {
    await authStore.signUp({
      email: signUpForm.value.email,
      password: signUpForm.value.password,
      fullName: signUpForm.value.fullName
    })
    
    showSignUpForm.value = false
    
    // Show success message or redirect
    router.push('/dashboard')
  } catch (error) {
    // Error is handled by the store
    console.error('Sign up failed:', error)
  }
}

const handleForgotPassword = async () => {
  if (!loginForm.value.email) {
    authStore.error = 'Please enter your email address first'
    return
  }
  
  try {
    await authStore.resetPassword(loginForm.value.email)
    alert('Password reset email sent! Check your inbox.')
  } catch (error) {
    console.error('Password reset failed:', error)
  }
}

const setLanguage = (langCode: string) => {
  selectedLanguage.value = langCode
  // TODO: Implement language switching
  console.log('Language changed to:', langCode)
}
</script>

<style scoped>
.admin-login {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: #f8fafc;
}

/* Left Section */
.left-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 40px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  overflow: hidden;
}

.illustration-container {
  position: relative;
  width: 100%;
  max-width: 500px;
  margin-bottom: 60px;
}

.illustration {
  position: relative;
  width: 100%;
  height: 300px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.main-illustration {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.3;
  border-radius: 50px;
}

.illustration-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.people-group {
  position: relative;
  width: 200px;
  height: 200px;
}

.person {
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.person-1 {
  top: 20px;
  left: 20px;
  animation: float 3s ease-in-out infinite;
}

.person-2 {
  top: 20px;
  right: 20px;
  animation: float 3s ease-in-out infinite 0.5s;
}

.person-3 {
  bottom: 20px;
  left: 20px;
  animation: float 3s ease-in-out infinite 1s;
}

.person-4 {
  bottom: 20px;
  right: 20px;
  animation: float 3s ease-in-out infinite 1.5s;
}

.person-avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.content-section {
  text-align: center;
  color: white;
}

.main-title {
  font-size: 36px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 24px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.main-description {
  font-size: 18px;
  line-height: 1.6;
  opacity: 0.9;
  max-width: 500px;
}

/* Right Section */
.right-section {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background: white;
}

.login-container {
  width: 100%;
  max-width: 400px;
}

.logo-section {
  text-align: center;
  margin-bottom: 40px;
}

.logo {
  display: inline-flex;
  align-items: center;
  gap: 12px;
}

.logo-icon {
  font-size: 32px;
}

.logo-text {
  font-size: 28px;
  font-weight: 700;
  color: #1e293b;
}

.form-section {
  width: 100%;
}

.form-header {
  text-align: center;
  margin-bottom: 32px;
}

.signin-icon {
  width: 48px;
  height: 48px;
  background: #f1f5f9;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
}

.user-icon {
  width: 24px;
  height: 24px;
  color: #64748b;
}

.form-title {
  font-size: 24px;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 8px;
}

.form-subtitle {
  color: #64748b;
  font-size: 16px;
}

.login-form {
  margin-bottom: 24px;
}

.form-group {
  margin-bottom: 20px;
}

.form-input {
  width: 100%;
  padding: 16px 20px;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-size: 16px;
  background: #f8fafc;
  transition: all 0.2s;
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

.form-input::placeholder {
  color: #94a3b8;
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.remember-me {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #64748b;
  cursor: pointer;
}

.remember-me input {
  display: none;
}

.checkmark {
  width: 16px;
  height: 16px;
  border: 2px solid #e2e8f0;
  border-radius: 4px;
  position: relative;
  transition: all 0.2s;
}

.remember-me input:checked + .checkmark {
  background: #3b82f6;
  border-color: #3b82f6;
}

.remember-me input:checked + .checkmark::after {
  content: '✓';
  position: absolute;
  top: -2px;
  left: 2px;
  color: white;
  font-size: 12px;
  font-weight: bold;
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

.signin-button {
  width: 100%;
  background: #4f46e5;
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
  margin-bottom: 16px;
}

.signin-button:hover:not(:disabled) {
  background: #4338ca;
  transform: translateY(-1px);
  box-shadow: 0 8px 25px rgba(79, 70, 229, 0.3);
}

.signin-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.signin-icon {
  width: 18px;
  height: 18px;
}

.loading-icon {
  width: 18px;
  height: 18px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.error-message {
  background-color: #fef2f2;
  border: 1px solid #fecaca;
  color: #dc2626;
  padding: 12px;
  border-radius: 8px;
  font-size: 14px;
  text-align: center;
}

.signup-section {
  text-align: center;
  margin-bottom: 24px;
  padding-top: 16px;
  border-top: 1px solid #e2e8f0;
}

.signup-text {
  color: #64748b;
  font-size: 14px;
}

.signup-link {
  color: #3b82f6;
  background: none;
  border: none;
  font-weight: 500;
  cursor: pointer;
  text-decoration: underline;
}

.signup-link:hover {
  color: #2563eb;
}

.language-section {
  border-top: 1px solid #e2e8f0;
  padding-top: 24px;
}

.language-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
}

.language-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  background: none;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 12px;
}

.language-btn:hover {
  background: #f8fafc;
  border-color: #cbd5e1;
}

.language-btn.active {
  background: #eff6ff;
  border-color: #3b82f6;
  color: #3b82f6;
}

.flag {
  font-size: 14px;
}

.lang-name {
  font-weight: 500;
  color: #64748b;
}

.language-btn.active .lang-name {
  color: #3b82f6;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  border-radius: 12px;
  padding: 24px;
  width: 90%;
  max-width: 400px;
  max-height: 90vh;
  overflow-y: auto;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.modal-title {
  font-size: 20px;
  font-weight: 600;
  color: #1e293b;
  margin: 0;
}

.modal-close {
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.modal-close:hover {
  background: #f1f5f9;
}

.close-icon {
  width: 20px;
  height: 20px;
  color: #64748b;
}

.signup-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.signup-button {
  width: 100%;
  background: #10b981;
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

.signup-button:hover:not(:disabled) {
  background: #059669;
  transform: translateY(-1px);
  box-shadow: 0 8px 25px rgba(16, 185, 129, 0.3);
}

.signup-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.signup-icon {
  width: 18px;
  height: 18px;
}

@media (max-width: 1024px) {
  .admin-login {
    grid-template-columns: 1fr;
  }
  
  .left-section {
    display: none;
  }
  
  .right-section {
    padding: 20px;
  }
}

@media (max-width: 480px) {
  .right-section {
    padding: 16px;
  }
  
  .login-container {
    max-width: 100%;
  }
  
  .main-title {
    font-size: 28px;
  }
  
  .language-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
