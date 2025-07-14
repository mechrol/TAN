import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

interface ProtectedRouteProps {
  children: React.ReactNode
  requireRole?: 'frontend_user' | 'backend_admin' | 'moderator'
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requireRole }) => {
  const { isAuthenticated, isLoading, user } = useAuth()
  const location = useLocation()

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    // Redirect to appropriate login based on the route
    const loginPath = location.pathname.startsWith('/admin') ? '/admin/login' : '/login'
    return <Navigate to={loginPath} state={{ from: location }} replace />
  }

  // Check role requirements
  if (requireRole && user) {
    if (requireRole === 'frontend_user' && user.role !== 'frontend_user') {
      // Frontend users only - redirect non-frontend users to admin login
      return <Navigate to="/admin/login" replace />
    }
    
    if ((requireRole === 'backend_admin' || requireRole === 'moderator') && 
        !['backend_admin', 'moderator'].includes(user.role)) {
      // Admin/moderator required - redirect to frontend login
      return <Navigate to="/login" replace />
    }
  }

  return <>{children}</>
}

export default ProtectedRoute
