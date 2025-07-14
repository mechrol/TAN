import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { 
  ArrowLeft, 
  Save, 
  Eye, 
  Palette, 
  Type, 
  Image, 
  Settings,
  Users,
  MessageSquare,
  Bell,
  Shield,
  Globe,
  Lock,
  Upload,
  X
} from 'lucide-react'

interface CommunitySettings {
  name: string
  description: string
  category: string
  visibility: 'public' | 'private' | 'invite-only'
  theme: {
    primaryColor: string
    secondaryColor: string
    backgroundColor: string
    textColor: string
  }
  features: {
    allowComments: boolean
    allowPosts: boolean
    allowFiles: boolean
    moderationEnabled: boolean
    notificationsEnabled: boolean
  }
  branding: {
    logo?: string
    banner?: string
    favicon?: string
  }
}

const CustomizeCommunity: React.FC = () => {
  const { communityId } = useParams<{ communityId: string }>()
  const navigate = useNavigate()
  const { user, visitCommunity } = useAuth()
  
  const [activeTab, setActiveTab] = useState('general')
  const [isLoading, setIsLoading] = useState(false)
  const [settings, setSettings] = useState<CommunitySettings>({
    name: 'PATRON',
    description: 'A premium subscription services community for exclusive content and member benefits.',
    category: 'Subscription Services',
    visibility: 'public',
    theme: {
      primaryColor: '#3B82F6',
      secondaryColor: '#1E40AF',
      backgroundColor: '#F8FAFC',
      textColor: '#1F2937'
    },
    features: {
      allowComments: true,
      allowPosts: true,
      allowFiles: true,
      moderationEnabled: true,
      notificationsEnabled: true
    },
    branding: {
      logo: undefined,
      banner: undefined,
      favicon: undefined
    }
  })

  // Track community visit on component mount
  useEffect(() => {
    if (user && communityId) {
      visitCommunity(parseInt(communityId))
    }
  }, [user, communityId, visitCommunity])

  const handleBack = () => {
    navigate('/community')
  }

  const handleSave = async () => {
    setIsLoading(true)
    
    try {
      // Simulate API call to save settings
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Show success message (you can implement a toast notification here)
      console.log('Community settings saved successfully:', settings)
      
      // Navigate back to community page
      navigate('/community')
    } catch (error) {
      console.error('Failed to save community settings:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handlePreview = () => {
    // Open preview in new tab or modal
    console.log('Opening community preview with settings:', settings)
  }

  const handleInputChange = (field: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleThemeChange = (field: string, value: string) => {
    setSettings(prev => ({
      ...prev,
      theme: {
        ...prev.theme,
        [field]: value
      }
    }))
  }

  const handleFeatureToggle = (feature: string) => {
    setSettings(prev => ({
      ...prev,
      features: {
        ...prev.features,
        [feature]: !prev.features[feature as keyof typeof prev.features]
      }
    }))
  }

  const tabs = [
    { id: 'general', label: 'General', icon: Settings },
    { id: 'appearance', label: 'Appearance', icon: Palette },
    { id: 'features', label: 'Features', icon: Users },
    { id: 'privacy', label: 'Privacy', icon: Shield },
    { id: 'branding', label: 'Branding', icon: Image }
  ]

  const renderTabContent = () => {
    switch (activeTab) {
      case 'general':
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Community Name
              </label>
              <input
                type="text"
                value={settings.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter community name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                value={settings.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Describe your community"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={settings.category}
                onChange={(e) => handleInputChange('category', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="Subscription Services">Subscription Services</option>
                <option value="Health and Wellness">Health and Wellness</option>
                <option value="Technology">Technology</option>
                <option value="Education">Education</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Business">Business</option>
              </select>
            </div>
          </div>
        )

      case 'appearance':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Primary Color
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="color"
                    value={settings.theme.primaryColor}
                    onChange={(e) => handleThemeChange('primaryColor', e.target.value)}
                    className="w-12 h-10 border border-gray-300 rounded cursor-pointer"
                  />
                  <input
                    type="text"
                    value={settings.theme.primaryColor}
                    onChange={(e) => handleThemeChange('primaryColor', e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Secondary Color
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="color"
                    value={settings.theme.secondaryColor}
                    onChange={(e) => handleThemeChange('secondaryColor', e.target.value)}
                    className="w-12 h-10 border border-gray-300 rounded cursor-pointer"
                  />
                  <input
                    type="text"
                    value={settings.theme.secondaryColor}
                    onChange={(e) => handleThemeChange('secondaryColor', e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Background Color
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="color"
                    value={settings.theme.backgroundColor}
                    onChange={(e) => handleThemeChange('backgroundColor', e.target.value)}
                    className="w-12 h-10 border border-gray-300 rounded cursor-pointer"
                  />
                  <input
                    type="text"
                    value={settings.theme.backgroundColor}
                    onChange={(e) => handleThemeChange('backgroundColor', e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Text Color
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="color"
                    value={settings.theme.textColor}
                    onChange={(e) => handleThemeChange('textColor', e.target.value)}
                    className="w-12 h-10 border border-gray-300 rounded cursor-pointer"
                  />
                  <input
                    type="text"
                    value={settings.theme.textColor}
                    onChange={(e) => handleThemeChange('textColor', e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Theme Preview */}
            <div className="mt-6 p-4 border border-gray-300 rounded-lg">
              <h3 className="text-sm font-medium text-gray-700 mb-3">Theme Preview</h3>
              <div 
                className="p-4 rounded-lg"
                style={{ 
                  backgroundColor: settings.theme.backgroundColor,
                  color: settings.theme.textColor 
                }}
              >
                <h4 
                  className="text-lg font-semibold mb-2"
                  style={{ color: settings.theme.primaryColor }}
                >
                  {settings.name}
                </h4>
                <p className="text-sm mb-3">{settings.description}</p>
                <button 
                  className="px-4 py-2 rounded text-white text-sm"
                  style={{ backgroundColor: settings.theme.primaryColor }}
                >
                  Sample Button
                </button>
              </div>
            </div>
          </div>
        )

      case 'features':
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              {Object.entries(settings.features).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {getFeatureDescription(key)}
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={value}
                      onChange={() => handleFeatureToggle(key)}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>
        )

      case 'privacy':
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Community Visibility
              </label>
              <div className="space-y-3">
                {[
                  { value: 'public', label: 'Public', description: 'Anyone can find and join this community', icon: Globe },
                  { value: 'private', label: 'Private', description: 'Only members can see this community', icon: Lock },
                  { value: 'invite-only', label: 'Invite Only', description: 'Members can only join by invitation', icon: Shield }
                ].map((option) => (
                  <label key={option.value} className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="visibility"
                      value={option.value}
                      checked={settings.visibility === option.value}
                      onChange={(e) => handleInputChange('visibility', e.target.value)}
                      className="mr-3"
                    />
                    <option.icon className="w-5 h-5 text-gray-500 mr-3" />
                    <div>
                      <div className="font-medium text-gray-900">{option.label}</div>
                      <div className="text-sm text-gray-600">{option.description}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )

      case 'branding':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { key: 'logo', label: 'Community Logo', description: 'Upload a logo for your community (recommended: 200x200px)' },
                { key: 'banner', label: 'Banner Image', description: 'Upload a banner image (recommended: 1200x400px)' },
                { key: 'favicon', label: 'Favicon', description: 'Upload a favicon (recommended: 32x32px)' }
              ].map((item) => (
                <div key={item.key} className="border border-gray-300 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">{item.label}</h4>
                  <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                  
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600 mb-2">Click to upload or drag and drop</p>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        // Handle file upload
                        console.log(`Uploading ${item.key}:`, e.target.files?.[0])
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      default:
        return null
    }
  }

  const getFeatureDescription = (key: string): string => {
    const descriptions: { [key: string]: string } = {
      allowComments: 'Allow members to comment on posts and content',
      allowPosts: 'Allow members to create and share posts',
      allowFiles: 'Allow members to upload and share files',
      moderationEnabled: 'Enable content moderation and approval workflow',
      notificationsEnabled: 'Send notifications for community activities'
    }
    return descriptions[key] || ''
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
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
            <button
              onClick={handleBack}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Community</span>
            </button>
            <div className="h-6 w-px bg-gray-300"></div>
            <h1 className="text-xl font-semibold text-gray-900">
              Customize Community: {settings.name}
            </h1>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={handlePreview}
              className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <Eye className="w-4 h-4" />
              <span>Preview</span>
            </button>
            <button
              onClick={handleSave}
              disabled={isLoading}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  <span>Saving...</span>
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  <span>Save Changes</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar Navigation */}
        <div className="w-64 bg-white border-r border-gray-200 min-h-screen">
          <nav className="p-4">
            <div className="space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    activeTab === tab.id
                      ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              {renderTabContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomizeCommunity
