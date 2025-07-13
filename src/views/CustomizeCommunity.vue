<template>
  <div class="customize-community-page">
    <!-- Header -->
    <header class="header">
      <div class="header-left">
        <div class="logo">
          <div class="logo-icon">🤖</div>
          <span class="logo-text">AITribes</span>
          <span class="logo-subtitle">ENTERPRISE</span>
        </div>
      </div>
      
      <nav class="nav">
        <router-link to="/dashboard" class="nav-item">
          <Home class="nav-icon" />
          Dashboard
        </router-link>
        <router-link to="/community" class="nav-item active">
          <Users class="nav-icon" />
          Community
        </router-link>
        <a href="#" class="nav-item">
          <ShoppingCart class="nav-icon" />
          Reseller
          <ChevronDown class="nav-chevron" />
        </a>
        <a href="#" class="nav-item">
          <BarChart3 class="nav-icon" />
          Analytics
        </a>
        <a href="#" class="nav-item">
          <Settings class="nav-icon" />
          Integrations
        </a>
      </nav>

      <div class="header-right">
        <div class="user-menu" @click="toggleUserMenu">
          <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" 
               alt="User Avatar" class="user-avatar">
          <ChevronDown class="chevron" />
        </div>
        
        <!-- User Dropdown -->
        <div v-if="showUserMenu" class="user-dropdown">
          <div class="user-info">
            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop" 
                 alt="User Avatar" class="dropdown-avatar">
            <div>
              <div class="user-name">Janusz Krawczak</div>
              <div class="user-email">januszkrawczak@gmail.com</div>
            </div>
          </div>
          
          <div class="credits-info">
            <div class="credits-label">Free Credits</div>
            <div class="credits-value">735/1000</div>
          </div>
          
          <div class="menu-items">
            <a href="#" class="menu-item">
              <User class="menu-icon" />
              Profile
            </a>
            <a href="#" class="menu-item">
              <Play class="menu-icon" />
              Video tutorials
            </a>
            <a href="#" class="menu-item">
              <BookOpen class="menu-icon" />
              Knowledgebase
            </a>
            <a href="#" class="menu-item">
              <Crown class="menu-icon" />
              Template Club
            </a>
            <a href="#" class="menu-item">
              <Globe class="menu-icon" />
              Agency Website
            </a>
            <a href="#" class="menu-item">
              <Zap class="menu-icon" />
              DFY Tribe
            </a>
            <a href="#" class="menu-item">
              <Languages class="menu-icon" />
              Language
              <ChevronRight class="menu-arrow" />
            </a>
            <a href="#" class="menu-item sign-out">
              <LogOut class="menu-icon" />
              Sign Out
            </a>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="main-content">
      <!-- Breadcrumb -->
      <div class="breadcrumb">
        <router-link to="/community" class="breadcrumb-link">Community</router-link>
        <ChevronRight class="breadcrumb-separator" />
        <span class="breadcrumb-current">Customize Community</span>
      </div>

      <!-- Page Header -->
      <div class="page-header">
        <div class="page-title">
          <Palette class="page-icon" />
          <h1>Customize Community</h1>
        </div>
        
        <div class="page-actions">
          <button class="preview-btn" @click="handlePreview">
            <Eye class="preview-icon" />
            Preview
          </button>
          <button class="save-btn" @click="handleSave">
            <Save class="save-icon" />
            Save Changes
          </button>
        </div>
      </div>

      <!-- Customization Panels -->
      <div class="customization-container">
        <!-- Left Panel - Options -->
        <div class="customization-sidebar">
          <!-- Theme Settings -->
          <div class="customization-section">
            <h3 class="section-title">
              <Palette class="section-icon" />
              Theme & Colors
            </h3>
            
            <div class="form-group">
              <label class="form-label">Primary Color</label>
              <div class="color-picker-group">
                <input 
                  type="color" 
                  v-model="customization.primaryColor" 
                  class="color-input"
                />
                <input 
                  type="text" 
                  v-model="customization.primaryColor" 
                  class="color-text-input"
                />
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Secondary Color</label>
              <div class="color-picker-group">
                <input 
                  type="color" 
                  v-model="customization.secondaryColor" 
                  class="color-input"
                />
                <input 
                  type="text" 
                  v-model="customization.secondaryColor" 
                  class="color-text-input"
                />
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Background Style</label>
              <select v-model="customization.backgroundStyle" class="form-select">
                <option value="solid">Solid Color</option>
                <option value="gradient">Gradient</option>
                <option value="pattern">Pattern</option>
                <option value="image">Custom Image</option>
              </select>
            </div>
          </div>

          <!-- Logo & Branding -->
          <div class="customization-section">
            <h3 class="section-title">
              <Image class="section-icon" />
              Logo & Branding
            </h3>
            
            <div class="form-group">
              <label class="form-label">Community Logo</label>
              <div class="file-upload-area" @click="handleLogoUpload">
                <div v-if="customization.logo" class="logo-preview">
                  <img :src="customization.logo" alt="Logo Preview" class="preview-image" />
                </div>
                <div v-else class="upload-placeholder">
                  <Upload class="upload-icon" />
                  <span>Click to upload logo</span>
                </div>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Community Name</label>
              <input 
                type="text" 
                v-model="customization.communityName" 
                class="form-input"
                placeholder="Enter community name"
              />
            </div>

            <div class="form-group">
              <label class="form-label">Tagline</label>
              <input 
                type="text" 
                v-model="customization.tagline" 
                class="form-input"
                placeholder="Enter community tagline"
              />
            </div>
          </div>

          <!-- Layout Settings -->
          <div class="customization-section">
            <h3 class="section-title">
              <Layout class="section-icon" />
              Layout Settings
            </h3>
            
            <div class="form-group">
              <label class="form-label">Header Style</label>
              <div class="radio-group">
                <label class="radio-option">
                  <input 
                    type="radio" 
                    value="minimal" 
                    v-model="customization.headerStyle"
                  />
                  <span class="radio-label">Minimal</span>
                </label>
                <label class="radio-option">
                  <input 
                    type="radio" 
                    value="standard" 
                    v-model="customization.headerStyle"
                  />
                  <span class="radio-label">Standard</span>
                </label>
                <label class="radio-option">
                  <input 
                    type="radio" 
                    value="extended" 
                    v-model="customization.headerStyle"
                  />
                  <span class="radio-label">Extended</span>
                </label>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Sidebar Position</label>
              <select v-model="customization.sidebarPosition" class="form-select">
                <option value="left">Left</option>
                <option value="right">Right</option>
                <option value="both">Both Sides</option>
                <option value="none">No Sidebar</option>
              </select>
            </div>

            <div class="form-group">
              <label class="form-label">Post Layout</label>
              <div class="layout-options">
                <div 
                  class="layout-option"
                  :class="{ active: customization.postLayout === 'card' }"
                  @click="customization.postLayout = 'card'"
                >
                  <div class="layout-preview card-preview"></div>
                  <span class="layout-name">Card</span>
                </div>
                <div 
                  class="layout-option"
                  :class="{ active: customization.postLayout === 'list' }"
                  @click="customization.postLayout = 'list'"
                >
                  <div class="layout-preview list-preview"></div>
                  <span class="layout-name">List</span>
                </div>
                <div 
                  class="layout-option"
                  :class="{ active: customization.postLayout === 'grid' }"
                  @click="customization.postLayout = 'grid'"
                >
                  <div class="layout-preview grid-preview"></div>
                  <span class="layout-name">Grid</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Features -->
          <div class="customization-section">
            <h3 class="section-title">
              <Zap class="section-icon" />
              Features
            </h3>
            
            <div class="feature-toggles">
              <div class="feature-toggle">
                <label class="toggle-label">
                  <input 
                    type="checkbox" 
                    v-model="customization.features.comments"
                    class="toggle-input"
                  />
                  <span class="toggle-slider"></span>
                  <span class="toggle-text">Enable Comments</span>
                </label>
              </div>

              <div class="feature-toggle">
                <label class="toggle-label">
                  <input 
                    type="checkbox" 
                    v-model="customization.features.reactions"
                    class="toggle-input"
                  />
                  <span class="toggle-slider"></span>
                  <span class="toggle-text">Enable Reactions</span>
                </label>
              </div>

              <div class="feature-toggle">
                <label class="toggle-label">
                  <input 
                    type="checkbox" 
                    v-model="customization.features.sharing"
                    class="toggle-input"
                  />
                  <span class="toggle-slider"></span>
                  <span class="toggle-text">Enable Sharing</span>
                </label>
              </div>

              <div class="feature-toggle">
                <label class="toggle-label">
                  <input 
                    type="checkbox" 
                    v-model="customization.features.memberDirectory"
                    class="toggle-input"
                  />
                  <span class="toggle-slider"></span>
                  <span class="toggle-text">Member Directory</span>
                </label>
              </div>

              <div class="feature-toggle">
                <label class="toggle-label">
                  <input 
                    type="checkbox" 
                    v-model="customization.features.events"
                    class="toggle-input"
                  />
                  <span class="toggle-slider"></span>
                  <span class="toggle-text">Events Calendar</span>
                </label>
              </div>

              <div class="feature-toggle">
                <label class="toggle-label">
                  <input 
                    type="checkbox" 
                    v-model="customization.features.aiModeration"
                    class="toggle-input"
                  />
                  <span class="toggle-slider"></span>
                  <span class="toggle-text">AI Moderation</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Panel - Preview -->
        <div class="preview-panel">
          <div class="preview-header">
            <h3 class="preview-title">Live Preview</h3>
            <div class="preview-controls">
              <button 
                class="device-btn"
                :class="{ active: previewDevice === 'desktop' }"
                @click="previewDevice = 'desktop'"
              >
                <Monitor class="device-icon" />
              </button>
              <button 
                class="device-btn"
                :class="{ active: previewDevice === 'tablet' }"
                @click="previewDevice = 'tablet'"
              >
                <Tablet class="device-icon" />
              </button>
              <button 
                class="device-btn"
                :class="{ active: previewDevice === 'mobile' }"
                @click="previewDevice = 'mobile'"
              >
                <Smartphone class="device-icon" />
              </button>
            </div>
          </div>

          <div class="preview-container" :class="previewDevice">
            <div class="preview-frame">
              <!-- Mock Community Preview -->
              <div 
                class="mock-community"
                :style="{
                  '--primary-color': customization.primaryColor,
                  '--secondary-color': customization.secondaryColor
                }"
              >
                <!-- Mock Header -->
                <div class="mock-header" :class="customization.headerStyle">
                  <div class="mock-logo">
                    <img v-if="customization.logo" :src="customization.logo" alt="Logo" class="mock-logo-img" />
                    <div v-else class="mock-logo-placeholder">🤖</div>
                    <div class="mock-brand">
                      <div class="mock-name">{{ customization.communityName || 'Community Name' }}</div>
                      <div class="mock-tagline">{{ customization.tagline || 'Community tagline' }}</div>
                    </div>
                  </div>
                  <div class="mock-nav">
                    <div class="mock-nav-item active">Feed</div>
                    <div class="mock-nav-item">Members</div>
                    <div class="mock-nav-item">Events</div>
                  </div>
                </div>

                <!-- Mock Content -->
                <div class="mock-content" :class="customization.sidebarPosition">
                  <div v-if="customization.sidebarPosition === 'left' || customization.sidebarPosition === 'both'" class="mock-sidebar left">
                    <div class="mock-widget">
                      <div class="mock-widget-title">Community Stats</div>
                      <div class="mock-stats">
                        <div class="mock-stat">127 Posts</div>
                        <div class="mock-stat">89 Members</div>
                      </div>
                    </div>
                  </div>

                  <div class="mock-main">
                    <div class="mock-posts" :class="customization.postLayout">
                      <div class="mock-post">
                        <div class="mock-post-header">
                          <div class="mock-avatar"></div>
                          <div class="mock-post-info">
                            <div class="mock-author">John Doe</div>
                            <div class="mock-time">2 hours ago</div>
                          </div>
                        </div>
                        <div class="mock-post-content">
                          This is a sample post to show how your community will look with the current customization settings.
                        </div>
                        <div v-if="customization.features.reactions || customization.features.comments" class="mock-post-actions">
                          <div v-if="customization.features.reactions" class="mock-action">❤️ 12</div>
                          <div v-if="customization.features.comments" class="mock-action">💬 5</div>
                          <div v-if="customization.features.sharing" class="mock-action">🔗 Share</div>
                        </div>
                      </div>

                      <div class="mock-post">
                        <div class="mock-post-header">
                          <div class="mock-avatar"></div>
                          <div class="mock-post-info">
                            <div class="mock-author">Jane Smith</div>
                            <div class="mock-time">4 hours ago</div>
                          </div>
                        </div>
                        <div class="mock-post-content">
                          Another example post with an image to demonstrate the layout.
                        </div>
                        <div class="mock-post-image"></div>
                        <div v-if="customization.features.reactions || customization.features.comments" class="mock-post-actions">
                          <div v-if="customization.features.reactions" class="mock-action">❤️ 8</div>
                          <div v-if="customization.features.comments" class="mock-action">💬 3</div>
                          <div v-if="customization.features.sharing" class="mock-action">🔗 Share</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div v-if="customization.sidebarPosition === 'right' || customization.sidebarPosition === 'both'" class="mock-sidebar right">
                    <div class="mock-widget">
                      <div class="mock-widget-title">Recent Activity</div>
                      <div class="mock-activity">
                        <div class="mock-activity-item">User joined</div>
                        <div class="mock-activity-item">New post shared</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {
  Home,
  Users,
  ShoppingCart,
  BarChart3,
  Settings,
  ChevronDown,
  ChevronRight,
  User,
  Play,
  BookOpen,
  Crown,
  Globe,
  Zap,
  Languages,
  LogOut,
  Palette,
  Eye,
  Save,
  Image,
  Upload,
  Layout,
  Monitor,
  Tablet,
  Smartphone
} from 'lucide-vue-next'

