import React from 'react'
import { Award, Download, Star, Eye } from 'lucide-react'

const Templates = () => {
  const templates = [
    {
      name: 'Ethical Analysis Framework',
      description: 'Comprehensive template for ethical decision-making analysis',
      downloads: 234,
      rating: 4.8,
      category: 'Ethics',
      premium: true
    },
    {
      name: 'Research Methodology Guide',
      description: 'Step-by-step template for philosophical research projects',
      downloads: 189,
      rating: 4.9,
      category: 'Research',
      premium: false
    },
    {
      name: 'Community Discussion Framework',
      description: 'Template for structuring philosophical discussions',
      downloads: 156,
      rating: 4.7,
      category: 'Community',
      premium: true
    }
  ]

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
          <Award size={24} color="#3b82f6" />
          <h1 style={{ fontSize: '1.875rem', fontWeight: '700', color: '#1e293b' }}>
            Template Club
          </h1>
        </div>
        <p style={{ color: '#64748b', fontSize: '1rem' }}>
          Access premium templates for philosophical research and analysis
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
        gap: '2rem'
      }}>
        {templates.map((template, index) => (
          <div key={index} style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            border: '1px solid #e2e8f0',
            padding: '1.5rem',
            position: 'relative'
          }}>
            {template.premium && (
              <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                backgroundColor: '#f59e0b',
                color: 'white',
                padding: '0.25rem 0.5rem',
                borderRadius: '4px',
                fontSize: '0.75rem',
                fontWeight: '600'
              }}>
                PREMIUM
              </div>
            )}
            
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1e293b', marginBottom: '0.75rem' }}>
              {template.name}
            </h3>
            <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
              {template.description}
            </p>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <Download size={14} color="#64748b" />
                <span style={{ fontSize: '0.875rem', color: '#64748b' }}>{template.downloads}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <Star size={14} color="#f59e0b" />
                <span style={{ fontSize: '0.875rem', color: '#64748b' }}>{template.rating}</span>
              </div>
              <span style={{
                fontSize: '0.75rem',
                fontWeight: '600',
                color: '#3b82f6',
                backgroundColor: '#eff6ff',
                padding: '0.25rem 0.5rem',
                borderRadius: '4px'
              }}>
                {template.category}
              </span>
            </div>
            
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button style={{
                flex: 1,
                padding: '0.75rem',
                backgroundColor: '#3b82f6',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem'
              }}>
                <Download size={16} />
                Download
              </button>
              <button style={{
                padding: '0.75rem',
                backgroundColor: 'transparent',
                color: '#64748b',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                cursor: 'pointer'
              }}>
                <Eye size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Templates
