import React from 'react'
import { 
  Users, 
  BookOpen, 
  Calendar, 
  FileText,
  TrendingUp,
  Clock,
  MessageCircle,
  Plus,
  Activity
} from 'lucide-react'
import MetricCard from '../components/MetricCard'
import ChartCard from '../components/ChartCard'
import ActivityFeed from '../components/ActivityFeed'
import RecentResearch from '../components/RecentResearch'

const Dashboard = () => {
  const metrics = [
    {
      title: 'Community',
      value: '23',
      subtitle: 'Courses',
      icon: BookOpen,
      color: '#3b82f6',
      secondaryValue: '14',
      secondaryLabel: 'Members'
    },
    {
      title: 'Events',
      value: '0',
      subtitle: 'Events',
      icon: Calendar,
      color: '#10b981',
      secondaryValue: '56',
      secondaryLabel: 'Posts'
    },
    {
      title: 'Sales',
      value: '0',
      subtitle: 'Monthly Data',
      icon: TrendingUp,
      color: '#f59e0b'
    },
    {
      title: 'Community Members',
      value: '10',
      subtitle: 'Monthly Data',
      icon: Users,
      color: '#8b5cf6'
    }
  ]

  const recentSales = [
    { course: 'No recent sale found', customer: '', order: '', amount: '', created: '' }
  ]

  const recentActivity = [
    { user: 'Janusz', action: 'posted new comment', time: '2 weeks ago', avatar: '👤' },
    { user: 'Janusz', action: 'added a new post', time: '2 weeks ago', avatar: '👤' },
    { user: 'Janusz', action: 'posted new comment', time: '3 weeks ago', avatar: '👤' },
    { user: 'Janusz', action: 'added a new post', time: '3 weeks ago', avatar: '👤' },
    { user: 'Janusz', action: 'posted new comment', time: '3 weeks ago', avatar: '👤' },
    { user: 'Phil', action: 'joined Advertising', time: '4 weeks ago', avatar: '👤' }
  ]

  return (
    <div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '2rem'
      }}>
        <div>
          <h1 style={{ fontSize: '2rem', fontWeight: '700', color: '#1e293b', marginBottom: '0.5rem' }}>
            Dashboard
          </h1>
          <p style={{ color: '#64748b' }}>
            Welcome to your philosophical research hub
          </p>
        </div>
        <button className="btn btn-primary">
          <Plus size={16} />
          New Research
        </button>
      </div>

      {/* Metrics Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '1.5rem',
        marginBottom: '2rem'
      }}>
        {metrics.map((metric, index) => {
          const Icon = metric.icon
          return (
            <div key={index} style={{
              backgroundColor: 'white',
              padding: '1.5rem',
              borderRadius: '12px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: `${metric.color}15`,
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Icon size={24} color={metric.color} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1e293b', marginBottom: '0.25rem' }}>
                    {metric.title}
                  </h3>
                  <p style={{ color: '#64748b', fontSize: '0.875rem' }}>
                    {metric.subtitle}
                  </p>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <BookOpen size={16} color="#64748b" />
                  <div>
                    <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1e293b' }}>
                      {metric.value}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                      {metric.title === 'Community' ? 'Courses' : metric.title === 'Events' ? 'Events' : 'Value'}
                    </div>
                  </div>
                </div>
                
                {metric.secondaryValue && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Users size={16} color="#64748b" />
                    <div>
                      <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1e293b' }}>
                        {metric.secondaryValue}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                        {metric.secondaryLabel}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Main Content Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
        {/* Sales Chart */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          border: '1px solid #e2e8f0',
          overflow: 'hidden'
        }}>
          <div style={{ padding: '1.5rem', borderBottom: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1e293b' }}>
              My Sales
            </h2>
            <p style={{ fontSize: '0.875rem', color: '#64748b' }}>
              Monthly Data
            </p>
          </div>
          <div style={{ padding: '2rem', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ textAlign: 'center', color: '#64748b' }}>
              <TrendingUp size={48} color="#e2e8f0" />
              <p style={{ marginTop: '1rem' }}>Sales chart visualization</p>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          border: '1px solid #e2e8f0',
          overflow: 'hidden'
        }}>
          <div style={{ padding: '1.5rem', borderBottom: '1px solid #e2e8f0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Activity size={20} color="#3b82f6" />
              <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1e293b' }}>
                Recent Activity
              </h2>
            </div>
            <p style={{ fontSize: '0.875rem', color: '#64748b' }}>
              Community member recent activity
            </p>
          </div>
          <div style={{ padding: '1rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {recentActivity.map((activity, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem',
                  backgroundColor: '#f8fafc',
                  borderRadius: '8px'
                }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: '#e2e8f0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.875rem'
                  }}>
                    {activity.avatar}
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: '0.875rem', color: '#1e293b', marginBottom: '0.25rem' }}>
                      <strong>{activity.user}</strong> {activity.action}
                    </p>
                    <p style={{ fontSize: '0.75rem', color: '#64748b' }}>
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recent Sales */}
      <div style={{ marginTop: '2rem' }}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          border: '1px solid #e2e8f0',
          overflow: 'hidden'
        }}>
          <div style={{ padding: '1.5rem', borderBottom: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1e293b' }}>
              Recent Sales
            </h2>
          </div>
          <div style={{ padding: '1.5rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <th style={{ textAlign: 'left', padding: '0.75rem', fontSize: '0.875rem', fontWeight: '600', color: '#64748b' }}>
                    COURSE / PRODUCT
                  </th>
                  <th style={{ textAlign: 'left', padding: '0.75rem', fontSize: '0.875rem', fontWeight: '600', color: '#64748b' }}>
                    CUSTOMER NAME
                  </th>
                  <th style={{ textAlign: 'left', padding: '0.75rem', fontSize: '0.875rem', fontWeight: '600', color: '#64748b' }}>
                    ORDER ID
                  </th>
                  <th style={{ textAlign: 'left', padding: '0.75rem', fontSize: '0.875rem', fontWeight: '600', color: '#64748b' }}>
                    SALE AMOUNT
                  </th>
                  <th style={{ textAlign: 'left', padding: '0.75rem', fontSize: '0.875rem', fontWeight: '600', color: '#64748b' }}>
                    CREATED ON
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="5" style={{ 
                    textAlign: 'center', 
                    padding: '2rem', 
                    color: '#64748b',
                    fontSize: '0.875rem'
                  }}>
                    No recent sale found
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
