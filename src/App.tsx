import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import AdminRoute from './components/AdminRoute'
import Layout from './components/Layout'
import AdminLayout from './components/AdminLayout'
import Dashboard from './pages/Dashboard'
import Community from './pages/Community'
import CommunityView from './pages/CommunityView'
import CustomizeCommunity from './pages/CustomizeCommunity'
import Analytics from './pages/Analytics'
import Integrations from './pages/Integrations'
import FrontendLogin from './pages/FrontendLogin'
import BackendLogin from './pages/BackendLogin'
import AdminDashboard from './pages/AdminDashboard'
import Frontend from './pages/Frontend'
import './index.css'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public routes - Login pages */}
          <Route path="/login" element={<FrontendLogin />} />
          <Route path="/admin/login" element={<BackendLogin />} />
          
          {/* Frontend user routes - redirect to Frontend.tsx */}
          <Route path="/frontend" element={
            <ProtectedRoute requireRole="frontend_user">
              <Frontend />
            </ProtectedRoute>
          } />
          
          {/* Backend admin routes */}
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
          
          <Route path="/community/:communityId" element={
            <ProtectedRoute>
              <CommunityView />
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

          {/* Protected routes - Admin only */}
          <Route path="/admin/dashboard" element={
            <AdminRoute>
              <AdminLayout>
                <AdminDashboard />
              </AdminLayout>
            </AdminRoute>
          } />

          {/* Catch all route - redirect to appropriate login */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
