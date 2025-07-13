import { defineStore } from 'pinia'
import { ref, computed, readonly } from 'vue'
import { supabase } from '../lib/supabase'
import type { User, Session, AuthError } from '@supabase/supabase-js'
import type { Database } from '../lib/supabase'

export type Profile = Database['public']['Tables']['profiles']['Row']

export interface LoginCredentials {
  email: string
  password: string
  rememberMe: boolean
}

export interface SignUpCredentials {
  email: string
  password: string
  fullName: string
}

export const useAuthStore = defineStore('auth', () => {
  // State
  const user = ref<User | null>(null)
  const session = ref<Session | null>(null)
  const profile = ref<Profile | null>(null)
  const isLoading = ref(false)
  const error = ref<string | null>(null)
  const isInitialized = ref(false)

  // Computed
  const isAuthenticated = computed(() => !!user.value && !!session.value)
  const userRole = computed(() => profile.value?.role || 'member')
  const userCredits = computed(() => ({
    used: profile.value?.credits_used || 0,
    total: profile.value?.credits_total || 100
  }))

  // Actions
  const initializeAuth = async () => {
    try {
      isLoading.value = true
      
      // Get initial session
      const { data: { session: initialSession } } = await supabase.auth.getSession()
      
      if (initialSession) {
        session.value = initialSession
        user.value = initialSession.user
        await fetchProfile()
      }

      // Listen for auth changes
      supabase.auth.onAuthStateChange(async (_event, newSession) => {
        session.value = newSession
        user.value = newSession?.user || null
        
        if (newSession?.user) {
          await fetchProfile()
        } else {
          profile.value = null
        }
      })

      isInitialized.value = true
    } catch (err) {
      console.error('Auth initialization error:', err)
      error.value = 'Failed to initialize authentication'
    } finally {
      isLoading.value = false
    }
  }

  const fetchProfile = async () => {
    if (!user.value) return

    try {
      const { data, error: profileError } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.value.id)
        .single()

      if (profileError) {
        console.error('Profile fetch error:', profileError)
        return
      }

      profile.value = data
    } catch (err) {
      console.error('Profile fetch error:', err)
    }
  }

  const login = async (credentials: LoginCredentials) => {
    try {
      isLoading.value = true
      error.value = null

      const { error: loginError } = await supabase.auth.signInWithPassword({
        email: credentials.email,
        password: credentials.password
      })

      if (loginError) {
        throw loginError
      }

      // Session and user will be set by the auth state change listener
      return { success: true }
    } catch (err) {
      const authError = err as AuthError
      error.value = authError.message || 'Login failed'
      return { success: false, error: error.value }
    } finally {
      isLoading.value = false
    }
  }

  const signUp = async (credentials: SignUpCredentials) => {
    try {
      isLoading.value = true
      error.value = null

      const { data, error: signUpError } = await supabase.auth.signUp({
        email: credentials.email,
        password: credentials.password,
        options: {
          data: {
            full_name: credentials.fullName
          }
        }
      })

      if (signUpError) {
        throw signUpError
      }

      return { success: true, user: data.user }
    } catch (err) {
      const authError = err as AuthError
      error.value = authError.message || 'Sign up failed'
      return { success: false, error: error.value }
    } finally {
      isLoading.value = false
    }
  }

  const logout = async () => {
    try {
      isLoading.value = true
      error.value = null

      const { error: logoutError } = await supabase.auth.signOut()

      if (logoutError) {
        throw logoutError
      }

      // Clear local state
      user.value = null
      session.value = null
      profile.value = null

      return { success: true }
    } catch (err) {
      const authError = err as AuthError
      error.value = authError.message || 'Logout failed'
      return { success: false, error: error.value }
    } finally {
      isLoading.value = false
    }
  }

  const resetPassword = async (email: string) => {
    try {
      isLoading.value = true
      error.value = null

      const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`
      })

      if (resetError) {
        throw resetError
      }

      return { success: true }
    } catch (err) {
      const authError = err as AuthError
      error.value = authError.message || 'Password reset failed'
      return { success: false, error: error.value }
    } finally {
      isLoading.value = false
    }
  }

  const updateProfile = async (updates: Partial<Profile>) => {
    if (!user.value) return { success: false, error: 'Not authenticated' }

    try {
      isLoading.value = true
      error.value = null

      const { data, error: updateError } = await supabase
        .from('profiles')
        .update({
          ...updates,
          updated_at: new Date().toISOString()
        })
        .eq('id', user.value.id)
        .select()
        .single()

      if (updateError) {
        throw updateError
      }

      profile.value = data
      return { success: true, profile: data }
    } catch (err) {
      console.error('Profile update error:', err)
      error.value = 'Failed to update profile'
      return { success: false, error: error.value }
    } finally {
      isLoading.value = false
    }
  }

  const clearError = () => {
    error.value = null
  }

  return {
    // State
    user: readonly(user),
    session: readonly(session),
    profile: readonly(profile),
    isLoading: readonly(isLoading),
    error: readonly(error),
    isInitialized: readonly(isInitialized),
    
    // Computed
    isAuthenticated,
    userRole,
    userCredits,
    
    // Actions
    initializeAuth,
    fetchProfile,
    login,
    signUp,
    logout,
    resetPassword,
    updateProfile,
    clearError
  }
})