// State
const showUserMenu = ref(false)
const previewDevice = ref('desktop')

interface CustomizationSettings {
  primaryColor: string
  secondaryColor: string
  backgroundStyle: string
  logo: string
  communityName: string
  tagline: string
  headerStyle: string
  sidebarPosition: string
  postLayout: string
  features: {
    comments: boolean
    reactions: boolean
    sharing: boolean
    memberDirectory: boolean
    events: boolean
    aiModeration: boolean
  }
}

const customization = ref<CustomizationSettings>({
  primaryColor: '#3b82f6',
  secondaryColor: '#1d4ed8',
  backgroundStyle: 'solid',
  logo: '',
  communityName: 'AI Communication Hub',
  tagline: 'Connect, Learn, and Grow Together',
  headerStyle: 'standard',
  sidebarPosition: 'both',
  postLayout: 'card',
  features: {
    comments: true,
    reactions: true,
    sharing: true,
    memberDirectory: true,
    events: false,
    aiModeration: true
  }
})

// Methods
const toggleUserMenu = () => {
  showUserMenu.value = !showUserMenu.value
}

const handleLogoUpload = () => {
  // TODO: Implement file upload
  console.log('Logo upload clicked')
}

const handlePreview = () => {
  // TODO: Open full preview in new window
  console.log('Preview clicked')
}

