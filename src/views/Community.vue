<template>
  <div class="community-page">
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
      <!-- Page Header -->
      <div class="page-header">
        <div class="page-title">
          <Settings class="page-icon" />
          <h1>Community</h1>
          <span class="community-count">{{ communities.length }}</span>
        </div>
        
        <div class="page-actions">
          <div class="search-container">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search by Community Name..."
              class="search-input"
            />
            <button class="search-button" @click="handleSearch">
              <Search class="search-icon" />
              Search
            </button>
          </div>
          
          <button class="new-community-btn" @click="handleNewCommunity">
            <Plus class="plus-icon" />
            New Community
          </button>
        </div>
      </div>

      <!-- Communities Grid -->
      <div class="communities-grid">
        <div
          v-for="community in filteredCommunities"
          :key="community.id"
          class="community-card"
        >
          <!-- Card Header -->
          <div class="card-header">
            <h3 class="community-name">{{ community.name }}</h3>
            <div class="card-actions">
              <label class="toggle-switch">
                <input
                  type="checkbox"
                  v-model="community.isActive"
                  @change="toggleCommunityStatus(community)"
                />
                <span class="toggle-slider"></span>
              </label>
              
              <div class="actions-dropdown" :class="{ open: community.showActions }">
                <button
                  class="actions-button"
                  @click="toggleActions(community)"
                >
                  Actions
                  <ChevronDown class="actions-chevron" />
                </button>
                
                <div v-if="community.showActions" class="dropdown-menu">
                  <button @click="editCommunity(community)" class="dropdown-item">
                    <Edit class="dropdown-icon" />
                    Edit
                  </button>
                  <button @click="visitCommunity(community)" class="dropdown-item">
                    <ExternalLink class="dropdown-icon" />
                    Visit
                  </button>
                  <button @click="customizeCommunity(community)" class="dropdown-item">
                    <Palette class="dropdown-icon" />
                    Customize Community
                  </button>
                  <button @click="cloneCommunity(community)" class="dropdown-item">
                    <Copy class="dropdown-icon" />
                    Clone
                  </button>
                  <button @click="aiMemberFeed(community)" class="dropdown-item">
                    <Bot class="dropdown-icon" />
                    AI Member Feed
                  </button>
                  <button @click="aiCustomPromptFeed(community)" class="dropdown-item">
                    <MessageSquare class="dropdown-icon" />
                    AI Custom Prompt Feed
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Card Image -->
          <div class="card-image">
            <img :src="community.image" :alt="community.name" />
            <div class="image-overlay">
              <span class="category-badge">{{ community.category }}</span>
            </div>
          </div>

          <!-- Card Content -->
          <div class="card-content">
            <p class="community-description">{{ community.description }}</p>
            
            <div class="card-footer">
              <div class="community-date">
                <Calendar class="date-icon" />
                {{ formatDate(community.createdAt) }}
              </div>
              
              <div class="member-count" v-if="community.memberCount">
                <Users class="member-icon" />
                {{ community.memberCount }} members
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="filteredCommunities.length === 0" class="empty-state">
        <div class="empty-icon">
          <Users class="empty-users-icon" />
        </div>
        <h3 class="empty-title">No communities found</h3>
        <p class="empty-description">
          {{ searchQuery ? 'Try adjusting your search terms' : 'Create your first community to get started' }}
        </p>
        <button v-if="!searchQuery" class="empty-action-btn" @click="handleNewCommunity">
          <Plus class="plus-icon" />
          Create Community
        </button>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
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
  Search,
  Plus,
  Edit,
  ExternalLink,
  Palette,
  Copy,
  Bot,
  MessageSquare,
  Calendar
} from 'lucide-vue-next'

// Router
const router = useRouter()

// State
const showUserMenu = ref(false)
const searchQuery = ref('')

interface Community {
  id: string
  name: string
  category: string
  description: string
  image: string
  createdAt: Date
  isActive: boolean
  showActions: boolean
  memberCount?: number
}

