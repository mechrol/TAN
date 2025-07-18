import React, { createContext, useContext, useEffect, useState } from 'react'
import { User, Session } from '@supabase/supabase-js'
import { supabase, authHelpers, AdminUser } from '../lib/supabase'

interface AuthContextType {
  user: User | null
  adminProfile: AdminUser | null
  session: Session | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
  isAdmin: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [adminProfile, setAdminProfile] = useState<AdminUser | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    // Get initial session
    const getInitialSession = async () => {
      const session = await authHelpers.getSession()
      setSession(session)
      setUser(session?.user || null)

      if (session?.user) {
        const profile = await authHelpers.getAdminProfile(session.user.id)
        setAdminProfile(profile)
        setIsAdmin(profile?.is_active || false)
      }

      setLoading(false)
    }

    getInitialSession()

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session)
        setUser(session?.user || null)

        if (session?.user) {
          const profile = await authHelpers.getAdminProfile(session.user.id)
          setAdminProfile(profile)
          setIsAdmin(profile?.is_active || false)
        } else {
          setAdminProfile(null)
          setIsAdmin(false)
        }

        setLoading(false)
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  const signIn = async (email: string, password: string) => {
    setLoading(true)
    try {
      await authHelpers.signInAdmin(email, password)
    } catch (error) {
      setLoading(false)
      throw error
    }
  }

  const signOut = async () => {
    setLoading(true)
    try {
      await authHelpers.signOut()
    } catch (error) {
      setLoading(false)
      throw error
    }
  }

  const value = {
    user,
    adminProfile,
    session,
    loading,
    signIn,
    signOut,
    isAdmin
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