const handleSave = () => {
  // TODO: Save customization settings
  console.log('Save clicked', customization.value)
}

// Close dropdown when clicking outside
onMounted(() => {
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement
    if (!target.closest('.user-menu')) {
      showUserMenu.value = false
    }
  })
})
</script>

<style scoped>
.customize-community-page {
  min-height: 100vh;
  background-color: #f8fafc;
}

/* Header Styles (same as other pages) */
.header {
  background: white;
  border-bottom: 1px solid #e2e8f0;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  position: relative;
}

.header-left {
  display: flex;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 8px;
}

.logo-icon {
  font-size: 24px;
}

.logo-text {
  font-size: 20px;
  font-weight: 700;
  color: #1e293b;
}

.logo-subtitle {
  font-size: 10px;
  color: #64748b;
  font-weight: 500;
}

.nav {
  display: flex;
  gap: 32px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: #64748b;
  font-weight: 500;
  padding: 8px 0;
  border-bottom: 2px solid transparent;
  transition: all 0.2s;
}

.nav-item.active {
  color: #3b82f6;
  border-bottom-color: #3b82f6;
}

.nav-item:hover {
  color: #3b82f6;
}

.nav-icon {
  width: 16px;
  height: 16px;
}

.nav-chevron {
  width: 12px;
  height: 12px;
  margin-left: 4px;
}

