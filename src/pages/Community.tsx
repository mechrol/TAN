import React, { useState } from 'react'
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
  MessageSquare
} from 'lucide-react'

interface Community {
  id: number
  name: string
  category: string
  image: string
  date: string
  isActive: boolean
}

const Community: React.FC = () => {
  const [showActionDropdown, setShowActionDropdown] = useState<number | null>(null)
  const [communities, setCommunities] = useState<Community[]>([
    {
      id: 1,
      name: 'PATRON',
      category: 'Subscription Services',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&dpr=1',
      date: '28 Feb, 2025',
      isActive: true
    },
    {
      id: 2,
      name: 'Homohumanicus',
      category: 'Health and Wellness',
      image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&dpr=1',
      date: '13 Feb, 2025',
      isActive: true
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

  const handleActionClick = (communityId: number, action: string) => {
    const community = communities.find(c => c.id === communityId)
    console.log(`Action "${action}" clicked for community: ${community?.name}`)
    
    // Tutaj można dodać konkretną logikę dla każdej akcji
    switch (action) {
      case 'Edit':
        // Logika edycji społeczności
        break
      case 'Visit':
        // Logika odwiedzenia społeczności
        break
      case 'Customize Community':
        // Logika personalizacji społeczności
        break
      case 'Clone':
        // Logika klonowania społeczności
        break
      case 'AI Member Feed':
        // Logika AI Member Feed
        break
      case 'AI Custom Prompt Feed':
        // Logika AI Custom Prompt Feed
        break
    }
    
    setShowActionDropdown(null)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left side - Community title with count */}
          <div className="flex items-center space-x-3">
            <Settings className="w-6 h-6 text-gray-600" />
            <h1 className="text-xl font-semibold text-gray-900">Community</h1>
            <span className="bg-blue-600 text-white text-sm px-2 py-1 rounded-full font-medium">
              {communities.length}
            </span>
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
              <div className="h-48 bg-gray-200">
                <img 
                  src={community.image} 
                  alt={community.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Community Content */}
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {community.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-3">
                      {community.category}
                    </p>
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
                                className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0 overflow-hidden text-ellipsis whitespace-nowrap"
                                title={item}
                              >
                                {truncateText(item)}
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
