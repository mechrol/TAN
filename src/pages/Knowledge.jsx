import React from 'react'
import { Database, Search, BookOpen, HelpCircle } from 'lucide-react'

const Knowledge = () => {
  const categories = [
    { name: 'Getting Started', articles: 12, icon: BookOpen, color: '#3b82f6' },
    { name: 'Research Methods', articles: 8, icon: Database, color: '#10b981' },
    { name: 'Community Management', articles: 15, icon: HelpCircle, color: '#f59e0b' },
    { name: 'Technical Support', articles: 6, icon: Search, color: '#ef4444' }
  ]

  const popularArticles = [
    'How to conduct philosophical research',
    'Setting up your first community',
    'Understanding ethical frameworks',
    'Managing research data effectively',
    'Building academic partnerships'
  ]

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
          <Database size={24} color="#3b82f6" />
          <h1 style={{ fontSize: '1.875rem', fontWeight: '700', color: '#1e293b' }}>
            Knowledge Base
          </h1>
        </div>
        <p style={{ color: '#64748b', fontSize: '1rem' }}>
          Find answers and learn about philosophical research methodologies
        </p>
      </div>

      {/* Search Bar */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ position: 'relative', maxWidth: '600px' }}>
          <Search size={20} color="#64748b" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
          <input
            type="text"
            placeholder="Search knowledge base..."
            style={{
              width: '100%',
              padding: '1rem 1rem 1rem 3rem',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              fontSize: '1rem',
              outline: 'none'
            }}
          />
        </div>
      </div>

      {/* Categories */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '1.5rem',
        marginBottom: '2rem'
      }}>
        {categories.map((category, index) => {
          const Icon = category.icon
          return (
            <div key={index} style={{
              backgroundColor: 'white',
              padding: '1.5rem',
              borderRadius: '12px',
              border: '1px solid #e2e8f0',
              cursor: 'pointer',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: `${category.color}15`,
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Icon size={24} color={category.color} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1e293b' }}>
                    {category.name}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: '#64748b' }}>
                    {category.articles} articles
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Popular Articles */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        border: '1px solid #e2e8f0',
        padding: '2rem'
      }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1e293b', marginBottom: '1.5rem' }}>
          Popular Articles
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {popularArticles.map((article, index) => (
            <div key={index} style={{
              padding: '1rem',
              backgroundColor: '#f8fafc',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            }}>
              <span style={{ color: '#1e293b', fontSize: '0.875rem' }}>{article}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Knowledge
