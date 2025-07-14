import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types
export interface AdminUser {
  id: string
  email: string
  full_name: string | null
  role: 'admin' | 'super_admin' | 'moderator'
  is_active: boolean
  last_login: string | null
  created_at: string
  updated_at: string
}

export interface FrontendUser {
  id: string
  email: string
  username: string | null
  full_name: string | null
  avatar_url: string | null
  bio: string | null
  is_active: boolean
  last_login: string | null
  created_at: string
  updated_at: string
}

// Auth helpers
export const authHelpers = {
  // Sign in admin user
  async signInAdmin(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (error) throw error

    // Update last login
    if (data.user) {
      await supabase.rpc('update_admin_last_login', { user_id: data.user.id })
    }

    return data
  },

  // Sign in frontend user
  async signInUser(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (error) throw error

    // Update last login
    if (data.user) {
      await supabase.rpc('update_frontend_last_login', { user_id: data.user.id })
    }

    return data
  },

  // Sign up frontend user
  async signUpUser(email: string, password: string, fullName?: string) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName
        }
      }
    })

    if (error) throw error
    return data
  },

  // Sign out
  async signOut() {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  },

  // Get current session
  async getSession() {
    const { data: { session }, error } = await supabase.auth.getSession()
    if (error) throw error
    return session
  },

  // Get admin user profile
  async getAdminProfile(userId: string): Promise<AdminUser | null> {
    const { data, error } = await supabase
      .from('admin_users')
      .select('*')
      .eq('id', userId)
      .single()

    if (error) {
      console.error('Error fetching admin profile:', error)
      return null
    }

    return data
  },

  // Get frontend user profile
  async getFrontendProfile(userId: string): Promise<FrontendUser | null> {
    const { data, error } = await supabase
      .from('frontend_users')
      .select('*')
      .eq('id', userId)
      .single()

    if (error) {
      console.error('Error fetching frontend profile:', error)
      return null
    }

    return data
  },

  // Check if user is admin
  async isAdmin(userId: string): Promise<boolean> {
    const { data, error } = await supabase
      .from('admin_users')
      .select('is_active')
      .eq('id', userId)
      .single()

    if (error) return false
    return data?.is_active || false
  },

  // Check if user is frontend user
  async isFrontendUser(userId: string): Promise<boolean> {
    const { data, error } = await supabase
      .from('frontend_users')
      .select('is_active')
      .eq('id', userId)
      .single()

    if (error) return false
    return data?.is_active || false
  }
}
