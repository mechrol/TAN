import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { 
  Settings, 
  ArrowLeft, 
  ExternalLink, 
  ChevronDown, 
  BookOpen, 
  Package, 
  Users, 
  Layers, 
  Calendar, 
  FileText, 
  ShoppingBag,
  Plus,
  Search,
  Edit,
  Eye,
  Copy,
  Trash2,
  MoreVertical,
  ChevronRight
} from 'lucide-react'

const CustomizeCommunity = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [activeTab, setActiveTab] = useState('courses')
  const [showCreateCourse, setShowCreateCourse] = useState(false)
  const [showCreateLesson, setShowCreateLesson] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [lessonSearchTerm, setLessonSearchTerm] = useState('')

  const communityTabs = [
    { id: 'courses', label: 'Courses', icon: BookOpen, count: 2 },
    { id: 'products', label: 'Products', icon: Package },
    { id: 'members', label: 'Members', icon: Users },
    { id: 'groups', label: 'Groups', icon: Layers },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'blog', label: 'Blog', icon: FileText },
    { id: 'sales', label: 'Sales', icon: ShoppingBag }
  ]

  const courses = [
    {
      id: 1,
      name: 'Wellness',
      type: 'Free',
      lessons: 3,
      image: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=80',
      color: '#10b981'
    },
    {
      id: 2,
      name: 'ANX-305',
      type: 'Free',
      lessons: 1,
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=80',
      color: '#ef4444'
    }
  ]

  const lessons = [
    {
      id: 1,
      name: 'Understanding the Wellness Life Wheel',
      description: 'The Wellness Life Wheel is a visual representation that helps individuals assess their ove...',
      type: 'Content',
      status: 'active',
      created: '19 Feb, 2025',
      avatar: 'UW',
      avatarColor: '#06b6d4'
    },
    {
      id: 2,
      name: 'The Importance of Holistic Wellness',
      description: 'Holistic wellness emphasizes the interdependence of different wellness dimensions, advocat...',
      type: 'Content',
      status: 'active',
      created: '19 Feb, 2025',
      avatar: 'TW',
      avatarColor: '#eab308'
    },
    {
      id: 3,
      name: 'Implementing the Wellness Life Wheel in...',
      description: 'Integrating the Wellness Life Wheel into daily routines empowers individuals to prioritize...',
      type: 'Content',
      status: 'active',
      created: '19 Feb, 2025',
      avatar: 'IL',
      avatarColor: '#3b82f6'
    },
    {
      id: 4,
      name: 'Using the Wellness Life Wheel for Goal S...',
      description: 'The Wellness Life Wheel serves as a foundational tool for setting targeted and meaningful...',
      type: 'Content',
      status: 'active',
      created: '19 Feb, 2025',
      avatar: 'US',
      avatarColor: '#f97316'
    },
    {
      id: 5,
      name: 'Evaluating Progress with the Wellness Li...',
      description: 'Regular evaluation of progress using the Wellness Life Wheel enhances self-awareness and ac...',
      type: 'Content',
      status: 'active',
      created: '19 Feb, 2025',
      avatar: 'EW',
      avatarColor: '#eab308'
    }
  ]

  const handleBackToCommunity = () => {
    navigate('/community')
  }

  const handleVisitCommunity = () => {
    navigate(`/community/view/${id}`)
  }

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const filteredLessons = lessons.filter(lesson =>
    lesson.name.toLowerCase().includes(lessonSearchTerm.toLowerCase()) ||
    lesson.description.toLowerCase().includes(lessonSearchTerm.toLowerCase())
  )

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
          <Settings size={24} color="#3b82f6" />
          <h1 style={{
            fontSize: '1.875rem',
            fontWeight: '700',
            color: '#1e293b',
            margin: 0
          }}>
            Customize Community
          </h1>
        </div>

        <button
          onClick={handleBackToCommunity}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem 1rem',
            backgroundColor: 'transparent',
            border: 'none',
            color: '#3b82f6',
            fontSize: '0.875rem',
            fontWeight: '500',
            cursor: 'pointer',
            borderRadius: '6px',
            transition: 'background-color 0.2s'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#eff6ff'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
        >
          <ArrowLeft size={16} />
          Back to Community
        </button>
      </div>

      {/* Community Header Card */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        border: '1px solid #e2e8f0',
        padding: '2rem',
        marginBottom: '2rem'
      }}>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
          {/* Community Image */}
          <div style={{
            width: '120px',
            height: '80px',
            borderRadius: '8px',
            overflow: 'hidden',
            flexShrink: 0
          }}>
            <img
              src="https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=200"
              alt="Homohumanicus"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>

          {/* Community Info */}
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#3b82f6',
                margin: 0
              }}>
                Homohumanicus
              </h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <button
                  onClick={handleVisitCommunity}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.5rem 1rem',
                    backgroundColor: 'transparent',
                    border: '1px solid #e2e8f0',
                    borderRadius: '6px',
                    color: '#64748b',
                    fontSize: '0.875rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  <ExternalLink size={14} />
                  Visit
                </button>
                <button style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 1rem',
                  backgroundColor: 'transparent',
                  border: '1px solid #e2e8f0',
                  borderRadius: '6px',
                  color: '#64748b',
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}>
                  Settings
                  <ChevronDown size={14} />
                </button>
              </div>
            </div>
            <p style={{
              color: '#64748b',
              fontSize: '0.875rem',
              marginBottom: '1.5rem'
            }}>
              Health and Wellness
            </p>

            {/* Stats */}
            <div style={{ display: 'flex', gap: '2rem' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1e293b' }}>2</div>
                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>📚 Courses</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1e293b' }}>2</div>
                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>👥 Members</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1e293b' }}>2</div>
                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>👥 Groups</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: '#e2e8f0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Users size={16} color="#64748b" />
                </div>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: '#e2e8f0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: '-8px'
                }}>
                  <Users size={16} color="#64748b" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
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
          {communityTabs.map((tab) => {
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
                  borderBottom: isActive ? '2px solid #3b82f6' : '2px solid transparent',
                  color: isActive ? '#3b82f6' : '#64748b',
                  fontSize: '0.875rem',
                  fontWeight: isActive ? '600' : '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  whiteSpace: 'nowrap'
                }}
              >
                <Icon size={16} />
                {tab.label}
                {tab.count && (
                  <span style={{
                    backgroundColor: isActive ? '#3b82f6' : '#e2e8f0',
                    color: isActive ? 'white' : '#64748b',
                    padding: '0.125rem 0.375rem',
                    borderRadius: '10px',
                    fontSize: '0.75rem',
                    fontWeight: '600'
                  }}>
                    {tab.count}
                  </span>
                )}
              </button>
            )
          })}
        </div>

        {/* Tab Content */}
        <div style={{ padding: '2rem' }}>
          {activeTab === 'courses' && (
            <div style={{ display: 'flex', gap: '2rem' }}>
              {/* Courses Section */}
              <div style={{ flex: '0 0 300px' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1rem'
                }}>
                  <h3 style={{
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    color: '#1e293b',
                    margin: 0,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    Courses
                    <span style={{
                      backgroundColor: '#3b82f6',
                      color: 'white',
                      padding: '0.125rem 0.375rem',
                      borderRadius: '10px',
                      fontSize: '0.75rem',
                      fontWeight: '600'
                    }}>
                      2
                    </span>
                    <button style={{
                      backgroundColor: 'transparent',
                      border: 'none',
                      color: '#64748b',
                      cursor: 'pointer',
                      padding: '0.25rem'
                    }}>
                      ✕
                    </button>
                  </h3>
                  <button
                    onClick={() => setShowCreateCourse(true)}
                    style={{
                      backgroundColor: '#3b82f6',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      padding: '0.5rem 1rem',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    Create Course
                  </button>
                </div>

                {/* Course Search */}
                <div style={{ position: 'relative', marginBottom: '1rem' }}>
                  <Search size={16} color="#64748b" style={{
                    position: 'absolute',
                    left: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)'
                  }} />
                  <input
                    type="text"
                    placeholder="Search by Course Name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.75rem 0.75rem 0.75rem 2.5rem',
                      border: '1px solid #e2e8f0',
                      borderRadius: '6px',
                      fontSize: '0.875rem',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                {/* Course List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {filteredCourses.map((course) => (
                    <div key={course.id} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '0.75rem',
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px',
                      backgroundColor: 'white',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}>
                      <img
                        src={course.image}
                        alt={course.name}
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '6px',
                          objectFit: 'cover'
                        }}
                      />
                      <div style={{ flex: 1 }}>
                        <div style={{
                          fontSize: '0.875rem',
                          fontWeight: '600',
                          color: '#1e293b',
                          marginBottom: '0.25rem'
                        }}>
                          {course.name}
                        </div>
                        <div style={{
                          fontSize: '0.75rem',
                          color: '#64748b'
                        }}>
                          {course.lessons} Lessons
                        </div>
                      </div>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}>
                        <span style={{
                          backgroundColor: course.type === 'Free' ? '#dcfce7' : '#fef3c7',
                          color: course.type === 'Free' ? '#16a34a' : '#d97706',
                          padding: '0.125rem 0.5rem',
                          borderRadius: '12px',
                          fontSize: '0.75rem',
                          fontWeight: '500'
                        }}>
                          {course.type}
                        </span>
                        <div style={{ display: 'flex', gap: '0.25rem' }}>
                          <button style={{
                            backgroundColor: 'transparent',
                            border: 'none',
                            color: '#64748b',
                            cursor: 'pointer',
                            padding: '0.25rem'
                          }}>
                            <Edit size={14} />
                          </button>
                          <button style={{
                            backgroundColor: 'transparent',
                            border: 'none',
                            color: '#64748b',
                            cursor: 'pointer',
                            padding: '0.25rem'
                          }}>
                            <Eye size={14} />
                          </button>
                          <button style={{
                            backgroundColor: 'transparent',
                            border: 'none',
                            color: '#64748b',
                            cursor: 'pointer',
                            padding: '0.25rem'
                          }}>
                            <Copy size={14} />
                          </button>
                          <button style={{
                            backgroundColor: '#3b82f6',
                            border: 'none',
                            color: 'white',
                            cursor: 'pointer',
                            padding: '0.25rem',
                            borderRadius: '4px'
                          }}>
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lessons Section */}
              <div style={{ flex: 1 }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1rem'
                }}>
                  <h3 style={{
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    color: '#1e293b',
                    margin: 0,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    Lessons
                    <span style={{
                      backgroundColor: '#3b82f6',
                      color: 'white',
                      padding: '0.125rem 0.375rem',
                      borderRadius: '10px',
                      fontSize: '0.75rem',
                      fontWeight: '600'
                    }}>
                      5
                    </span>
                    <button style={{
                      backgroundColor: 'transparent',
                      border: 'none',
                      color: '#64748b',
                      cursor: 'pointer',
                      padding: '0.25rem'
                    }}>
                      ✕
                    </button>
                  </h3>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <span style={{
                      backgroundColor: '#dcfce7',
                      color: '#16a34a',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '12px',
                      fontSize: '0.75rem',
                      fontWeight: '500'
                    }}>
                      Wellness
                    </span>
                    <button
                      onClick={() => setShowCreateLesson(true)}
                      style={{
                        backgroundColor: '#3b82f6',
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        padding: '0.5rem 1rem',
                        fontSize: '0.875rem',
                        fontWeight: '500',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}
                    >
                      Create Lesson
                      <ChevronDown size={14} />
                    </button>
                  </div>
                </div>

                {/* Lesson Search */}
                <div style={{ position: 'relative', marginBottom: '1rem' }}>
                  <Search size={16} color="#64748b" style={{
                    position: 'absolute',
                    left: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)'
                  }} />
                  <input
                    type="text"
                    placeholder="Search by Lesson Name..."
                    value={lessonSearchTerm}
                    onChange={(e) => setLessonSearchTerm(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.75rem 0.75rem 0.75rem 2.5rem',
                      border: '1px solid #e2e8f0',
                      borderRadius: '6px',
                      fontSize: '0.875rem',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                {/* Lesson Table */}
                <div style={{
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  overflow: 'hidden'
                }}>
                  {/* Table Header */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 80px 80px 100px 80px',
                    gap: '1rem',
                    padding: '0.75rem 1rem',
                    backgroundColor: '#f8fafc',
                    borderBottom: '1px solid #e2e8f0',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    color: '#64748b',
                    textTransform: 'uppercase'
                  }}>
                    <div>LESSON NAME</div>
                    <div>TYPE</div>
                    <div>STATUS</div>
                    <div>CREATED</div>
                    <div>ACTION</div>
                  </div>

                  {/* Table Rows */}
                  {filteredLessons.map((lesson) => (
                    <div key={lesson.id} style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 80px 80px 100px 80px',
                      gap: '1rem',
                      padding: '1rem',
                      borderBottom: '1px solid #e2e8f0',
                      alignItems: 'center'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '6px',
                          backgroundColor: lesson.avatarColor,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontSize: '0.75rem',
                          fontWeight: '600'
                        }}>
                          {lesson.avatar}
                        </div>
                        <div>
                          <div style={{
                            fontSize: '0.875rem',
                            fontWeight: '500',
                            color: '#1e293b',
                            marginBottom: '0.25rem'
                          }}>
                            {lesson.name}
                          </div>
                          <div style={{
                            fontSize: '0.75rem',
                            color: '#64748b'
                          }}>
                            {lesson.description}
                          </div>
                        </div>
                      </div>
                      <div>
                        <span style={{
                          backgroundColor: '#dcfce7',
                          color: '#16a34a',
                          padding: '0.125rem 0.5rem',
                          borderRadius: '12px',
                          fontSize: '0.75rem',
                          fontWeight: '500'
                        }}>
                          {lesson.type}
                        </span>
                      </div>
                      <div>
                        <label style={{
                          position: 'relative',
                          display: 'inline-block',
                          width: '44px',
                          height: '24px'
                        }}>
                          <input
                            type="checkbox"
                            defaultChecked={lesson.status === 'active'}
                            style={{ opacity: 0, width: 0, height: 0 }}
                          />
                          <span style={{
                            position: 'absolute',
                            cursor: 'pointer',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: lesson.status === 'active' ? '#3b82f6' : '#cbd5e1',
                            borderRadius: '24px',
                            transition: '0.4s'
                          }}>
                            <span style={{
                              position: 'absolute',
                              content: '',
                              height: '18px',
                              width: '18px',
                              left: lesson.status === 'active' ? '23px' : '3px',
                              bottom: '3px',
                              backgroundColor: 'white',
                              borderRadius: '50%',
                              transition: '0.4s'
                            }}></span>
                          </span>
                        </label>
                      </div>
                      <div style={{
                        fontSize: '0.75rem',
                        color: '#64748b'
                      }}>
                        {lesson.created}
                      </div>
                      <div>
                        <button style={{
                          backgroundColor: 'transparent',
                          border: '1px solid #e2e8f0',
                          borderRadius: '6px',
                          padding: '0.25rem 0.5rem',
                          fontSize: '0.75rem',
                          color: '#64748b',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.25rem'
                        }}>
                          Actions
                          <ChevronDown size={12} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Other tab contents would go here */}
          {activeTab !== 'courses' && (
            <div style={{
              textAlign: 'center',
              padding: '3rem',
              color: '#64748b'
            }}>
              <h3 style={{ marginBottom: '0.5rem' }}>
                {communityTabs.find(tab => tab.id === activeTab)?.label} Configuration
              </h3>
              <p>Configuration options for {communityTabs.find(tab => tab.id === activeTab)?.label.toLowerCase()} will be displayed here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CustomizeCommunity
