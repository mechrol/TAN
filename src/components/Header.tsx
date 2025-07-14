import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { 
  Home, 
  Users, 
  BarChart3, 
  Puzzle, 
  MessageSquare,
  Bell,
  ChevronDown,
  LogOut,
  User
} from 'lucide-react'

const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { adminProfile, signOut } = useAuth()

  const navItems = [
    { id: 'dashboard', icon: Home, label: 'Dashboard', path: '/dashboard' },
    { id: 'community', icon: Users, label: 'Community', path: '/community' },
    { id: 'reseller', icon: null, label: 'Reseller', path: '/reseller', hasDropdown: true },
    { id: 'analytics', icon: BarChart3, label: 'Analytics', path: '/analytics' },
    { id: 'integrations', icon: Puzzle, label: 'Integrations', path: '/integrations' }
  ]

  const isActive = (path: string) => location.pathname === path

  const handleSignOut = async () => {
    try {
      await signOut()
      navigate('/admin/login')
    } catch (error) {
      console.error('Sign out error:', error)
    }
  }

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">AITribes</span>
            <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">ENTERPRISE</span>
          </div>
        </div>
        
        <nav className="flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => item.path && navigate(item.path)}
              className={`flex items-center space-x-2 font-medium transition-colors ${
                isActive(item.path || '') 
                  ? 'text-blue-600' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {item.icon && <item.icon className="w-4 h-4" />}
              <span>{item.label}</span>
              {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
            </button>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Bell className="w-5 h-5 text-gray-600" />
          
          {/* User Profile Dropdown */}
          <div className="relative group">
            <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <User className="w-4 h-4" />
              </div>
              <span className="text-sm font-medium">
                {adminProfile?.full_name || adminProfile?.email?.split('@')[0] || 'Admin'}
              </span>
              <ChevronDown className="w-4 h-4" />
            </button>
            
            {/* Dropdown Menu */}
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="p-3 border-b border-gray-100">
                <p className="text-sm font-medium text-gray-900">
                  {adminProfile?.full_name || 'Admin User'}
                </p>
                <p className="text-xs text-gray-600">{adminProfile?.email}</p>
                <p className="text-xs text-blue-600 capitalize">{adminProfile?.role}</p>
              </div>
              <div className="p-1">
                <button
                  onClick={handleSignOut}
                  className="w-full flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
