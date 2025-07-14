import React, { useState } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  Shield,
  ArrowRight,
  AlertCircle,
  Settings,
  BarChart3,
  Database
} from 'lucide-react'

const BackendLogin: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { login, isLoading } = useAuth()
  
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const from = location.state?.from?.pathname || '/admin/dashboard'

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    if (error) setError('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    
    try {
      const success = await login(formData.email, formData.password, 'backend')
      
      if (success) {
        navigate(from, { replace: true })
      } else {
        setError('Invalid administrator credentials. Please check your email and password.')
      }
    } catch (error) {
      setError('Authentication failed. Please try again.')
      console.error('Admin authentication error:', error)
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-purple-500 rounded-full opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-40 w-40 h-40 bg-indigo-500 rounded-full opacity-5 animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-cyan-500 rounded-full opacity-10 animate-pulse delay-500"></div>
      </div>

      {/* Main Login Container */}
      <div className="relative z-10 w-full max-w-md">
        {/* Logo/Brand Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl mb-4 shadow-lg">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            AITribes Admin
          </h1>
          <p className="text-sm text-gray-400 uppercase tracking-wide font-medium">
            ADMINISTRATION PANEL
          </p>
          <div className="flex items-center justify-center space-x-4 mt-2 text-xs text-gray-500">
            <div className="flex items-center space-x-1">
              <Settings className="w-3 h-3" />
              <span>Manage</span>
            </div>
            <div className="flex items-center space-x-1">
              <BarChart3 className="w-3 h-3" />
              <span>Analyze</span>
            </div>
            <div className="flex items-center space-x-1">
              <Database className="w-3 h-3" />
              <span>Control</span>
            </div>
          </div>
        </div>

        {/* Login Form Card */}
        <div className="bg-slate-800/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-slate-700/50">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">
              Administrator Access
            </h2>
            <p className="text-gray-400">
              Sign in to access the administration dashboard
            </p>
          </div>

          {/* Security Notice */}
          <div className="mb-6 p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg">
            <div className="flex items-center space-x-2 text-amber-400">
              <Shield className="w-4 h-4 flex-shrink-0" />
              <span className="text-sm font-medium">Secure Administrator Login</span>
            </div>
            <p className="text-xs text-amber-300/80 mt-1">
              This area is restricted to authorized personnel only. All access attempts are logged.
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center space-x-2 text-red-400">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span className="text-sm">{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Field */}
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                name="email"
                placeholder="Administrator Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full pl-12 pr-4 py-3 border border-slate-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-slate-700/50 backdrop-blur-sm transition-all text-white placeholder-gray-400"
                required
                disabled={isLoading}
              />
            </div>

            {/* Password Field */}
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Administrator Password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full pl-12 pr-12 py-3 border border-slate-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-slate-700/50 backdrop-blur-sm transition-all text-white placeholder-gray-400"
                required
                disabled={isLoading}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors"
                disabled={isLoading}
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            {/* Forgot Password Link */}
            <div className="text-right">
              <button
                type="button"
                className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
                disabled={isLoading}
              >
                Request Access Recovery
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Authenticating...</span>
                </>
              ) : (
                <>
                  <Shield className="w-5 h-5" />
                  <span>Access Admin Panel</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center">
            <div className="flex-1 border-t border-slate-600"></div>
            <span className="px-4 text-sm text-gray-500">secure access</span>
            <div className="flex-1 border-t border-slate-600"></div>
          </div>

          {/* Security Features */}
          <div className="space-y-3">
            <div className="bg-slate-700/30 border border-slate-600/50 text-gray-300 py-3 px-4 rounded-xl text-sm">
              <div className="flex items-center space-x-2 mb-1">
                <Shield className="w-4 h-4 text-indigo-400" />
                <span className="font-medium">Multi-Factor Authentication</span>
              </div>
              <p className="text-xs text-gray-400">Additional security verification may be required</p>
            </div>

            <div className="bg-slate-700/30 border border-slate-600/50 text-gray-300 py-3 px-4 rounded-xl text-sm">
              <div className="flex items-center space-x-2 mb-1">
                <Database className="w-4 h-4 text-purple-400" />
                <span className="font-medium">Audit Logging</span>
              </div>
              <p className="text-xs text-gray-400">All administrative actions are monitored and logged</p>
            </div>
          </div>

          {/* User Login Link */}
          <div className="mt-6 text-center">
            <Link
              to="/login"
              className="text-sm text-gray-400 hover:text-gray-300 transition-colors"
            >
              ← Back to User Login
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-sm text-gray-500">
          <p>© 2025 AITribes Administration. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2 text-xs">
            <button className="hover:text-indigo-400 transition-colors">Security Policy</button>
            <span>•</span>
            <button className="hover:text-indigo-400 transition-colors">Admin Guidelines</button>
            <span>•</span>
            <button className="hover:text-indigo-400 transition-colors">Support</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BackendLogin
