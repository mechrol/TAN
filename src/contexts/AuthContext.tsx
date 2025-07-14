import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  avatar?: string
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (email: string, password: string) => Promise<boolean>
  signup: (userData: SignupData) => Promise<boolean>
  logout: () => void
  visitCommunity: (communityId: number) => Promise<boolean>
  getUserVisits: () => CommunityVisit[]
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

  useEffect(() => {
    // Check for existing authentication on app load
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('authToken')
        const userData = localStorage.getItem('userData')
        const visits = localStorage.getItem('communityVisits')
        
        if (token && userData) {
          setUser(JSON.parse(userData))
          if (visits) {
            setCommunityVisits(JSON.parse(visits))
          }
        }
      } catch (error) {
        console.error('Auth check failed:', error)
        localStorage.removeItem('authToken')
        localStorage.removeItem('userData')
        localStorage.removeItem('communityVisits')
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      setIsLoading(true)
      
      // Simulate API call - replace with actual backend integration
      const response = await simulateLoginAPI(email, password)
      
      if (response.success) {
        const userData: User = {
          id: response.user.id,
          email: response.user.email,
          firstName: response.user.firstName,
          lastName: response.user.lastName,
          avatar: response.user.avatar
        }
        
        setUser(userData)
        localStorage.setItem('authToken', response.token)
        localStorage.setItem('userData', JSON.stringify(userData))
        
        // Load user's community visits
        const visits = await loadUserCommunityVisits(userData.id)
        setCommunityVisits(visits)
        localStorage.setItem('communityVisits', JSON.stringify(visits))
        
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
      
      // Simulate API call - replace with actual backend integration
      const response = await simulateSignupAPI(userData)
      
      if (response.success) {
        const newUser: User = {
          id: response.user.id,
          email: response.user.email,
          firstName: response.user.firstName,
          lastName: response.user.lastName,
          avatar: response.user.avatar
        }
        
        setUser(newUser)
        localStorage.setItem('authToken', response.token)
        localStorage.setItem('userData', JSON.stringify(newUser))
        setCommunityVisits([])
        localStorage.setItem('communityVisits', JSON.stringify([]))
        
        return true
      }
      
      return false
    } catch (error) {
      console.error('Signup failed:', error)
      return false
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    setCommunityVisits([])
    localStorage.removeItem('authToken')
    localStorage.removeItem('userData')
    localStorage.removeItem('communityVisits')
  }

  const visitCommunity = async (communityId: number): Promise<boolean> => {
    if (!user) return false
    
    try {
      // Simulate API call to track community visit
      const response = await trackCommunityVisit(user.id, communityId)
      
      if (response.success) {
        const updatedVisits = [...communityVisits, response.visit]
        setCommunityVisits(updatedVisits)
        localStorage.setItem('communityVisits', JSON.stringify(updatedVisits))
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

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    signup,
    logout,
    visitCommunity,
    getUserVisits
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

// Simulated API functions - replace with actual backend calls
const simulateLoginAPI = async (email: string, password: string) => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // Mock successful login
  return {
    success: true,
    token: 'mock-jwt-token-' + Date.now(),
    user: {
      id: 'user-' + Date.now(),
      email,
      firstName: email.split('@')[0].split('.')[0] || 'User',
      lastName: email.split('@')[0].split('.')[1] || 'Name',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1'
    }
  }
}

const simulateSignupAPI = async (userData: SignupData) => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1200))
  
  // Mock successful signup
  return {
    success: true,
    token: 'mock-jwt-token-' + Date.now(),
    user: {
      id: 'user-' + Date.now(),
      email: userData.email,
      firstName: userData.firstName,
      lastName: userData.lastName,
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1'
    }
  }
}

const loadUserCommunityVisits = async (userId: string): Promise<CommunityVisit[]> => {
  // Simulate loading user's community visits
  await new Promise(resolve => setTimeout(resolve, 500))
  
  // Mock community visits data
  return [
    {
      communityId: 1,
      communityName: 'PATRON',
      visitDate: new Date().toISOString(),
      duration: 1200, // seconds
      actions: ['Visit', 'Edit', 'Customize Community']
    },
    {
      communityId: 2,
      communityName: 'Homohumanicus',
      visitDate: new Date(Date.now() - 86400000).toISOString(), // yesterday
      duration: 800,
      actions: ['Visit', 'AI Member Feed']
    }
  ]
}

const trackCommunityVisit = async (userId: string, communityId: number) => {
  // Simulate API call to track visit
  await new Promise(resolve => setTimeout(resolve, 300))
  
  const communityNames: { [key: number]: string } = {
    1: 'PATRON',
    2: 'Homohumanicus'
  }
  
  return {
    success: true,
    visit: {
      communityId,
      communityName: communityNames[communityId] || 'Unknown Community',
      visitDate: new Date().toISOString(),
      duration: 0,
      actions: ['Visit']
    }
  }
}
