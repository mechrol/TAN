import React, { createContext, useContext, useEffect, useState } from 'react'
import { User, Session } from '@supabase/supabase-js'
import { supabase, authHelpers, FrontendUser } from '../lib/supabase'

interface FrontendAuthContextType {
  user: User | null
  userProfile: FrontendUser | null
  session: Session | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string, fullName?: string) => Promise<void>
  signOut: () => Promise<void>
  isAuthenticated: boolean
}

const FrontendAuthContext = createContext<FrontendAuthContextType | undefined>(undefined)

export const useFrontendAuth = () => {
  const context = useContext(FrontendAuthContext)
  if (context === undefined) {
    throw new Error('useFrontendAuth must be used within a FrontendAuthProvider')
  }
  return context
}

export const FrontendAuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [userProfile, setUserProfile] = useState<FrontendUser | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    // Get initial session
    const getInitialSession = async () => {
      const session = await authHelpers.getSession()
      setSession(session)
      setUser(session?.user || null)

      if (session?.user) {
        const profile = await authHelpers.getFrontendProfile(session.user.id)
        setUserProfile(profile)
        setIsAuthenticated(!!profile?.is_active)
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
          const profile = await authHelpers.getFrontendProfile(session.user.id)
          setUserProfile(profile)
          setIsAuthenticated(!!profile?.is_active)
        } else {
          setUserProfile(null)
          setIsAuthenticated(false)
        }

        setLoading(false)
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  const signIn = async (email: string, password: string) => {
    setLoading(true)
    try {
      await authHelpers.signInUser(email, password)
    } catch (error) {
      setLoading(false)
      throw error
    }
  }

  const signUp = async (email: string, password: string, fullName?: string) => {
    setLoading(true)
    try {
      await authHelpers.signUpUser(email, password, fullName)
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
    userProfile,
    session,
    loading,
    signIn,
    signUp,
    signOut,
    isAuthenticated
  }

  return (
    <FrontendAuthContext.Provider value={value}>
      {children}
    </FrontendAuthContext.Provider>
  )
}
