import React, { useState } from 'react'
import Layout from '../components/Layout'
import ModuleFramework from '../components/ModuleFramework'
import ProjectCard from '../components/ProjectCard'
import { Plus, Target, Lightbulb, Users, TrendingUp } from 'lucide-react'

export default function ModulePage() {
  const [activeModule, setActiveModule] = useState<string | null>(null)

  const projects = [
    {
      id: '1',
      title: 'AI Content Creator Platform',
      description: 'Monetize your AI-generated content through community engagement and premium subscriptions.',
      stage: 'OTW - Function Selection',
      progress: 65,
      revenue: '$2,450',
      members: 234,
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1'
    },
    {
      id: '2',
      title: 'Community Learning Hub',
      description: 'Transform knowledge sharing into sustainable revenue streams through structured learning paths.',
      stage: 'OW - Procedure Selection',
      progress: 45,
      revenue: '$1,890',
      members: 156,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1'
    },
    {
      id: '3',
      title: 'AI Consulting Network',
      description: 'Connect AI experts with businesses through a structured consultation framework.',
      stage: 'OU - Conclusions',
      progress: 80,
      revenue: '$5,670',
      members: 89,
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1'
    }
  ]

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Monetization Modules</h1>
            <p className="text-gray-600 mt-1">
              Transform community projects into sustainable revenue streams using our OI framework
            </p>
          </div>
          <button className="btn-primary flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>New Module</span>
          </button>
        </div>

        {/* Framework Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          <div className="card text-center">
            <Target className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <h3 className="font-semibold text-sm">OI - Assignment</h3>
            <p className="text-xs text-gray-600 mt-1">Define objectives</p>
          </div>
          <div className="card text-center">
            <Lightbulb className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <h3 className="font-semibold text-sm">OTW - Function</h3>
            <p className="text-xs text-gray-600 mt-1">Select functions</p>
          </div>
          <div className="card text-center">
            <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <h3 className="font-semibold text-sm">OW - Procedure</h3>
            <p className="text-xs text-gray-600 mt-1">Define procedures</p>
          </div>
          <div className="card text-center">
            <TrendingUp className="w-8 h-8 text-orange-600 mx-auto mb-2" />
            <h3 className="font-semibold text-sm">OU - Conclusions</h3>
            <p className="text-xs text-gray-600 mt-1">Draw conclusions</p>
          </div>
          <div className="card text-center">
            <Target className="w-8 h-8 text-red-600 mx-auto mb-2" />
            <h3 className="font-semibold text-sm">OS - Iteration</h3>
            <p className="text-xs text-gray-600 mt-1">Implement goals</p>
          </div>
        </div>

        {/* Active Projects */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Active Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* Module Framework Detail */}
        <ModuleFramework />
      </div>
    </Layout>
  )
}
