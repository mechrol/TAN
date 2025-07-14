import React from 'react'
import { Settings, Zap, Bot, Database } from 'lucide-react'

const Integrations: React.FC = () => {
  const integrations = [
    {
      id: 1,
      name: 'OpenAI GPT-4',
      description: 'Advanced AI language model for community interactions',
      status: 'Connected',
      icon: Bot,
      color: 'text-green-500'
    },
    {
      id: 2,
      name: 'Slack',
      description: 'Team communication and notifications',
      status: 'Available',
      icon: Zap,
      color: 'text-blue-500'
    },
    {
      id: 3,
      name: 'Discord',
      description: 'Community chat integration',
      status: 'Available',
      icon: Settings,
      color: 'text-purple-500'
    },
    {
      id: 4,
      name: 'Database Analytics',
      description: 'Advanced data processing and insights',
      status: 'Connected',
      icon: Database,
      color: 'text-orange-500'
    }
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Integrations</h1>
        <p className="text-gray-600 mt-1">Manage your AI agents and third-party integrations</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {integrations.map((integration) => {
          const IconComponent = integration.icon
          return (
            <div key={integration.id} className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  <IconComponent className={`w-8 h-8 ${integration.color}`} />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{integration.name}</h3>
                    <p className="text-gray-600 mt-1">{integration.description}</p>
                    <div className="mt-3">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        integration.status === 'Connected' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {integration.status}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  {integration.status === 'Connected' ? 'Configure' : 'Connect'}
                </button>
              </div>
            </div>
          )
        })}
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Agent Configuration</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div>
              <h4 className="font-medium text-gray-900">Response Time</h4>
              <p className="text-sm text-gray-600">Average AI response time for community interactions</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold text-gray-900">1.2s</p>
              <p className="text-sm text-green-600">Optimal</p>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div>
              <h4 className="font-medium text-gray-900">Accuracy Rate</h4>
              <p className="text-sm text-gray-600">AI response accuracy based on user feedback</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold text-gray-900">96.8%</p>
              <p className="text-sm text-green-600">Excellent</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Integrations
