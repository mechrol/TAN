import React, { useState } from 'react'
import { UserCheck, Search, Plus, Edit, Trash2, Mail, Phone, Calendar, DollarSign, Filter } from 'lucide-react'

const ManageClient = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')

  const clients = [
    {
      id: 1,
      name: 'Dr. Sarah Mitchell',
      email: 'sarah.mitchell@university.edu',
      phone: '+1 (555) 123-4567',
      company: 'Philosophy Department, Harvard',
      status: 'active',
      joinDate: '2024-01-15',
      totalSpent: '$2,450',
      lastActivity: '2 days ago',
      projects: 3
    },
    {
      id: 2,
      name: 'Prof. Marcus Chen',
      email: 'marcus.chen@research.org',
      phone: '+1 (555) 234-5678',
      company: 'Institute for Philosophical Research',
      status: 'active',
      joinDate: '2023-11-20',
      totalSpent: '$4,890',
      lastActivity: '1 week ago',
      projects: 7
    },
    {
      id: 3,
      name: 'Dr. Elena Rodriguez',
      email: 'elena.rodriguez@academy.com',
      phone: '+1 (555) 345-6789',
      company: 'Modern Philosophy Academy',
      status: 'inactive',
      joinDate: '2023-08-10',
      totalSpent: '$1,230',
      lastActivity: '3 weeks ago',
      projects: 2
    },
    {
      id: 4,
      name: 'Prof. James Wilson',
      email: 'james.wilson@college.edu',
      phone: '+1 (555) 456-7890',
      company: 'Liberal Arts College',
      status: 'active',
      joinDate: '2024-02-28',
      totalSpent: '$3,670',
      lastActivity: '5 days ago',
      projects: 5
    },
    {
      id: 5,
      name: 'Dr. Amara Okafor',
      email: 'amara.okafor@institute.org',
      phone: '+1 (555) 567-8901',
      company: 'African Philosophy Institute',
      status: 'pending',
      joinDate: '2024-03-05',
      totalSpent: '$0',
      lastActivity: 'Never',
      projects: 0
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return { bg: '#dcfce7', text: '#166534' }
      case 'inactive': return { bg: '#fee2e2', text: '#dc2626' }
      case 'pending': return { bg: '#fef3c7', text: '#d97706' }
      default: return { bg: '#f1f5f9', text: '#475569' }
    }
  }

  const filteredClients = clients.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.company.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterStatus === 'all' || client.status === filterStatus
    return matchesSearch && matchesFilter
  })

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
          <UserCheck size={24} color="#3b82f6" />
          <h1 style={{ fontSize: '1.875rem', fontWeight: '700', color: '#1e293b' }}>
            Manage Clients
          </h1>
        </div>
        <p style={{ color: '#64748b', fontSize: '1rem' }}>
          Oversee client relationships, track engagement, and manage philosophical research partnerships
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
            placeholder="Search clients by name, email, or company..."
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
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Filter size={16} color="#64748b" />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            style={{
              padding: '0.75rem',
              border: '1px solid #d1d5db',
              borderRadius: '8px',
              fontSize: '0.875rem',
              outline: 'none',
              backgroundColor: 'white'
            }}
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="pending">Pending</option>
          </select>
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
          cursor: 'pointer',
          transition: 'background-color 0.2s'
        }}>
          <Plus size={16} />
          Add Client
        </button>
      </div>

      {/* Clients Table */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        border: '1px solid #e2e8f0',
        overflow: 'hidden'
      }}>
        <div style={{ padding: '1.5rem', borderBottom: '1px solid #e2e8f0' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1e293b' }}>
            Client Directory ({filteredClients.length})
          </h2>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead style={{ backgroundColor: '#f8fafc' }}>
              <tr>
                <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.875rem', fontWeight: '600', color: '#374151' }}>
                  Client
                </th>
                <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.875rem', fontWeight: '600', color: '#374151' }}>
                  Contact
                </th>
                <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.875rem', fontWeight: '600', color: '#374151' }}>
                  Status
                </th>
                <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.875rem', fontWeight: '600', color: '#374151' }}>
                  Projects
                </th>
                <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.875rem', fontWeight: '600', color: '#374151' }}>
                  Total Spent
                </th>
                <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.875rem', fontWeight: '600', color: '#374151' }}>
                  Last Activity
                </th>
                <th style={{ padding: '1rem', textAlign: 'center', fontSize: '0.875rem', fontWeight: '600', color: '#374151' }}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredClients.map((client) => {
                const statusStyle = getStatusColor(client.status)
                return (
                  <tr key={client.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '1rem' }}>
                      <div>
                        <div style={{ fontWeight: '600', color: '#1e293b', marginBottom: '0.25rem' }}>
                          {client.name}
                        </div>
                        <div style={{ fontSize: '0.875rem', color: '#64748b' }}>
                          {client.company}
                        </div>
                        <div style={{ fontSize: '0.75rem', color: '#9ca3af', marginTop: '0.25rem' }}>
                          Joined {client.joinDate}
                        </div>
                      </div>
                    </td>
                    <td style={{ padding: '1rem' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                          <Mail size={14} color="#64748b" />
                          <span style={{ color: '#475569' }}>{client.email}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                          <Phone size={14} color="#64748b" />
                          <span style={{ color: '#475569' }}>{client.phone}</span>
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
                        {client.status}
                      </span>
                    </td>
                    <td style={{ padding: '1rem' }}>
                      <div style={{ fontWeight: '600', color: '#1e293b' }}>
                        {client.projects}
                      </div>
                    </td>
                    <td style={{ padding: '1rem' }}>
                      <div style={{ fontWeight: '600', color: '#1e293b' }}>
                        {client.totalSpent}
                      </div>
                    </td>
                    <td style={{ padding: '1rem' }}>
                      <div style={{ fontSize: '0.875rem', color: '#64748b' }}>
                        {client.lastActivity}
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

export default ManageClient
