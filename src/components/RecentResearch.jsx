import React from 'react'

const RecentResearch = () => {
  return (
    <div className="card" style={{ padding: '1.5rem' }}>
      <div style={{ marginBottom: '1.5rem' }}>
        <h3 style={{
          fontSize: '1.125rem',
          fontWeight: '600',
          color: '#1e293b',
          marginBottom: '0.25rem'
        }}>
          Recent Research
        </h3>
        <p style={{
          fontSize: '0.875rem',
          color: '#64748b'
        }}>
          Latest philosophical inquiries and publications
        </p>
      </div>

      <div style={{
        border: '1px solid #e2e8f0',
        borderRadius: '8px',
        overflow: 'hidden'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 2fr 1fr 1fr 1fr',
          gap: '1rem',
          padding: '1rem',
          backgroundColor: '#f8fafc',
          borderBottom: '1px solid #e2e8f0',
          fontSize: '0.75rem',
          fontWeight: '600',
          color: '#64748b',
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}>
          <div>Research / Topic</div>
          <div>Philosopher Name</div>
          <div>Framework</div>
          <div>Status</div>
          <div>Created On</div>
        </div>

        <div style={{
          padding: '2rem',
          textAlign: 'center',
          color: '#94a3b8'
        }}>
          <p>No recent research found</p>
          <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>
            Start your first philosophical inquiry to see it here
          </p>
        </div>
      </div>
    </div>
  )
}

export default RecentResearch
