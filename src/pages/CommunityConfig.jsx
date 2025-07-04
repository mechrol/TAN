import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, Upload, Palette, Save, Eye } from 'lucide-react'

const CommunityConfig = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  
  const [formData, setFormData] = useState({
    name: 'HomoHumanicus',
    shortDescription: 'Health and Wellness community focused on holistic living, longevity, and prosperity through healthy habits and lifestyle choices.',
    description: 'A comprehensive Health and Wellness community dedicated to helping members achieve optimal health through the integration of conventional and holistic treatment methods. Our community focuses on habit tracking, healthy lifestyle guidance, and building prosperity through wellness practices.',
    url: 'https://homohumanicus.aitribes.app',
    timeZone: 'UTC',
    logo: 'https://aitribes.app/upload/9/lib/18586_1730975403_lib.png',
    darkModeLogo: '',
    bannerImage: 'https://aitribes.app/upload/9/lib/19810_1730975796_lib.png',
    favicon: 'https://aitribes.app/upload/9/lib/17483_1730975899_lib.png',
    themeColor: '#22c55e',
    colorOption: 'predefined',
    customColor: '#22c55e',
    communityFeed: 'manual',
    customPrompt: 'Generate community post in the topic health and fitness. Stick to the information pertaining to the community topic.',
    numberOfPosts: '5',
    category: 'Health and Wellness',
    stats: {
      posts: 11,
      members: 2,
      groups: 2
    }
  })

  const themeColors = [
    '#3b82f6', '#ef4444', '#f97316', '#f59e0b', 
    '#eab308', '#84cc16', '#22c55e', '#10b981',
    '#14b8a6', '#06b6d4', '#0ea5e9', '#6366f1',
    '#8b5cf6', '#a855f7', '#d946ef', '#ec4899', '#f43f5e'
  ]

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleColorSelect = (color) => {
    setFormData(prev => ({
      ...prev,
      themeColor: color,
      customColor: color
    }))
  }

  const handleSave = () => {
    console.log('Saving HomoHumanicus community configuration:', formData)
    alert('HomoHumanicus community configuration saved successfully!')
  }

  const handleBack = () => {
    navigate('/community')
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      {/* Header */}
      <div style={{
        backgroundColor: 'white',
        borderBottom: '1px solid #e2e8f0',
        padding: '1rem 2rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            onClick={handleBack}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              backgroundColor: '#f1f5f9',
              border: '1px solid #e2e8f0',
              borderRadius: '6px',
              fontSize: '0.875rem',
              color: '#64748b',
              cursor: 'pointer'
            }}
          >
            <ArrowLeft size={16} />
            Back
          </button>
          <h1 style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            color: '#1e293b'
          }}>
            Update Community - HomoHumanicus
          </h1>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 400px',
        gap: '2rem',
        padding: '2rem',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {/* Left Panel - Configuration Form */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          border: '1px solid #e2e8f0',
          overflow: 'hidden'
        }}>
          {/* Form Header */}
          <div style={{
            padding: '1.5rem',
            borderBottom: '1px solid #e2e8f0',
            backgroundColor: '#f8fafc'
          }}>
            <h2 style={{
              fontSize: '1.125rem',
              fontWeight: '600',
              color: '#1e293b'
            }}>
              Community Details
            </h2>
            <div style={{
              display: 'flex',
              gap: '1rem',
              marginTop: '0.5rem',
              fontSize: '0.875rem',
              color: '#64748b'
            }}>
              <span>{formData.stats.posts} Posts</span>
              <span>{formData.stats.members} Members</span>
              <span>{formData.stats.groups} Groups</span>
            </div>
          </div>

          {/* Form Content */}
          <div style={{ padding: '1.5rem' }}>
            {/* Community Name */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                fontSize: '0.875rem',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '0.5rem'
              }}>
                Community Name *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Enter Community Name"
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

            {/* Community Short Description */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                fontSize: '0.875rem',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '0.5rem'
              }}>
                Community Short Description *
              </label>
              <textarea
                value={formData.shortDescription}
                onChange={(e) => handleInputChange('shortDescription', e.target.value)}
                placeholder="Enter Community Description"
                rows={4}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  outline: 'none',
                  resize: 'vertical',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            {/* Community URL */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                fontSize: '0.875rem',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '0.5rem'
              }}>
                Community URL *
              </label>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <div style={{ display: 'flex', flex: 1 }}>
                  <span style={{
                    padding: '0.75rem',
                    backgroundColor: '#f8fafc',
                    border: '1px solid #d1d5db',
                    borderRight: 'none',
                    borderRadius: '6px 0 0 6px',
                    fontSize: '0.875rem',
                    color: '#64748b'
                  }}>
                    https://
                  </span>
                  <input
                    type="text"
                    value="livecoach"
                    style={{
                      flex: 1,
                      padding: '0.75rem',
                      border: '1px solid #d1d5db',
                      borderLeft: 'none',
                      borderRight: 'none',
                      fontSize: '0.875rem',
                      outline: 'none'
                    }}
                  />
                  <span style={{
                    padding: '0.75rem',
                    backgroundColor: '#f8fafc',
                    border: '1px solid #d1d5db',
                    borderLeft: 'none',
                    borderRadius: '0 6px 6px 0',
                    fontSize: '0.875rem',
                    color: '#64748b'
                  }}>
                    .aitribes.app
                  </span>
                </div>
                <button style={{
                  padding: '0.75rem 1rem',
                  backgroundColor: '#22c55e',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap'
                }}>
                  Visit Community
                </button>
              </div>
            </div>

            {/* Time Zone */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                fontSize: '0.875rem',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '0.5rem'
              }}>
                Time Zone
              </label>
              <select
                value={formData.timeZone}
                onChange={(e) => handleInputChange('timeZone', e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  outline: 'none',
                  backgroundColor: 'white',
                  boxSizing: 'border-box'
                }}
              >
                <option value="Select">Select</option>
                <option value="UTC">UTC</option>
                <option value="EST">Eastern Time</option>
                <option value="PST">Pacific Time</option>
                <option value="CET">Central European Time</option>
              </select>
            </div>

            {/* Community Logo */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                fontSize: '0.875rem',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '0.5rem'
              }}>
                Community Logo
              </label>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <input
                  type="url"
                  value={formData.logo}
                  onChange={(e) => handleInputChange('logo', e.target.value)}
                  style={{
                    flex: 1,
                    padding: '0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    fontSize: '0.875rem',
                    outline: 'none'
                  }}
                />
                <button style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1rem',
                  backgroundColor: '#22c55e',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap'
                }}>
                  <Upload size={16} />
                  Upload
                </button>
              </div>
              <p style={{
                fontSize: '0.75rem',
                color: '#64748b'
              }}>
                Recommended Size(px): 200*50 PNG or JPEG format
              </p>
            </div>

            {/* Community Dark Mode Logo */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                fontSize: '0.875rem',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '0.5rem'
              }}>
                Community Dark Mode Logo (Optional)
              </label>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <input
                  type="url"
                  value={formData.darkModeLogo}
                  onChange={(e) => handleInputChange('darkModeLogo', e.target.value)}
                  placeholder="Upload Logo"
                  style={{
                    flex: 1,
                    padding: '0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    fontSize: '0.875rem',
                    outline: 'none'
                  }}
                />
                <button style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1rem',
                  backgroundColor: '#22c55e',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap'
                }}>
                  <Upload size={16} />
                  Upload Logo
                </button>
              </div>
              <p style={{
                fontSize: '0.75rem',
                color: '#64748b'
              }}>
                Recommended Size(px): 200*50 PNG or JPEG format
              </p>
            </div>

            {/* Community Banner Image */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                fontSize: '0.875rem',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '0.5rem'
              }}>
                Community Banner Image
              </label>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <input
                  type="url"
                  value={formData.bannerImage}
                  onChange={(e) => handleInputChange('bannerImage', e.target.value)}
                  style={{
                    flex: 1,
                    padding: '0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    fontSize: '0.875rem',
                    outline: 'none'
                  }}
                />
                <button style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1rem',
                  backgroundColor: '#22c55e',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap'
                }}>
                  <Upload size={16} />
                  Upload
                </button>
              </div>
              <p style={{
                fontSize: '0.75rem',
                color: '#64748b'
              }}>
                Recommended Size(px): 1200*250 Format PNG or JPEG
              </p>
            </div>

            {/* Favicon */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                fontSize: '0.875rem',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '0.5rem'
              }}>
                Favicon
              </label>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <input
                  type="url"
                  value={formData.favicon}
                  onChange={(e) => handleInputChange('favicon', e.target.value)}
                  style={{
                    flex: 1,
                    padding: '0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    fontSize: '0.875rem',
                    outline: 'none'
                  }}
                />
                <button style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1rem',
                  backgroundColor: '#22c55e',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap'
                }}>
                  <Upload size={16} />
                  Upload
                </button>
              </div>
              <p style={{
                fontSize: '0.75rem',
                color: '#64748b'
              }}>
                Recommended Size(px): 32*32 Format PNG or JPEG or ICO
              </p>
            </div>

            {/* Theme Color */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                fontSize: '0.875rem',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '0.5rem'
              }}>
                Theme Color
              </label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input
                    type="radio"
                    name="colorOption"
                    value="predefined"
                    checked={formData.colorOption === 'predefined'}
                    onChange={(e) => handleInputChange('colorOption', e.target.value)}
                  />
                  <span style={{ fontSize: '0.875rem', color: '#374151' }}>
                    Pre Defined Color
                  </span>
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input
                    type="radio"
                    name="colorOption"
                    value="custom"
                    checked={formData.colorOption === 'custom'}
                    onChange={(e) => handleInputChange('colorOption', e.target.value)}
                  />
                  <span style={{ fontSize: '0.875rem', color: '#374151' }}>
                    Custom Color
                  </span>
                </label>
              </div>
              
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.75rem', color: '#64748b', minWidth: '50px' }}>Color 1</span>
                  <span style={{ fontSize: '0.75rem', color: '#64748b', minWidth: '50px' }}>Color 2</span>
                  <span style={{ fontSize: '0.75rem', color: '#64748b', minWidth: '50px' }}>Color 3</span>
                  <span style={{ fontSize: '0.75rem', color: '#64748b', minWidth: '50px' }}>Color 4</span>
                  <span style={{ fontSize: '0.75rem', color: '#64748b', minWidth: '50px' }}>Color 5</span>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  {themeColors.slice(0, 5).map((color, index) => (
                    <button
                      key={index}
                      onClick={() => handleColorSelect(color)}
                      style={{
                        width: '50px',
                        height: '40px',
                        backgroundColor: color,
                        border: formData.themeColor === color ? '3px solid #1e293b' : '1px solid #e2e8f0',
                        borderRadius: '6px',
                        cursor: 'pointer'
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Community Feed */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                fontSize: '0.875rem',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '0.5rem'
              }}>
                Community Feed
              </label>
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input
                    type="radio"
                    name="communityFeed"
                    value="manual"
                    checked={formData.communityFeed === 'manual'}
                    onChange={(e) => handleInputChange('communityFeed', e.target.value)}
                  />
                  <span style={{ fontSize: '0.875rem', color: '#374151' }}>
                    Manual
                  </span>
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input
                    type="radio"
                    name="communityFeed"
                    value="ai"
                    checked={formData.communityFeed === 'ai'}
                    onChange={(e) => handleInputChange('communityFeed', e.target.value)}
                  />
                  <span style={{ fontSize: '0.875rem', color: '#374151' }}>
                    AI
                  </span>
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input
                    type="radio"
                    name="communityFeed"
                    value="ai-custom"
                    checked={formData.communityFeed === 'ai-custom'}
                    onChange={(e) => handleInputChange('communityFeed', e.target.value)}
                  />
                  <span style={{ fontSize: '0.875rem', color: '#374151' }}>
                    AI-Custom Prompt
                  </span>
                </label>
              </div>

              {/* Custom Prompt Field */}
              {formData.communityFeed === 'ai-custom' && (
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: '#374151',
                    marginBottom: '0.5rem'
                  }}>
                    Custom Prompt
                  </label>
                  <textarea
                    value={formData.customPrompt}
                    onChange={(e) => handleInputChange('customPrompt', e.target.value)}
                    placeholder="Generate community post in the topic health and fitness. Stick to the information pertaining to the community topic."
                    rows={4}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      fontSize: '0.875rem',
                      outline: 'none',
                      resize: 'vertical',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
              )}

              {/* Number of Posts */}
              {(formData.communityFeed === 'ai' || formData.communityFeed === 'ai-custom') && (
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: '#374151',
                    marginBottom: '0.5rem'
                  }}>
                    Number Of Post
                  </label>
                  <select
                    value={formData.numberOfPosts}
                    onChange={(e) => handleInputChange('numberOfPosts', e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      fontSize: '0.875rem',
                      outline: 'none',
                      backgroundColor: 'white',
                      boxSizing: 'border-box'
                    }}
                  >
                    <option value="1">1</option>
                    <option value="3">3</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                  </select>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '1rem', paddingTop: '1rem', borderTop: '1px solid #e2e8f0' }}>
              <button
                onClick={handleSave}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#3b82f6',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  cursor: 'pointer'
                }}
              >
                Save
              </button>
              <button
                onClick={handleBack}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#f1f5f9',
                  color: '#64748b',
                  border: '1px solid #e2e8f0',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  cursor: 'pointer'
                }}
              >
                Back
              </button>
            </div>
          </div>
        </div>

        {/* Right Panel - Community Preview */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          border: '1px solid #e2e8f0',
          overflow: 'hidden',
          height: 'fit-content'
        }}>
          {/* Preview Header */}
          <div style={{
            padding: '1.5rem',
            borderBottom: '1px solid #e2e8f0',
            backgroundColor: '#f8fafc'
          }}>
            <h3 style={{
              fontSize: '1.125rem',
              fontWeight: '600',
              color: '#1e293b'
            }}>
              Community Preview
            </h3>
          </div>

          {/* Preview Content */}
          <div style={{ padding: '1.5rem' }}>
            <div style={{
              border: '2px solid #e2e8f0',
              borderRadius: '8px',
              overflow: 'hidden',
              backgroundColor: '#f8fafc'
            }}>
              {/* Community Header */}
              <div style={{
                backgroundColor: formData.themeColor,
                height: '120px',
                backgroundImage: formData.bannerImage ? `url(${formData.bannerImage})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <div style={{
                    width: '24px',
                    height: '24px',
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <div style={{
                      width: '16px',
                      height: '16px',
                      backgroundColor: 'white',
                      borderRadius: '50%'
                    }}></div>
                  </div>
                </div>
                <div style={{
                  position: 'absolute',
                  bottom: '1rem',
                  left: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    backgroundImage: formData.logo ? `url(${formData.logo})` : 'none',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    border: '2px solid white'
                  }}></div>
                  <div>
                    <h4 style={{
                      color: 'white',
                      fontSize: '1rem',
                      fontWeight: '600',
                      textShadow: '0 1px 2px rgba(0,0,0,0.5)'
                    }}>
                      {formData.name}
                    </h4>
                    <p style={{
                      color: 'white',
                      fontSize: '0.75rem',
                      textShadow: '0 1px 2px rgba(0,0,0,0.5)'
                    }}>
                      {formData.category}
                    </p>
                  </div>
                </div>
              </div>

              {/* Community Content Preview */}
              <div style={{ padding: '1rem', backgroundColor: 'white' }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '0.5rem',
                  marginBottom: '1rem'
                }}>
                  <div style={{
                    padding: '0.75rem',
                    backgroundColor: '#f8fafc',
                    borderRadius: '6px',
                    textAlign: 'center'
                  }}>
                    <div style={{
                      width: '100%',
                      height: '60px',
                      backgroundColor: '#e2e8f0',
                      borderRadius: '4px',
                      marginBottom: '0.5rem'
                    }}></div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Sample Post</div>
                  </div>
                  <div style={{
                    padding: '0.75rem',
                    backgroundColor: '#f8fafc',
                    borderRadius: '6px',
                    textAlign: 'center'
                  }}>
                    <div style={{
                      width: '100%',
                      height: '60px',
                      backgroundColor: '#e2e8f0',
                      borderRadius: '4px',
                      marginBottom: '0.5rem'
                    }}></div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Sample Post</div>
                  </div>
                </div>

                <div style={{
                  padding: '0.75rem',
                  backgroundColor: '#f8fafc',
                  borderRadius: '6px',
                  marginBottom: '1rem'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '0.5rem'
                  }}>
                    <div style={{
                      width: '24px',
                      height: '24px',
                      backgroundColor: formData.themeColor,
                      borderRadius: '50%'
                    }}></div>
                    <div style={{ fontSize: '0.75rem', color: '#1e293b', fontWeight: '500' }}>
                      Community Activity
                    </div>
                  </div>
                  <div style={{ fontSize: '0.625rem', color: '#64748b' }}>
                    Latest updates and member interactions
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '0.75rem',
                  color: '#64748b'
                }}>
                  <span>Groups</span>
                  <span>Events</span>
                  <span>Members</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommunityConfig
