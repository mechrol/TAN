import React from 'react'
import { Globe, ExternalLink, Settings, BarChart3 } from 'lucide-react'

const Agency = () => {
  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
          <Globe size={24} color="#3b82f6" />
          <h1 style={{ fontSize: '1.875rem', fontWeight: '700', color: '#1e293b' }}>
            Agency Website
          </h1>
        </div>
        <p style={{ color: '#64748b', fontSize: '1rem' }}>
          Manage your philosophical research agency's online presence
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          border: '1px solid #e2e8f0',
          padding: '2rem'
        }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1e293b', marginBottom: '1.5rem' }}>
            Website Overview
          </h2>
          <div style={{
            backgroundColor: '#f8fafc',
            borderRadius: '8px',
            padding: '2rem',
            textAlign: 'center',
            marginBottom: '2rem'
          }}>
            <Globe size={48} color="#e2e8f0" />
            <p style={{ color: '#64748b', marginTop: '1rem' }}>
              Your agency website preview will appear here
            </p>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer'
            }}>
              <ExternalLink size={16} />
              Visit Website
            </button>
            <button style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              backgroundColor: 'transparent',
              color: '#64748b',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              cursor: 'pointer'
            }}>
              <Settings size={16} />
              Configure
            </button>
          </div>
        </div>

        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          border: '1px solid #e2e8f0',
          padding: '1.5rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <BarChart3 size={20} color="#3b82f6" />
            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1e293b' }}>
              Website Stats
            </h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ padding: '1rem', backgroundColor: '#f8fafc', borderRadius: '8px' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1e293b' }}>1,247</div>
              <div style={{ fontSize: '0.875rem', color: '#64748b' }}>Monthly Visitors</div>
            </div>
            <div style={{ padding: '1rem', backgroundColor: '#f8fafc', borderRadius: '8px' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1e293b' }}>89</div>
              <div style={{ fontSize: '0.875rem', color: '#64748b' }}>Inquiries</div>
            </div>
            <div style={{ padding: '1rem', backgroundColor: '#f8fafc', borderRadius: '8px' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1e293b' }}>12</div>
              <div style={{ fontSize: '0.875rem', color: '#64748b' }}>New Clients</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Agency
