import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { 
  Home, 
  Users, 
  ShoppingBag, 
  BarChart3, 
  Settings,
  ChevronDown,
  Bot,
  LogOut,
  User
} from 'lucide-react'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const { user, logout, getUserVisits } = useAuth()

  const isActive = (path: string) => {
    return location.pathname === path
  }

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  // Don't show sidebar for Community page
  const showSidebar = location.pathname !== '/community'

  // Get user's total community visits
  const totalVisits = getUserVisits().length

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">AITribes</h1>
              <p className="text-xs text-gray-500 uppercase tracking-wide">ENTERPRISE</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-8">
            <Link
              to="/"
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                isActive('/') 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Dashboard</span>
            </Link>

            <Link
              to="/community"
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                isActive('/community') 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Community</span>
              {totalVisits > 0 && (
                <span className="bg-green-500 text-white text-xs px-1.5 py-0.5 rounded-full font-medium">
                  {totalVisits}
                </span>
              )}
            </Link>

            <div className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-gray-900 cursor-pointer">
              <ShoppingBag className="w-4 h-4" />
              <span>Reseller</span>
              <ChevronDown className="w-4 h-4" />
            </div>

            <Link
              to="/analytics"
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                isActive('/analytics') 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              <span>Analytics</span>
            </Link>

            <Link
              to="/integrations"
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                isActive('/integrations') 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Settings className="w-4 h-4" />
              <span>Integrations</span>
            </Link>
          </nav>

          {/* User Profile */}
          <div className="flex items-center space-x-3">
            {user ? (
              <>
                <div className="flex items-center space-x-2 px-3 py-1 bg-blue-50 rounded-lg">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <User className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm font-medium text-blue-900">
                    {user.firstName} {user.lastName}
                  </span>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-red-600 transition-colors"
                  title="Logout"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </header>

      {/* Content Layout */}
      {showSidebar ? (
        <div className="flex">
          <aside className="w-64 bg-white border-r border-gray-200 min-h-screen p-6">
            <nav className="space-y-2">
              <Link
                to="/"
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                  isActive('/') 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Home className="w-5 h-5" />
                <span>Dashboard</span>
              </Link>
              
              {user && (
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-900 mb-2">Community Activity</h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Total Visits:</span>
                      <span className="font-medium">{totalVisits}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Active Communities:</span>
                      <span className="font-medium">2</span>
                    </div>
                  </div>
                </div>
              )}
            </nav>
          </aside>

          <main className="flex-1 p-6">
            {children}
          </main>
        </div>
      ) : (
        <main className="w-full">
          {children}
        </main>
      )}
    </div>
  )
}

export default Layout
