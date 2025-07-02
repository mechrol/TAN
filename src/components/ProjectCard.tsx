import React from 'react'
import { Users, DollarSign, TrendingUp } from 'lucide-react'

interface Project {
  id: string
  title: string
  description: string
  stage: string
  progress: number
  revenue: string
  members: number
  image: string
}

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const getStageColor = (stage: string) => {
    if (stage.includes('OTW')) return 'bg-green-100 text-green-800'
    if (stage.includes('OW')) return 'bg-blue-100 text-blue-800'
    if (stage.includes('OU')) return 'bg-orange-100 text-orange-800'
    return 'bg-gray-100 text-gray-800'
  }

  return (
    <div className="card hover:shadow-lg transition-shadow cursor-pointer">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      
      <div className="space-y-3">
        <div>
          <h3 className="font-semibold text-gray-900 mb-1">{project.title}</h3>
          <p className="text-sm text-gray-600 line-clamp-2">{project.description}</p>
        </div>
        
        <div className="flex items-center justify-between">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStageColor(project.stage)}`}>
            {project.stage}
          </span>
          <span className="text-sm text-gray-500">{project.progress}% complete</span>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-primary-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${project.progress}%` }}
          ></div>
        </div>
        
        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <div className="flex items-center space-x-1 text-green-600">
            <DollarSign className="w-4 h-4" />
            <span className="text-sm font-medium">{project.revenue}</span>
          </div>
          <div className="flex items-center space-x-1 text-gray-600">
            <Users className="w-4 h-4" />
            <span className="text-sm">{project.members}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
