import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { FrontendAuthProvider } from './contexts/FrontendAuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import FrontendProtectedRoute from './components/FrontendProtectedRoute'
import Dashboard from './pages/Dashboard'
import Community from './pages/Community'
import Frontend from './pages/Frontend'
import BackendLogin from './pages/BackendLogin'
import FrontendLogin from './pages/FrontendLogin'

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Admin routes - wrapped with AuthProvider only */}
          <Route path="/admin/login" element={<BackendLogin />} />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute requireAdmin={true}>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/community" 
            element={
              <ProtectedRoute requireAdmin={true}>
                <Community />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </AuthProvider>

      {/* Frontend routes - wrapped with FrontendAuthProvider */}
      <FrontendAuthProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<FrontendLogin />} />
          <Route 
            path="/frontend" 
            element={
              <FrontendProtectedRoute>
                <Frontend />
              </FrontendProtectedRoute>
            } 
          />
        </Routes>
      </FrontendAuthProvider>
    </Router>
  )
}

export default App
