<template>
  <div class="portal">
    <!-- Header -->
    <header class="header">
      <div class="header-left">
        <div class="logo">
          <div class="logo-icon">🤖</div>
          <div class="logo-text">
            <span class="logo-title">AITribes</span>
            <span class="logo-subtitle">COMMUNICATION PORTAL</span>
          </div>
        </div>
      </div>
      
      <div class="header-center">
        <div class="search-bar">
          <Search class="search-icon" />
          <input 
            type="text" 
            placeholder="Search discussions, members, topics..." 
            class="search-input"
            v-model="searchQuery"
          />
        </div>
      </div>

      <div class="header-right">
        <button class="notification-btn">
          <Bell class="notification-icon" />
          <span class="notification-badge">3</span>
        </button>
        
        <div class="user-menu" @click="toggleUserMenu">
          <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop" 
               alt="User Avatar" class="user-avatar">
          <ChevronDown class="chevron" />
        </div>
        
        <!-- User Dropdown -->
        <div v-if="showUserMenu" class="user-dropdown">
          <div class="user-info">
            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop" 
                 alt="User Avatar" class="dropdown-avatar">
            <div>
              <div class="user-name">{{ authStore.profile?.full_name || 'User' }}</div>
              <div class="user-email">{{ authStore.user?.email }}</div>
            </div>
          </div>
          
          <div class="menu-items">
            <a href="#" class="menu-item">
              <User class="menu-icon" />
              Profile Settings
            </a>
            <a href="#" class="menu-item">
              <Settings class="menu-icon" />
              Preferences
            </a>
            <a href="#" class="menu-item" @click="handleLogout">
              <LogOut class="menu-icon" />
              Sign Out
            </a>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <div class="main-container">
      <!-- Left Sidebar -->
      <aside class="left-sidebar">
        <!-- Community Stats -->
        <div class="community-card">
          <div class="community-header">
            <div class="community-logo">
              <div class="logo-circle">
                <Brain class="community-icon" />
              </div>
            </div>
            <div class="community-info">
              <h3 class="community-name">AI Communication Hub</h3>
              <p class="community-desc">Connect with AI experts and enthusiasts for meaningful discussions and collaborative growth.</p>
            </div>
          </div>
          
          <div class="community-stats">
            <div class="stat-item">
              <div class="stat-number">{{ communityStats.posts }}</div>
              <div class="stat-label">Posts</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">{{ communityStats.members }}</div>
              <div class="stat-label">Members</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">{{ communityStats.discussions }}</div>
              <div class="stat-label">Discussions</div>
            </div>
          </div>
        </div>

        <!-- Navigation Menu -->
        <nav class="nav-menu">
          <div class="nav-section">
            <div class="nav-item active">
              <Home class="nav-icon" />
              <span>Feed</span>
            </div>
            <div class="nav-item">
              <Users class="nav-icon" />
              <span>Members</span>
            </div>
            <div class="nav-item">
              <MessageSquare class="nav-icon" />
              <span>Discussions</span>
            </div>
            <div class="nav-item">
              <Calendar class="nav-icon" />
              <span>Events</span>
            </div>
            <div class="nav-item">
              <BookOpen class="nav-icon" />
              <span>Resources</span>
            </div>
            <div class="nav-item">
              <BarChart3 class="nav-icon" />
              <span>Analytics</span>
            </div>
            <div class="nav-item">
              <Award class="nav-icon" />
              <span>Achievements</span>
            </div>
          </div>
        </nav>

        <!-- Timeline -->
        <div class="timeline-section">
          <h4 class="timeline-title">Recent Activity</h4>
          <div class="timeline-list">
            <div v-for="activity in recentActivity" :key="activity.id" class="timeline-item">
              <div class="timeline-time">{{ activity.time }}</div>
              <div class="timeline-content">
                <img :src="activity.avatar" :alt="activity.user" class="timeline-avatar">
                <div class="timeline-text">
                  <strong>{{ activity.user }}</strong> {{ activity.action }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>

      <!-- Main Content Area -->
      <main class="main-content">
        <!-- Post Creation -->
        <div class="post-creator">
          <div class="creator-header">
            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop" 
                 alt="Your Avatar" class="creator-avatar">
            <input 
              type="text" 
              placeholder="What's on your mind about AI and communication?" 
              class="creator-input"
              @click="showPostModal = true"
              readonly
            />
          </div>
          <div class="creator-actions">
            <button class="action-btn">
              <Image class="action-icon" />
              Photo
            </button>
            <button class="action-btn">
              <Video class="action-icon" />
              Video
            </button>
            <button class="action-btn">
              <FileText class="action-icon" />
              Article
            </button>
          </div>
        </div>

        <!-- Posts Feed -->
        <div class="posts-feed">
          <div v-for="post in posts" :key="post.id" class="post-card">
            <div class="post-header">
              <img :src="post.author.avatar" :alt="post.author.name" class="post-avatar">
              <div class="post-info">
                <div class="post-author">{{ post.author.name }}</div>
                <div class="post-meta">
                  <span class="post-time">{{ post.timeAgo }}</span>
                  <span class="post-visibility">{{ post.visibility }}</span>
                </div>
              </div>
              <button class="post-menu">
                <MoreHorizontal class="menu-icon" />
              </button>
            </div>

            <div class="post-content">
              <p class="post-text">{{ post.content }}</p>
              <div v-if="post.image" class="post-image">
                <img :src="post.image" :alt="post.author.name" class="content-image">
              </div>
              <div v-if="post.link" class="post-link">
                <div class="link-preview">
                  <div class="link-content">
                    <h4 class="link-title">{{ post.link.title }}</h4>
                    <p class="link-description">{{ post.link.description }}</p>
                    <span class="link-url">{{ post.link.url }}</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="post-actions">
              <button class="action-button" :class="{ active: post.liked }">
                <Heart class="action-icon" />
                <span>{{ post.likes }}</span>
              </button>
              <button class="action-button">
                <MessageCircle class="action-icon" />
                <span>{{ post.comments }}</span>
              </button>
              <button class="action-button">
                <Share2 class="action-icon" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      <!-- Right Sidebar -->
      <aside class="right-sidebar">
        <!-- Points System -->
        <div class="points-card">
          <div class="points-header">
            <h3 class="points-title">My Points</h3>
            <div class="points-total">{{ userPoints.total }}</div>
          </div>
          
          <div class="points-list">
            <div v-for="reward in pointRewards" :key="reward.id" class="reward-item">
              <div class="reward-text">{{ reward.action }}</div>
              <div class="reward-points">{{ reward.points }} Points</div>
            </div>
          </div>
        </div>

        <!-- Referral System -->
        <div class="referral-card">
          <h3 class="referral-title">Referral Link</h3>
          <div class="referral-input-group">
            <input 
              type="text" 
              :value="referralLink" 
              readonly 
              class="referral-input"
            />
            <button @click="copyReferralLink" class="copy-btn">
              {{ copied ? 'Copied!' : 'Copy' }}
            </button>
          </div>
          <p class="referral-description">
            Earn 10 points for every new sign-up to the community through your referral link.
          </p>
        </div>

        <!-- Trending Topics -->
        <div class="trending-card">
          <h3 class="trending-title">Trending Topics</h3>
          <div class="trending-list">
            <div v-for="topic in trendingTopics" :key="topic.id" class="trending-item">
              <span class="topic-tag">#{{ topic.name }}</span>
              <span class="topic-count">{{ topic.posts }} posts</span>
            </div>
          </div>
        </div>

        <!-- Suggested Connections -->
        <div class="suggestions-card">
          <h3 class="suggestions-title">Suggested Connections</h3>
          <div class="suggestions-list">
            <div v-for="user in suggestedUsers" :key="user.id" class="suggestion-item">
              <img :src="user.avatar" :alt="user.name" class="suggestion-avatar">
              <div class="suggestion-info">
                <div class="suggestion-name">{{ user.name }}</div>
                <div class="suggestion-role">{{ user.role }}</div>
              </div>
              <button class="connect-btn">Connect</button>
            </div>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import {
  Search,
  Bell,
  ChevronDown,
  User,
  Settings,
  LogOut,
  Home,
  Users,
  MessageSquare,
  Calendar,
  BookOpen,
  BarChart3,
  Award,
  Brain,
  Image,
  Video,
  FileText,
  MoreHorizontal,
  Heart,
  MessageCircle,
  Share2
} from 'lucide-vue-next'

const router = useRouter()
const authStore = useAuthStore()

// Reactive state
const showUserMenu = ref(false)
const showPostModal = ref(false)
const searchQuery = ref('')
const copied = ref(false)

// Mock data
const communityStats = ref({
  posts: 127,
  members: 89,
  discussions: 34
})

const userPoints = ref({
  total: 1247
})

const pointRewards = ref([
  { id: 1, action: 'Make a post to get', points: 5 },
  { id: 2, action: 'Comment on a post to get', points: 2 },
  { id: 3, action: 'Like a comment or post to get', points: 1 },
  { id: 4, action: 'Upload Profile picture to get', points: 10 },
  { id: 5, action: 'Mark complete a lesson to get', points: 15 },
  { id: 6, action: 'Viral share of referral link', points: 25 }
])

const referralLink = ref('https://aitribes.com/invite/janusz123')

const recentActivity = ref([
  {
    id: 1,
    time: '2 min ago',
    user: 'Sarah Chen',
    action: 'shared a new AI research paper',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop'
  },
  {
    id: 2,
    time: '15 min ago',
    user: 'Marcus Johnson',
    action: 'started a discussion about GPT-4',
    avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop'
  },
  {
    id: 3,
    time: '1 hour ago',
    user: 'Elena Rodriguez',
    action: 'joined the community',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop'
  }
])

const posts = ref([
  {
    id: 1,
    author: {
      name: 'Dr. Alex Thompson',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop'
    },
    timeAgo: '2 hours ago',
    visibility: 'Public',
    content: 'Just published a comprehensive guide on implementing AI-driven communication strategies in enterprise environments. The key is balancing automation with human touch points.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
    likes: 24,
    comments: 8,
    liked: false
  },
  {
    id: 2,
    author: {
      name: 'Maria Santos',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop'
    },
    timeAgo: '4 hours ago',
    visibility: 'Members Only',
    content: 'Excited to share our latest breakthrough in natural language processing for customer service automation. The results are showing 40% improvement in response accuracy!',
    link: {
      title: 'NLP Breakthrough: Advanced Customer Service AI',
      description: 'Revolutionary approach to automated customer interactions with improved context understanding and emotional intelligence.',
      url: 'research.aitribes.com'
    },
    likes: 31,
    comments: 12,
    liked: true
  },
  {
    id: 3,
    author: {
      name: 'James Wilson',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop'
    },
    timeAgo: '6 hours ago',
    visibility: 'Public',
    content: 'Looking for feedback on our new AI communication framework. We\'ve been testing it with several enterprise clients and the initial results are promising. What are your thoughts on ethical AI implementation?',
    likes: 18,
    comments: 15,
    liked: false
  }
])

const trendingTopics = ref([
  { id: 1, name: 'AIEthics', posts: 45 },
  { id: 2, name: 'MachineLearning', posts: 38 },
  { id: 3, name: 'NLP', posts: 29 },
  { id: 4, name: 'ChatGPT', posts: 24 },
  { id: 5, name: 'Automation', posts: 19 }
])

const suggestedUsers = ref([
  {
    id: 1,
    name: 'Dr. Lisa Park',
    role: 'AI Research Director',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop'
  },
  {
    id: 2,
    name: 'Robert Chen',
    role: 'ML Engineer',
    avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop'
  },
  {
    id: 3,
    name: 'Anna Kowalski',
    role: 'Data Scientist',
    avatar: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop'
  }
])

// Methods
const toggleUserMenu = () => {
  showUserMenu.value = !showUserMenu.value
}

const handleLogout = () => {
  authStore.logout()
  router.push('/login')
}

const copyReferralLink = async () => {
  try {
    await navigator.clipboard.writeText(referralLink.value)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy: ', err)
  }
}
</script>

<style scoped>
.portal {
  min-height: 100vh;
  background-color: #f8fafc;
}

/* Header Styles */
.header {
  background: white;
  border-bottom: 1px solid #e2e8f0;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-left {
  display: flex;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-icon {
  font-size: 28px;
}

.logo-text {
  display: flex;
  flex-direction: column;
}

.logo-title {
  font-size: 20px;
  font-weight: 700;
  color: #1e293b;
  line-height: 1;
}

.logo-subtitle {
  font-size: 10px;
  color: #64748b;
  font-weight: 500;
  letter-spacing: 1px;
}

.header-center {
  flex: 1;
  max-width: 500px;
  margin: 0 40px;
}

.search-bar {
  position: relative;
  width: 100%;
}

.search-icon {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  color: #64748b;
}

.search-input {
  width: 100%;
  padding: 12px 16px 12px 48px;
  border: 1px solid #e2e8f0;
  border-radius: 24px;
  background: #f8fafc;
  font-size: 14px;
  transition: all 0.2s;
}

.search-input:focus {
  outline: none;
  border-color: #3b82f6;
  background: white;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.header-right {
  display: flex;
  align-items: center;
  gap: 16px;
  position: relative;
}

.notification-btn {
  position: relative;
  background: none;
  border: none;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.notification-btn:hover {
  background-color: #f1f5f9;
}

.notification-icon {
  width: 20px;
  height: 20px;
  color: #64748b;
}

.notification-badge {
  position: absolute;
  top: 4px;
  right: 4px;
  background: #ef4444;
  color: white;
  font-size: 10px;
  padding: 2px 6px;
  border-radius: 10px;
  font-weight: 600;
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
  width: 250px;
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

.menu-icon {
  width: 16px;
  height: 16px;
}

/* Main Container */
.main-container {
  display: grid;
  grid-template-columns: 300px 1fr 320px;
  gap: 24px;
  padding: 24px;
  max-width: 1400px;
  margin: 0 auto;
}

/* Left Sidebar */
.left-sidebar {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.community-card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  border: 1px solid #e2e8f0;
}

.community-header {
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
}

.community-logo {
  flex-shrink: 0;
}

.logo-circle {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.community-icon {
  width: 28px;
  height: 28px;
  color: white;
}

.community-info {
  flex: 1;
}

.community-name {
  font-size: 18px;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 8px;
}

.community-desc {
  font-size: 14px;
  color: #64748b;
  line-height: 1.5;
}

.community-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 24px;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 4px;
}

.stat-label {
  font-size: 12px;
  color: #64748b;
  text-transform: uppercase;
  font-weight: 500;
}

.nav-menu {
  background: white;
  border-radius: 12px;
  padding: 16px 0;
  border: 1px solid #e2e8f0;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 20px;
  color: #64748b;
  cursor: pointer;
  transition: all 0.2s;
}

.nav-item:hover {
  background-color: #f8fafc;
  color: #3b82f6;
}

.nav-item.active {
  background-color: #eff6ff;
  color: #3b82f6;
  border-right: 3px solid #3b82f6;
}

.nav-icon {
  width: 18px;
  height: 18px;
}

.timeline-section {
  background: white;
  border-radius: 12px;
  padding: 20px;
  border: 1px solid #e2e8f0;
}

.timeline-title {
  font-size: 16px;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 16px;
}

.timeline-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.timeline-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.timeline-time {
  font-size: 12px;
  color: #64748b;
  font-weight: 500;
}

.timeline-content {
  display: flex;
  align-items: center;
  gap: 8px;
}

.timeline-avatar {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  object-fit: cover;
}

.timeline-text {
  font-size: 14px;
  color: #374151;
}

/* Main Content */
.main-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.post-creator {
  background: white;
  border-radius: 12px;
  padding: 20px;
  border: 1px solid #e2e8f0;
}

.creator-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.creator-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.creator-input {
  flex: 1;
  padding: 12px 16px;
  border: 1px solid #e2e8f0;
  border-radius: 24px;
  background: #f8fafc;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
}

.creator-input:hover {
  background: #f1f5f9;
}

.creator-actions {
  display: flex;
  gap: 16px;
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: none;
  border: none;
  color: #64748b;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
}

.action-btn:hover {
  background-color: #f1f5f9;
  color: #3b82f6;
}

.action-icon {
  width: 16px;
  height: 16px;
}

.posts-feed {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.post-card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  border: 1px solid #e2e8f0;
}

.post-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.post-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
}

.post-info {
  flex: 1;
}

.post-author {
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 2px;
}

.post-meta {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #64748b;
}

.post-menu {
  background: none;
  border: none;
  padding: 4px;
  border-radius: 4px;
  cursor: pointer;
  color: #64748b;
  transition: background-color 0.2s;
}

.post-menu:hover {
  background-color: #f1f5f9;
}

.menu-icon {
  width: 16px;
  height: 16px;
}

.post-content {
  margin-bottom: 16px;
}

.post-text {
  color: #374151;
  line-height: 1.6;
  margin-bottom: 16px;
}

.post-image {
  margin-bottom: 16px;
}

.content-image {
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
}

.post-link {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: hidden;
}

.link-preview {
  padding: 16px;
}

.link-title {
  font-size: 16px;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 8px;
}

.link-description {
  font-size: 14px;
  color: #64748b;
  margin-bottom: 8px;
  line-height: 1.5;
}

.link-url {
  font-size: 12px;
  color: #3b82f6;
  text-transform: uppercase;
  font-weight: 500;
}

.post-actions {
  display: flex;
  gap: 24px;
  padding-top: 16px;
  border-top: 1px solid #f1f5f9;
}

.action-button {
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  color: #64748b;
  cursor: pointer;
  padding: 8px;
  border-radius: 6px;
  transition: all 0.2s;
}

.action-button:hover {
  background-color: #f1f5f9;
  color: #3b82f6;
}

.action-button.active {
  color: #ef4444;
}

/* Right Sidebar */
.right-sidebar {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.points-card,
.referral-card,
.trending-card,
.suggestions-card {
  background: white;
  border-radius: 12px;
  padding: 20px;
  border: 1px solid #e2e8f0;
}

.points-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.points-title {
  font-size: 18px;
  font-weight: 600;
  color: #1e293b;
}

.points-total {
  font-size: 24px;
  font-weight: 700;
  color: #3b82f6;
}

.points-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.reward-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
}

.reward-text {
  font-size: 14px;
  color: #374151;
}

.reward-points {
  font-size: 14px;
  font-weight: 600;
  color: #3b82f6;
}

.referral-title,
.trending-title,
.suggestions-title {
  font-size: 18px;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 16px;
}

.referral-input-group {
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
}

.referral-input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  font-size: 14px;
  background: #f8fafc;
}

.copy-btn {
  padding: 8px 16px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}

.copy-btn:hover {
  background: #2563eb;
}

.referral-description {
  font-size: 12px;
  color: #64748b;
  line-height: 1.4;
}

.trending-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.trending-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.topic-tag {
  color: #3b82f6;
  font-weight: 500;
}

.topic-count {
  font-size: 12px;
  color: #64748b;
}

.suggestions-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.suggestion-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.suggestion-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.suggestion-info {
  flex: 1;
}

.suggestion-name {
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 2px;
}

.suggestion-role {
  font-size: 12px;
  color: #64748b;
}

.connect-btn {
  padding: 6px 12px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}

.connect-btn:hover {
  background: #2563eb;
}

@media (max-width: 1200px) {
  .main-container {
    grid-template-columns: 280px 1fr 300px;
    gap: 20px;
    padding: 20px;
  }
}

@media (max-width: 1024px) {
  .main-container {
    grid-template-columns: 1fr 300px;
  }
  
  .left-sidebar {
    display: none;
  }
}

@media (max-width: 768px) {
  .main-container {
    grid-template-columns: 1fr;
    padding: 16px;
  }
  
  .right-sidebar {
    display: none;
  }
  
  .header-center {
    margin: 0 20px;
  }
}
</style>
