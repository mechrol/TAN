<template>
  <div class="dashboard">
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
        <a href="#" class="nav-item active">
          <Home class="nav-icon" />
          Dashboard
        </a>
        <router-link to="/community" class="nav-item">
          <Users class="nav-icon" />
          Community
        </router-link>
        <a href="#" class="nav-item">
          <ShoppingCart class="nav-icon" />
          Reseller
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
          <img :src="userAvatar" 
               alt="User Avatar" class="user-avatar">
          <ChevronDown class="chevron" />
        </div>
        
        <!-- User Dropdown -->
        <div v-if="showUserMenu" class="user-dropdown">
          <div class="user-info">
            <img :src="userAvatar" 
                 alt="User Avatar" class="dropdown-avatar">
            <div>
              <div class="user-name">{{ userName }}</div>
              <div class="user-email">{{ userEmail }}</div>
            </div>
          </div>
          
          <div class="credits-info">
            <div class="credits-label">Credits</div>
            <div class="credits-value">{{ authStore.userCredits.used }}/{{ authStore.userCredits.total }}</div>
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
            <button @click="handleSignOut" class="menu-item sign-out">
              <LogOut class="menu-icon" />
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="main-content">
      <!-- Sidebar -->
      <aside class="sidebar">
        <div class="sidebar-item active">
          <Home class="sidebar-icon" />
          Dashboard
        </div>
      </aside>

      <!-- Dashboard Content -->
      <div class="dashboard-content">
        <!-- Welcome Message -->
        <div v-if="authStore.profile" class="welcome-section">
          <h2 class="welcome-title">Welcome back, {{ authStore.profile.full_name || 'Admin' }}!</h2>
          <p class="welcome-subtitle">Here's what's happening in your communities today.</p>
        </div>

        <!-- Stats Cards -->
        <div class="stats-grid">
          <!-- Community Stats -->
          <div class="stat-card">
            <h3 class="stat-title">
              Community 
              <span class="stat-badge">9</span>
            </h3>
            <div class="stat-items">
              <div class="stat-item">
                <div class="stat-icon">
                  <FileText class="icon" />
                </div>
                <div class="stat-value">27</div>
                <div class="stat-label">Courses</div>
              </div>
              <div class="stat-item">
                <div class="stat-icon">
                  <Users class="icon" />
                </div>
                <div class="stat-value">14</div>
                <div class="stat-label">Members</div>
              </div>
              <div class="stat-item">
                <div class="stat-icon">
                  <Calendar class="icon" />
                </div>
                <div class="stat-value">0</div>
                <div class="stat-label">Events</div>
              </div>
              <div class="stat-item">
                <div class="stat-icon">
                  <MessageSquare class="icon" />
                </div>
                <div class="stat-value">56</div>
                <div class="stat-label">Blog</div>
              </div>
            </div>
          </div>

          <!-- Sales Chart -->
          <div class="chart-card">
            <h3 class="chart-title">Sales</h3>
            <div class="chart-container">
              <Line :data="salesChartData" :options="chartOptions" />
            </div>
            <div class="chart-footer">
              <TrendingUp class="chart-icon" />
              <span class="chart-label">My Sales</span>
              <span class="chart-sublabel">Monthly Data</span>
            </div>
          </div>

          <!-- Community Metrics Chart -->
          <div class="chart-card">
            <h3 class="chart-title">Community Metrics</h3>
            <div class="chart-container">
              <Line :data="communityChartData" :options="chartOptions" />
            </div>
            <div class="chart-footer">
              <Users class="chart-icon" />
              <span class="chart-label">Community</span>
              <span class="chart-sublabel">Monthly Data</span>
            </div>
          </div>
        </div>

        <!-- Bottom Section -->
        <div class="bottom-section">
          <!-- Recent Sales -->
          <div class="table-card">
            <h3 class="table-title">Recent Sales</h3>
            <div class="table-container">
              <table class="data-table">
                <thead>
                  <tr>
                    <th>COURSE / PRODUCT</th>
                    <th>CUSTOMER NAME</th>
                    <th>ORDER ID</th>
                    <th>SALE AMOUNT</th>
                    <th>CREATED ON</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colspan="5" class="no-data">No recent sale found</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Recent Activity -->
          <div class="activity-card">
            <h3 class="activity-title">Recent Activity</h3>
            <p class="activity-subtitle">Community member recent activity</p>
            
            <div class="activity-list">
              <div class="activity-item">
                <div class="activity-time">
                  <Clock class="time-icon" />
                </div>
                <div class="activity-content">
                  <div class="activity-text">{{ userName }} logged in</div>
                  <div class="activity-date">Just now</div>
                </div>
                <img :src="userAvatar" 
                     alt="User" class="activity-avatar">
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
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
  FileText,
  Calendar,
  MessageSquare,
  TrendingUp,
  Clock
} from 'lucide-vue-next'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const router = useRouter()
const authStore = useAuthStore()

const showUserMenu = ref(false)

// Computed properties for user data
const userName = computed(() => {
  return authStore.profile?.full_name || authStore.user?.email?.split('@')[0] || 'Admin'
})

