import React, { useState } from 'react'
import Header from '../components/Header'
import { 
  Users, 
  Search, 
  Plus,
  Settings,
  MoreVertical,
  Eye,
  Edit,
  Trash2,
  Globe,
  Lock,
  UserPlus,
  MessageCircle,
  TrendingUp,
  Calendar,
  Star
} from 'lucide-react'

interface Community {
  id: string
  name: string
  description: string
  theme: string
  memberCount: number
  isPrivate: boolean
  image: string
  createdAt: string
  activity: string
  color: string
}

const Community = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [newCommunity, setNewCommunity] = useState({
    name: '',
    description: '',
    theme: 'general',
    isPrivate: false
  })

  const [communities, setCommunities] = useState<Community[]>([
    {
      id: '1',
      name: 'AI Researchers Hub',
      description: 'Connect with fellow AI researchers, share insights, and collaborate on cutting-edge projects.',
      theme: 'research',
      memberCount: 1247,
      isPrivate: false,
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=300',
      createdAt: '2024-01-15',
      activity: 'Very Active',
      color: 'bg-blue-500'
    },
    {
      id: '2',
      name: 'Machine Learning Enthusiasts',
      description: 'Explore the latest in ML algorithms, discuss implementations, and share learning resources.',
      theme: 'technology',
      memberCount: 892,
      isPrivate: false,
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=300',
      createdAt: '2024-02-03',
      activity: 'Active',
      color: 'bg-green-500'
    },
    {
      id: '3',
      name: 'Data Science Professionals',
      description: 'Professional network for data scientists to share industry insights and career opportunities.',
      theme: 'professional',
      memberCount: 2156,
      isPrivate: true,
      image: 'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=300',
      createdAt: '2024-01-28',
      activity: 'Very Active',
      color: 'bg-purple-500'
    },
    {
      id: '4',
      name: 'AI Ethics & Philosophy',
      description: 'Thoughtful discussions about the ethical implications and philosophical aspects of AI.',
      theme: 'philosophy',
      memberCount: 634,
      isPrivate: false,
      image: 'https://images.pexels.com/photos/8386427/pexels-photo-8386427.jpeg?auto=compress&cs=tinysrgb&w=300',
      createdAt: '2024-02-10',
      activity: 'Moderate',
      color: 'bg-orange-500'
    },
    {
      id: '5',
      name: 'Startup AI Founders',
      description: 'Exclusive community for AI startup founders to network, share experiences, and find mentorship.',
      theme: 'business',
      memberCount: 423,
      isPrivate: true,
      image: 'https://images.pexels.com/photos/8386421/pexels-photo-8386421.jpeg?auto=compress&cs=tinysrgb&w=300',
      createdAt: '2024-02-20',
      activity: 'Active',
      color: 'bg-red-500'
    },
    {
      id: '6',
      name: 'AI Art & Creativity',
      description: 'Showcase AI-generated art, discuss creative applications, and explore the intersection of AI and creativity.',
      theme: 'creative',
      memberCount: 1089,
      isPrivate: false,
      image: 'https://images.pexels.com/photos/8386426/pexels-photo-8386426.jpeg?auto=compress&cs=tinysrgb&w=300',
      createdAt: '2024-01-22',
      activity: 'Very Active',
      color: 'bg-pink-500'
    }
  ])

  const themes = [
    { value: 'general', label: 'General Discussion', color: 'bg-gray-500' },
    { value: 'research', label: 'Research & Academia', color: 'bg-blue-500' },
    { value: 'technology', label: 'Technology & Innovation', color: 'bg-green-500' },
    { value: 'professional', label: 'Professional Network', color: 'bg-purple-500' },
    { value: 'philosophy', label: 'Philosophy & Ethics', color: 'bg-orange-500' },
    { value: 'business', label: 'Business & Entrepreneurship', color: 'bg-red-500' },
    { value: 'creative', label: 'Creative & Arts', color: 'bg-pink-500' },
    { value: 'education', label: 'Education & Learning', color: 'bg-indigo-500' }
  ]

  const handleCreateCommunity = () => {
    const theme = themes.find(t => t.value === newCommunity.theme)
    const newCommunityData: Community = {
      id: Date.now().toString(),
      name: newCommunity.name,
      description: newCommunity.description,
      theme: newCommunity.theme,
      memberCount: 1,
      isPrivate: newCommunity.isPrivate,
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=300',
      createdAt: new Date().toISOString().split('T')[0],
      activity: 'New',
      color: theme?.color || 'bg-gray-500'
    }

    setCommunities([newCommunityData, ...communities])
    setShowCreateModal(false)
    setNewCommunity({ name: '', description: '', theme: 'general', isPrivate: false })
  }

  const filteredCommunities = communities.filter(community =>
    community.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    community.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getActivityColor = (activity: string) => {
    switch (activity) {
      case 'Very Active': return 'text-green-600 bg-green-100'
      case 'Active': return 'text-blue-600 bg-blue-100'
      case 'Moderate': return 'text-yellow-600 bg-yellow-100'
      case 'New': return 'text-purple-600 bg-purple-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Community</h1>
              <p className="text-gray-600">Manage and create thematic membership communities</p>
            </div>
            <div className="bg-blue-100 text-blue-800 text-sm font-medium px-2 py-1 rounded-full">
              {communities.length}
            </div>
          </div>
        </div>

        {/* Search and Actions */}
        <div className="flex items-center justify-between mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by Community Name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex items-center space-x-3">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Search
            </button>
            <button
              onClick={() => setShowCreateModal(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
            >
              <Plus className="w-4 h-4" />
              <span>New Community</span>
            </button>
          </div>
        </div>

        {/* Communities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCommunities.map((community) => (
            <div key={community.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
              {/* Community Image */}
              <div className="relative h-48">
                <img 
                  src={community.image} 
                  alt={community.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <button className="bg-white bg-opacity-90 p-2 rounded-lg hover:bg-opacity-100 transition-all">
                    <MoreVertical className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className={`${community.color} w-3 h-3 rounded-full`}></div>
                </div>
              </div>

              {/* Community Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">{community.name}</h3>
                  <div className="flex items-center space-x-1">
                    {community.isPrivate ? (
                      <Lock className="w-4 h-4 text-gray-500" />
                    ) : (
                      <Globe className="w-4 h-4 text-gray-500" />
                    )}
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{community.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{community.memberCount.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(community.createdAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${getActivityColor(community.activity)}`}>
                    {community.activity}
                  </span>
                  
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                      <Settings className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCommunities.length === 0 && (
          <div className="text-center py-12">
            <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No communities found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search or create a new community</p>
            <button
              onClick={() => setShowCreateModal(true)}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Create New Community
            </button>
          </div>
        )}
      </div>

      {/* Create Community Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Create New Community</h2>
              <button
                onClick={() => setShowCreateModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Community Name
                </label>
                <input
                  type="text"
                  value={newCommunity.name}
                  onChange={(e) => setNewCommunity({ ...newCommunity, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter community name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={newCommunity.description}
                  onChange={(e) => setNewCommunity({ ...newCommunity, description: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={3}
                  placeholder="Describe your community"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Theme
                </label>
                <select
                  value={newCommunity.theme}
                  onChange={(e) => setNewCommunity({ ...newCommunity, theme: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {themes.map((theme) => (
                    <option key={theme.value} value={theme.value}>
                      {theme.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="private"
                  checked={newCommunity.isPrivate}
                  onChange={(e) => setNewCommunity({ ...newCommunity, isPrivate: e.target.checked })}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="private" className="ml-2 block text-sm text-gray-700">
                  Make this community private
                </label>
              </div>
            </div>

            <div className="flex items-center justify-end space-x-3 mt-6">
              <button
                onClick={() => setShowCreateModal(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateCommunity}
                disabled={!newCommunity.name || !newCommunity.description}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Create Community
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Community
