import React from 'react'

const activities = [
  {
    id: '1',
    user: 'Janusz',
    action: 'posted new comment',
    time: '5 weeks ago',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1'
  },
  {
    id: '2',
    user: 'Janusz',
    action: 'added a new post',
    time: '2 weeks ago',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1'
  },
  {
    id: '3',
    user: 'Janusz',
    action: 'posted new comment',
    time: '2 weeks ago',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1'
  },
  {
    id: '4',
    user: 'Janusz',
    action: 'added a new post',
    time: '3 weeks ago',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1'
  },
  {
    id: '5',
    user: 'Janusz',
    action: 'posted new comment',
    time: '3 weeks ago',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1'
  },
  {
    id: '6',
    user: 'Phil',
    action: 'joined Advertising',
    time: '4 weeks ago',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1'
  }
]

export default function ActivityFeed() {
  return (
    <div className="card">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">Recent Activity</h3>
      <p className="text-sm text-gray-500 mb-4">Community member recent activity</p>
      
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-900">
                <span className="font-medium">{activity.user}</span> {activity.action}
              </p>
              <p className="text-xs text-gray-500">{activity.time}</p>
            </div>
            <img
              src={activity.avatar}
              alt={activity.user}
              className="w-6 h-6 rounded-full"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
