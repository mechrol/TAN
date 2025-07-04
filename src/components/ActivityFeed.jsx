import React from 'react'
import { Clock, MessageCircle, FileText, Users } from 'lucide-react'

const ActivityFeed = () => {
  const activities = [
    {
      id: 1,
      user: 'Janusz',
      action: 'posted new comment',
      time: '2 weeks ago',
      icon: MessageCircle,
      color: '#3b82f6'
    },
    {
      id: 2,
      user: 'Janusz',
      action: 'added a new post',
      time: '2 weeks ago',
      icon: FileText,
      color: '#10b981'
    },
    {
      id: 3,
      user: 'Janusz',
      action: 'posted new comment',
      time: '2 weeks ago',
      icon: MessageCircle,
      color: '#3b82f6'
    },
    {
      id: 4,
      user: 'Janusz',
      action: 'added a new post',
      time: '3 weeks ago',
      icon: FileText,
      color: '#10b981'
    },
    {
      id: 5,
      user: 'Janusz',
      action: 'posted new comment',
      time: '3 weeks ago',
      icon: MessageCircle,
      color: '#3b82f6'
    },
    {
      id: 6,
      user: 'Phil',
      action: 'joined Advertising',
      time: '4 weeks ago',
      icon: Users,
      color: '#f59e0b'
    }
  ]

  return (
    <div className="card" style={{ padding: '1.5rem' }}>
      <div style={{ marginBottom: '1.5rem' }}>
        <h3 style={{
          fontSize: '1.125rem',
          fontWeight: '600',
          color: '#1e293b',
          marginBottom: '0.25rem'
        }}>
          Recent Activity
        </h3>
        <p style={{
          fontSize: '0.875rem',
          color: '#64748b'
        }}>
          Community member recent activity
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {activities.map((activity) => {
          const Icon = activity.icon
          return (
            <div key={activity.id} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: `${activity.color}15`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Icon size={16} color={activity.color} />
              </div>
              
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{
                  fontSize: '0.875rem',
                  color: '#1e293b',
                  marginBottom: '0.125rem'
                }}>
                  <span style={{ fontWeight: '600' }}>{activity.user}</span>
                  {' '}
                  <span style={{ color: '#64748b' }}>{activity.action}</span>
                </p>
                <p style={{
                  fontSize: '0.75rem',
                  color: '#94a3b8'
                }}>
                  {activity.time}
                </p>
              </div>

              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: '#f1f5f9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  color: '#64748b'
                }}>
                  {activity.user.charAt(0)}
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ActivityFeed
