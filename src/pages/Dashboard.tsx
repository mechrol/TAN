import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import { 
  Users, 
  MessageSquare, 
  TrendingUp, 
  DollarSign, 
  Bell, 
  Search,
  Plus,
  MoreHorizontal,
  Heart,
  Share,
  Bookmark,
  LogOut
} from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts'

const analyticsData = [
  { name: 'Jan', engagement: 4000, revenue: 2400 },
  { name: 'Feb', engagement: 3000, revenue: 1398 },
  { name: 'Mar', engagement: 2000, revenue: 9800 },
  { name: 'Apr', engagement: 2780, revenue: 3908 },
  { name: 'May', engagement: 1890, revenue: 4800 },
  { name: 'Jun', engagement: 2390, revenue: 3800 },
]

const posts = [
  {
    id: 1,
    author: 'Sarah Chen',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
    time: '2h ago',
    content: 'Just launched our new AI-powered community analytics dashboard! The insights we\'re getting are incredible. Who else is using AI to enhance their community management? 🚀',
    likes: 24,
    comments: 8,
    shares: 3,
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&dpr=1'
  },
  {
    id: 2,
    author: 'Marcus Rodriguez',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
    time: '4h ago',
    content: 'The OI Framework is revolutionizing how we think about community monetization. From Opportunity Identification to Outcome Scaling - every step is crucial for sustainable growth.',
    likes: 18,
    comments: 12,
    shares: 5
  },
  {
    id: 3,
    author: 'Elena Vasquez',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
    time: '6h ago',
    content: 'Hosting a virtual AI meetup next week! Topics include machine learning ethics, community building, and the future of human-AI collaboration. DM me for details! 🤖✨',
    likes: 31,
    comments: 15,
    shares: 8,
    image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&dpr=1'
  }
]

export default function Dashboard() {
  const { user, logout } = useAuth()

  const handleLogout = async () => {
    try {
      await logout()
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">AITribes</span>
              </div>
              
              <div className="hidden md:flex items-center space-x-1 ml-8">
                <button className="px-4 py-2 text-primary-600 bg-primary-50 rounded-lg font-medium">
                  Dashboard
                </button>
                <button className="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
                  Community
                </button>
                <button className="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
                  Modules
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search communities..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              
              <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>

              <div className="flex items-center space-x-3">
                <img
                  src={`https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1`}
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
                <div className="hidden md:block">
                  <p className="text-sm font-medium text-gray-900">{user?.email?.split('@')[0] || 'User'}</p>
                  <p className="text-xs text-gray-500">{user?.email}</p>
                </div>
                <button
                  onClick={handleLogout}
                  className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg"
                  title="Logout"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Members</p>
                    <p className="text-2xl font-bold text-gray-900">2,847</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center">
                  <span className="text-green-600 text-sm font-medium">+12%</span>
                  <span className="text-gray-500 text-sm ml-2">vs last month</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Engagement</p>
                    <p className="text-2xl font-bold text-gray-900">89.2%</p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center">
                  <span className="text-green-600 text-sm font-medium">+5.4%</span>
                  <span className="text-gray-500 text-sm ml-2">vs last month</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Messages</p>
                    <p className="text-2xl font-bold text-gray-900">1,429</p>
                  </div>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center">
                  <span className="text-green-600 text-sm font-medium">+18%</span>
                  <span className="text-gray-500 text-sm ml-2">vs last month</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Revenue</p>
                    <p className="text-2xl font-bold text-gray-900">$12,847</p>
                  </div>
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-yellow-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center">
                  <span className="text-green-600 text-sm font-medium">+23%</span>
                  <span className="text-gray-500 text-sm ml-2">vs last month</span>
                </div>
              </div>
            </div>

            {/* Analytics Chart */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Community Analytics</h3>
                <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                  <option>Last 6 months</option>
                  <option>Last 3 months</option>
                  <option>Last month</option>
                </select>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={analyticsData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="engagement" stroke="#8884d8" strokeWidth={2} />
                    <Line type="monotone" dataKey="revenue" stroke="#82ca9d" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Community Feed */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Community Feed</h3>
                  <button className="btn-primary">
                    <Plus className="w-4 h-4 mr-2" />
                    New Post
                  </button>
                </div>
              </div>

              <div className="divide-y divide-gray-100">
                {posts.map((post) => (
                  <div key={post.id} className="p-6">
                    <div className="flex items-start space-x-3">
                      <img
                        src={post.avatar}
                        alt={post.author}
                        className="w-10 h-10 rounded-full"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-medium text-gray-900">{post.author}</h4>
                          <span className="text-gray-500 text-sm">{post.time}</span>
                        </div>
                        <p className="text-gray-700 mt-2">{post.content}</p>
                        
                        {post.image && (
                          <img
                            src={post.image}
                            alt="Post content"
                            className="mt-3 rounded-lg w-full max-w-md"
                          />
                        )}

                        <div className="flex items-center space-x-6 mt-4">
                          <button className="flex items-center space-x-2 text-gray-500 hover:text-red-500">
                            <Heart className="w-4 h-4" />
                            <span className="text-sm">{post.likes}</span>
                          </button>
                          <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500">
                            <MessageSquare className="w-4 h-4" />
                            <span className="text-sm">{post.comments}</span>
                          </button>
                          <button className="flex items-center space-x-2 text-gray-500 hover:text-green-500">
                            <Share className="w-4 h-4" />
                            <span className="text-sm">{post.shares}</span>
                          </button>
                          <button className="text-gray-500 hover:text-yellow-500">
                            <Bookmark className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600">
                        <MoreHorizontal className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 flex items-center space-x-3">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span>Invite Members</span>
                </button>
                <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 flex items-center space-x-3">
                  <MessageSquare className="w-5 h-5 text-green-600" />
                  <span>Start Discussion</span>
                </button>
                <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 flex items-center space-x-3">
                  <TrendingUp className="w-5 h-5 text-purple-600" />
                  <span>View Analytics</span>
                </button>
              </div>
            </div>

            {/* Active Communities */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Active Communities</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-semibold text-sm">AI</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">AI Researchers</p>
                    <p className="text-xs text-gray-500">847 members</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 font-semibold text-sm">ML</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">ML Engineers</p>
                    <p className="text-xs text-gray-500">623 members</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-purple-600 font-semibold text-sm">DS</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Data Scientists</p>
                    <p className="text-xs text-gray-500">1,234 members</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
