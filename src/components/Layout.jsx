import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  Home, 
  Users, 
  BookOpen, 
  BarChart3, 
  Settings,
  Brain,
  User,
  Store,
  Package,
  ChevronDown,
  CreditCard,
  UserCircle,
  Play,
  Database,
  Award,
  Globe,
  LogOut,
  UserCheck,
  UserPlus
} from 'lucide-react'

const Layout = ({ children }) => {
  const location = useLocation()
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [showResellerMenu, setShowResellerMenu] = useState(false)

  const navigation = [
    { name: 'Dashboard', href: '/', icon: Home },
    { name: 'Community', href: '/community', icon: Users },
    { name: 'Research', href: '/research', icon: BookOpen },
    { name: 'Analytics', href: '/analytics', icon: BarChart3 },
    { 
      name: 'Reseller', 
      href: '/reseller', 
      icon: Store,
      hasDropdown: true,
      dropdownItems: [
        { name: 'Manage Client', href: '/reseller/manage-client', icon: UserCheck },
        { name: 'Team Member', href: '/reseller/team-member', icon: UserPlus },
        { name: 'Reseller', href: '/reseller', icon: Store }
      ]
    },
    { name: 'Module', href: '/module', icon: Package },
    { name: 'Integrations', href: '/integrations', icon: Settings },
  ]

  const userMenuItems = [
    { name: 'Profile', icon: UserCircle, href: '/profile' },
    { name: 'Video Tutorials', icon: Play, href: '/tutorials' },
    { name: 'Knowledgebase', icon: Database, href: '/knowledge' },
    { name: 'Template Club', icon: Award, href: '/templates' },
    { name: 'Agency Website', icon: Globe, href: '/agency' },
    { name: 'DFY Tribe', icon: Users, href: '/tribe' },
    { name: 'Language', icon: Globe, href: '/language' },
  ]

  const isActive = (href) => {
    if (href === '/reseller') {
      return location.pathname.startsWith('/reseller')
    }
    return location.pathname === href
  }

  const handleResellerClick = (e) => {
    e.preventDefault()
    setShowResellerMenu(!showResellerMenu)
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      {/* Header */}
      <header style={{
        backgroundColor: 'white',
        borderBottom: '1px solid #e2e8f0',
        padding: '1rem 0'
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '32px',
              height: '32px',
              backgroundColor: '#3b82f6',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Brain size={20} color="white" />
            </div>
            <div>
              <h1 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1e293b' }}>
                HomoHumanicus
              </h1>
              <p style={{ fontSize: '0.75rem', color: '#64748b' }}>
                Philosophical Research Platform
              </p>
            </div>
          </div>

          <nav style={{ display: 'flex', gap: '1.5rem' }}>
            {navigation.map((item) => {
              const Icon = item.icon
              const active = isActive(item.href)
              
              if (item.hasDropdown) {
                return (
                  <div key={item.name} style={{ position: 'relative' }}>
                    <button
                      onClick={handleResellerClick}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.5rem 1rem',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        color: active ? '#3b82f6' : '#64748b',
                        backgroundColor: active ? '#eff6ff' : 'transparent',
                        fontWeight: '500',
                        fontSize: '0.875rem',
                        transition: 'all 0.2s',
                        border: 'none',
                        cursor: 'pointer'
                      }}
                    >
                      <Icon size={16} />
                      {item.name}
                      <ChevronDown size={14} style={{
                        transform: showResellerMenu ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s'
                      }} />
                    </button>

                    {showResellerMenu && (
                      <div style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        marginTop: '0.5rem',
                        width: '200px',
                        backgroundColor: 'white',
                        borderRadius: '8px',
                        border: '1px solid #e2e8f0',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                        zIndex: 50,
                        overflow: 'hidden'
                      }}>
                        {item.dropdownItems.map((dropdownItem) => {
                          const DropdownIcon = dropdownItem.icon
                          return (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              onClick={() => setShowResellerMenu(false)}
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                padding: '0.75rem 1rem',
                                textDecoration: 'none',
                                color: location.pathname === dropdownItem.href ? '#3b82f6' : '#475569',
                                backgroundColor: location.pathname === dropdownItem.href ? '#eff6ff' : 'transparent',
                                fontSize: '0.875rem',
                                fontWeight: '500',
                                transition: 'all 0.2s',
                                borderBottom: '1px solid #f1f5f9'
                              }}
                              onMouseEnter={(e) => {
                                if (location.pathname !== dropdownItem.href) {
                                  e.target.style.backgroundColor = '#f8fafc'
                                }
                              }}
                              onMouseLeave={(e) => {
                                if (location.pathname !== dropdownItem.href) {
                                  e.target.style.backgroundColor = 'transparent'
                                }
                              }}
                            >
                              <DropdownIcon size={16} />
                              {dropdownItem.name}
                            </Link>
                          )
                        })}
                      </div>
                    )}
                  </div>
                )
              }

              return (
                <Link
                  key={item.name}
                  to={item.href}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    color: active ? '#3b82f6' : '#64748b',
                    backgroundColor: active ? '#eff6ff' : 'transparent',
                    fontWeight: '500',
                    fontSize: '0.875rem',
                    transition: 'all 0.2s'
                  }}
                >
                  <Icon size={16} />
                  {item.name}
                </Link>
              )
            })}
          </nav>

          {/* User Profile Dropdown */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem',
                backgroundColor: 'transparent',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
            >
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#e2e8f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <User size={20} color="#64748b" />
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.875rem', fontWeight: '600', color: '#1e293b' }}>
                  Janusz Krawczak
                </div>
                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                  janusz@homohumanicus.com
                </div>
              </div>
              <ChevronDown size={16} color="#64748b" />
            </button>

            {showUserMenu && (
              <div style={{
                position: 'absolute',
                top: '100%',
                right: 0,
                marginTop: '0.5rem',
                width: '280px',
                backgroundColor: 'white',
                borderRadius: '12px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                zIndex: 50
              }}>
                {/* Credits Section */}
                <div style={{ padding: '1rem', borderBottom: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <CreditCard size={16} color="#3b82f6" />
                    <span style={{ fontSize: '0.875rem', fontWeight: '600', color: '#1e293b' }}>
                      Free Credits
                    </span>
                  </div>
                  <div style={{ fontSize: '1.25rem', fontWeight: '700', color: '#3b82f6' }}>
                    25/100
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                    Credits remaining this month
                  </div>
                </div>

                {/* Menu Items */}
                <div style={{ padding: '0.5rem' }}>
                  {userMenuItems.map((item) => {
                    const Icon = item.icon
                    return (
                      <Link
                        key={item.name}
                        to={item.href}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.75rem',
                          padding: '0.75rem 1rem',
                          borderRadius: '8px',
                          textDecoration: 'none',
                          color: '#475569',
                          fontSize: '0.875rem',
                          transition: 'background-color 0.2s'
                        }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#f8fafc'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                      >
                        <Icon size={16} />
                        {item.name}
                      </Link>
                    )
                  })}
                </div>

                {/* Sign Out */}
                <div style={{ padding: '0.5rem', borderTop: '1px solid #e2e8f0' }}>
                  <button style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: '#ef4444',
                    fontSize: '0.875rem',
                    cursor: 'pointer',
                    width: '100%',
                    transition: 'background-color 0.2s'
                  }}>
                    <LogOut size={16} />
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <div style={{ display: 'flex' }}>
        <aside style={{
          width: '240px',
          backgroundColor: 'white',
          borderRight: '1px solid #e2e8f0',
          minHeight: 'calc(100vh - 80px)',
          padding: '1.5rem 0'
        }}>
          <nav style={{ padding: '0 1rem' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1rem',
              backgroundColor: '#eff6ff',
              borderRadius: '8px',
              marginBottom: '1rem'
            }}>
              <Home size={16} color="#3b82f6" />
              <span style={{ color: '#3b82f6', fontWeight: '500' }}>Dashboard</span>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{
                fontSize: '0.75rem',
                fontWeight: '600',
                color: '#64748b',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '0.75rem',
                paddingLeft: '1rem'
              }}>
                Framework Actions
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                {[
                  { name: 'Assertive', color: '#ef4444' },
                  { name: 'Rational', color: '#3b82f6' },
                  { name: 'Behavioral', color: '#10b981' },
                  { name: 'Adaptive', color: '#f59e0b' }
                ].map((action) => (
                  <div key={action.name} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.5rem 1rem',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s'
                  }}>
                    <div style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: action.color
                    }} />
                    <span style={{ fontSize: '0.875rem', color: '#475569' }}>
                      {action.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 style={{
                fontSize: '0.75rem',
                fontWeight: '600',
                color: '#64748b',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '0.75rem',
                paddingLeft: '1rem'
              }}>
                Research Process
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                {['Assumption', 'Thesis', 'Proof', 'Conclusion'].map((step, index) => (
                  <div key={step} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.5rem 1rem',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s'
                  }}>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      backgroundColor: '#f1f5f9',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      color: '#475569'
                    }}>
                      {index + 1}
                    </div>
                    <span style={{ fontSize: '0.875rem', color: '#475569' }}>
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main style={{ flex: 1, padding: '2rem' }}>
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout
