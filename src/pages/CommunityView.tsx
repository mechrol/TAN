import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { 
  ArrowLeft,
  Settings,
  ExternalLink,
  ChevronDown,
  BookOpen,
  Package,
  Users,
  Grid3X3,
  Calendar,
  FileText,
  DollarSign,
  Search,
  Plus,
  Star,
  Copy,
  Eye,
  MoreHorizontal,
  Play,
  Edit,
  Trash2
} from 'lucide-react'

interface Course {
  id: number
  name: string
  type: 'Free' | 'Premium'
  lessons: number
  image: string
  color: string
}

interface Lesson {
  id: number
  name: string
  description: string
  type: 'Content' | 'Video' | 'Quiz'
  status: 'Published' | 'Draft'
  createdOn: string
  courseId: number
  initials: string
}

interface CommunityData {
  id: number
  name: string
  category: string
  image: string
  stats: {
    courses: number
    members: number
    groups: number
  }
  memberAvatars: string[]
}

const CommunityView: React.FC = () => {
  const { communityId } = useParams<{ communityId: string }>()
  const navigate = useNavigate()
  const { user, visitCommunity } = useAuth()
  
  const [activeTab, setActiveTab] = useState('courses')
  const [showSettingsDropdown, setShowSettingsDropdown] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [lessonSearchTerm, setLessonSearchTerm] = useState('')

  // Mock community data
  const [community] = useState<CommunityData>({
    id: parseInt(communityId || '2'),
    name: 'Homohumanicus',
    category: 'Health and Wellness',
    image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&dpr=1',
    stats: {
      courses: 2,
      members: 2,
      groups: 2
    },
    memberAvatars: [
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1'
    ]
  })

  const [courses] = useState<Course[]>([
    {
      id: 1,
      name: 'Wellness',
      type: 'Free',
      lessons: 5,
      image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      color: 'bg-green-100'
    }
  ])

  const [lessons] = useState<Lesson[]>([
    {
      id: 1,
      name: 'Understanding the Wellness Life Wheel',
      description: 'The Wellness Life Wheel is a visual representation that helps individuals assess their ove...',
      type: 'Content',
      status: 'Published',
      createdOn: '13 Feb, 2025',
      courseId: 1,
      initials: 'UW'
    }
  ])

  // Track community visit on component mount
  useEffect(() => {
    if (user && communityId) {
      visitCommunity(parseInt(communityId))
    }
  }, [user, communityId, visitCommunity])

  const handleBack = () => {
    navigate('/community')
  }

  const handleVisit = () => {
    navigate('/login')
  }

  const tabs = [
    { id: 'courses', label: 'Courses', icon: BookOpen, count: community.stats.courses },
    { id: 'products', label: 'Products', icon: Package },
    { id: 'members', label: 'Members', icon: Users, count: community.stats.members },
    { id: 'groups', label: 'Groups', icon: Grid3X3, count: community.stats.groups },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'blog', label: 'Blog', icon: FileText },
    { id: 'sales', label: 'Sales', icon: DollarSign }
  ]

  const settingsMenuItems = [
    'Edit Community',
    'Manage Members',
    'Community Settings',
    'Export Data',
    'Archive Community'
  ]

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const filteredLessons = lessons.filter(lesson =>
    lesson.name.toLowerCase().includes(lessonSearchTerm.toLowerCase())
  )

  const renderCoursesTab = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Courses Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <h3 className="text-lg font-semibold text-gray-900">Courses</h3>
            <span className="bg-blue-600 text-white text-sm px-2 py-1 rounded-full font-medium">
              {courses.length}
            </span>
            <button className="text-gray-400 hover:text-gray-600">
              <Star className="w-4 h-4" />
            </button>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
            Create Course
          </button>
        </div>

        <div className="mb-4">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by Course Name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="space-y-3">
          {filteredCourses.map((course) => (
            <div key={course.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center space-x-3">
                <div className={`w-12 h-12 ${course.color} rounded-lg flex items-center justify-center`}>
                  <img 
                    src={course.image} 
                    alt={course.name}
                    className="w-8 h-8 rounded object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h4 className="font-medium text-gray-900">{course.name}</h4>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      course.type === 'Free' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {course.type}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">{course.lessons} Lessons</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2 text-gray-400 hover:text-gray-600">
                  <Edit className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-600">
                  <Copy className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-600">
                  <Eye className="w-4 h-4" />
                </button>
                <button className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition-colors">
                  <Play className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lessons Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <h3 className="text-lg font-semibold text-gray-900">Lessons</h3>
            <span className="bg-blue-600 text-white text-sm px-2 py-1 rounded-full font-medium">
              {lessons.length}
            </span>
            <button className="text-gray-400 hover:text-gray-600">
              <Star className="w-4 h-4" />
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm flex items-center space-x-1 hover:bg-blue-700 transition-colors">
              <span>Create Lesson</span>
              <ChevronDown className="w-3 h-3" />
            </button>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-sm text-gray-600 mb-3">Wellness</p>
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by Lesson Name..."
              value={lessonSearchTerm}
              onChange={(e) => setLessonSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Lessons Table Header */}
        <div className="grid grid-cols-12 gap-4 text-xs font-medium text-gray-500 uppercase tracking-wide mb-3 px-2">
          <div className="col-span-4">Lesson Name</div>
          <div className="col-span-2">Type</div>
          <div className="col-span-2">Status</div>
          <div className="col-span-2">Created On</div>
          <div className="col-span-2">Action</div>
        </div>

        {/* Lessons List */}
        <div className="space-y-2">
          {filteredLessons.map((lesson) => (
            <div key={lesson.id} className="grid grid-cols-12 gap-4 items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="col-span-4 flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                  <span className="text-xs font-medium text-blue-800">{lesson.initials}</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 text-sm">{lesson.name}</h4>
                  <p className="text-xs text-gray-500 truncate max-w-[200px]">{lesson.description}</p>
                </div>
              </div>
              <div className="col-span-2">
                <span className={`text-xs px-2 py-1 rounded-full ${
                  lesson.type === 'Content' 
                    ? 'bg-green-100 text-green-800' 
                    : lesson.type === 'Video'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-purple-100 text-purple-800'
                }`}>
                  {lesson.type}
                </span>
              </div>
              <div className="col-span-2">
                <div className="flex items-center space-x-2">
                  <div className={`w-2 h-2 rounded-full ${
                    lesson.status === 'Published' ? 'bg-green-500' : 'bg-gray-400'
                  }`}></div>
                  <span className="text-sm text-gray-600">{lesson.status}</span>
                </div>
              </div>
              <div className="col-span-2">
                <span className="text-sm text-gray-600">{lesson.createdOn}</span>
              </div>
              <div className="col-span-2">
                <button className="text-blue-600 text-sm flex items-center space-x-1 hover:text-blue-700">
                  <span>Actions</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderTabContent = () => {
    switch (activeTab) {
      case 'courses':
        return renderCoursesTab()
      case 'products':
        return (
          <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
            <Package className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No Products Yet</h3>
            <p className="text-gray-600 mb-4">Create your first product to start selling</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Create Product
            </button>
          </div>
        )
      case 'members':
        return (
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Community Members</h3>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Invite Members
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {community.memberAvatars.map((avatar, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg">
                  <img 
                    src={avatar} 
                    alt={`Member ${index + 1}`}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-medium text-gray-900">Member {index + 1}</h4>
                    <p className="text-sm text-gray-500">Active member</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      default:
        return (
          <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              {tabs.find(tab => tab.id === activeTab)?.icon && 
                React.createElement(tabs.find(tab => tab.id === activeTab)!.icon, { 
                  className: "w-6 h-6 text-gray-400" 
                })
              }
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {tabs.find(tab => tab.id === activeTab)?.label} Coming Soon
            </h3>
            <p className="text-gray-600">This feature is under development</p>
          </div>
        )
    }
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading community...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Settings className="w-6 h-6 text-gray-600" />
            <h1 className="text-xl font-semibold text-gray-900">Customize Community</h1>
          </div>

          <button
            onClick={handleBack}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Community</span>
          </button>
        </div>
      </div>

      {/* Community Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-6">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-4">
            <img 
              src={community.image} 
              alt={community.name}
              className="w-20 h-20 rounded-lg object-cover"
            />
            <div>
              <h2 className="text-2xl font-bold text-blue-600 mb-1">{community.name}</h2>
              <p className="text-gray-600 mb-4">{community.category}</p>
              
              {/* Stats */}
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <BookOpen className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{community.stats.courses} Courses</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{community.stats.members} Members</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Grid3X3 className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{community.stats.groups} Groups</span>
                </div>
                <div className="flex -space-x-2">
                  {community.memberAvatars.map((avatar, index) => (
                    <img 
                      key={index}
                      src={avatar} 
                      alt={`Member ${index + 1}`}
                      className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={handleVisit}
              className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Visit</span>
            </button>
            
            <div className="relative">
              <button
                onClick={() => setShowSettingsDropdown(!showSettingsDropdown)}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <span>Settings</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${showSettingsDropdown ? 'rotate-180' : ''}`} />
              </button>

              {showSettingsDropdown && (
                <div className="absolute right-0 top-full mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-xl z-50">
                  <div className="py-1">
                    {settingsMenuItems.map((item, index) => (
                      <button
                        key={index}
                        className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        onClick={() => {
                          console.log(`Settings action: ${item}`)
                          setShowSettingsDropdown(false)
                        }}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200 px-6">
        <nav className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 py-4 border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span>{tab.label}</span>
              {tab.count !== undefined && (
                <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                  activeTab === tab.id
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="p-6">
        {renderTabContent()}
      </div>

      {/* Click outside to close dropdown */}
      {showSettingsDropdown && (
        <div 
          className="fixed inset-0 z-40"
          onClick={() => setShowSettingsDropdown(false)}
        />
      )}
    </div>
  )
}

export default CommunityView