.header-right {
  position: relative;
}

.user-menu {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  padding: 4px;
  border-radius: 8px;
  transition: background-color 0.2s;
}

.user-menu:hover {
  background-color: #f1f5f9;
}

.user-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
}

.chevron {
  width: 16px;
  height: 16px;
  color: #64748b;
}

.user-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  width: 280px;
  z-index: 1000;
  margin-top: 8px;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border-bottom: 1px solid #e2e8f0;
}

.dropdown-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.user-name {
  font-weight: 600;
  color: #1e293b;
}

.user-email {
  font-size: 14px;
  color: #64748b;
}

.credits-info {
  padding: 16px;
  background-color: #dbeafe;
  border-radius: 8px;
  margin: 16px;
}

.credits-label {
  font-size: 14px;
  color: #1e40af;
  font-weight: 500;
}

.credits-value {
  font-size: 16px;
  font-weight: 600;
  color: #1e40af;
}

.menu-items {
  padding: 8px 0;
}

.menu-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  text-decoration: none;
  color: #374151;
  transition: background-color 0.2s;
}

.menu-item:hover {
  background-color: #f9fafb;
}

.menu-item.sign-out {
  color: #ef4444;
  border-top: 1px solid #e2e8f0;
  margin-top: 8px;
}

.menu-icon {
  width: 16px;
  height: 16px;
}

