import React, { useState } from 'react'
import { ChevronDown, Settings, Brain, CreditCard, Mail, Video, MoreHorizontal, Palette, CheckCircle } from 'lucide-react'

const Integrations = () => {
  const [activeTab, setActiveTab] = useState('openai')
  const [selectedCommunity, setSelectedCommunity] = useState('Homohumanicus')

  const integrationTabs = [
    { id: 'openai', label: 'OpenAI', icon: Brain },
    { id: 'payment', label: 'Payment', icon: CreditCard },
    { id: 'autoresponder', label: 'Autoresponder', icon: Mail },
    { id: 'webinar', label: 'Webinar', icon: Video },
    { id: 'others', label: 'Others', icon: MoreHorizontal },
    { id: 'youzign', label: 'Youzign', icon: Palette }
  ]

  const communities = [
    'Homohumanicus',
    'Empirical Rationalism Society',
    'Phenomenological Research Collective',
    'Logical Positivism Institute',
    'Pragmatic Ethics Laboratory'
  ]

  const integrationServices = {
    openai: [
      {
        id: 'openai',
        name: 'OpenAI',
        description: 'OpenAI Configurations',
        icon: Brain,
        connected: true,
        logo: (
          <div style={{
            width: '80px',
            height: '80px',
            backgroundColor: '#000',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1rem'
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              border: '3px solid white',
              borderRadius: '50%',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '40px',
                height: '40px',
                background: 'conic-gradient(from 0deg, white 0deg, white 60deg, transparent 60deg, transparent 120deg, white 120deg, white 180deg, transparent 180deg, transparent 240deg, white 240deg, white 300deg, transparent 300deg)',
                borderRadius: '50%'
              }}></div>
            </div>
          </div>
        )
      }
    ],
    payment: [
      {
        id: 'stripe',
        name: 'Stripe',
        description: 'Payment processing with Stripe',
        icon: CreditCard,
        connected: false
      },
      {
        id: 'paypal',
        name: 'PayPal',
        description: 'PayPal payment integration',
        icon: CreditCard,
        connected: false
      }
    ],
    autoresponder: [
      {
        id: 'mailchimp',
        name: 'Mailchimp',
        description: 'Email marketing automation',
        icon: Mail,
        connected: false
      },
      {
        id: 'aweber',
        name: 'AWeber',
        description: 'Email autoresponder service',
        icon: Mail,
        connected: false
      }
    ],
    webinar: [
      {
        id: 'zoom',
        name: 'Zoom',
        description: 'Video conferencing and webinars',
        icon: Video,
        connected: false
      },
      {
        id: 'gotomeeting',
        name: 'GoToMeeting',
        description: 'Online meeting platform',
        icon: Video,
        connected: false
      }
    ],
    others: [
      {
        id: 'zapier',
        name: 'Zapier',
        description: 'Workflow automation',
        icon: MoreHorizontal,
        connected: false
      },
      {
        id: 'slack',
        name: 'Slack',
        description: 'Team communication',
        icon: MoreHorizontal,
        connected: false
      }
    ],
    youzign: [
      {
        id: 'youzign',
        name: 'Youzign',
        description: 'Design and graphics platform',
        icon: Palette,
        connected: false
      }
    ]
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '2rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Settings size={24} color="#6366f1" />
          <h1 style={{
            fontSize: '1.875rem',
            fontWeight: '700',
            color: '#1e293b',
            margin: 0
          }}>
            Integrations
          </h1>
        </div>

        {/* Community Selector */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{
            fontSize: '0.875rem',
            color: '#64748b',
            fontWeight: '500'
          }}>
            Community
          </span>
          <div style={{ position: 'relative' }}>
            <select
              value={selectedCommunity}
              onChange={(e) => setSelectedCommunity(e.target.value)}
              style={{
                appearance: 'none',
                backgroundColor: 'white',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                padding: '0.5rem 2rem 0.5rem 0.75rem',
                fontSize: '0.875rem',
                color: '#1e293b',
                fontWeight: '500',
                cursor: 'pointer',
                outline: 'none',
                minWidth: '150px'
              }}
            >
              {communities.map((community) => (
                <option key={community} value={community}>
                  {community}
                </option>
              ))}
            </select>
            <ChevronDown 
              size={16} 
              color="#64748b" 
              style={{
                position: 'absolute',
                right: '0.5rem',
                top: '50%',
                transform: 'translateY(-50%)',
                pointerEvents: 'none'
              }}
            />
          </div>
          <span style={{
            backgroundColor: '#e0e7ff',
            color: '#6366f1',
            padding: '0.25rem 0.75rem',
            borderRadius: '6px',
            fontSize: '0.75rem',
            fontWeight: '600',
            textTransform: 'uppercase'
          }}>
            PATRON
          </span>
        </div>
      </div>

      {/* Integration Tabs */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        border: '1px solid #e2e8f0',
        overflow: 'hidden'
      }}>
        {/* Tab Navigation */}
        <div style={{
          display: 'flex',
          borderBottom: '1px solid #e2e8f0',
          backgroundColor: '#f8fafc'
        }}>
          {integrationTabs.map((tab) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '1rem 1.5rem',
                  backgroundColor: isActive ? 'white' : 'transparent',
                  border: 'none',
                  borderBottom: isActive ? '2px solid #6366f1' : '2px solid transparent',
                  color: isActive ? '#6366f1' : '#64748b',
                  fontSize: '0.875rem',
                  fontWeight: isActive ? '600' : '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  whiteSpace: 'nowrap'
                }}
              >
                <Icon size={16} />
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Tab Content */}
        <div style={{ padding: '2rem' }}>
          {activeTab === 'openai' && (
            <div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '1.5rem'
              }}>
                {integrationServices.openai.map((service) => (
                  <div key={service.id} style={{
                    backgroundColor: 'white',
                    border: '1px solid #e2e8f0',
                    borderRadius: '12px',
                    padding: '2rem',
                    textAlign: 'center',
                    transition: 'all 0.2s',
                    cursor: 'pointer'
                  }}>
                    {/* Service Logo */}
                    {service.logo}

                    {/* Service Name */}
                    <h3 style={{
                      fontSize: '1.125rem',
                      fontWeight: '600',
                      color: '#6366f1',
                      marginBottom: '0.5rem'
                    }}>
                      {service.name}
                    </h3>

                    {/* Service Description */}
                    <p style={{
                      fontSize: '0.875rem',
                      color: '#64748b',
                      marginBottom: '1.5rem'
                    }}>
                      {service.description}
                    </p>

                    {/* Connection Status */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      padding: '0.5rem 1rem',
                      backgroundColor: service.connected ? '#dcfce7' : '#f1f5f9',
                      borderRadius: '6px',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      color: service.connected ? '#16a34a' : '#64748b'
                    }}>
                      <CheckCircle size={16} />
                      {service.connected ? 'Connected' : 'Not Connected'}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'payment' && (
            <div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '1.5rem'
              }}>
                {integrationServices.payment.map((service) => {
                  const Icon = service.icon
                  return (
                    <div key={service.id} style={{
                      backgroundColor: 'white',
                      border: '1px solid #e2e8f0',
                      borderRadius: '12px',
                      padding: '2rem',
                      textAlign: 'center',
                      transition: 'all 0.2s',
                      cursor: 'pointer'
                    }}>
                      {/* Service Icon */}
                      <div style={{
                        width: '80px',
                        height: '80px',
                        backgroundColor: '#f1f5f9',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 1rem'
                      }}>
                        <Icon size={32} color="#64748b" />
                      </div>

                      {/* Service Name */}
                      <h3 style={{
                        fontSize: '1.125rem',
                        fontWeight: '600',
                        color: '#1e293b',
                        marginBottom: '0.5rem'
                      }}>
                        {service.name}
                      </h3>

                      {/* Service Description */}
                      <p style={{
                        fontSize: '0.875rem',
                        color: '#64748b',
                        marginBottom: '1.5rem'
                      }}>
                        {service.description}
                      </p>

                      {/* Connection Status */}
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        padding: '0.5rem 1rem',
                        backgroundColor: service.connected ? '#dcfce7' : '#f1f5f9',
                        borderRadius: '6px',
                        fontSize: '0.875rem',
                        fontWeight: '500',
                        color: service.connected ? '#16a34a' : '#64748b'
                      }}>
                        <CheckCircle size={16} />
                        {service.connected ? 'Connected' : 'Not Connected'}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {activeTab === 'autoresponder' && (
            <div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '1.5rem'
              }}>
                {integrationServices.autoresponder.map((service) => {
                  const Icon = service.icon
                  return (
                    <div key={service.id} style={{
                      backgroundColor: 'white',
                      border: '1px solid #e2e8f0',
                      borderRadius: '12px',
                      padding: '2rem',
                      textAlign: 'center',
                      transition: 'all 0.2s',
                      cursor: 'pointer'
                    }}>
                      {/* Service Icon */}
                      <div style={{
                        width: '80px',
                        height: '80px',
                        backgroundColor: '#f1f5f9',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 1rem'
                      }}>
                        <Icon size={32} color="#64748b" />
                      </div>

                      {/* Service Name */}
                      <h3 style={{
                        fontSize: '1.125rem',
                        fontWeight: '600',
                        color: '#1e293b',
                        marginBottom: '0.5rem'
                      }}>
                        {service.name}
                      </h3>

                      {/* Service Description */}
                      <p style={{
                        fontSize: '0.875rem',
                        color: '#64748b',
                        marginBottom: '1.5rem'
                      }}>
                        {service.description}
                      </p>

                      {/* Connection Status */}
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        padding: '0.5rem 1rem',
                        backgroundColor: service.connected ? '#dcfce7' : '#f1f5f9',
                        borderRadius: '6px',
                        fontSize: '0.875rem',
                        fontWeight: '500',
                        color: service.connected ? '#16a34a' : '#64748b'
                      }}>
                        <CheckCircle size={16} />
                        {service.connected ? 'Connected' : 'Not Connected'}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {activeTab === 'webinar' && (
            <div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '1.5rem'
              }}>
                {integrationServices.webinar.map((service) => {
                  const Icon = service.icon
                  return (
                    <div key={service.id} style={{
                      backgroundColor: 'white',
                      border: '1px solid #e2e8f0',
                      borderRadius: '12px',
                      padding: '2rem',
                      textAlign: 'center',
                      transition: 'all 0.2s',
                      cursor: 'pointer'
                    }}>
                      {/* Service Icon */}
                      <div style={{
                        width: '80px',
                        height: '80px',
                        backgroundColor: '#f1f5f9',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 1rem'
                      }}>
                        <Icon size={32} color="#64748b" />
                      </div>

                      {/* Service Name */}
                      <h3 style={{
                        fontSize: '1.125rem',
                        fontWeight: '600',
                        color: '#1e293b',
                        marginBottom: '0.5rem'
                      }}>
                        {service.name}
                      </h3>

                      {/* Service Description */}
                      <p style={{
                        fontSize: '0.875rem',
                        color: '#64748b',
                        marginBottom: '1.5rem'
                      }}>
                        {service.description}
                      </p>

                      {/* Connection Status */}
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        padding: '0.5rem 1rem',
                        backgroundColor: service.connected ? '#dcfce7' : '#f1f5f9',
                        borderRadius: '6px',
                        fontSize: '0.875rem',
                        fontWeight: '500',
                        color: service.connected ? '#16a34a' : '#64748b'
                      }}>
                        <CheckCircle size={16} />
                        {service.connected ? 'Connected' : 'Not Connected'}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {activeTab === 'others' && (
            <div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '1.5rem'
              }}>
                {integrationServices.others.map((service) => {
                  const Icon = service.icon
                  return (
                    <div key={service.id} style={{
                      backgroundColor: 'white',
                      border: '1px solid #e2e8f0',
                      borderRadius: '12px',
                      padding: '2rem',
                      textAlign: 'center',
                      transition: 'all 0.2s',
                      cursor: 'pointer'
                    }}>
                      {/* Service Icon */}
                      <div style={{
                        width: '80px',
                        height: '80px',
                        backgroundColor: '#f1f5f9',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 1rem'
                      }}>
                        <Icon size={32} color="#64748b" />
                      </div>

                      {/* Service Name */}
                      <h3 style={{
                        fontSize: '1.125rem',
                        fontWeight: '600',
                        color: '#1e293b',
                        marginBottom: '0.5rem'
                      }}>
                        {service.name}
                      </h3>

                      {/* Service Description */}
                      <p style={{
                        fontSize: '0.875rem',
                        color: '#64748b',
                        marginBottom: '1.5rem'
                      }}>
                        {service.description}
                      </p>

                      {/* Connection Status */}
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        padding: '0.5rem 1rem',
                        backgroundColor: service.connected ? '#dcfce7' : '#f1f5f9',
                        borderRadius: '6px',
                        fontSize: '0.875rem',
                        fontWeight: '500',
                        color: service.connected ? '#16a34a' : '#64748b'
                      }}>
                        <CheckCircle size={16} />
                        {service.connected ? 'Connected' : 'Not Connected'}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {activeTab === 'youzign' && (
            <div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '1.5rem'
              }}>
                {integrationServices.youzign.map((service) => {
                  const Icon = service.icon
                  return (
                    <div key={service.id} style={{
                      backgroundColor: 'white',
                      border: '1px solid #e2e8f0',
                      borderRadius: '12px',
                      padding: '2rem',
                      textAlign: 'center',
                      transition: 'all 0.2s',
                      cursor: 'pointer'
                    }}>
                      {/* Service Icon */}
                      <div style={{
                        width: '80px',
                        height: '80px',
                        backgroundColor: '#f1f5f9',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 1rem'
                      }}>
                        <Icon size={32} color="#64748b" />
                      </div>

                      {/* Service Name */}
                      <h3 style={{
                        fontSize: '1.125rem',
                        fontWeight: '600',
                        color: '#1e293b',
                        marginBottom: '0.5rem'
                      }}>
                        {service.name}
                      </h3>

                      {/* Service Description */}
                      <p style={{
                        fontSize: '0.875rem',
                        color: '#64748b',
                        marginBottom: '1.5rem'
                      }}>
                        {service.description}
                      </p>

                      {/* Connection Status */}
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        padding: '0.5rem 1rem',
                        backgroundColor: service.connected ? '#dcfce7' : '#f1f5f9',
                        borderRadius: '6px',
                        fontSize: '0.875rem',
                        fontWeight: '500',
                        color: service.connected ? '#16a34a' : '#64748b'
                      }}>
                        <CheckCircle size={16} />
                        {service.connected ? 'Connected' : 'Not Connected'}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Integrations
