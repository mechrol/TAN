import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Save } from 'lucide-react'

const CreateCommunity = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    communityName: '',
    communityDescription: '',
    communitySubdomain: '',
    timeZone: '',
    themeColorType: 'predefined',
    selectedColor: '#3b82f6',
    customColor: '#3b82f6',
    communityFeed: 'manual'
  })

  const predefinedColors = [
    '#3b82f6', '#ef4444', '#f97316', '#f59e0b', '#eab308', '#84cc16',
    '#22c55e', '#10b981', '#14b8a6', '#06b6d4', '#0ea5e9', '#6366f1',
    '#8b5cf6', '#a855f7', '#d946ef', '#ec4899', '#f43f5e'
  ]

  const timeZones = [
    'UTC-12:00 Baker Island',
    'UTC-11:00 American Samoa',
    'UTC-10:00 Hawaii',
    'UTC-09:00 Alaska',
    'UTC-08:00 Pacific Time',
    'UTC-07:00 Mountain Time',
    'UTC-06:00 Central Time',
    'UTC-05:00 Eastern Time',
    'UTC-04:00 Atlantic Time',
    'UTC-03:00 Argentina',
    'UTC-02:00 South Georgia',
    'UTC-01:00 Azores',
    'UTC+00:00 London',
    'UTC+01:00 Central European Time',
    'UTC+02:00 Eastern European Time',
    'UTC+03:00 Moscow',
    'UTC+04:00 Dubai',
    'UTC+05:00 Pakistan',
    'UTC+06:00 Bangladesh',
    'UTC+07:00 Thailand',
    'UTC+08:00 China',
    'UTC+09:00 Japan',
    'UTC+10:00 Australia East',
    'UTC+11:00 Solomon Islands',
    'UTC+12:00 New Zealand'
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
      selectedColor: color
    }))
  }

  const handleSave = () => {
    console.log('Creating community with data:', formData)
    // Here you would typically send the data to your backend
    navigate('/community')
  }

  const handleBack = () => {
    navigate('/community')
  }

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ 
          fontSize: '1.875rem', 
          fontWeight: '700', 
          color: '#1e293b',
          marginBottom: '0.5rem'
        }}>
          Create Community
        </h1>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 400px', 
        gap: '2rem',
        alignItems: 'start'
      }}>
        {/* Left Column - Form */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          border: '1px solid #e2e8f0',
          padding: '2rem'
        }}>
          {/* Community Details Section */}
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              color: '#1e293b',
              marginBottom: '1.5rem'
            }}>
              Community Details
            </h2>

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
                placeholder="Enter Community Name"
                value={formData.communityName}
                onChange={(e) => handleInputChange('communityName', e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  outline: 'none',
                  transition: 'border-color 0.2s'
                }}
                onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
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
                placeholder="Enter Community Description"
                value={formData.communityDescription}
                onChange={(e) => handleInputChange('communityDescription', e.target.value)}
                rows={4}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                  resize: 'vertical',
                  fontFamily: 'inherit'
                }}
                onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
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
              <div style={{
                display: 'flex',
                alignItems: 'center',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                backgroundColor: 'white',
                overflow: 'hidden'
              }}>
                <span style={{
                  padding: '0.75rem',
                  backgroundColor: '#f8fafc',
                  color: '#64748b',
                  fontSize: '0.875rem',
                  borderRight: '1px solid #e2e8f0'
                }}>
                  https://
                </span>
                <input
                  type="text"
                  placeholder="Enter Community Subdomain Name"
                  value={formData.communitySubdomain}
                  onChange={(e) => handleInputChange('communitySubdomain', e.target.value)}
                  style={{
                    flex: 1,
                    padding: '0.75rem',
                    border: 'none',
                    fontSize: '0.875rem',
                    outline: 'none'
                  }}
                />
                <span style={{
                  padding: '0.75rem',
                  backgroundColor: '#f8fafc',
                  color: '#64748b',
                  fontSize: '0.875rem',
                  borderLeft: '1px solid #e2e8f0'
                }}>
                  .aitribes.app
                </span>
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
                Time Zone *
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
                  cursor: 'pointer'
                }}
              >
                <option value="">Select</option>
                {timeZones.map((tz) => (
                  <option key={tz} value={tz}>{tz}</option>
                ))}
              </select>
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
                Theme Color *
              </label>
              
              {/* Color Type Selection */}
              <div style={{ 
                display: 'flex', 
                gap: '1rem', 
                marginBottom: '1rem' 
              }}>
                <label style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem',
                  cursor: 'pointer'
                }}>
                  <input
                    type="radio"
                    name="themeColorType"
                    value="predefined"
                    checked={formData.themeColorType === 'predefined'}
                    onChange={(e) => handleInputChange('themeColorType', e.target.value)}
                    style={{ margin: 0 }}
                  />
                  <span style={{ fontSize: '0.875rem', color: '#374151' }}>
                    Pre Defined Color
                  </span>
                </label>
                <label style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem',
                  cursor: 'pointer'
                }}>
                  <input
                    type="radio"
                    name="themeColorType"
                    value="custom"
                    checked={formData.themeColorType === 'custom'}
                    onChange={(e) => handleInputChange('themeColorType', e.target.value)}
                    style={{ margin: 0 }}
                  />
                  <span style={{ fontSize: '0.875rem', color: '#374151' }}>
                    Custom Color
                  </span>
                </label>
              </div>

              {/* Predefined Colors Grid */}
              {formData.themeColorType === 'predefined' && (
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(8, 1fr)',
                  gap: '0.5rem',
                  marginBottom: '1rem'
                }}>
                  {predefinedColors.map((color) => (
                    <button
                      key={color}
                      onClick={() => handleColorSelect(color)}
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '8px',
                        backgroundColor: color,
                        border: formData.selectedColor === color ? '3px solid #1e293b' : '2px solid #e2e8f0',
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                      }}
                    />
                  ))}
                </div>
              )}

              {/* Custom Color Picker */}
              {formData.themeColorType === 'custom' && (
                <div style={{ marginBottom: '1rem' }}>
                  <input
                    type="color"
                    value={formData.customColor}
                    onChange={(e) => {
                      handleInputChange('customColor', e.target.value)
                      handleColorSelect(e.target.value)
                    }}
                    style={{
                      width: '60px',
                      height: '40px',
                      border: '2px solid #e2e8f0',
                      borderRadius: '8px',
                      cursor: 'pointer'
                    }}
                  />
                </div>
              )}
            </div>

            {/* Community Feed */}
            <div style={{ marginBottom: '2rem' }}>
              <label style={{
                display: 'block',
                fontSize: '0.875rem',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '0.5rem'
              }}>
                Community Feed *
              </label>
              
              <div style={{ display: 'flex', gap: '1rem' }}>
                {[
                  { value: 'manual', label: 'Manual' },
                  { value: 'ai', label: 'AI' },
                  { value: 'ai-custom', label: 'AI-Custom Prompt' }
                ].map((option) => (
                  <label key={option.value} style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.5rem',
                    cursor: 'pointer'
                  }}>
                    <input
                      type="radio"
                      name="communityFeed"
                      value={option.value}
                      checked={formData.communityFeed === option.value}
                      onChange={(e) => handleInputChange('communityFeed', e.target.value)}
                      style={{ margin: 0 }}
                    />
                    <span style={{ fontSize: '0.875rem', color: '#374151' }}>
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ 
              display: 'flex', 
              gap: '1rem',
              paddingTop: '1rem',
              borderTop: '1px solid #e2e8f0'
            }}>
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
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#2563eb'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#3b82f6'}
              >
                <Save size={16} />
                Save
              </button>
              
              <button
                onClick={handleBack}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#f1f5f9',
                  color: '#475569',
                  border: '1px solid #e2e8f0',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#e2e8f0'
                  e.target.style.borderColor = '#cbd5e1'
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#f1f5f9'
                  e.target.style.borderColor = '#e2e8f0'
                }}
              >
                <ArrowLeft size={16} />
                Back
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Template Preview */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          border: '1px solid #e2e8f0',
          padding: '1.5rem',
          position: 'sticky',
          top: '2rem'
        }}>
          <h3 style={{
            fontSize: '1rem',
            fontWeight: '600',
            color: '#1e293b',
            marginBottom: '1rem'
          }}>
            Template Sample Preview
          </h3>
          
          <div style={{
            border: '2px solid #e2e8f0',
            borderRadius: '8px',
            overflow: 'hidden',
            backgroundColor: '#f8fafc'
          }}>
            {/* Preview Header */}
            <div style={{
              backgroundColor: formData.selectedColor || '#3b82f6',
              color: 'white',
              padding: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <div style={{
                width: '24px',
                height: '24px',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '4px'
              }} />
              <span style={{ fontSize: '0.875rem', fontWeight: '600' }}>
                {formData.communityName || 'Community Name'}
              </span>
            </div>

            {/* Preview Content */}
            <div style={{ padding: '1rem' }}>
              <div style={{
                backgroundColor: 'white',
                borderRadius: '6px',
                padding: '0.75rem',
                marginBottom: '0.75rem',
                border: '1px solid #e2e8f0'
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
                    backgroundColor: '#e2e8f0',
                    borderRadius: '50%'
                  }} />
                  <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
                    Sample User
                  </span>
                </div>
                <p style={{ 
                  fontSize: '0.75rem', 
                  color: '#374151',
                  margin: 0
                }}>
                  Welcome to our community! This is a sample post preview.
                </p>
              </div>

              <div style={{
                backgroundColor: 'white',
                borderRadius: '6px',
                padding: '0.75rem',
                border: '1px solid #e2e8f0'
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
                    backgroundColor: '#e2e8f0',
                    borderRadius: '50%'
                  }} />
                  <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
                    Community Admin
                  </span>
                </div>
                <p style={{ 
                  fontSize: '0.75rem', 
                  color: '#374151',
                  margin: 0
                }}>
                  {formData.communityDescription || 'Community description will appear here...'}
                </p>
              </div>
            </div>

            {/* Preview Footer */}
            <div style={{
              backgroundColor: '#f8fafc',
              padding: '0.75rem',
              borderTop: '1px solid #e2e8f0',
              textAlign: 'center'
            }}>
              <span style={{ 
                fontSize: '0.75rem', 
                color: '#64748b' 
              }}>
                {formData.communitySubdomain ? 
                  `${formData.communitySubdomain}.aitribes.app` : 
                  'subdomain.aitribes.app'
                }
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateCommunity
