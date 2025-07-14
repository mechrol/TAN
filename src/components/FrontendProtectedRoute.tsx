import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useFrontendAuth } from '../contexts/FrontendAuthContext'

interface FrontendProtectedRouteProps {
  children: React.ReactNode
}

const FrontendProtectedRoute: React.FC<FrontendProtectedRouteProps> = ({ children }) => {
  const { user, isAuthenticated, loading } = useFrontendAuth()
  const location = useLocation()

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  if (!user || !isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return <>{children}</>
}

export default FrontendProtectedRoute
