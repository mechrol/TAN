import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { 
  Plus, 
  Search, 
  Settings,
  ChevronDown,
  Edit,
  Eye,
  Palette,
  Copy,
  Users,
  MessageSquare,
  Clock,
  Activity
} from 'lucide-react'

interface Community {
  id: number
  name: string
  category: string
  image: string
  date: string
  isActive: boolean
  visitCount?: number
  lastVisited?: string
}

const Community: React.FC = () => {
  const navigate = useNavigate()
  const { user, visitCommunity, getUserVisits } = useAuth()
  const [showActionDropdown, setShowActionDropdown] = useState<number | null>(null)
  const [communities, setCommunities] = useState<Community[]>([
    {
      id: 1,
      name: 'PATRON',
      category: 'Subscription Services',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&dpr=1',
      date: '28 Feb, 2025',
      isActive: true,
      visitCount: 0,
      lastVisited: undefined
    },
    {
      id: 2,
      name: 'Homohumanicus',
      category: 'Health and Wellness',
      image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&dpr=1',
      date: '13 Feb, 2025',
      isActive: true,
      visitCount: 0,
      lastVisited: undefined
    },   
  ])

  const actionMenuItems = [
    'Edit',
    'Visit',
    'Customize Community',
    'Clone',
    'AI Member Feed',
    'AI Custom Prompt Feed'
  ]

  // Load user visits on component mount
  useEffect(() => {
    if (user) {
      const visits = getUserVisits()
      
      // Update communities with visit data
      setCommunities(prevCommunities =>
        prevCommunities.map(community => {
          const communityVisits = visits.filter(visit => visit.communityId === community.id)
          const lastVisit = communityVisits.length > 0 
            ? communityVisits[communityVisits.length - 1] 
            : null
          
          return {
            ...community,
            visitCount: communityVisits.length,
            lastVisited: lastVisit?.visitDate
          }
        })
      )
    }
  }, [user, getUserVisits])

  // Function to truncate text to 25 characters
  const truncateText = (text: string, maxLength: number = 25) => {
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength - 3) + '...'
  }

  const handleToggleActivity = (communityId: number) => {
    setCommunities(prevCommunities =>
      prevCommunities.map(community =>
        community.id === communityId
          ? { ...community, isActive: !community.isActive }
          : community
      )
    )
    console.log(`Toggled activity for community ID: ${communityId}`)
  }

  const handleActionClick = async (communityId: number, action: string) => {
    const community = communities.find(c => c.id === communityId)
    console.log(`Action "${action}" clicked for community: ${community?.name}`)
    
    // Handle specific actions
    switch (action) {
      case 'Edit':
        // Edit community logic
        console.log(`Editing community: ${community?.name}`)
        break
      case 'Visit':
        // Navigate to Login page for Visit action
        console.log(`Visiting community: ${community?.name} - Redirecting to login`)
        navigate('/login')
        break
      case 'Customize Community':
        // Navigate to customize community page
        navigate(`/community/${communityId}/customize`)
        break
      case 'Clone':
        // Clone community logic
        console.log(`Cloning community: ${community?.name}`)
        break
      case 'AI Member Feed':
        // AI Member Feed logic
        console.log(`Opening AI Member Feed for: ${community?.name}`)
        break
      case 'AI Custom Prompt Feed':
        // AI Custom Prompt Feed logic
        console.log(`Opening AI Custom Prompt Feed for: ${community?.name}`)
        break
    }
    
    setShowActionDropdown(null)
  }

  const formatLastVisited = (dateString?: string) => {
    if (!dateString) return 'Never visited'
    
    const date = new Date(dateString)
    const now = new Date()
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))
    
    if (diffInHours < 1) return 'Just now'
    if (diffInHours < 24) return `${diffInHours}h ago`
    if (diffInHours < 48) return 'Yesterday'
    
    return date.toLocaleDateString()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left side - Community title with count and user info */}
          <div className="flex items-center space-x-3">
            <Settings className="w-6 h-6 text-gray-600" />
            <h1 className="text-xl font-semibold text-gray-900">Community</h1>
            <span className="bg-blue-600 text-white text-sm px-2 py-1 rounded-full font-medium">
              {communities.length}
            </span>
            {user && (
              <div className="flex items-center space-x-2 ml-4 px-3 py-1 bg-green-50 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-green-700">
                  {user.firstName} {user.lastName}
                </span>
              </div>
            )}
          </div>

          {/* Right side - Search and New Community */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by Community Name..."
                className="w-80 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Search
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors">
              <Plus className="w-4 h-4" />
              <span>New Community</span>
            </button>
          </div>
        </div>
      </div>

      {/* Communities Grid */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {communities.map((community) => (
            <div key={community.id} className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              {/* Community Image */}
              <div className="h-48 bg-gray-200 relative">
                <img 
                  src={community.image} 
                  alt={community.name}
                  className="w-full h-full object-cover"
                />
                {/* Visit Stats Overlay */}
                {user && community.visitCount !== undefined && (
                  <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs flex items-center space-x-1">
                    <Eye className="w-3 h-3" />
                    <span>{community.visitCount}</span>
                  </div>
                )}
              </div>

              {/* Community Content */}
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {community.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">
                      {community.category}
                    </p>
                    
                    {/* Visit Information */}
                    {user && (
                      <div className="flex items-center space-x-2 text-xs text-gray-500 mb-3">
                        <Clock className="w-3 h-3" />
                        <span>{formatLastVisited(community.lastVisited)}</span>
                        {community.visitCount && community.visitCount > 0 && (
                          <>
                            <span>•</span>
                            <Activity className="w-3 h-3" />
                            <span>{community.visitCount} visits</span>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom section with date, toggle, and actions */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {community.date}
                  </span>
                  
                  <div className="flex items-center space-x-3">
                    {/* Toggle Switch */}
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="sr-only peer" 
                        checked={community.isActive}
                        onChange={() => handleToggleActivity(community.id)}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>

                    {/* Actions Dropdown - LIMITED TO 25 CHARACTERS WIDTH */}
                    <div className="relative">
                      <button
                        onClick={() => setShowActionDropdown(showActionDropdown === community.id ? null : community.id)}
                        className="bg-blue-600 text-white px-3 py-1.5 rounded text-sm flex items-center space-x-1 hover:bg-blue-700 transition-colors"
                      >
                        <span>Actions</span>
                        <ChevronDown className={`w-3 h-3 transition-transform ${showActionDropdown === community.id ? 'rotate-180' : ''}`} />
                      </button>

                      {/* Dropdown Menu - WIDTH LIMITED TO 25 CHARACTERS */}
                      {showActionDropdown === community.id && (
                        <div 
                          className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-lg shadow-xl z-[9999]"
                          style={{ width: '25ch' }}
                        >
                          <div className="py-1">
                            {actionMenuItems.map((item, index) => (
                              <button
                                key={index}
                                onClick={() => handleActionClick(community.id, item)}
                                className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0 overflow-hidden text-ellipsis whitespace-nowrap flex items-center space-x-2"
                                title={item}
                              >
                                {item === 'Visit' && <Eye className="w-3 h-3" />}
                                {item === 'Edit' && <Edit className="w-3 h-3" />}
                                {item === 'Customize Community' && <Palette className="w-3 h-3" />}
                                {item === 'Clone' && <Copy className="w-3 h-3" />}
                                {item === 'AI Member Feed' && <Users className="w-3 h-3" />}
                                {item === 'AI Custom Prompt Feed' && <MessageSquare className="w-3 h-3" />}
                                <span>{truncateText(item)}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Click outside to close dropdown */}
      {showActionDropdown && (
        <div 
          className="fixed inset-0 z-[9998]"
          onClick={() => setShowActionDropdown(null)}
        />
      )}
    </div>
  )
}

export default Community
