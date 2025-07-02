import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Users, Globe, Zap, AlertCircle } from 'lucide-react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSignUp, setIsSignUp] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const { login, signup } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setMessage('')
    
    try {
      if (isSignUp) {
        await signup(email, password)
        setMessage('Check your email for the confirmation link!')
      } else {
        await login(email, password)
      }
    } catch (error: any) {
      setError(error.message || 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' },
    { code: 'id', name: 'Indonesian', flag: '🇮🇩' },
    { code: 'da', name: 'Dansk', flag: '🇩🇰' }
  ]

  return (
    <div className="min-h-screen flex">
      {/* Left side - Hero */}
      <div className="flex-1 bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100 flex items-center justify-center p-8">
        <div className="max-w-lg text-center">
          {/* Illustration */}
          <div className="mb-8 relative">
            <div className="w-80 h-64 mx-auto bg-gradient-to-r from-purple-400 to-blue-500 rounded-3xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-600/20"></div>
              <div className="relative z-10 flex space-x-4">
                <div className="w-16 h-20 bg-white/90 rounded-lg flex items-center justify-center">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <div className="w-16 h-20 bg-white/90 rounded-lg flex items-center justify-center">
                  <Globe className="w-8 h-8 text-blue-600" />
                </div>
                <div className="w-16 h-20 bg-white/90 rounded-lg flex items-center justify-center">
                  <Zap className="w-8 h-8 text-indigo-600" />
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-4 left-4 w-3 h-3 bg-white/60 rounded-full"></div>
              <div className="absolute top-8 right-6 w-2 h-2 bg-white/40 rounded-full"></div>
              <div className="absolute bottom-6 left-8 w-4 h-4 bg-white/50 rounded-full"></div>
            </div>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Create and nurture vibrant AI communities.
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Connect with fellow enthusiasts, exchange insights, and collaborate on innovative projects. 
            Join us to revolutionize your AI networking experience!
          </p>
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="w-96 bg-white flex flex-col">
        {/* Header */}
        <div className="p-8 border-b border-gray-100">
          <div className="flex items-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">AITribes</span>
          </div>
          
          <div className="flex items-center space-x-2 text-primary-600 mb-2">
            <Users className="w-5 h-5" />
            <span className="font-semibold">{isSignUp ? 'Sign Up' : 'Sign In'}</span>
          </div>
          <p className="text-sm text-gray-500">
            {isSignUp ? 'Create your account to get started.' : 'Sign in to your account to continue.'}
          </p>
        </div>

        {/* Form */}
        <div className="flex-1 p-8">
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2 text-red-700">
              <AlertCircle className="w-4 h-4" />
              <span className="text-sm">{error}</span>
            </div>
          )}

          {message && (
            <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg text-green-700">
              <span className="text-sm">{message}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
                required
              />
            </div>
            
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"
                required
                minLength={6}
              />
            </div>

            {!isSignUp && (
              <div className="text-right">
                <a href="#" className="text-sm text-primary-600 hover:text-primary-700">
                  Forgot Password?
                </a>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary py-3 text-lg"
            >
              {loading ? (isSignUp ? 'Creating Account...' : 'Signing In...') : (isSignUp ? '🚀 Create Account' : '👤 Sign In')}
            </button>

            <div className="text-center">
              <button
                type="button"
                onClick={() => {
                  setIsSignUp(!isSignUp)
                  setError('')
                  setMessage('')
                }}
                className="text-sm text-primary-600 hover:text-primary-700"
              >
                {isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign up"}
              </button>
            </div>
          </form>
        </div>

        {/* Language Selection */}
        <div className="p-8 border-t border-gray-100">
          <div className="grid grid-cols-4 gap-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                className="flex items-center space-x-1 px-2 py-1 text-xs text-gray-600 hover:bg-gray-50 rounded"
              >
                <span>{lang.flag}</span>
                <span>{lang.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
