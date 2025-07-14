import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFrontendAuth } from '../contexts/FrontendAuthContext'
import { 
  MessageSquare, 
  Heart, 
  Share2, 
  MoreHorizontal, 
  Send,
  Smile,
  Camera,
  Mic,
  Bot,
  User,
  TrendingUp,
  Clock,
  Users,
  LogOut,
  Settings
} from 'lucide-react'

const Frontend = () => {
  const { userProfile, signOut } = useFrontendAuth()
  const navigate = useNavigate()
  const [selectedPoll, setSelectedPoll] = useState<number | null>(null)
  const [aiChatActive, setAiChatActive] = useState(false)
  const [chatMessages, setChatMessages] = useState<Array<{id: number, sender: 'user' | 'ai', message: string, timestamp: string}>>([])
  const [currentMessage, setCurrentMessage] = useState('')

  const handleSignOut = async () => {
    try {
      await signOut()
      navigate('/login')
    } catch (error) {
      console.error('Sign out error:', error)
    }
  }

  const polls = [
    {
      id: 1,
      author: "Sarah Chen",
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150",
      time: "2 hours ago",
      question: "What are you thinking about right now?",
      options: [
        { text: "Work and career goals", votes: 45, percentage: 35 },
        { text: "Personal relationships", votes: 38, percentage: 30 },
        { text: "Future plans and dreams", votes: 32, percentage: 25 },
        { text: "Current challenges", votes: 13, percentage: 10 }
      ],
      totalVotes: 128,
      comments: 23,
      aiConversations: 12
    },
    {
      id: 2,
      author: "Alex Rodriguez",
      avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150",
      time: "4 hours ago",
      question: "How do you feel about your current life situation?",
      options: [
        { text: "Optimistic and excited", votes: 67, percentage: 40 },
        { text: "Content but seeking growth", votes: 50, percentage: 30 },
        { text: "Uncertain about direction", votes: 33, percentage: 20 },
        { text: "Overwhelmed and stressed", votes: 17, percentage: 10 }
      ],
      totalVotes: 167,
      comments: 34,
      aiConversations: 18
    },
    {
      id: 3,
      author: "Maya Patel",
      avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150",
      time: "6 hours ago",
      question: "What emotion dominates your daily experience?",
      options: [
        { text: "Joy and gratitude", votes: 42, percentage: 28 },
        { text: "Curiosity and wonder", votes: 38, percentage: 25 },
        { text: "Anxiety and worry", votes: 35, percentage: 23 },
        { text: "Determination and focus", votes: 36, percentage: 24 }
      ],
      totalVotes: 151,
      comments: 28,
      aiConversations: 15
    }
  ]

  const handlePollVote = (pollId: number, optionIndex: number) => {
    setSelectedPoll(pollId)
    // Simulate AI conversation trigger
    setTimeout(() => {
      setAiChatActive(true)
      setChatMessages([
        {
          id: 1,
          sender: 'ai',
          message: "I noticed you selected that option. That's really interesting! Can you tell me more about what's behind that feeling?",
          timestamp: new Date().toLocaleTimeString()
        }
      ])
    }, 1000)
  }

  const sendMessage = () => {
    if (!currentMessage.trim()) return

    const newUserMessage = {
      id: chatMessages.length + 1,
      sender: 'user' as const,
      message: currentMessage,
      timestamp: new Date().toLocaleTimeString()
    }

    setChatMessages(prev => [...prev, newUserMessage])

    // Simulate AI response
    setTimeout(() => {
      const aiResponses = [
        "That's a profound insight. How long have you been feeling this way?",
        "I can sense there's more depth to this. What do you think triggered these feelings?",
        "It sounds like you're going through a significant moment. How are you processing this?",
        "That's completely valid. What would help you feel more aligned with your authentic self?",
        "I hear you. Sometimes our emotions are trying to tell us something important. What do you think yours are saying?"
      ]
      
      const aiMessage = {
        id: chatMessages.length + 2,
        sender: 'ai' as const,
        message: aiResponses[Math.floor(Math.random() * aiResponses.length)],
        timestamp: new Date().toLocaleTimeString()
      }
      
      setChatMessages(prev => [...prev, aiMessage])
    }, 1500)

    setCurrentMessage('')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  FeelSpace
                </span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
                <Bot className="w-5 h-5" />
              </button>
              
              {/* User Profile Dropdown */}
              <div className="relative group">
                <button className="flex items-center space-x-2 p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium">
                    {userProfile?.full_name || userProfile?.username || 'User'}
                  </span>
                </button>
                
                {/* Dropdown Menu */}
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-3 border-b border-gray-100">
                    <p className="text-sm font-medium text-gray-900">
                      {userProfile?.full_name || 'User'}
                    </p>
                    <p className="text-xs text-gray-600">@{userProfile?.username}</p>
                    <p className="text-xs text-gray-600">{userProfile?.email}</p>
                  </div>
                  <div className="p-1">
                    <button className="w-full flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
                      <Settings className="w-4 h-4" />
                      <span>Settings</span>
                    </button>
                    <button
                      onClick={handleSignOut}
                      className="w-full flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Welcome Message */}
        {userProfile && (
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-8 border border-blue-100">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Welcome back, {userProfile.full_name || userProfile.username}! 👋
            </h2>
            <p className="text-gray-600">
              Ready to share your feelings and connect with the community? Let's explore what's on your mind today.
            </p>
          </div>
        )}

        {/* Create Poll Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <button className="w-full text-left p-4 bg-gray-50 rounded-xl text-gray-600 hover:bg-gray-100 transition-colors">
                What are you feeling right now? Share with the community...
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
                <Camera className="w-5 h-5" />
                <span>Photo</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-purple-600">
                <Bot className="w-5 h-5" />
                <span>AI Poll</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-green-600">
                <Smile className="w-5 h-5" />
                <span>Mood</span>
              </button>
            </div>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all">
              Create Poll
            </button>
          </div>
        </div>

        {/* Polls Feed */}
        <div className="space-y-6">
          {polls.map((poll) => (
            <div key={poll.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              {/* Poll Header */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <img 
                      src={poll.avatar} 
                      alt={poll.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">{poll.author}</h3>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        <span>{poll.time}</span>
                      </div>
                    </div>
                  </div>
                  <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>
                
                <h2 className="text-lg font-medium text-gray-900 mb-4">{poll.question}</h2>
              </div>

              {/* Poll Options */}
              <div className="px-6 pb-4 space-y-3">
                {poll.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handlePollVote(poll.id, index)}
                    className="w-full text-left p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-900 font-medium group-hover:text-blue-700">
                        {option.text}
                      </span>
                      <span className="text-sm text-gray-600 font-semibold">
                        {option.percentage}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all"
                        style={{ width: `${option.percentage}%` }}
                      ></div>
                    </div>
                    <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                      <span>{option.votes} votes</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Poll Stats */}
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{poll.totalVotes} total votes</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageSquare className="w-4 h-4" />
                      <span>{poll.comments} comments</span>
                    </div>
                    <div className="flex items-center space-x-1 text-purple-600 font-medium">
                      <Bot className="w-4 h-4" />
                      <span>{poll.aiConversations} AI conversations</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-6 py-4 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors">
                      <Heart className="w-5 h-5" />
                      <span>Like</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors">
                      <MessageSquare className="w-5 h-5" />
                      <span>Comment</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-green-500 transition-colors">
                      <Share2 className="w-5 h-5" />
                      <span>Share</span>
                    </button>
                  </div>
                  <button className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all">
                    <Bot className="w-4 h-4" />
                    <span>Talk to AI</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Chat Modal */}
      {aiChatActive && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md h-96 flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">AI Companion</h3>
                  <p className="text-sm text-gray-500">Exploring your feelings</p>
                </div>
              </div>
              <button 
                onClick={() => setAiChatActive(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {chatMessages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs px-4 py-2 rounded-lg ${
                    msg.sender === 'user' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-100 text-gray-900'
                  }`}>
                    <p className="text-sm">{msg.message}</p>
                    <p className={`text-xs mt-1 ${msg.sender === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                      {msg.timestamp}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  placeholder="Share your thoughts..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button 
                  onClick={sendMessage}
                  className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Frontend