.menu-arrow {
  width: 16px;
  height: 16px;
  margin-left: auto;
}

/* Main Content */
.main-content {
  padding: 24px;
  max-width: 1600px;
  margin: 0 auto;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
  font-size: 14px;
}

.breadcrumb-link {
  color: #3b82f6;
  text-decoration: none;
  transition: color 0.2s;
}

.breadcrumb-link:hover {
  color: #2563eb;
}

.breadcrumb-separator {
  width: 16px;
  height: 16px;
  color: #64748b;
}

.breadcrumb-current {
  color: #64748b;
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
}

.page-title {
  display: flex;
  align-items: center;
  gap: 12px;
}

.page-icon {
  width: 24px;
  height: 24px;
  color: #3b82f6;
}

.page-title h1 {
  font-size: 28px;
  font-weight: 700;
  color: #1e293b;
  margin: 0;
}

.page-actions {
  display: flex;
  gap: 12px;
}

.preview-btn,
.save-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.preview-btn {
  background: white;
  color: #3b82f6;
  border: 1px solid #3b82f6;
}

.preview-btn:hover {
  background: #eff6ff;
}

.save-btn {
  background: #3b82f6;
  color: white;
}

.save-btn:hover {
  background: #2563eb;
}

.preview-icon,
.save-icon {
  width: 16px;
  height: 16px;
}

/* Customization Container */
.customization-container {
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 32px;
}

.customization-sidebar {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.customization-section {
  background: white;
  border-radius: 12px;
  padding: 24px;
  border: 1px solid #e2e8f0;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 20px;
}

.section-icon {
  width: 20px;
  height: 20px;
  color: #3b82f6;
}

.form-group {
  margin-bottom: 20px;
}

.form-label {
  display: block;
  font-weight: 500;
  color: #374151;
  margin-bottom: 8px;
  font-size: 14px;
}

.color-picker-group {
  display: flex;
  gap: 8px;
  align-items: center;
}

.color-input {
  width: 50px;
  height: 40px;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  cursor: pointer;
}

.color-text-input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  font-size: 14px;
}

