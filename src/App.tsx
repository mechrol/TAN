import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Community from './pages/Community'
import CustomizeCommunity from './pages/CustomizeCommunity'
import Analytics from './pages/Analytics'
import Integrations from './pages/Integrations'
import Login from './pages/Login'
import './index.css'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public route - Login page */}
          <Route path="/login" element={<Login />} />
          
          {/* Protected routes - All wrapped with Layout */}
          <Route path="/" element={
            <ProtectedRoute>
              <Layout>
                <Dashboard />
              </Layout>
            </ProtectedRoute>
          } />
          
          <Route path="/community" element={
            <ProtectedRoute>
              <Layout>
                <Community />
              </Layout>
            </ProtectedRoute>
          } />
          
          <Route path="/community/:communityId/customize" element={
            <ProtectedRoute>
              <Layout>
                <CustomizeCommunity />
              </Layout>
            </ProtectedRoute>
          } />
          
          <Route path="/analytics" element={
            <ProtectedRoute>
              <Layout>
                <Analytics />
              </Layout>
            </ProtectedRoute>
          } />
          
          <Route path="/integrations" element={
            <ProtectedRoute>
              <Layout>
                <Integrations />
              </Layout>
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
