import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { User as SupabaseUser } from '@supabase/supabase-js'
import { auth, db } from '../lib/supabase'

interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  avatar?: string
  fullName: string
  role: 'frontend_user' | 'backend_admin' | 'moderator'
  isActive: boolean
  lastLogin?: string
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (email: string, password: string, loginType?: 'frontend' | 'backend') => Promise<boolean>
  signup: (userData: SignupData) => Promise<boolean>
  logout: () => Promise<void>
  visitCommunity: (communityId: number) => Promise<boolean>
  getUserVisits: () => CommunityVisit[]
  isAdmin: () => boolean
  isFrontendUser: () => boolean
}

interface SignupData {
  email: string
  password: string
  firstName: string
  lastName: string
}

interface CommunityVisit {
  communityId: number
  communityName: string
  visitDate: string
  duration: number
  actions: string[]
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [communityVisits, setCommunityVisits] = useState<CommunityVisit[]>([])

  // Convert Supabase user to our User interface
  const convertSupabaseUser = async (supabaseUser: SupabaseUser): Promise<User | null> => {
    try {
      // Get user profile from database
      const { data: profile, error } = await db.getUserProfile(supabaseUser.id)
      
      if (error || !profile) {
        console.error('Error fetching user profile:', error)
        return null
      }

      return {
        id: supabaseUser.id,
        email: supabaseUser.email || '',
        firstName: profile.first_name || 'User',
        lastName: profile.last_name || 'Name',
        fullName: profile.full_name || `${profile.first_name || 'User'} ${profile.last_name || 'Name'}`,
        avatar: profile.avatar_url || 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
        role: profile.role || 'frontend_user',
        isActive: profile.is_active !== false,
        lastLogin: profile.last_login
      }
    } catch (error) {
      console.error('Error converting Supabase user:', error)
      return null
    }
  }

  // Load user community visits
  const loadUserCommunityVisits = async (userId: string) => {
    try {
      const { data, error } = await db.getUserCommunityVisits(userId)
      
      if (error) {
        console.error('Error loading community visits:', error)
        return []
      }

      const visits: CommunityVisit[] = data?.map(visit => ({
        communityId: visit.community_id,
        communityName: getCommunityName(visit.community_id),
        visitDate: visit.visited_at,
        duration: 0,
        actions: ['Visit']
      })) || []

      setCommunityVisits(visits)
      return visits
    } catch (error) {
      console.error('Error loading community visits:', error)
      return []
    }
  }

  // Helper function to get community name by ID
  const getCommunityName = (communityId: number): string => {
    const communityNames: { [key: number]: string } = {
      1: 'PATRON',
      2: 'Homohumanicus'
    }
    return communityNames[communityId] || 'Unknown Community'
  }

  useEffect(() => {
    let mounted = true

    // Get initial session
    const getInitialSession = async () => {
      try {
        const { session, error } = await auth.getSession()
        
        if (error) {
          console.error('Error getting session:', error)
        } else if (session?.user && mounted) {
          const convertedUser = await convertSupabaseUser(session.user)
          if (convertedUser) {
            setUser(convertedUser)
            await loadUserCommunityVisits(convertedUser.id)
          }
        }
      } catch (error) {
        console.error('Error in getInitialSession:', error)
      } finally {
        if (mounted) {
          setIsLoading(false)
        }
      }
    }

    getInitialSession()

    // Listen for auth changes
    const { data: { subscription } } = auth.onAuthStateChange(async (event, session) => {
      if (!mounted) return

      console.log('Auth state changed:', event, session?.user?.email)

      if (event === 'SIGNED_IN' && session?.user) {
        const convertedUser = await convertSupabaseUser(session.user)
        if (convertedUser) {
          setUser(convertedUser)
          await loadUserCommunityVisits(convertedUser.id)
          
          // Update last login
          await db.updateLastLogin(convertedUser.id)
        }
      } else if (event === 'SIGNED_OUT') {
        setUser(null)
        setCommunityVisits([])
      }

      setIsLoading(false)
    })

    return () => {
      mounted = false
      subscription.unsubscribe()
    }
  }, [])

  const login = async (email: string, password: string, loginType: 'frontend' | 'backend' = 'frontend'): Promise<boolean> => {
    try {
      setIsLoading(true)
      
      const { data, error } = await auth.signIn(email, password)
      
      if (error) {
        console.error('Login error:', error.message)
        return false
      }

      if (data.user) {
        const convertedUser = await convertSupabaseUser(data.user)
        
        if (!convertedUser) {
          console.error('Failed to convert user')
          return false
        }

        // Check if user role matches login type
        if (loginType === 'backend' && !['backend_admin', 'moderator'].includes(convertedUser.role)) {
          console.error('User does not have admin privileges')
          await auth.signOut() // Sign out if not admin
          return false
        }

        if (loginType === 'frontend' && convertedUser.role !== 'frontend_user') {
          console.error('User is not a frontend user')
          await auth.signOut() // Sign out if not frontend user
          return false
        }

        if (!convertedUser.isActive) {
          console.error('User account is inactive')
          await auth.signOut()
          return false
        }

        setUser(convertedUser)
        await loadUserCommunityVisits(convertedUser.id)
        
        // Update last login
        await db.updateLastLogin(convertedUser.id)
        
        return true
      }

      return false
    } catch (error) {
      console.error('Login failed:', error)
      return false
    } finally {
      setIsLoading(false)
    }
  }

  const signup = async (userData: SignupData): Promise<boolean> => {
    try {
      setIsLoading(true)
      
      const { data, error } = await auth.signUp(userData.email, userData.password, {
        firstName: userData.firstName,
        lastName: userData.lastName
      })
      
      if (error) {
        console.error('Signup error:', error.message)
        return false
      }

      if (data.user) {
        const convertedUser = await convertSupabaseUser(data.user)
        
        if (convertedUser) {
          setUser(convertedUser)
          setCommunityVisits([])
          return true
        }
      }

      return false
    } catch (error) {
      console.error('Signup failed:', error)
      return false
    } finally {
      setIsLoading(false)
    }
  }

  const logout = async (): Promise<void> => {
    try {
      setIsLoading(true)
      const { error } = await auth.signOut()
      
      if (error) {
        console.error('Logout error:', error.message)
      }
      
      setUser(null)
      setCommunityVisits([])
    } catch (error) {
      console.error('Logout failed:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const visitCommunity = async (communityId: number): Promise<boolean> => {
    if (!user) return false
    
    try {
      const { data, error } = await db.trackCommunityVisit(user.id, communityId)
      
      if (error) {
        console.error('Error tracking community visit:', error)
        return false
      }

      if (data) {
        const newVisit: CommunityVisit = {
          communityId,
          communityName: getCommunityName(communityId),
          visitDate: data.visited_at,
          duration: 0,
          actions: ['Visit']
        }
        
        setCommunityVisits(prev => [newVisit, ...prev])
        return true
      }
      
      return false
    } catch (error) {
      console.error('Failed to track community visit:', error)
      return false
    }
  }

  const getUserVisits = (): CommunityVisit[] => {
    return communityVisits
  }

  const isAdmin = (): boolean => {
    return user ? ['backend_admin', 'moderator'].includes(user.role) : false
  }

  const isFrontendUser = (): boolean => {
    return user ? user.role === 'frontend_user' : false
  }

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    signup,
    logout,
    visitCommunity,
    getUserVisits,
    isAdmin,
    isFrontendUser
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
