import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Auth helper functions
export const auth = {
  // Sign up with email and password
  signUp: async (email: string, password: string, userData: { firstName: string; lastName: string }) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: userData.firstName,
          last_name: userData.lastName,
          full_name: `${userData.firstName} ${userData.lastName}`
        }
      }
    })
    return { data, error }
  },

  // Sign in with email and password
  signIn: async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    return { data, error }
  },

  // Sign out
  signOut: async () => {
    const { error } = await supabase.auth.signOut()
    return { error }
  },

  // Get current user
  getCurrentUser: async () => {
    const { data: { user }, error } = await supabase.auth.getUser()
    return { user, error }
  },

  // Get current session
  getSession: async () => {
    const { data: { session }, error } = await supabase.auth.getSession()
    return { session, error }
  },

  // Listen to auth changes
  onAuthStateChange: (callback: (event: string, session: any) => void) => {
    return supabase.auth.onAuthStateChange(callback)
  }
}

// Database helper functions
export const db = {
  // Get user profile
  getUserProfile: async (userId: string) => {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single()
    return { data, error }
  },

  // Update user profile
  updateUserProfile: async (userId: string, updates: any) => {
    const { data, error } = await supabase
      .from('profiles')
      .upsert({ id: userId, ...updates })
      .select()
      .single()
    return { data, error }
  },

  // Update last login
  updateLastLogin: async (userId: string) => {
    const { data, error } = await supabase
      .rpc('update_last_login', { user_id: userId })
    return { data, error }
  },

  // Check if user is admin
  isUserAdmin: async (userId: string) => {
    const { data, error } = await supabase
      .rpc('is_admin', { user_id: userId })
    return { data, error }
  },

  // Track community visit
  trackCommunityVisit: async (userId: string, communityId: number) => {
    const { data, error } = await supabase
      .from('community_visits')
      .insert({
        user_id: userId,
        community_id: communityId,
        visited_at: new Date().toISOString()
      })
      .select()
      .single()
    return { data, error }
  },

  // Get user community visits
  getUserCommunityVisits: async (userId: string) => {
    const { data, error } = await supabase
      .from('community_visits')
      .select('*')
      .eq('user_id', userId)
      .order('visited_at', { ascending: false })
    return { data, error }
  },

  // Admin functions - Get all users (admin only)
  getAllUsers: async () => {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .order('created_at', { ascending: false })
    return { data, error }
  },

  // Admin functions - Update user role (admin only)
  updateUserRole: async (userId: string, role: string) => {
    const { data, error } = await supabase
      .from('profiles')
      .update({ role, updated_at: new Date().toISOString() })
      .eq('id', userId)
      .select()
      .single()
    return { data, error }
  },

  // Admin functions - Deactivate user (admin only)
  deactivateUser: async (userId: string) => {
    const { data, error } = await supabase
      .from('profiles')
      .update({ is_active: false, updated_at: new Date().toISOString() })
      .eq('id', userId)
      .select()
      .single()
    return { data, error }
  }
}
