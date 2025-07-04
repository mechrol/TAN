import React from 'react'
import { Package, Download, Star, Clock, Code, BookOpen, Zap, Shield } from 'lucide-react'

const Module = () => {
  const moduleStats = [
    { label: 'Total Modules', value: '24', change: '+3 new', icon: Package, color: '#3b82f6' },
    { label: 'Active Installs', value: '1,847', change: '+127', icon: Download, color: '#10b981' },
    { label: 'Avg Rating', value: '4.8', change: '+0.2', icon: Star, color: '#f59e0b' },
    { label: 'Update Pending', value: '6', change: 'Due soon', icon: Clock, color: '#ef4444' }
  ]

  const featuredModules = [
    {
      name: 'Ethical Framework Analyzer',
      description: 'Advanced analysis tools for ethical decision-making frameworks',
      version: '2.1.4',
      installs: 342,
      rating: 4.9,
      category: 'Ethics',
      status: 'Active',
      lastUpdate: '2 days ago'
    },
    {
      name: 'Logical Argument Validator',
      description: 'Comprehensive validation system for logical reasoning structures',
      version: '1.8.2',
      installs: 289,
      rating: 4.7,
      category: 'Logic',
      status: 'Active',
      lastUpdate: '1 week ago'
    },
    {
      name: 'Phenomenology Research Kit',
      description: 'Specialized tools for phenomenological research methodologies',
      version: '3.0.1',
      installs: 156,
      rating: 4.8,
      category: 'Research',
      status: 'Beta',
      lastUpdate: '3 days ago'
    },
    {
      name: 'Dialectical Synthesis Engine',
      description: 'AI-powered synthesis of opposing philosophical viewpoints',
      version: '1.5.7',
      installs: 203,
      rating: 4.6,
      category: 'Dialectics',
      status: 'Active',
      lastUpdate: '5 days ago'
    }
  ]

  const moduleCategories = [
    { name: 'Ethics & Morality', count: 8, icon: Shield, color: '#10b981' },
    { name: 'Logic & Reasoning', count: 6, icon: Code, color: '#3b82f6' },
    { name: 'Research Tools', count: 5, icon: BookOpen, color: '#f59e0b' },
    { name: 'AI Integration', count: 3, icon: Zap, color: '#8b5cf6' },
    { name: 'Data Analysis', count: 2, icon: Package, color: '#ef4444' }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return '#10b981'
      case 'Beta': return '#f59e0b'
      case 'Deprecated': return '#ef4444'
      default: return '#6b7280'
    }
  }

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
          <Package size={24} color="#3b82f6" />
          <h1 style={{ fontSize: '1.875rem', fontWeight: '700', color: '#1e293b' }}>
            Module Management
          </h1>
        </div>
        <p style={{ color: '#64748b', fontSize: '1rem' }}>
          Manage philosophical research modules, track usage, and deploy new functionality
        </p>
      </div>

      {/* Module Statistics */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '1.5rem',
        marginBottom: '2rem'
      }}>
        {moduleStats.map((stat, index) => {
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
                  color: stat.change.includes('+') ? '#10b981' : '#f59e0b',
                  backgroundColor: stat.change.includes('+') ? '#dcfce7' : '#fef3c7',
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
        {/* Featured Modules */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          border: '1px solid #e2e8f0',
          overflow: 'hidden'
        }}>
          <div style={{ padding: '1.5rem', borderBottom: '1px solid #e2e8f0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Star size={20} color="#3b82f6" />
              <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1e293b' }}>
                Featured Modules
              </h2>
            </div>
          </div>
          <div style={{ padding: '1.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {featuredModules.map((module, index) => (
                <div key={index} style={{
                  padding: '1.5rem',
                  backgroundColor: '#f8fafc',
                  borderRadius: '12px',
                  border: '1px solid #e2e8f0'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                        <h3 style={{ fontWeight: '600', color: '#1e293b', fontSize: '1.125rem' }}>
                          {module.name}
                        </h3>
                        <span style={{
                          fontSize: '0.75rem',
                          fontWeight: '600',
                          color: getStatusColor(module.status),
                          backgroundColor: `${getStatusColor(module.status)}15`,
                          padding: '0.25rem 0.5rem',
                          borderRadius: '4px'
                        }}>
                          {module.status}
                        </span>
                      </div>
                      <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '1rem' }}>
                        {module.description}
                      </p>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                        <span style={{ fontSize: '0.875rem', color: '#64748b' }}>
                          v{module.version}
                        </span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                          <Download size={14} color="#64748b" />
                          <span style={{ fontSize: '0.875rem', color: '#64748b' }}>
                            {module.installs}
                          </span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                          <Star size={14} color="#f59e0b" />
                          <span style={{ fontSize: '0.875rem', color: '#64748b' }}>
                            {module.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        color: '#3b82f6',
                        backgroundColor: '#eff6ff',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '4px'
                      }}>
                        {module.category}
                      </span>
                      <p style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.5rem' }}>
                        Updated {module.lastUpdate}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Module Categories */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          border: '1px solid #e2e8f0',
          overflow: 'hidden'
        }}>
          <div style={{ padding: '1.5rem', borderBottom: '1px solid #e2e8f0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <BookOpen size={20} color="#3b82f6" />
              <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1e293b' }}>
                Categories
              </h2>
            </div>
          </div>
          <div style={{ padding: '1.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {moduleCategories.map((category, index) => {
                const Icon = category.icon
                return (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1rem',
                    backgroundColor: '#f8fafc',
                    borderRadius: '8px',
                    border: '1px solid #e2e8f0',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div style={{
                        width: '36px',
                        height: '36px',
                        backgroundColor: `${category.color}15`,
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <Icon size={18} color={category.color} />
                      </div>
                      <span style={{ fontWeight: '500', color: '#1e293b', fontSize: '0.875rem' }}>
                        {category.name}
                      </span>
                    </div>
                    <span style={{
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      color: category.color,
                      backgroundColor: `${category.color}15`,
                      padding: '0.25rem 0.5rem',
                      borderRadius: '4px'
                    }}>
                      {category.count}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Module
