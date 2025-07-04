import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Community from './pages/Community'
import CommunityView from './pages/CommunityView'
import CommunityConfig from './pages/CommunityConfig'
import CreateCommunity from './pages/CreateCommunity'
import CustomizeCommunity from './pages/CustomizeCommunity'
import Integrations from './pages/Integrations'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/community" element={<Community />} />
          <Route path="/community/view/:id" element={<CommunityView />} />
          <Route path="/community/config/:id" element={<CommunityConfig />} />
          <Route path="/community/create" element={<CreateCommunity />} />
          <Route path="/community/customize/:id" element={<CustomizeCommunity />} />
          <Route path="/integrations" element={<Integrations />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
