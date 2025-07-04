import React from 'react'
import { Store, Users, TrendingUp, DollarSign, Package, Award, Target, BarChart3 } from 'lucide-react'

const Reseller = () => {
  const partnerStats = [
    { label: 'Active Partners', value: '47', change: '+12%', icon: Users, color: '#3b82f6' },
    { label: 'Monthly Revenue', value: '$89,420', change: '+23%', icon: DollarSign, color: '#10b981' },
    { label: 'Products Sold', value: '1,247', change: '+18%', icon: Package, color: '#f59e0b' },
    { label: 'Conversion Rate', value: '12.4%', change: '+2.1%', icon: Target, color: '#ef4444' }
  ]

  const topPartners = [
    { name: 'Philosophical Insights Ltd', revenue: '$12,450', products: 89, tier: 'Platinum', growth: '+34%' },
    { name: 'Academic Research Co', revenue: '$9,870', products: 67, tier: 'Gold', growth: '+28%' },
    { name: 'Wisdom Distribution', revenue: '$8,320', products: 54, tier: 'Gold', growth: '+19%' },
    { name: 'Knowledge Partners', revenue: '$7,650', products: 43, tier: 'Silver', growth: '+15%' },
    { name: 'Philosophy Hub', revenue: '$6,890', products: 38, tier: 'Silver', growth: '+22%' }
  ]

  const recentActivity = [
    { partner: 'Philosophical Insights Ltd', action: 'New bulk order placed', amount: '$2,340', time: '2 hours ago' },
    { partner: 'Academic Research Co', action: 'Partnership tier upgraded', amount: 'Gold → Platinum', time: '4 hours ago' },
    { partner: 'Wisdom Distribution', action: 'Monthly commission paid', amount: '$1,890', time: '6 hours ago' },
    { partner: 'Knowledge Partners', action: 'Training session completed', amount: 'Advanced Module', time: '1 day ago' },
    { partner: 'Philosophy Hub', action: 'New product catalog requested', amount: '2024 Q1', time: '1 day ago' }
  ]

  const getTierColor = (tier) => {
    switch (tier) {
      case 'Platinum': return '#8b5cf6'
      case 'Gold': return '#f59e0b'
      case 'Silver': return '#6b7280'
      default: return '#3b82f6'
    }
  }

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
          <Store size={24} color="#3b82f6" />
          <h1 style={{ fontSize: '1.875rem', fontWeight: '700', color: '#1e293b' }}>
            Reseller Network
          </h1>
        </div>
        <p style={{ color: '#64748b', fontSize: '1rem' }}>
          Manage partnerships, track performance, and grow your philosophical research distribution network
        </p>
      </div>

      {/* Partner Statistics */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '1.5rem',
        marginBottom: '2rem'
      }}>
        {partnerStats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div key={index} style={{
              backgroundColor: 'white',
              padding: '1.5rem',
              borderRadius: '12px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: `${stat.color}15`,
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Icon size={24} color={stat.color} />
                </div>
                <span style={{
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: stat.change.startsWith('+') ? '#10b981' : '#ef4444',
                  backgroundColor: stat.change.startsWith('+') ? '#dcfce7' : '#fee2e2',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '6px'
                }}>
                  {stat.change}
                </span>
              </div>
              <h3 style={{ fontSize: '1.875rem', fontWeight: '700', color: '#1e293b', marginBottom: '0.25rem' }}>
                {stat.value}
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.875rem' }}>
                {stat.label}
              </p>
            </div>
          )
        })}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
        {/* Top Partners */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          border: '1px solid #e2e8f0',
          overflow: 'hidden'
        }}>
          <div style={{ padding: '1.5rem', borderBottom: '1px solid #e2e8f0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Award size={20} color="#3b82f6" />
              <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1e293b' }}>
                Top Performing Partners
              </h2>
            </div>
          </div>
          <div style={{ padding: '1.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {topPartners.map((partner, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1rem',
                  backgroundColor: '#f8fafc',
                  borderRadius: '8px',
                  border: '1px solid #e2e8f0'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      backgroundColor: getTierColor(partner.tier),
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontWeight: '600',
                      fontSize: '0.875rem'
                    }}>
                      #{index + 1}
                    </div>
                    <div>
                      <h3 style={{ fontWeight: '600', color: '#1e293b', marginBottom: '0.25rem' }}>
                        {partner.name}
                      </h3>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <span style={{ fontSize: '0.875rem', color: '#64748b' }}>
                          {partner.products} products
                        </span>
                        <span style={{
                          fontSize: '0.75rem',
                          fontWeight: '600',
                          color: getTierColor(partner.tier),
                          backgroundColor: `${getTierColor(partner.tier)}15`,
                          padding: '0.25rem 0.5rem',
                          borderRadius: '4px'
                        }}>
                          {partner.tier}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontWeight: '600', color: '#1e293b', marginBottom: '0.25rem' }}>
                      {partner.revenue}
                    </div>
                    <div style={{
                      fontSize: '0.875rem',
                      color: '#10b981',
                      fontWeight: '500'
                    }}>
                      {partner.growth}
                    </div>
                  </div>
                </div>
              ))}
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
              <BarChart3 size={20} color="#3b82f6" />
              <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1e293b' }}>
                Recent Activity
              </h2>
            </div>
          </div>
          <div style={{ padding: '1.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {recentActivity.map((activity, index) => (
                <div key={index} style={{
                  padding: '1rem',
                  backgroundColor: '#f8fafc',
                  borderRadius: '8px',
                  border: '1px solid #e2e8f0'
                }}>
                  <div style={{ marginBottom: '0.5rem' }}>
                    <h4 style={{ fontWeight: '600', color: '#1e293b', fontSize: '0.875rem' }}>
                      {activity.partner}
                    </h4>
                  </div>
                  <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                    {activity.action}
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: '600', color: '#3b82f6', fontSize: '0.875rem' }}>
                      {activity.amount}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
                      {activity.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reseller