const communities = ref<Community[]>([
  {
    id: '1',
    name: 'PATRON',
    category: 'Subscription Services',
    description: 'A premium subscription community focused on exclusive content and member benefits with advanced AI-powered recommendations.',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
    createdAt: new Date('2025-02-28'),
    isActive: true,
    showActions: false,
    memberCount: 1247
  },
  {
    id: '2',
    name: 'Homohumanicus',
    category: 'Health and Wellness',
    description: 'A holistic wellness community promoting human potential through mindfulness, fitness, and personal development practices.',
    image: 'https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
    createdAt: new Date('2025-02-13'),
    isActive: true,
    showActions: false,
    memberCount: 892
  },
  {
    id: '3',
    name: 'Ziołolecznictwo',
    category: 'Health and Wellness',
    description: 'Traditional herbal medicine community sharing knowledge about natural healing methods and plant-based remedies.',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
    createdAt: new Date('2025-02-05'),
    isActive: true,
    showActions: false,
    memberCount: 634
  },
  {
    id: '4',
    name: 'Przedsiębiorcy RP',
    category: 'Entrepreneurship',
    description: 'A dynamic entrepreneurship community focused on starting and growing businesses in the Polish market with AI-driven insights.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
    createdAt: new Date('2025-02-04'),
    isActive: true,
    showActions: false,
    memberCount: 1156
  },
  {
    id: '5',
    name: 'Narodowa Agencja Innowacji',
    category: 'Innovation & Technology',
    description: 'National innovation agency community presenting projects focused on technological transformation and digital advancement.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
    createdAt: new Date('2024-11-28'),
    isActive: true,
    showActions: false,
    memberCount: 2341
  },
  {
    id: '6',
    name: 'Wolność i Przedsiębiorczość',
    category: 'Business & Finance',
    description: 'Freedom and entrepreneurship community by "Bank Zaufania" presenting projects focused on financial transformation.',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
    createdAt: new Date('2024-11-27'),
    isActive: true,
    showActions: false,
    memberCount: 987
  }
])

// Computed
const filteredCommunities = computed(() => {
  if (!searchQuery.value) return communities.value
  
  return communities.value.filter(community =>
    community.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    community.category.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    community.description.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

// Methods
const toggleUserMenu = () => {
  showUserMenu.value = !showUserMenu.value
}

const handleSearch = () => {
  // Search is reactive, this could trigger analytics or other actions
  console.log('Searching for:', searchQuery.value)
}

const handleNewCommunity = () => {
  // TODO: Open new community modal/page
  console.log('Creating new community')
}

const toggleActions = (community: Community) => {
  // Close all other dropdowns
  communities.value.forEach(c => {
    if (c.id !== community.id) {
      c.showActions = false
    }
  })
  
  community.showActions = !community.showActions
}

const toggleCommunityStatus = (community: Community) => {
  console.log(`Community ${community.name} is now ${community.isActive ? 'active' : 'inactive'}`)
  // TODO: API call to update community status
}

const editCommunity = (community: Community) => {
  console.log('Editing community:', community.name)
  community.showActions = false
  // TODO: Open edit modal/page
}

const visitCommunity = (community: Community) => {
  console.log('Visiting community:', community.name)
  community.showActions = false
  // TODO: Open community in new tab
}

const customizeCommunity = (community: Community) => {
  console.log('Customizing community:', community.name)
  community.showActions = false
  // Navigate to customize community page
  router.push(`/community/${community.id}/customize`)
}

const cloneCommunity = (community: Community) => {
  console.log('Cloning community:', community.name)
  community.showActions = false
  // TODO: Clone community logic
}

const aiMemberFeed = (community: Community) => {
  console.log('AI Member Feed for:', community.name)
  community.showActions = false
  // TODO: Open AI member feed
}

const aiCustomPromptFeed = (community: Community) => {
  console.log('AI Custom Prompt Feed for:', community.name)
  community.showActions = false
  // TODO: Open AI custom prompt feed
}

const formatDate = (date: Date) => {
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  })
}

// Close dropdowns when clicking outside
onMounted(() => {
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement
    if (!target.closest('.actions-dropdown') && !target.closest('.user-menu')) {
      communities.value.forEach(c => c.showActions = false)
      showUserMenu.value = false
    }
  })
})
</script>

<style scoped>
.community-page {
  min-height: 100vh;
  background-color: #f8fafc;
}

/* Header Styles (same as Dashboard) */
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
  max-width: 1400px;
  margin: 0 auto;
}

/* Page Header */
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

.community-count {
  background: #3b82f6;
  color: white;
  font-size: 14px;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 20px;
  min-width: 24px;
  text-align: center;
}

.page-actions {
  display: flex;
  gap: 16px;
  align-items: center;
}

.search-container {
  display: flex;
  gap: 12px;
}

.search-input {
  width: 300px;
  padding: 12px 16px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 14px;
  background: white;
  transition: border-color 0.2s;
}

.search-input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.search-button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}

.search-button:hover {
  background: #2563eb;
}

.search-icon {
  width: 16px;
  height: 16px;
}

.new-community-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background: #10b981;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}

.new-community-btn:hover {
  background: #059669;
}

.plus-icon {
  width: 16px;
  height: 16px;
}

/* Communities Grid */
.communities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 24px;
}

.community-card {
  background: white;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  overflow: hidden;
  transition: all 0.2s;
}

.community-card:hover {
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px 16px;
}

.community-name {
  font-size: 18px;
  font-weight: 600;
  color: #1e293b;
  margin: 0;
}

.card-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.toggle-switch {
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
}

.toggle-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.toggle-slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #cbd5e1;
  transition: 0.3s;
  border-radius: 24px;
}

.toggle-slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  transition: 0.3s;
  border-radius: 50%;
}

input:checked + .toggle-slider {
  background-color: #3b82f6;
}

input:checked + .toggle-slider:before {
  transform: translateX(20px);
}

.actions-dropdown {
  position: relative;
}

.actions-button {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}

.actions-button:hover {
  background: #2563eb;
}

.actions-chevron {
  width: 14px;
  height: 14px;
  transition: transform 0.2s;
}

.actions-dropdown.open .actions-chevron {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 100;
  min-width: 200px;
  margin-top: 4px;
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 12px 16px;
  background: none;
  border: none;
  text-align: left;
  font-size: 14px;
  color: #374151;
  cursor: pointer;
  transition: background-color 0.2s;
}

.dropdown-item:hover {
  background: #f9fafb;
}

.dropdown-icon {
  width: 16px;
  height: 16px;
  color: #64748b;
}

.card-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-overlay {
  position: absolute;
  top: 12px;
  left: 12px;
}

.category-badge {
  background: rgba(59, 130, 246, 0.9);
  color: white;
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 500;
}

.card-content {
  padding: 20px;
}

.community-description {
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 16px;
  font-size: 14px;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: #64748b;
}

.community-date,
.member-count {
  display: flex;
  align-items: center;
  gap: 6px;
}

.date-icon,
.member-icon {
  width: 14px;
  height: 14px;
}

/* Empty State */
.empty-state {
  text-align: center;
  padding: 80px 20px;
}

.empty-icon {
  width: 80px;
  height: 80px;
  background: #f1f5f9;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
}

.empty-users-icon {
  width: 32px;
  height: 32px;
  color: #64748b;
}

.empty-title {
  font-size: 24px;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 12px;
}

.empty-description {
  color: #64748b;
  font-size: 16px;
  margin-bottom: 32px;
}

.empty-action-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}

.empty-action-btn:hover {
  background: #2563eb;
}

@media (max-width: 1200px) {
  .communities-grid {
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  }
}

@media (max-width: 768px) {
  .page-header {
    flex-direction: column;
    gap: 20px;
    align-items: stretch;
  }
  
  .page-actions {
    flex-direction: column;
    gap: 12px;
  }
  
  .search-container {
    flex-direction: column;
  }
  
  .search-input {
    width: 100%;
  }
  
  .communities-grid {
    grid-template-columns: 1fr;
  }
  
  .nav {
    display: none;
  }
}
</style>
