import React from 'react'
import { Target, Lightbulb, Users, TrendingUp, RotateCcw } from 'lucide-react'

export default function ModuleFramework() {
  return (
    <div className="card">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">OI Framework Overview</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-3">
              <Target className="w-5 h-5 text-blue-600" />
              <h3 className="font-semibold">OI - Assignment</h3>
            </div>
            <div className="text-sm text-gray-600 space-y-2">
              <p>• Define project objectives</p>
              <p>• Set monetization goals</p>
              <p>• Identify target audience</p>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-3">
              <RotateCcw className="w-5 h-5 text-red-600" />
              <h3 className="font-semibold">OS - Iteration</h3>
            </div>
            <div className="text-sm text-gray-600 space-y-2">
              <p>• Implement feedback loops</p>
              <p>• Optimize revenue streams</p>
              <p>• Scale successful strategies</p>
            </div>
          </div>
        </div>

        {/* Center Column */}
        <div className="space-y-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-3">
              <Lightbulb className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold">OTW - Function Selection</h3>
            </div>
            <div className="text-sm text-gray-600 space-y-2">
              <p>• Choose monetization methods</p>
              <p>• Select engagement strategies</p>
              <p>• Define value propositions</p>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-3">
              <TrendingUp className="w-5 h-5 text-orange-600" />
              <h3 className="font-semibold">OU - Conclusions</h3>
            </div>
            <div className="text-sm text-gray-600 space-y-2">
              <p>• Analyze performance data</p>
              <p>• Draw actionable insights</p>
              <p>• Plan next iterations</p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-3">
              <Users className="w-5 h-5 text-purple-600" />
              <h3 className="font-semibold">OW - Procedure Selection</h3>
            </div>
            <div className="text-sm text-gray-600 space-y-2">
              <p>• Design implementation steps</p>
              <p>• Create community workflows</p>
              <p>• Establish success metrics</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-primary-50 to-purple-50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">Framework Benefits</h4>
            <div className="text-sm text-gray-600 space-y-1">
              <p>✓ Structured monetization approach</p>
              <p>✓ Community-driven revenue streams</p>
              <p>✓ Scalable business models</p>
              <p>✓ Data-driven optimization</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
