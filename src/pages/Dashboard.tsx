import React from 'react'
import { Clock, MessageCircle } from 'lucide-react'

const Dashboard: React.FC = () => {
  const recentActivity = [
    {
      id: 1,
      user: 'Janusz',
      action: 'added a new post',
      time: '3 days ago',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=1'
    },
    {
      id: 2,
      user: 'Janusz',
      action: 'added a new post',
      time: '6 days ago',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=1'
    },
    {
      id: 3,
      user: 'Janusz',
      action: 'posted new comment',
      time: '1 month ago',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=1'
    },
    {
      id: 4,
      user: 'Janusz',
      action: 'posted new comment',
      time: '1 month ago',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=1'
    },
    {
      id: 5,
      user: 'Janusz',
      action: 'posted new comment',
      time: '1 month ago',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=1'
    },
    {
      id: 6,
      user: 'Phil',
      action: 'joined Advertising',
      time: '2 months ago',
      avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=1'
    }
  ]

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Community</h3>
              <div className="flex items-center space-x-2 mt-1">
                <span className="text-2xl font-bold text-blue-600">9</span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">9</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Sales</h3>
              <div className="mt-1">
                <span className="text-2xl font-bold text-gray-900">$0</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Community Members</h3>
              <div className="mt-1">
                <span className="text-2xl font-bold text-gray-900">1,247</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Sales */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Sales</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-gray-500 border-b">
                  <th className="pb-3 font-medium">COURSE / PRODUCT</th>
                  <th className="pb-3 font-medium">CUSTOMER NAME</th>
                  <th className="pb-3 font-medium">ORDER ID</th>
                  <th className="pb-3 font-medium">SALE AMOUNT</th>
                  <th className="pb-3 font-medium">CREATED ON</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={5} className="py-8 text-center text-gray-500">
                    No recent sale found
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
            <p className="text-sm text-gray-500">Community member recent activity</p>
          </div>
          
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <Clock className="w-5 h-5 text-blue-500 mt-0.5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium text-gray-900">{activity.user}</span>
                    <span className="text-gray-600">{activity.action}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{activity.time}</p>
                </div>
                <div className="flex-shrink-0">
                  <img 
                    src={activity.avatar} 
                    alt={activity.user}
                    className="w-8 h-8 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center pt-8 border-t border-gray-200">
        <p className="text-sm text-gray-500">2025 © AITribes</p>
        <p className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer">Support</p>
      </div>
    </div>
  )
}

export default Dashboard
