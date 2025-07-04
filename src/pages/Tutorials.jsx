import React from 'react'
import { Play, Clock, BookOpen, Star } from 'lucide-react'

const Tutorials = () => {
  const tutorials = [
    {
      title: 'Getting Started with Philosophical Research',
      duration: '15 min',
      difficulty: 'Beginner',
      rating: 4.8,
      thumbnail: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Advanced Ethical Framework Analysis',
      duration: '32 min',
      difficulty: 'Advanced',
      rating: 4.9,
      thumbnail: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Community Management Best Practices',
      duration: '28 min',
      difficulty: 'Intermediate',
      rating: 4.7,
      thumbnail: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ]

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
          <Play size={24} color="#3b82f6" />
          <h1 style={{ fontSize: '1.875rem', fontWeight: '700', color: '#1e293b' }}>
            Video Tutorials
          </h1>
        </div>
        <p style={{ color: '#64748b', fontSize: '1rem' }}>
          Learn how to maximize your philosophical research platform
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
        gap: '2rem'
      }}>
        {tutorials.map((tutorial, index) => (
          <div key={index} style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            border: '1px solid #e2e8f0',
            overflow: 'hidden',
            cursor: 'pointer',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }}>
            <div style={{ position: 'relative' }}>
              <img 
                src={tutorial.thumbnail} 
                alt={tutorial.title}
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '60px',
                height: '60px',
                backgroundColor: 'rgba(59, 130, 246, 0.9)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Play size={24} color="white" />
              </div>
            </div>
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1e293b', marginBottom: '0.75rem' }}>
                {tutorial.title}
              </h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <Clock size={14} color="#64748b" />
                  <span style={{ fontSize: '0.875rem', color: '#64748b' }}>{tutorial.duration}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <BookOpen size={14} color="#64748b" />
                  <span style={{ fontSize: '0.875rem', color: '#64748b' }}>{tutorial.difficulty}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <Star size={14} color="#f59e0b" />
                  <span style={{ fontSize: '0.875rem', color: '#64748b' }}>{tutorial.rating}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tutorials
