import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useFrontendAuth } from '../contexts/FrontendAuthContext'
import { 
  MessageSquare, 
  Eye, 
  EyeOff,
  User,
  Lock,
  Heart,
  Users,
  Sparkles,
  AlertCircle,
  UserPlus
} from 'lucide-react'

const FrontendLogin = () => {
  const [isSignUp, setIsSignUp] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const location = useLocation()
  const { signIn, signUp, loading } = useFrontendAuth()

  const from = location.state?.from?.pathname || '/frontend'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    try {
      if (isSignUp) {
        await signUp(email, password, fullName)
        // After successful signup, user might need to verify email
        // For now, we'll try to sign them in automatically
        await signIn(email, password)
      } else {
        await signIn(email, password)
      }
      navigate(from, { replace: true })
    } catch (error: any) {
      console.error('Auth error:', error)
      setError(error.message || `Failed to ${isSignUp ? 'sign up' : 'sign in'}. Please try again.`)
    }
  }

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Header */}
      <header className="p-6">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              FeelSpace
            </span>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Illustration & Content */}
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-3xl"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=500" 
                  alt="Community illustration"
                  className="w-full h-64 object-cover rounded-2xl"
                />
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl font-bold text-gray-900 leading-tight">
                Share your feelings and connect with{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  AI-powered communities
                </span>
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Express yourself through interactive polls, engage in meaningful AI conversations, 
                and discover a supportive community that understands your emotional journey.
              </p>

              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">10K+ Members</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">AI-Powered</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">Interactive</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Auth Form */}
          <div className="w-full max-w-md mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  {isSignUp ? <UserPlus className="w-8 h-8 text-gray-700" /> : <User className="w-8 h-8 text-gray-700" />}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {isSignUp ? 'Join FeelSpace' : 'Welcome Back'}
                </h2>
                <p className="text-gray-600">
                  {isSignUp 
                    ? 'Create your account to start sharing your feelings' 
                    : 'Sign in to continue your emotional journey'
                  }
                </p>
              </div>

              {/* Error Message */}
              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-red-800 text-sm font-medium">
                      {isSignUp ? 'Sign up failed' : 'Sign in failed'}
                    </p>
                    <p className="text-red-700 text-sm mt-1">{error}</p>
                  </div>
                </div>
              )}

              {/* Auth Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {isSignUp && (
                  <div>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your full name"
                      disabled={loading}
                    />
                  </div>
                )}

                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                    required
                    disabled={loading}
                  />
                </div>

                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-12"
                    placeholder="••••••••••••"
                    required
                    disabled={loading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    disabled={loading}
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>

                {!isSignUp && (
                  <div className="text-right">
                    <button type="button" className="text-sm text-blue-600 hover:text-blue-500" disabled={loading}>
                      Forgot Password?
                    </button>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-4 rounded-xl hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      {isSignUp ? <UserPlus className="w-4 h-4" /> : <User className="w-4 h-4" />}
                      <span>{isSignUp ? 'Create Account' : 'Sign In'}</span>
                    </>
                  )}
                </button>
              </form>

              {/* Toggle Sign Up/Sign In */}
              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
                  <button
                    onClick={() => {
                      setIsSignUp(!isSignUp)
                      setError('')
                    }}
                    className="text-blue-600 hover:text-blue-500 font-medium"
                    disabled={loading}
                  >
                    {isSignUp ? 'Sign In' : 'Sign Up'}
                  </button>
                </p>
              </div>

              {/* Language Selection */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-4 text-center">Choose your language</p>
                <div className="grid grid-cols-3 gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className="flex items-center justify-center space-x-1 p-2 text-xs text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                      disabled={loading}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Admin Access */}
            <div className="mt-6 text-center">
              <button 
                onClick={() => navigate('/admin/login')}
                className="text-sm text-gray-600 hover:text-gray-900"
                disabled={loading}
              >
                Admin Access →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FrontendLogin
