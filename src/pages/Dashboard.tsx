import React, { useState } from 'react'
import Header from '../components/Header'
import { 
  Home, 
  Users, 
  Settings, 
  BarChart3, 
  Puzzle, 
  TrendingUp,
  MessageSquare,
  Calendar,
  Award,
  Search,
  Bell,
  User
} from 'lucide-react'

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard')

  const sidebarItems = [
    { id: 'dashboard', icon: Home, label: 'Dashboard' },
    { id: 'community', icon: Users, label: 'Community' },
    { id: 'polls', icon: MessageSquare, label: 'Polls' },
    { id: 'analytics', icon: BarChart3, label: 'Analytics' },
    { id: 'events', icon: Calendar, label: 'Events' },
    { id: 'rewards', icon: Award, label: 'Rewards' },
    { id: 'integrations', icon: Puzzle, label: 'Integrations' },
    { id: 'settings', icon: Settings, label: 'Settings' }
  ]

  const stats = [
    { title: 'Community', value: '9', color: 'bg-blue-500' },
    { title: 'Active Polls', value: '24', color: 'bg-green-500' },
    { title: 'AI Conversations', value: '156', color: 'bg-purple-500' },
    { title: 'Community Members', value: '1,247', color: 'bg-orange-500' }
  ]

  const recentPolls = [
    {
      id: 1,
      question: "What are you thinking about?",
      author: "James Wilson",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
      responses: 45,
      aiConversations: 12,
      time: "2 hours ago"
    },
    {
      id: 2,
      question: "How do you feel about remote work?",
      author: "Sarah Chen",
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150",
      responses: 78,
      aiConversations: 23,
      time: "4 hours ago"
    },
    {
      id: 3,
      question: "What motivates you most?",
      author: "Alex Rodriguez",
      avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150",
      responses: 92,
      aiConversations: 31,
      time: "6 hours ago"
    }
  ]

  const aiInsights = [
    { emotion: "Joy", percentage: 34, trend: "up" },
    { emotion: "Curiosity", percentage: 28, trend: "up" },
    { emotion: "Concern", percentage: 22, trend: "down" },
    { emotion: "Excitement", percentage: 16, trend: "up" }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
          <div className="p-6">
            <div className="flex items-center space-x-2 mb-8">
              <Home className="w-5 h-5 text-gray-600" />
              <span className="font-semibold text-gray-900">Dashboard</span>
            </div>
            
            <nav className="space-y-2">
              {sidebarItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    activeTab === item.id 
                      ? 'bg-blue-50 text-blue-600' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">{stat.title}</p>
                    <p className="text-3xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  </div>
                  <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Polls */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-lg font-semibold text-gray-900">Recent Interactive Polls</h2>
                <p className="text-gray-600 text-sm mt-1">Polls that triggered AI conversations</p>
              </div>
              <div className="p-6 space-y-4">
                {recentPolls.map((poll) => (
                  <div key={poll.id} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                    <img 
                      src={poll.avatar} 
                      alt={poll.author}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-medium text-gray-900">{poll.author}</span>
                        <span className="text-gray-500 text-sm">{poll.time}</span>
                      </div>
                      <p className="text-gray-700 mb-2">{poll.question}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span>{poll.responses} responses</span>
                        <span className="text-purple-600 font-medium">{poll.aiConversations} AI conversations</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Emotion Insights */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-lg font-semibold text-gray-900">AI Emotion Insights</h2>
                <p className="text-gray-600 text-sm mt-1">From "What am I feeling?" conversations</p>
              </div>
              <div className="p-6 space-y-4">
                {aiInsights.map((insight, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">{insight.emotion}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-900 font-semibold">{insight.percentage}%</span>
                      <TrendingUp className={`w-4 h-4 ${insight.trend === 'up' ? 'text-green-500' : 'text-red-500'}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Activity Timeline */}
          <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">Activity Timeline</h2>
              <p className="text-gray-600 text-sm mt-1">Latest community interactions</p>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-gray-900 font-medium">New AI conversation started</p>
                    <p className="text-gray-600 text-sm">User explored feelings about career change</p>
                    <p className="text-gray-500 text-xs mt-1">2 minutes ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-gray-900 font-medium">Poll completed</p>
                    <p className="text-gray-600 text-sm">"What motivates you?" received 50+ responses</p>
                    <p className="text-gray-500 text-xs mt-1">15 minutes ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-gray-900 font-medium">Community milestone</p>
                    <p className="text-gray-600 text-sm">1000+ AI conversations this month</p>
                    <p className="text-gray-500 text-xs mt-1">1 hour ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Dashboard
