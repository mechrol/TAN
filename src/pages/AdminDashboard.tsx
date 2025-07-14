import React from 'react'
import { 
  Users, 
  Activity, 
  Database, 
  Shield,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock
} from 'lucide-react'

const AdminDashboard: React.FC = () => {
  const stats = [
    {
      title: 'Total Users',
      value: '2,847',
      change: '+12%',
      changeType: 'positive' as const,
      icon: Users,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Active Sessions',
      value: '1,234',
      change: '+5%',
      changeType: 'positive' as const,
      icon: Activity,
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'System Health',
      value: '99.9%',
      change: '0%',
      changeType: 'neutral' as const,
      icon: Shield,
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Database Size',
      value: '45.2 GB',
      change: '+2.1%',
      changeType: 'neutral' as const,
      icon: Database,
      color: 'from-indigo-500 to-indigo-600'
    }
  ]

  const recentActivities = [
    {
      id: 1,
      type: 'user_signup',
      message: 'New user registered: john.doe@example.com',
      timestamp: '2 minutes ago',
      status: 'success'
    },
    {
      id: 2,
      type: 'system_alert',
      message: 'High memory usage detected on server-02',
      timestamp: '15 minutes ago',
      status: 'warning'
    },
    {
      id: 3,
      type: 'admin_action',
      message: 'User role updated: jane.smith@example.com → Moderator',
      timestamp: '1 hour ago',
      status: 'info'
    },
    {
      id: 4,
      type: 'security',
      message: 'Failed login attempts from IP: 192.168.1.100',
      timestamp: '2 hours ago',
      status: 'error'
    },
    {
      id: 5,
      type: 'backup',
      message: 'Daily database backup completed successfully',
      timestamp: '3 hours ago',
      status: 'success'
    }
  ]

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'user_signup':
        return Users
      case 'system_alert':
        return AlertTriangle
      case 'admin_action':
        return Shield
      case 'security':
        return AlertTriangle
      case 'backup':
        return Database
      default:
        return Activity
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success':
        return 'text-green-400'
      case 'warning':
        return 'text-yellow-400'
      case 'error':
        return 'text-red-400'
      case 'info':
        return 'text-blue-400'
      default:
        return 'text-gray-400'
    }
  }

  return (
    <div className="flex-1 bg-slate-900">
      {/* Header */}
      <div className="bg-slate-800 border-b border-slate-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">Administrator Dashboard</h1>
            <p className="text-gray-400 mt-1">Monitor and manage your AITribes platform</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-green-400">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm font-medium">System Operational</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className={`text-sm font-medium ${
                  stat.changeType === 'positive' ? 'text-green-400' : 
                  stat.changeType === 'negative' ? 'text-red-400' : 'text-gray-400'
                }`}>
                  {stat.change}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
                <p className="text-gray-400 text-sm">{stat.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <div className="bg-slate-800 rounded-xl border border-slate-700">
            <div className="p-6 border-b border-slate-700">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-white">Recent Activity</h2>
                <button className="text-indigo-400 hover:text-indigo-300 text-sm font-medium">
                  View All
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentActivities.map((activity) => {
                  const IconComponent = getActivityIcon(activity.type)
                  return (
                    <div key={activity.id} className="flex items-start space-x-3">
                      <div className={`w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center ${getStatusColor(activity.status)}`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-gray-300 text-sm">{activity.message}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <Clock className="w-3 h-3 text-gray-500" />
                          <span className="text-gray-500 text-xs">{activity.timestamp}</span>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* System Status */}
          <div className="bg-slate-800 rounded-xl border border-slate-700">
            <div className="p-6 border-b border-slate-700">
              <h2 className="text-xl font-bold text-white">System Status</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">Web Server</span>
                  </div>
                  <span className="text-green-400 text-sm font-medium">Operational</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">Database</span>
                  </div>
                  <span className="text-green-400 text-sm font-medium">Operational</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <span className="text-gray-300">Cache Server</span>
                  </div>
                  <span className="text-yellow-400 text-sm font-medium">High Load</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">File Storage</span>
                  </div>
                  <span className="text-green-400 text-sm font-medium">Operational</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">Email Service</span>
                  </div>
                  <span className="text-green-400 text-sm font-medium">Operational</span>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-slate-700">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Last Updated</span>
                  <span className="text-gray-300">2 minutes ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <h2 className="text-xl font-bold text-white mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg p-4 text-left transition-colors">
              <div className="flex items-center space-x-3">
                <Users className="w-6 h-6 text-blue-400" />
                <div>
                  <h3 className="text-white font-medium">Manage Users</h3>
                  <p className="text-gray-400 text-sm">View and edit user accounts</p>
                </div>
              </div>
            </button>
            
            <button className="bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg p-4 text-left transition-colors">
              <div className="flex items-center space-x-3">
                <BarChart3 className="w-6 h-6 text-green-400" />
                <div>
                  <h3 className="text-white font-medium">View Analytics</h3>
                  <p className="text-gray-400 text-sm">Check platform statistics</p>
                </div>
              </div>
            </button>
            
            <button className="bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg p-4 text-left transition-colors">
              <div className="flex items-center space-x-3">
                <Shield className="w-6 h-6 text-purple-400" />
                <div>
                  <h3 className="text-white font-medium">Security Settings</h3>
                  <p className="text-gray-400 text-sm">Configure security options</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