const userEmail = computed(() => {
  return authStore.user?.email || 'admin@example.com'
})

const userAvatar = computed(() => {
  return authStore.profile?.avatar_url || 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
})

const toggleUserMenu = () => {
  showUserMenu.value = !showUserMenu.value
}

const handleSignOut = async () => {
  try {
    await authStore.logout()
    router.push('/admin/login')
  } catch (error) {
    console.error('Sign out failed:', error)
  }
}

const salesChartData = computed(() => ({
  labels: ['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov'],
  datasets: [
    {
      data: [0, 0, 0, 0, 0, 0],
      borderColor: '#3b82f6',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      tension: 0.4,
      pointBackgroundColor: '#3b82f6',
      pointBorderColor: '#3b82f6',
      pointRadius: 4
    }
  ]
}))

const communityChartData = computed(() => ({
  labels: ['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov'],
  datasets: [
    {
      data: [0, 0.2, 0.8, 1.0, 0.6, 0.4],
      borderColor: '#3b82f6',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      tension: 0.4,
      pointBackgroundColor: '#3b82f6',
      pointBorderColor: '#3b82f6',
      pointRadius: 4
    }
  ]
}))

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    }
  },
  scales: {
    x: {
      grid: {
        display: false
      },
      ticks: {
        color: '#64748b'
      }
    },
    y: {
      grid: {
        color: '#e2e8f0'
      },
      ticks: {
        color: '#64748b'
      }
    }
  }
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
.dashboard {
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
  background: none;
  border: none;
  width: 100%;
  text-align: left;
  cursor: pointer;
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
  display: flex;
  min-height: calc(100vh - 64px);
}

.sidebar {
  width: 240px;
  background: white;
  border-right: 1px solid #e2e8f0;
  padding: 24px 0;
}

.sidebar-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 24px;
  color: #64748b;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.sidebar-item.active {
  background-color: #f1f5f9;
  color: #3b82f6;
  border-right: 2px solid #3b82f6;
}

.sidebar-icon {
  width: 16px;
  height: 16px;
}

.dashboard-content {
  flex: 1;
  padding: 24px;
}

/* Welcome Section */
.welcome-section {
  margin-bottom: 32px;
}

.welcome-title {
  font-size: 28px;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 8px;
}

.welcome-subtitle {
  color: #64748b;
  font-size: 16px;
}

/* Stats Grid */
.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
  margin-bottom: 24px;
}

.stat-card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  border: 1px solid #e2e8f0;
}

.stat-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 24px;
}

.stat-badge {
  background-color: #3b82f6;
  color: white;
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 12px;
  font-weight: 500;
}

.stat-items {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.stat-item {
  text-align: center;
}

.stat-icon {
  width: 48px;
  height: 48px;
  background-color: #f1f5f9;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 12px;
}

.stat-icon .icon {
  width: 20px;
  height: 20px;
  color: #64748b;
}

.stat-value {
  font-size: 24px;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 4px;
}

.stat-label {
  font-size: 14px;
  color: #64748b;
}

.chart-card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  border: 1px solid #e2e8f0;
}

.chart-title {
  font-size: 18px;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 24px;
}

.chart-container {
  height: 200px;
  margin-bottom: 16px;
}

.chart-footer {
  display: flex;
  align-items: center;
  gap: 8px;
}

.chart-icon {
  width: 16px;
  height: 16px;
  color: #64748b;
}

.chart-label {
  font-weight: 500;
  color: #1e293b;
}

.chart-sublabel {
  color: #64748b;
  font-size: 14px;
}

/* Bottom Section */
.bottom-section {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 24px;
}

.table-card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  border: 1px solid #e2e8f0;
}

.table-title {
  font-size: 18px;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 24px;
}

.table-container {
  overflow-x: auto;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
}

.data-table th {
  text-align: left;
  padding: 12px;
  font-size: 12px;
  font-weight: 600;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-bottom: 1px solid #e2e8f0;
}

.data-table td {
  padding: 16px 12px;
  border-bottom: 1px solid #f1f5f9;
}

.no-data {
  text-align: center;
  color: #64748b;
  font-style: italic;
}

.activity-card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  border: 1px solid #e2e8f0;
}

.activity-title {
  font-size: 18px;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 4px;
}

.activity-subtitle {
  color: #64748b;
  font-size: 14px;
  margin-bottom: 24px;
}

.activity-list {
  space-y: 16px;
}

.activity-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.activity-time {
  width: 32px;
  height: 32px;
  background-color: #f1f5f9;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.time-icon {
  width: 16px;
  height: 16px;
  color: #64748b;
}

.activity-content {
  flex: 1;
}

.activity-text {
  font-weight: 500;
  color: #1e293b;
  margin-bottom: 2px;
}

.activity-date {
  font-size: 14px;
  color: #64748b;
}

.activity-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
}

@media (max-width: 1200px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
  
  .bottom-section {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .nav {
    display: none;
  }
  
  .main-content {
    flex-direction: column;
  }
  
  .sidebar {
    width: 100%;
    padding: 16px 0;
  }
  
  .dashboard-content {
    padding: 16px;
  }
}
</style>
