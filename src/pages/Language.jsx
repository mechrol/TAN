import React, { useState } from 'react'
import { Globe, Check } from 'lucide-react'

const Language = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en')

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'pl', name: 'Polski', flag: '🇵🇱' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'id', name: 'Indonesian', flag: '🇮🇩' },
    { code: 'da', name: 'Dansk', flag: '🇩🇰' }
  ]

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
          <Globe size={24} color="#3b82f6" />
          <h1 style={{ fontSize: '1.875rem', fontWeight: '700', color: '#1e293b' }}>
            Language Settings
          </h1>
        </div>
        <p style={{ color: '#64748b', fontSize: '1rem' }}>
          Choose your preferred language for the platform interface
        </p>
      </div>

      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        border: '1px solid #e2e8f0',
        padding: '2rem'
      }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1e293b', marginBottom: '1.5rem' }}>
          Available Languages
        </h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '1rem'
        }}>
          {languages.map((language) => (
            <div
              key={language.code}
              onClick={() => setSelectedLanguage(language.code)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1rem',
                backgroundColor: selectedLanguage === language.code ? '#eff6ff' : '#f8fafc',
                border: selectedLanguage === language.code ? '2px solid #3b82f6' : '1px solid #e2e8f0',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                if (selectedLanguage !== language.code) {
                  e.target.style.backgroundColor = '#f1f5f9'
                }
              }}
              onMouseLeave={(e) => {
                if (selectedLanguage !== language.code) {
                  e.target.style.backgroundColor = '#f8fafc'
                }
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ fontSize: '1.5rem' }}>{language.flag}</span>
                <span style={{ 
                  fontWeight: '500', 
                  color: selectedLanguage === language.code ? '#3b82f6' : '#1e293b' 
                }}>
                  {language.name}
                </span>
              </div>
              {selectedLanguage === language.code && (
                <Check size={20} color="#3b82f6" />
              )}
            </div>
          ))}
        </div>

        {/* Language Preview Section */}
        <div style={{ 
          marginTop: '2rem', 
          padding: '1.5rem', 
          backgroundColor: '#f8fafc', 
          borderRadius: '8px',
          border: '1px solid #e2e8f0'
        }}>
          <h3 style={{ fontSize: '1rem', fontWeight: '600', color: '#1e293b', marginBottom: '1rem' }}>
            Language Preview
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <span style={{ fontSize: '0.875rem', color: '#64748b', fontWeight: '500' }}>
                Selected Language:
              </span>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem', 
                marginTop: '0.25rem' 
              }}>
                <span style={{ fontSize: '1.25rem' }}>
                  {languages.find(lang => lang.code === selectedLanguage)?.flag}
                </span>
                <span style={{ fontSize: '1rem', fontWeight: '600', color: '#1e293b' }}>
                  {languages.find(lang => lang.code === selectedLanguage)?.name}
                </span>
              </div>
            </div>
            <div>
              <span style={{ fontSize: '0.875rem', color: '#64748b', fontWeight: '500' }}>
                Sample Text:
              </span>
              <div style={{ marginTop: '0.25rem' }}>
                {selectedLanguage === 'pl' && (
                  <span style={{ fontSize: '0.875rem', color: '#475569' }}>
                    "Witamy w HomoHumanicus - Platformie Badań Filozoficznych"
                  </span>
                )}
                {selectedLanguage === 'ru' && (
                  <span style={{ fontSize: '0.875rem', color: '#475569' }}>
                    "Добро пожаловать в HomoHumanicus - Платформу Философских Исследований"
                  </span>
                )}
                {selectedLanguage === 'en' && (
                  <span style={{ fontSize: '0.875rem', color: '#475569' }}>
                    "Welcome to HomoHumanicus - Philosophical Research Platform"
                  </span>
                )}
                {selectedLanguage === 'es' && (
                  <span style={{ fontSize: '0.875rem', color: '#475569' }}>
                    "Bienvenido a HomoHumanicus - Plataforma de Investigación Filosófica"
                  </span>
                )}
                {selectedLanguage === 'fr' && (
                  <span style={{ fontSize: '0.875rem', color: '#475569' }}>
                    "Bienvenue sur HomoHumanicus - Plateforme de Recherche Philosophique"
                  </span>
                )}
                {selectedLanguage === 'de' && (
                  <span style={{ fontSize: '0.875rem', color: '#475569' }}>
                    "Willkommen bei HomoHumanicus - Philosophische Forschungsplattform"
                  </span>
                )}
                {selectedLanguage === 'it' && (
                  <span style={{ fontSize: '0.875rem', color: '#475569' }}>
                    "Benvenuto in HomoHumanicus - Piattaforma di Ricerca Filosofica"
                  </span>
                )}
                {selectedLanguage === 'pt' && (
                  <span style={{ fontSize: '0.875rem', color: '#475569' }}>
                    "Bem-vindo ao HomoHumanicus - Plataforma de Pesquisa Filosófica"
                  </span>
                )}
                {selectedLanguage === 'id' && (
                  <span style={{ fontSize: '0.875rem', color: '#475569' }}>
                    "Selamat datang di HomoHumanicus - Platform Penelitian Filosofis"
                  </span>
                )}
                {selectedLanguage === 'da' && (
                  <span style={{ fontSize: '0.875rem', color: '#475569' }}>
                    "Velkommen til HomoHumanicus - Filosofisk Forskningsplatform"
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #e2e8f0' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <button style={{
              padding: '0.75rem 2rem',
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '500',
              fontSize: '0.875rem',
              transition: 'background-color 0.2s'
            }}>
              Save Language Preference
            </button>
            <button style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: 'transparent',
              color: '#64748b',
              border: '1px solid #d1d5db',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '500',
              fontSize: '0.875rem',
              transition: 'all 0.2s'
            }}>
              Reset to Default
            </button>
          </div>
          <p style={{ 
            fontSize: '0.75rem', 
            color: '#64748b', 
            marginTop: '0.75rem',
            fontStyle: 'italic'
          }}>
            * Language changes will be applied after saving and refreshing the page
          </p>
        </div>
      </div>
    </div>
  )
}

export default Language
