import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Users, Search, Plus, Eye, Settings, Calendar, BookOpen, Brain, Microscope, Atom, Lightbulb, Globe, Target, Zap, Shield, ChevronDown, Edit, ExternalLink, Palette, Copy, Bot, MessageSquare, X, Info } from 'lucide-react'

const Community = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [filterCategory, setFilterCategory] = useState('all')
  const [activeTabs, setActiveTabs] = useState({})
  const [openDropdowns, setOpenDropdowns] = useState({})
  const [showCloneModal, setShowCloneModal] = useState(false)
  const [showAIMemberFeedModal, setShowAIMemberFeedModal] = useState(false)
  const [showAICustomPromptModal, setShowAICustomPromptModal] = useState(false)
  const [cloneFormData, setCloneFormData] = useState({
    communityName: '',
    communityUrl: ''
  })
  const [aiMemberFeedData, setAIMemberFeedData] = useState({
    communityNiche: '',
    language: 'English',
    group: 'GotBackup - Wellness',
    numberOfPosts: '5'
  })
  const [aiCustomPromptData, setAICustomPromptData] = useState({
    customPrompt: 'Generate community post in the topic health and fitness. Stick to the information pertaining to the community topic.',
    group: 'GotBackup - Wellness',
    numberOfPosts: '5'
  })

  const philosophicalCommunities = [
    {
      id: 1,
      name: 'HomoHumanicus',
      category: 'Health and Wellness',
      description: 'A comprehensive Health and Wellness community dedicated to helping members achieve optimal health through the integration of conventional and holistic treatment methods.',
      image: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=400',
      members: 2,
      activeProjects: 11,
      foundationDate: '15 Jan, 2024',
      methodology: 'Holistic Health Integration',
      researchFocus: 'Health optimization through habit tracking and lifestyle guidance',
      status: 'active',
      icon: Target,
      color: '#22c55e'
    },
    {
      id: 2,
      name: 'Empirical Rationalism Society',
      category: 'Epistemology',
      description: 'A community dedicated to bridging empirical observation with rational analysis in philosophical inquiry.',
      image: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=400',
      members: 1247,
      activeProjects: 23,
      foundationDate: '15 Jan, 2024',
      methodology: 'Systematic Empiricism',
      researchFocus: 'Knowledge validation through controlled observation',
      status: 'active',
      icon: Microscope,
      color: '#3b82f6'
    },
    {
      id: 3,
      name: 'Phenomenological Research Collective',
      category: 'Consciousness Studies',
      description: 'Exploring consciousness and lived experience through rigorous phenomenological methodology.',
      image: 'https://images.pexels.com/photos/355952/pexels-photo-355952.jpeg?auto=compress&cs=tinysrgb&w=400',
      members: 892,
      activeProjects: 18,
      foundationDate: '03 Feb, 2024',
      methodology: 'Descriptive Analysis',
      researchFocus: 'First-person experience and intentionality',
      status: 'active',
      icon: Brain,
      color: '#10b981'
    },
    {
      id: 4,
      name: 'Logical Positivism Institute',
      category: 'Philosophy of Science',
      description: 'Advancing scientific philosophy through logical analysis and verification principles.',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400',
      members: 1456,
      activeProjects: 31,
      foundationDate: '22 Dec, 2023',
      methodology: 'Logical Verification',
      researchFocus: 'Scientific method and logical foundations',
      status: 'active',
      icon: Atom,
      color: '#f59e0b'
    },
    {
      id: 5,
      name: 'Pragmatic Ethics Laboratory',
      category: 'Applied Ethics',
      description: 'Testing ethical theories through practical application and consequential analysis.',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400',
      members: 734,
      activeProjects: 15,
      foundationDate: '08 Mar, 2024',
      methodology: 'Experimental Ethics',
      researchFocus: 'Real-world ethical decision making',
      status: 'active',
      icon: Target,
      color: '#ef4444'
    },
    {
      id: 6,
      name: 'Analytical Metaphysics Group',
      category: 'Metaphysics',
      description: 'Systematic investigation of fundamental reality using analytical philosophical methods.',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400',
      members: 623,
      activeProjects: 12,
      foundationDate: '17 Feb, 2024',
      methodology: 'Conceptual Analysis',
      researchFocus: 'Ontological structures and modal logic',
      status: 'active',
      icon: Lightbulb,
      color: '#8b5cf6'
    },
    {
      id: 7,
      name: 'Cognitive Philosophy Network',
      category: 'Philosophy of Mind',
      description: 'Interdisciplinary research combining cognitive science with philosophical analysis of mind.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
      members: 1089,
      activeProjects: 27,
      foundationDate: '11 Jan, 2024',
      methodology: 'Cognitive Modeling',
      researchFocus: 'Mental representation and computational theories',
      status: 'active',
      icon: Zap,
      color: '#06b6d4'
    }
  ]

  const categories = [
    'all',
    'Health and Wellness',
    'Epistemology',
    'Consciousness Studies',
    'Philosophy of Science',
    'Applied Ethics',
    'Metaphysics',
    'Philosophy of Mind',
    'Social Philosophy',
    'Logic'
  ]

  const communityTabs = [
    { id: 'overview', label: 'Overview', icon: Eye },
    { id: 'members', label: 'Members', icon: Users },
    { id: 'projects', label: 'Projects', icon: BookOpen },
    { id: 'settings', label: 'Settings', icon: Settings }
  ]

  const actionMenuItems = [
    { id: 'edit', label: 'Edit', icon: Edit },
    { id: 'visit', label: 'Visit', icon: ExternalLink },
    { id: 'customize', label: 'Customize Community', icon: Palette },
    { id: 'clone', label: 'Clone', icon: Copy },
    { id: 'ai-member-feed', label: 'AI Member Feed', icon: Bot },
    { id: 'ai-custom-prompt', label: 'AI Custom Prompt Feed', icon: MessageSquare }
  ]

  const filteredCommunities = philosophicalCommunities.filter(community => {
    const matchesSearch = community.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         community.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         community.methodology.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterCategory === 'all' || community.category === filterCategory
    return matchesSearch && matchesFilter
  })

  const setActiveTab = (communityId, tabId) => {
    setActiveTabs(prev => ({
      ...prev,
      [communityId]: tabId
    }))
  }

  const toggleDropdown = (communityId) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [communityId]: !prev[communityId]
    }))
  }

  const handleActionClick = (action, communityId) => {
    console.log(`Action: ${action} for community: ${communityId}`)
    
    if (action === 'edit') {
      navigate(`/community/config/${communityId}`)
    } else if (action === 'visit') {
      navigate(`/community/view/${communityId}`)
    } else if (action === 'customize') {
      navigate(`/community/customize/${communityId}`)
    } else if (action === 'clone') {
      setShowCloneModal(true)
    } else if (action === 'ai-member-feed') {
      setShowAIMemberFeedModal(true)
    } else if (action === 'ai-custom-prompt') {
      setShowAICustomPromptModal(true)
    }
    
    setOpenDropdowns(prev => ({
      ...prev,
      [communityId]: false
    }))
  }

  const handleNewCommunity = () => {
    navigate('/community/create')
  }

  const handleCloneFormChange = (field, value) => {
    setCloneFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleAIMemberFeedChange = (field, value) => {
    setAIMemberFeedData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleAICustomPromptChange = (field, value) => {
    setAICustomPromptData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleCloneSubmit = () => {
    console.log('Cloning community with data:', cloneFormData)
    setShowCloneModal(false)
    setCloneFormData({ communityName: '', communityUrl: '' })
  }

  const handleAIMemberFeedSubmit = () => {
    console.log('Creating AI Member Feed with data:', aiMemberFeedData)
    setShowAIMemberFeedModal(false)
  }

  const handleAICustomPromptSubmit = () => {
    console.log('Creating AI Custom Prompt Feed with data:', aiCustomPromptData)
    setShowAICustomPromptModal(false)
  }

  const handleCloseModal = () => {
    setShowCloneModal(false)
    setShowAIMemberFeedModal(false)
    setShowAICustomPromptModal(false)
    setCloneFormData({ communityName: '', communityUrl: '' })
  }

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
          <Users size={24} color="#3b82f6" />
          <h1 style={{ fontSize: '1.875rem', fontWeight: '700', color: '#1e293b' }}>
            Community
          </h1>
          <span style={{
            backgroundColor: '#3b82f6',
            color: 'white',
            padding: '0.25rem 0.5rem',
            borderRadius: '12px',
            fontSize: '0.75rem',
            fontWeight: '600'
          }}>
            {filteredCommunities.length}
          </span>
        </div>
      </div>

      {/* Search Bar */}
      <div style={{
        display: 'flex',
        gap: '1rem',
        marginBottom: '2rem',
        alignItems: 'center'
      }}>
        <div style={{ position: 'relative', flex: 1 }}>
          <Search size={20} color="#64748b" style={{
            position: 'absolute',
            left: '12px',
            top: '50%',
            transform: 'translateY(-50%)'
          }} />
          <input
            type="text"
            placeholder="Search by Community Name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '0.75rem 0.75rem 0.75rem 2.5rem',
              border: '1px solid #d1d5db',
              borderRadius: '8px',
              fontSize: '0.875rem',
              outline: 'none'
            }}
          />
        </div>
        
        <button style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.75rem 1rem',
          backgroundColor: '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '0.875rem',
          fontWeight: '500',
          cursor: 'pointer'
        }}>
          Search
        </button>

        <button 
          onClick={handleNewCommunity}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.75rem 1rem',
            backgroundColor: '#10b981',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '0.875rem',
            fontWeight: '500',
            cursor: 'pointer'
          }}
        >
          <Plus size={16} />
          New Community
        </button>
      </div>

      {/* Communities Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
        gap: '1.5rem'
      }}>
        {filteredCommunities.map((community) => {
          const Icon = community.icon
          const activeTab = activeTabs[community.id] || 'overview'
          const isDropdownOpen = openDropdowns[community.id] || false

          return (
            <div key={community.id} style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              border: '1px solid #e2e8f0',
              overflow: 'hidden'
            }}>
              {/* Community Header */}
              <div style={{ padding: '1.5rem 1.5rem 0 1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <h3 style={{
                    fontSize: '1.125rem',
                    fontWeight: '700',
                    color: '#1e293b'
                  }}>
                    {community.name}
                  </h3>
                  <div style={{ position: 'relative' }}>
                    <button
                      onClick={() => toggleDropdown(community.id)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.5rem 0.75rem',
                        backgroundColor: '#3b82f6',
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        fontSize: '0.75rem',
                        fontWeight: '500',
                        cursor: 'pointer'
                      }}
                    >
                      Actions
                      <ChevronDown size={14} />
                    </button>
                    
                    {/* Actions Dropdown */}
                    {isDropdownOpen && (
                      <div style={{
                        position: 'absolute',
                        top: '100%',
                        right: 0,
                        marginTop: '0.25rem',
                        backgroundColor: 'white',
                        border: '1px solid #e2e8f0',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                        zIndex: 10,
                        minWidth: '200px'
                      }}>
                        {actionMenuItems.map((item) => {
                          const ActionIcon = item.icon
                          return (
                            <button
                              key={item.id}
                              onClick={() => handleActionClick(item.id, community.id)}
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                width: '100%',
                                padding: '0.75rem 1rem',
                                backgroundColor: 'transparent',
                                border: 'none',
                                textAlign: 'left',
                                fontSize: '0.875rem',
                                color: '#374151',
                                cursor: 'pointer',
                                transition: 'background-color 0.2s'
                              }}
                              onMouseEnter={(e) => e.target.style.backgroundColor = '#f9fafb'}
                              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                            >
                              <ActionIcon size={16} />
                              {item.label}
                            </button>
                          )
                        })}
                      </div>
                    )}
                  </div>
                </div>

                <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '1rem' }}>
                  {community.category}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '0.875rem', color: '#64748b' }}>
                    {community.foundationDate}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <div style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: community.status === 'active' ? '#10b981' : '#ef4444'
                    }}></div>
                    <span style={{ fontSize: '0.875rem', color: '#64748b' }}>
                      {community.status}
                    </span>
                  </div>
                  <div style={{ position: 'relative' }}>
                    <label style={{
                      position: 'relative',
                      display: 'inline-block',
                      width: '44px',
                      height: '24px'
                    }}>
                      <input
                        type="checkbox"
                        defaultChecked={community.status === 'active'}
                        style={{ opacity: 0, width: 0, height: 0 }}
                      />
                      <span style={{
                        position: 'absolute',
                        cursor: 'pointer',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: community.status === 'active' ? '#3b82f6' : '#cbd5e1',
                        borderRadius: '24px',
                        transition: '0.4s'
                      }}>
                        <span style={{
                          position: 'absolute',
                          content: '',
                          height: '18px',
                          width: '18px',
                          left: community.status === 'active' ? '23px' : '3px',
                          bottom: '3px',
                          backgroundColor: 'white',
                          borderRadius: '50%',
                          transition: '0.4s'
                        }}></span>
                      </span>
                    </label>
                  </div>
                </div>

                <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '1rem' }}>
                  {community.description}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Users size={16} color="#64748b" />
                    <span style={{ fontSize: '0.875rem', color: '#64748b' }}>
                      {community.members} members
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <BookOpen size={16} color="#64748b" />
                    <span style={{ fontSize: '0.875rem', color: '#64748b' }}>
                      {community.activeProjects} projects
                    </span>
                  </div>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '0.5rem' }}>
                    Methodology: {community.methodology}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                    Research Focus: {community.researchFocus}
                  </div>
                </div>
              </div>

              {/* Community Tabs */}
              <div style={{
                display: 'flex',
                borderBottom: '1px solid #e2e8f0',
                backgroundColor: '#f8fafc'
              }}>
                {communityTabs.map((tab) => {
                  const TabIcon = tab.icon
                  const isActive = activeTab === tab.id
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(community.id, tab.id)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.75rem 1rem',
                        backgroundColor: isActive ? 'white' : 'transparent',
                        border: 'none',
                        borderBottom: isActive ? '2px solid #3b82f6' : '2px solid transparent',
                        color: isActive ? '#3b82f6' : '#64748b',
                        fontSize: '0.75rem',
                        fontWeight: isActive ? '600' : '500',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        flex: 1
                      }}
                    >
                      <TabIcon size={14} />
                      {tab.label}
                    </button>
                  )
                })}
              </div>

              {/* Tab Content */}
              <div style={{ padding: '1.5rem' }}>
                {activeTab === 'overview' && (
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                      <Icon size={20} color={community.color} />
                      <h4 style={{ fontSize: '1rem', fontWeight: '600', color: '#1e293b', margin: 0 }}>
                        Research Overview
                      </h4>
                    </div>
                    <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: '1.5' }}>
                      This community focuses on {community.researchFocus.toLowerCase()} using {community.methodology.toLowerCase()} approaches.
                    </p>
                  </div>
                )}

                {activeTab === 'members' && (
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: '600', color: '#1e293b', marginBottom: '1rem' }}>
                      Community Members
                    </h4>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <div style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        backgroundColor: community.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '0.75rem',
                        fontWeight: '600'
                      }}>
                        {community.members}
                      </div>
                      <span style={{ fontSize: '0.875rem', color: '#64748b' }}>
                        Active researchers and contributors
                      </span>
                    </div>
                  </div>
                )}

                {activeTab === 'projects' && (
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: '600', color: '#1e293b', marginBottom: '1rem' }}>
                      Active Projects
                    </h4>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <div style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '6px',
                        backgroundColor: community.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '0.75rem',
                        fontWeight: '600'
                      }}>
                        {community.activeProjects}
                      </div>
                      <span style={{ fontSize: '0.875rem', color: '#64748b' }}>
                        Ongoing research initiatives
                      </span>
                    </div>
                  </div>
                )}

                {activeTab === 'settings' && (
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: '600', color: '#1e293b', marginBottom: '1rem' }}>
                      Community Settings
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.875rem', color: '#64748b' }}>Public Access</span>
                        <label style={{
                          position: 'relative',
                          display: 'inline-block',
                          width: '44px',
                          height: '24px'
                        }}>
                          <input
                            type="checkbox"
                            defaultChecked={true}
                            style={{ opacity: 0, width: 0, height: 0 }}
                          />
                          <span style={{
                            position: 'absolute',
                            cursor: 'pointer',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: '#3b82f6',
                            borderRadius: '24px',
                            transition: '0.4s'
                          }}>
                            <span style={{
                              position: 'absolute',
                              content: '',
                              height: '18px',
                              width: '18px',
                              left: '23px',
                              bottom: '3px',
                              backgroundColor: 'white',
                              borderRadius: '50%',
                              transition: '0.4s'
                            }}></span>
                          </span>
                        </label>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.875rem', color: '#64748b' }}>Member Invitations</span>
                        <label style={{
                          position: 'relative',
                          display: 'inline-block',
                          width: '44px',
                          height: '24px'
                        }}>
                          <input
                            type="checkbox"
                            defaultChecked={true}
                            style={{ opacity: 0, width: 0, height: 0 }}
                          />
                          <span style={{
                            position: 'absolute',
                            cursor: 'pointer',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: '#3b82f6',
                            borderRadius: '24px',
                            transition: '0.4s'
                          }}>
                            <span style={{
                              position: 'absolute',
                              content: '',
                              height: '18px',
                              width: '18px',
                              left: '23px',
                              bottom: '3px',
                              backgroundColor: 'white',
                              borderRadius: '50%',
                              transition: '0.4s'
                            }}></span>
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Clone Modal */}
      {showCloneModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 50
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '2rem',
            width: '100%',
            maxWidth: '500px',
            margin: '1rem'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1e293b', margin: 0 }}>
                Clone Community
              </h3>
              <button
                onClick={handleCloseModal}
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: '#64748b',
                  cursor: 'pointer',
                  padding: '0.25rem'
                }}
              >
                <X size={20} />
              </button>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.5rem' }}>
                Community Name
              </label>
              <input
                type="text"
                value={cloneFormData.communityName}
                onChange={(e) => handleCloneFormChange('communityName', e.target.value)}
                placeholder="Enter community name"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.5rem' }}>
                Community URL
              </label>
              <input
                type="text"
                value={cloneFormData.communityUrl}
                onChange={(e) => handleCloneFormChange('communityUrl', e.target.value)}
                placeholder="Enter community URL"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
              <button
                onClick={handleCloseModal}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: 'transparent',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  color: '#374151',
                  cursor: 'pointer'
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleCloneSubmit}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#3b82f6',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  color: 'white',
                  cursor: 'pointer'
                }}
              >
                Clone Community
              </button>
            </div>
          </div>
        </div>
      )}

      {/* AI Member Feed Modal */}
      {showAIMemberFeedModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 50
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '2rem',
            width: '100%',
            maxWidth: '500px',
            margin: '1rem'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1e293b', margin: 0 }}>
                AI Member Feed
              </h3>
              <button
                onClick={handleCloseModal}
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: '#64748b',
                  cursor: 'pointer',
                  padding: '0.25rem'
                }}
              >
                <X size={20} />
              </button>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.5rem' }}>
                Community Niche
              </label>
              <input
                type="text"
                value={aiMemberFeedData.communityNiche}
                onChange={(e) => handleAIMemberFeedChange('communityNiche', e.target.value)}
                placeholder="Enter community niche"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.5rem' }}>
                Language
              </label>
              <select
                value={aiMemberFeedData.language}
                onChange={(e) => handleAIMemberFeedChange('language', e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              >
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
                <option value="German">German</option>
              </select>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.5rem' }}>
                Group
              </label>
              <select
                value={aiMemberFeedData.group}
                onChange={(e) => handleAIMemberFeedChange('group', e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              >
                <option value="GotBackup - Wellness">GotBackup - Wellness</option>
                <option value="Health Community">Health Community</option>
                <option value="Fitness Group">Fitness Group</option>
              </select>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.5rem' }}>
                Number of Posts
              </label>
              <select
                value={aiMemberFeedData.numberOfPosts}
                onChange={(e) => handleAIMemberFeedChange('numberOfPosts', e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              >
                <option value="1">1</option>
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="10">10</option>
              </select>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
              <button
                onClick={handleCloseModal}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: 'transparent',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  color: '#374151',
                  cursor: 'pointer'
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleAIMemberFeedSubmit}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#3b82f6',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  color: 'white',
                  cursor: 'pointer'
                }}
              >
                Generate Feed
              </button>
            </div>
          </div>
        </div>
      )}

      {/* AI Custom Prompt Modal */}
      {showAICustomPromptModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 50
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '2rem',
            width: '100%',
            maxWidth: '500px',
            margin: '1rem'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1e293b', margin: 0 }}>
                AI Custom Prompt Feed
              </h3>
              <button
                onClick={handleCloseModal}
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: '#64748b',
                  cursor: 'pointer',
                  padding: '0.25rem'
                }}
              >
                <X size={20} />
              </button>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.5rem' }}>
                Custom Prompt
              </label>
              <textarea
                value={aiCustomPromptData.customPrompt}
                onChange={(e) => handleAICustomPromptChange('customPrompt', e.target.value)}
                placeholder="Enter your custom prompt"
                rows={4}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  outline: 'none',
                  boxSizing: 'border-box',
                  resize: 'vertical'
                }}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.5rem' }}>
                Group
              </label>
              <select
                value={aiCustomPromptData.group}
                onChange={(e) => handleAICustomPromptChange('group', e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              >
                <option value="GotBackup - Wellness">GotBackup - Wellness</option>
                <option value="Health Community">Health Community</option>
                <option value="Fitness Group">Fitness Group</option>
              </select>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.5rem' }}>
                Number of Posts
              </label>
              <select
                value={aiCustomPromptData.numberOfPosts}
                onChange={(e) => handleAICustomPromptChange('numberOfPosts', e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              >
                <option value="1">1</option>
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="10">10</option>
              </select>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
              <button
                onClick={handleCloseModal}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: 'transparent',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  color: '#374151',
                  cursor: 'pointer'
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleAICustomPromptSubmit}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#3b82f6',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  color: 'white',
                  cursor: 'pointer'
                }}
              >
                Generate Feed
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Community