.form-select,
.form-input {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  font-size: 14px;
  transition: border-color 0.2s;
}

.form-select:focus,
.form-input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.file-upload-area {
  border: 2px dashed #e2e8f0;
  border-radius: 8px;
  padding: 24px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s;
}

.file-upload-area:hover {
  border-color: #3b82f6;
  background: #f8fafc;
}

.logo-preview {
  display: flex;
  justify-content: center;
}

.preview-image {
  max-width: 100px;
  max-height: 60px;
  object-fit: contain;
}

.upload-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: #64748b;
}

.upload-icon {
  width: 24px;
  height: 24px;
}

.radio-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.radio-option {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.radio-label {
  font-size: 14px;
  color: #374151;
}

.layout-options {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.layout-option {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 12px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
}

.layout-option:hover {
  border-color: #3b82f6;
}

.layout-option.active {
  border-color: #3b82f6;
  background: #eff6ff;
}

.layout-preview {
  width: 40px;
  height: 30px;
  border-radius: 4px;
  background: #f1f5f9;
  position: relative;
}

.card-preview::before {
  content: '';
  position: absolute;
  top: 4px;
  left: 4px;
  right: 4px;
  height: 8px;
  background: #3b82f6;
  border-radius: 2px;
}

.list-preview::before {
  content: '';
  position: absolute;
  top: 4px;
  left: 4px;
  right: 4px;
  height: 3px;
  background: #3b82f6;
  border-radius: 1px;
}

.list-preview::after {
  content: '';
  position: absolute;
  top: 12px;
  left: 4px;
  right: 4px;
  height: 3px;
  background: #3b82f6;
  border-radius: 1px;
}

.grid-preview::before {
  content: '';
  position: absolute;
  top: 4px;
  left: 4px;
  width: 12px;
  height: 12px;
  background: #3b82f6;
  border-radius: 2px;
}

.grid-preview::after {
  content: '';
  position: absolute;
  top: 4px;
  right: 4px;
  width: 12px;
  height: 12px;
  background: #3b82f6;
  border-radius: 2px;
}

.layout-name {
  font-size: 12px;
  color: #64748b;
  font-weight: 500;
}

.feature-toggles {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.feature-toggle {
  display: flex;
  align-items: center;
}

.toggle-label {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
}

.toggle-input {
  display: none;
}

.toggle-slider {
  position: relative;
  width: 44px;
  height: 24px;
  background: #cbd5e1;
  border-radius: 24px;
  transition: 0.3s;
}

.toggle-slider::before {
  content: '';
  position: absolute;
  width: 18px;
  height: 18px;
  background: white;
  border-radius: 50%;
  top: 3px;
  left: 3px;
  transition: 0.3s;
}

.toggle-input:checked + .toggle-slider {
  background: #3b82f6;
}

.toggle-input:checked + .toggle-slider::before {
  transform: translateX(20px);
}

.toggle-text {
  font-size: 14px;
  color: #374151;
}

/* Preview Panel */
.preview-panel {
  background: white;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  overflow: hidden;
}

.preview-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  border-bottom: 1px solid #e2e8f0;
}

.preview-title {
  font-size: 18px;
  font-weight: 600;
  color: #1e293b;
}

.preview-controls {
  display: flex;
  gap: 8px;
}

.device-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: none;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
}

.device-btn:hover {
  background: #f8fafc;
}

.device-btn.active {
  background: #3b82f6;
  border-color: #3b82f6;
  color: white;
}

.device-icon {
  width: 16px;
  height: 16px;
}

.preview-container {
  padding: 24px;
  background: #f8fafc;
  min-height: 600px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.preview-container.desktop .preview-frame {
  width: 100%;
  max-width: 1000px;
}

.preview-container.tablet .preview-frame {
  width: 768px;
}

.preview-container.mobile .preview-frame {
  width: 375px;
}

.preview-frame {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Mock Community Styles */
.mock-community {
  font-family: inherit;
}

.mock-header {
  background: var(--primary-color);
  color: white;
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.mock-header.minimal {
  padding: 12px 20px;
}

.mock-header.extended {
  padding: 24px 20px;
}

.mock-logo {
  display: flex;
  align-items: center;
  gap: 12px;
}

.mock-logo-img {
  width: 32px;
  height: 32px;
  border-radius: 4px;
  object-fit: cover;
}

.mock-logo-placeholder {
  width: 32px;
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
}

.mock-brand {
  display: flex;
  flex-direction: column;
}

.mock-name {
  font-weight: 600;
  font-size: 16px;
}

.mock-tagline {
  font-size: 12px;
  opacity: 0.8;
}

.mock-nav {
  display: flex;
  gap: 20px;
}

.mock-nav-item {
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.mock-nav-item.active {
  background: rgba(255, 255, 255, 0.2);
}

.mock-content {
  display: grid;
  gap: 20px;
  padding: 20px;
}

.mock-content.left {
  grid-template-columns: 200px 1fr;
}

.mock-content.right {
  grid-template-columns: 1fr 200px;
}

.mock-content.both {
  grid-template-columns: 200px 1fr 200px;
}

.mock-content.none {
  grid-template-columns: 1fr;
}

.mock-sidebar {
  background: #f8fafc;
  border-radius: 8px;
  padding: 16px;
}

.mock-widget {
  margin-bottom: 16px;
}

.mock-widget-title {
  font-weight: 600;
  font-size: 14px;
  color: #1e293b;
  margin-bottom: 12px;
}

.mock-stats {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.mock-stat {
  font-size: 12px;
  color: #64748b;
}

.mock-activity {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.mock-activity-item {
  font-size: 12px;
  color: #64748b;
}

.mock-posts {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.mock-posts.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
}

.mock-post {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 16px;
}

.mock-posts.list .mock-post {
  border-radius: 0;
  border-left: none;
  border-right: none;
  border-top: none;
  padding: 12px 0;
}

.mock-post-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.mock-avatar {
  width: 32px;
  height: 32px;
  background: #e2e8f0;
  border-radius: 50%;
}

.mock-post-info {
  flex: 1;
}

.mock-author {
  font-weight: 600;
  font-size: 14px;
  color: #1e293b;
}

.mock-time {
  font-size: 12px;
  color: #64748b;
}

.mock-post-content {
  font-size: 14px;
  color: #374151;
  line-height: 1.5;
  margin-bottom: 12px;
}

.mock-post-image {
  width: 100%;
  height: 120px;
  background: #f1f5f9;
  border-radius: 6px;
  margin-bottom: 12px;
}

.mock-post-actions {
  display: flex;
  gap: 16px;
  padding-top: 12px;
  border-top: 1px solid #f1f5f9;
}

.mock-action {
  font-size: 12px;
  color: #64748b;
  cursor: pointer;
}

@media (max-width: 1200px) {
  .customization-container {
    grid-template-columns: 350px 1fr;
    gap: 24px;
  }
}

@media (max-width: 1024px) {
  .customization-container {
    grid-template-columns: 1fr;
  }
  
  .customization-sidebar {
    order: 2;
  }
  
  .preview-panel {
    order: 1;
  }
}

@media (max-width: 768px) {
  .main-content {
    padding: 16px;
  }
  
  .page-header {
    flex-direction: column;
    gap: 16px;
    align-items: stretch;
  }
  
  .page-actions {
    justify-content: stretch;
  }
  
  .preview-btn,
  .save-btn {
    flex: 1;
  }
  
  .layout-options {
    grid-template-columns: 1fr;
  }
  
  .preview-container.tablet .preview-frame,
  .preview-container.mobile .preview-frame {
    width: 100%;
  }
}
</style>
