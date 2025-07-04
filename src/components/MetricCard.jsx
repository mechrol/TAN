import React from 'react'

const MetricCard = ({ title, value, subtitle, icon: Icon, color }) => {
  return (
    <div className="card" style={{ padding: '1.5rem' }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '1rem'
      }}>
        <div style={{
          width: '48px',
          height: '48px',
          borderRadius: '12px',
          backgroundColor: `${color}15`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Icon size={24} color={color} />
        </div>
      </div>
      
      <div>
        <h3 style={{
          fontSize: '2rem',
          fontWeight: '700',
          color: '#1e293b',
          marginBottom: '0.25rem'
        }}>
          {value}
        </h3>
        <p style={{
          fontSize: '0.875rem',
          color: '#64748b',
          marginBottom: '0.5rem'
        }}>
          {subtitle}
        </p>
        <p style={{
          fontSize: '0.75rem',
          color: '#94a3b8',
          fontWeight: '500'
        }}>
          {title}
        </p>
      </div>
    </div>
  )
}

export default MetricCard
