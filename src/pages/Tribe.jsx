import React from 'react'
import { Users, Crown, Star, MessageCircle } from 'lucide-react'

const Tribe = () => {
  const tribeMembers = [
    { name: 'Dr. Sarah Chen', role: 'Ethics Specialist', status: 'Active', contributions: 45 },
    { name: 'Prof. Michael Torres', role: 'Logic Expert', status: 'Active', contributions: 38 },
    { name: 'Dr. Emma Wilson', role: 'Research Lead', status: 'Away', contributions: 52 },
    { name: 'Prof. David Kim', role: 'Community Manager', status: 'Active', contributions: 29 }
  ]

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
          <Crown size={24} color="#3b82f6" />
          <h1 style={{ fontSize: '1.875rem', fontWeight: '700', color: '#1e293b' }}>
            DFY Tribe
          </h1>
        </div>
        <p style={{ color: '#64748b', fontSize: '1rem' }}>
          Connect with elite philosophical researchers and thought leaders
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          border: '1px solid #e2e8f0',
          overflow: 'hidden'
        }}>
          <div style={{ padding: '1.5rem', borderBottom: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1e293b' }}>
              Tribe Members
            </h2>
          </div>
          <div style={{ padding: '1.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {tribeMembers.map((member, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1rem',
                  backgroundColor: '#f8fafc',
                  borderRadius: '8px',
                  border: '1px solid #e2e8f0'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      backgroundColor: '#e2e8f0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Users size={20} color="#64748b" />
                    </div>
                    <div>
                      <h3 style={{ fontWeight: '600', color: '#1e293b', marginBottom: '0.25rem' }}>
                        {member.name}
                      </h3>
                      <p style={{ fontSize: '0.875rem', color: '#64748b' }}>
                        {member.role}
                      </p>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      color: member.status === 'Active' ? '#10b981' : '#f59e0b',
                      backgroundColor: member.status === 'Active' ? '#dcfce7' : '#fef3c7',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '4px',
                      marginBottom: '0.25rem'
                    }}>
                      {member.status}
                    </div>
                    <div style={{ fontSize: '0.875rem', color: '#64748b' }}>
                      {member.contributions} contributions
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          border: '1px solid #e2e8f0',
          padding: '1.5rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <Star size={20} color="#3b82f6" />
            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1e293b' }}>
              Tribe Stats
            </h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ padding: '1rem', backgroundColor: '#f8fafc', borderRadius: '8px' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1e293b' }}>24</div>
              <div style={{ fontSize: '0.875rem', color: '#64748b' }}>Active Members</div>
            </div>
            <div style={{ padding: '1rem', backgroundColor: '#f8fafc', borderRadius: '8px' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1e293b' }}>164</div>
              <div style={{ fontSize: '0.875rem', color: '#64748b' }}>Total Contributions</div>
            </div>
            <div style={{ padding: '1rem', backgroundColor: '#f8fafc', borderRadius: '8px' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1e293b' }}>8</div>
              <div style={{ fontSize: '0.875rem', color: '#64748b' }}>Active Discussions</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tribe
