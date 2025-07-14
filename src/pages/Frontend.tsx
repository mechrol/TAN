import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { 
  MessageCircle, 
  Heart, 
  Share2, 
  Image, 
  Mic, 
  Video, 
  FileText,
  Trophy,
  Users,
  BookOpen,
  Calendar,
  Award,
  TrendingUp,
  Bell,
  Settings,
  Copy,
  ExternalLink,
  LogOut
} from 'lucide-react'

const Frontend: React.FC = () => {
  const { user, logout } = useAuth()
  const [postText, setPostText] = useState('')
  const [referralLink, setReferralLink] = useState('https://homohumanicus.aitrbes.app/r/janusz')
  const [showCopySuccess, setShowCopySuccess] = useState(false)

  const handleCopyReferralLink = () => {
    navigator.clipboard.writeText(referralLink)
    setShowCopySuccess(true)
    setTimeout(() => setShowCopySuccess(false), 2000)
  }

  const handleLogout = async () => {
    await logout()
  }

  const pointsActivities = [
    { action: 'Make a post to get', points: 5 },
    { action: 'Comment on a post to get', points: 1 },
    { action: 'Like a comment or post to get', points: 1 },
    { action: 'Upload Profile picture to get', points: 1 },
    { action: 'Mark complete a lesson to get', points: 1 },
    { action: 'Viral share of referral link', points: 1 }
  ]

  const timelineActivities = [
    {
      time: '10:52 AM',
      user: user?.firstName || 'User',
      action: 'added a new post',
      date: 'May 8, 2024'
    },
    {
      time: '04:31 PM',
      user: user?.firstName || 'User',
      action: 'added a new post',
      date: 'May 22, 2024'
    },
    {
      time: '03:27 PM',
      user: user?.firstName || 'User',
      action: 'joined Higher School of Banking',
      date: 'May 24, 2024'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-xl font-bold text-pink-600">Subscription</h1>
            <span className="text-xl font-bold text-pink-600">Services</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-gray-800 transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-gray-800 transition-colors">
              <Settings className="w-5 h-5" />
            </button>
            <button 
              onClick={handleLogout}
              className="p-2 text-gray-600 hover:text-red-600 transition-colors"
              title="Logout"
            >
              <LogOut className="w-5 h-5" />
            </button>
            {user && (
              <div className="flex items-center space-x-2">
                <img 
                  src={user.avatar} 
                  alt={user.fullName}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="text-sm font-medium text-gray-700">
                  {user.firstName} {user.lastName}
                </span>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Coins Header */}
      <div className="bg-gradient-to-r from-pink-100 to-purple-100 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center">
            <div className="flex items-end space-x-1">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((stack, index) => (
                <div key={index} className="flex flex-col items-center">
                  {Array.from({ length: stack }).map((_, coinIndex) => (
                    <div
                      key={coinIndex}
                      className="w-12 h-3 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full border border-yellow-500 mb-0.5 shadow-sm"
                      style={{
                        transform: `translateY(${coinIndex * -2}px)`
                      }}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-1">
            {/* School Profile Card */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Higher School of Banking</h3>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 mb-4">
                Higher School of Banking is your hub for mentoring, connections, and growth. Get to know your group, connect with like-minded entrepreneurs, and build success together. No self-promotion—just real conversations, real impact on the common ground of shared income.
              </p>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-gray-900">4</div>
                  <div className="text-xs text-gray-500 uppercase">Posts</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">1</div>
                  <div className="text-xs text-gray-500 uppercase">Members</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">1</div>
                  <div className="text-xs text-gray-500 uppercase">Course</div>
                </div>
              </div>

              {/* Navigation Menu */}
              <nav className="mt-6 space-y-2">
                <button className="w-full flex items-center space-x-3 px-3 py-2 text-pink-600 bg-pink-50 rounded-lg">
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-sm font-medium">Feed</span>
                </button>
                <button className="w-full flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                  <Users className="w-4 h-4" />
                  <span className="text-sm font-medium">Members</span>
                </button>
                <button className="w-full flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                  <FileText className="w-4 h-4" />
                  <span className="text-sm font-medium">Blogs</span>
                </button>
                <button className="w-full flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">Events</span>
                </button>
                <button className="w-full flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                  <BookOpen className="w-4 h-4" />
                  <span className="text-sm font-medium">Courses / Products</span>
                </button>
                <button className="w-full flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm font-medium">Leaderboard</span>
                </button>
                <button className="w-full flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                  <Award className="w-4 h-4" />
                  <span className="text-sm font-medium">Rewards</span>
                </button>
              </nav>
            </div>

            {/* Timeline */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-bold text-gray-900 mb-2">Timeline</h3>
              <p className="text-sm text-gray-500 mb-4">Latest activities</p>
              
              <div className="space-y-4">
                {timelineActivities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <img 
                      src={user?.avatar || "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"}
                      alt="User"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="text-sm">
                        <span className="font-medium text-blue-600">{activity.user}</span>
                        <span className="text-gray-600"> {activity.action}</span>
                      </div>
                      <div className="text-xs text-gray-500">{activity.date}</div>
                    </div>
                    <div className="text-xs text-gray-500">{activity.time}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Post Creation */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <div className="flex items-start space-x-3">
                <img 
                  src={user?.avatar || "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"}
                  alt="User"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex-1">
                  <textarea
                    value={postText}
                    onChange={(e) => setPostText(e.target.value)}
                    placeholder={`What are you thinking about? ${user?.firstName || 'User'}`}
                    className="w-full p-3 border border-gray-200 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows={3}
                  />
                  
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                        <FileText className="w-4 h-4" />
                        <span className="text-sm">Text</span>
                      </button>
                      <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                        <Image className="w-4 h-4" />
                        <span className="text-sm">Photo</span>
                      </button>
                      <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                        <Mic className="w-4 h-4" />
                        <span className="text-sm">Audio</span>
                      </button>
                      <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                        <Video className="w-4 h-4" />
                        <span className="text-sm">Video</span>
                      </button>
                      <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                        <FileText className="w-4 h-4" />
                        <span className="text-sm">Poll</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sample Post */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <div className="flex items-start space-x-3 mb-4">
                <img 
                  src={user?.avatar || "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"}
                  alt={user?.firstName || 'User'}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium text-gray-900">{user?.firstName || 'User'}</span>
                    <span className="px-2 py-1 bg-pink-100 text-pink-600 text-xs rounded-full">Member</span>
                  </div>
                  <p className="text-sm text-gray-500">2 hours ago</p>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-gray-800 mb-4">
                  Demo password for logging into the Game - Decision Tree is: <span className="text-blue-600 font-medium">admin359</span>
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  Do not share this password with anyone. You can promote the link to the game and 
                  to this community available on the right side of the menu, the so-called Referral Link
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  Hasło demo do logowania do Gry - Drzewo decyzyjne to: <span className="text-blue-600 font-medium">admin359</span>
                </p>
                <p className="text-gray-600 text-sm">
                  Nie udostępniaj tego hasła nikomu. Możesz promować link do gry i do tej wspólnoty 
                  dostępny po prawej stronie menu, tzw Referral Link
                </p>
              </div>

              {/* Game Banner */}
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg p-6 text-white mb-4">
                <div className="flex items-center justify-center mb-2">
                  <div className="text-green-400 text-sm">Homo</div>
                </div>
                <div className="text-center">
                  <div className="text-sm opacity-90 mb-1">HUMANICUS</div>
                  <div className="text-lg font-bold mb-1">HomoHumanicus</div>
                  <div className="flex items-center justify-center space-x-2 mb-3">
                    <Trophy className="w-5 h-5 text-yellow-400" />
                    <span className="text-xl font-bold">DRZEWO DECYZYJNE</span>
                  </div>
                  <div className="text-xs opacity-75 mb-2">STRATEGIC GAME</div>
                  <p className="text-xs opacity-90 leading-relaxed">
                    Rozwijaj swoją inteligencję strategiczną podejmując decyzje wpływające na przyszłość 
                    organizacji w różnych scenariuszach biznesowych i ideologicznych.
                  </p>
                </div>
              </div>

              {/* Post Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-6">
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-sm">0 Comments</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors">
                    <Heart className="w-4 h-4" />
                    <span className="text-sm">Likes</span>
                  </button>
                </div>
                <button className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            {/* Points System */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-900">My Points</h3>
                <div className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm font-bold">
                  5
                </div>
              </div>

              <div className="space-y-3">
                {pointsActivities.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{activity.action}</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border border-gray-300 rounded"></div>
                      <span className="text-sm font-medium text-gray-900">{activity.points} Points</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Referral Link */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-bold text-gray-900 mb-4">Referral Link</h3>
              
              <div className="mb-4">
                <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                  <input
                    type="text"
                    value={referralLink}
                    readOnly
                    className="flex-1 bg-transparent text-sm text-gray-600 outline-none"
                  />
                  <button
                    onClick={handleCopyReferralLink}
                    className="px-3 py-1 bg-pink-600 text-white text-sm rounded hover:bg-pink-700 transition-colors"
                  >
                    {showCopySuccess ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>

              <p className="text-xs text-gray-500 mb-4">
                Earn 10 points for every new sign up to the community through your referral link
              </p>

              <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <ExternalLink className="w-4 h-4" />
                <span className="text-sm">Share Link</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Frontend
