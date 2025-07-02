import React from 'react'
import { Users } from 'lucide-react'

const members = [
  {
    name: 'Sarah Chen',
    role: 'AI Researcher',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1',
    online: true
  },
  {
    name: 'Marcus Rodriguez',
    role: 'ML Engineer',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1',
    online: true
  },
  {
    name: 'Dr. Emily Watson',
    role: 'Data Scientist',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1',
    online: false
  },
  {
    name: 'Alex Kim',
    role: 'Product Manager',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1',
    online: true
  }
]

export default function CommunityMembers() {
  return (
    <div className="card">
      <div className="flex items-center space-x-2 mb-4">
        <Users className="w-5 h-5 text-primary-600" />
        <h3 className="font-semibold text-gray-900">Active Members</h3>
      </div>
      
      <div className="space-y-3">
        {members.map((member, index) => (
          <div key={index} className="flex items-center space-x-3 hover:bg-gray-50 p-2 rounded-lg cursor-pointer transition-colors">
            <div className="relative">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-10 h-10 rounded-full"
              />
              {member.online && (
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-gray-900 truncate">{member.name}</p>
              <p className="text-sm text-gray-500 truncate">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
