import React, { useState } from 'react'
import { UserPlus, Search, Plus, Edit, Trash2, Mail, Phone, Shield, Calendar, Award } from 'lucide-react'

const TeamMember = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterRole, setFilterRole] = useState('all')

  const teamMembers = [
    {
      id: 1,
      name: 'Dr. Alexandra Thompson',
      email: 'alexandra.thompson@homohumanicus.com',
      phone: '+1 (555) 111-2222',
      role: 'Senior Researcher',
      department: 'Philosophical Analysis',
      status: 'active',
      joinDate: '2023-06-15',
      permissions: ['research', 'analysis', 'publish'],
      lastLogin: '2 hours ago',
      projectsLed: 12
    },
    {
      id: 2,
      name: 'Prof. David Kim',
      email: 'david.kim@homohumanicus.com',
      phone: '+1 (555) 222-3333',
      role: 'Research Director',
      department: 'Strategic Research',
      status: 'active',
      joinDate: '2023-03-20',
      permissions: ['admin', 'research', 'analysis', 'publish', 'manage'],
      lastLogin: '1 day ago',
      projectsLed: 25
    },
    {
      id: 3,
      name: 'Dr. Maria Santos',
      email: 'maria.santos@homohumanicus.com',
      phone: '+1 (555) 333-4444',
      role: 'Junior Researcher',
      department: 'Data Analysis',
      status: 'active',
      joinDate: '2024-01-10',
      permissions: ['research', 'analysis'],
      lastLogin: '3 days ago',
      projectsLed: 4
    },
    {
      id: 4,
      name: 'Dr. Robert Chen',
      email: 'robert.chen@homohumanicus.com',
      phone: '+1 (555) 444-5555',
      role: 'Content Specialist',
      department: 'Publications',
      status: 'inactive',
      joinDate: '2023-09-05',
      permissions: ['publish', 'review'],
      lastLogin: '2 weeks ago',
      projectsLed: 8
    },
    {
      id: 5,
      name: 'Dr. Lisa Anderson',
      email: 'lisa.anderson@homohumanicus.com',
      phone: '+1 (555) 555-6666',
      role: 'Research Coordinator',
      department: 'Project Management',
      status: 'active',
      joinDate: '2023-11-12',
      permissions: ['research', 'manage', 'coordinate'],
      lastLogin: '5 hours ago',
      projectsLed: 18
    }
  ]

  const getRoleColor = (role) => {
    switch (role) {
      case 'Research Director': return { bg: '#fef3c7', text: '#d97706' }
      case 'Senior Researcher': return { bg: '#dbeafe', text: '#1d4ed8' }
      case 'Research Coordinator': return { bg: '#dcfce7', text: '#166534' }
      case 'Junior Researcher': return { bg: '#e0e7ff', text: '#4338ca' }
      case 'Content Specialist': return { bg: '#fce7f3', text: '#be185d' }
      default: return { bg: '#f1f5f9', text: '#475569' }
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return { bg: '#dcfce7', text: '#166534' }
      case 'inactive': return { bg: '#fee2e2', text: '#dc2626' }
      default: return { bg: '#f1f5f9', text: '#475569' }
    }
  }

  const filteredMembers = teamMembers.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.department.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterRole === 'all' || member.role === filterRole
    return matchesSearch && matchesFilter
  })

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
          <UserPlus size={24} color="#3b82f6" />
          <h1 style={{ fontSize: '1.875rem', fontWeight: '700', color: '#1e293b' }}>
            Team Members
          </h1>
        </div>
        <p style={{ color: '#64748b', fontSize: '1rem' }}>
          Manage research team, assign roles, and coordinate philosophical research projects
        </p>
      </div>

      {/* Search and Filter Bar */}
      <div style={{
        backgroundColor: 'white',
        padding: '1.5rem',
        borderRadius: '12px',
        border: '1px solid #e2e8f0',
        marginBottom: '2rem',
        display: 'flex',
        gap: '1rem',
        alignItems: 'center',
        flexWrap: 'wrap'
      }}>
        <div style={{ position: 'relative', flex: '1', minWidth: '300px' }}>
          <Search size={20} color="#64748b" style={{
            position: 'absolute',
            left: '12px',
            top: '50%',
            transform: 'translateY(-50%)'
          }} />
          <input
            type="text"
            placeholder="Search team members by name, email, or department..."
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
        
        <select
          value={filterRole}
          onChange={(e) => setFilterRole(e.target.value)}
          style={{
            padding: '0.75rem',
            border: '1px solid #d1d5db',
            borderRadius: '8px',
            fontSize: '0.875rem',
            outline: 'none',
            backgroundColor: 'white'
          }}
        >
          <option value="all">All Roles</option>
          <option value="Research Director">Research Director</option>
          <option value="Senior Researcher">Senior Researcher</option>
          <option value="Research Coordinator">Research Coordinator</option>
          <option value="Junior Researcher">Junior Researcher</option>
          <option value="Content Specialist">Content Specialist</option>
        </select>

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
          cursor: 'pointer',
          transition: 'background-color 0.2s'
        }}>
          <Plus size={16} />
          Add Member
        </button>
      </div>

      {/* Team Members Table */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        border: '1px solid #e2e8f0',
        overflow: 'hidden'
      }}>
        <div style={{ padding: '1.5rem', borderBottom: '1px solid #e2e8f0' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1e293b' }}>
            Research Team ({filteredMembers.length})
          </h2>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead style={{ backgroundColor: '#f8fafc' }}>
              <tr>
                <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.875rem', fontWeight: '600', color: '#374151' }}>
                  Member
                </th>
                <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.875rem', fontWeight: '600', color: '#374151' }}>
                  Contact
                </th>
                <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.875rem', fontWeight: '600', color: '#374151' }}>
                  Role & Department
                </th>
                <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.875rem', fontWeight: '600', color: '#374151' }}>
                  Status
                </th>
                <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.875rem', fontWeight: '600', color: '#374151' }}>
                  Projects Led
                </th>
                <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.875rem', fontWeight: '600', color: '#374151' }}>
                  Last Login
                </th>
                <th style={{ padding: '1rem', textAlign: 'center', fontSize: '0.875rem', fontWeight: '600', color: '#374151' }}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredMembers.map((member) => {
                const roleStyle = getRoleColor(member.role)
                const statusStyle = getStatusColor(member.status)
                return (
                  <tr key={member.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '1rem' }}>
                      <div>
                        <div style={{ fontWeight: '600', color: '#1e293b', marginBottom: '0.25rem' }}>
                          {member.name}
                        </div>
                        <div style={{ fontSize: '0.75rem', color: '#9ca3af', marginTop: '0.25rem' }}>
                          Joined {member.joinDate}
                        </div>
                      </div>
                    </td>
                    <td style={{ padding: '1rem' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                          <Mail size={14} color="#64748b" />
                          <span style={{ color: '#475569' }}>{member.email}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                          <Phone size={14} color="#64748b" />
                          <span style={{ color: '#475569' }}>{member.phone}</span>
                        </div>
                      </div>
                    </td>
                    <td style={{ padding: '1rem' }}>
                      <div>
                        <span style={{
                          padding: '0.25rem 0.75rem',
                          borderRadius: '12px',
                          fontSize: '0.75rem',
                          fontWeight: '600',
                          backgroundColor: roleStyle.bg,
                          color: roleStyle.text,
                          marginBottom: '0.5rem',
                          display: 'inline-block'
                        }}>
                          {member.role}
                        </span>
                        <div style={{ fontSize: '0.875rem', color: '#64748b' }}>
                          {member.department}
                        </div>
                      </div>
                    </td>
                    <td style={{ padding: '1rem' }}>
                      <span style={{
                        padding: '0.25rem 0.75rem',
                        borderRadius: '12px',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        backgroundColor: statusStyle.bg,
                        color: statusStyle.text,
                        textTransform: 'capitalize'
                      }}>
                        {member.status}
                      </span>
                    </td>
                    <td style={{ padding: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Award size={16} color="#f59e0b" />
                        <span style={{ fontWeight: '600', color: '#1e293b' }}>
                          {member.projectsLed}
                        </span>
                      </div>
                    </td>
                    <td style={{ padding: '1rem' }}>
                      <div style={{ fontSize: '0.875rem', color: '#64748b' }}>
                        {member.lastLogin}
                      </div>
                    </td>
                    <td style={{ padding: '1rem', textAlign: 'center' }}>
                      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
                        <button style={{
                          padding: '0.5rem',
                          backgroundColor: '#eff6ff',
                          border: 'none',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          transition: 'background-color 0.2s'
                        }}>
                          <Edit size={14} color="#3b82f6" />
                        </button>
                        <button style={{
                          padding: '0.5rem',
                          backgroundColor: '#f0f9ff',
                          border: 'none',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          transition: 'background-color 0.2s'
                        }}>
                          <Shield size={14} color="#0ea5e9" />
                        </button>
                        <button style={{
                          padding: '0.5rem',
                          backgroundColor: '#fef2f2',
                          border: 'none',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          transition: 'background-color 0.2s'
                        }}>
                          <Trash2 size={14} color="#ef4444" />
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default TeamMember
