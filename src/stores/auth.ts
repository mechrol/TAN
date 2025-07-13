import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { supabase } from '../lib/supabase'
import type { User, Session } from '@supabase/supabase-js'
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
  const profile = ref<Profile | null>(null)
  const session = ref<Session | null>(null)
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  // Computed
  const isAuthenticated = computed(() => !!user.value && !!session.value)
  const isAdmin = computed(() => profile.value?.role === 'admin')
  const userCredits = computed(() => ({
    used: profile.value?.credits_used || 0,
    total: profile.value?.credits_total || 1000
  }))

  // Actions
  const login = async (credentials: LoginCredentials) => {
    isLoading.value = true
    error.value = null
    
    try {
      const { data, error: authError } = await supabase.auth.signInWithPassword({
        email: credentials.email,
        password: credentials.password
      })

      if (authError) {
        throw authError
      }

      if (data.user && data.session) {
        user.value = data.user
        session.value = data.session
        
        // Fetch user profile
        await fetchProfile()
        
        // Store session if remember me is checked
        if (credentials.rememberMe) {
          localStorage.setItem('supabase.auth.token', data.session.access_token)
        }
      }
    } catch (err: any) {
      error.value = err.message || 'Login failed'
      throw err
    } finally {
      isLoading.value = false
    }
  }

  const signUp = async (credentials: SignUpCredentials) => {
    isLoading.value = true
    error.value = null
    
    try {
      const { data, error: authError } = await supabase.auth.signUp({
        email: credentials.email,
        password: credentials.password,
        options: {
          data: {
            full_name: credentials.fullName
          }
        }
      })

      if (authError) {
        throw authError
      }

      if (data.user && data.session) {
        user.value = data.user
        session.value = data.session
        await fetchProfile()
      }

      return data
    } catch (err: any) {
      error.value = err.message || 'Sign up failed'
      throw err
    } finally {
      isLoading.value = false
    }
  }

  const logout = async () => {
    isLoading.value = true
    error.value = null
    
    try {
      const { error: authError } = await supabase.auth.signOut()
      
      if (authError) {
        throw authError
      }

      user.value = null
      profile.value = null
      session.value = null
      localStorage.removeItem('supabase.auth.token')
    } catch (err: any) {
      error.value = err.message || 'Logout failed'
      throw err
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
        throw profileError
      }

      profile.value = data
    } catch (err: any) {
      console.error('Error fetching profile:', err.message)
      error.value = err.message
    }
  }

  const updateProfile = async (updates: Partial<Profile>) => {
    if (!user.value) return

    isLoading.value = true
    error.value = null

    try {
      const { data, error: updateError } = await supabase
        .from('profiles')
        .update(updates)
        .eq('id', user.value.id)
        .select()
        .single()

      if (updateError) {
        throw updateError
      }

      profile.value = data
    } catch (err: any) {
      error.value = err.message || 'Profile update failed'
      throw err
    } finally {
      isLoading.value = false
    }
  }

  const resetPassword = async (email: string) => {
    isLoading.value = true
    error.value = null

    try {
      const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`
      })

      if (resetError) {
        throw resetError
      }
    } catch (err: any) {
      error.value = err.message || 'Password reset failed'
      throw err
    } finally {
      isLoading.value = false
    }
  }

  const checkAuth = async () => {
    try {
      const { data: { session: currentSession } } = await supabase.auth.getSession()
      
      if (currentSession) {
        user.value = currentSession.user
        session.value = currentSession
        await fetchProfile()
      }
    } catch (err: any) {
      console.error('Error checking auth:', err.message)
    }
  }

  // Initialize auth state listener
  const initializeAuth = () => {
    supabase.auth.onAuthStateChange(async (event, currentSession) => {
      if (event === 'SIGNED_IN' && currentSession) {
        user.value = currentSession.user
        session.value = currentSession
        await fetchProfile()
      } else if (event === 'SIGNED_OUT') {
        user.value = null
        profile.value = null
        session.value = null
      }
    })
  }

  return {
    // State
    user,
    profile,
    session,
    isLoading,
    error,
    
    // Computed
    isAuthenticated,
    isAdmin,
    userCredits,
    
    // Actions
    login,
    signUp,
    logout,
    fetchProfile,
    updateProfile,
    resetPassword,
    checkAuth,
    initializeAuth
  }
})
