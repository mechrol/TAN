import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface CommunityStats {
  courses: number
  members: number
  events: number
  blog: number
}

export interface SalesData {
  month: string
  value: number
}

export interface ActivityItem {
  id: string
  user: string
  action: string
  timestamp: Date
  avatar: string
}

export const useDashboardStore = defineStore('dashboard', () => {
  // State
  const communityStats = ref<CommunityStats>({
    courses: 27,
    members: 14,
    events: 0,
    blog: 56
  })

  const salesData = ref<SalesData[]>([
    { month: 'Jan', value: 0 },
    { month: 'Mar', value: 0 },
    { month: 'May', value: 0 },
    { month: 'Jul', value: 0 },
    { month: 'Sep', value: 0 },
    { month: 'Nov', value: 0 }
  ])

  const communityMetrics = ref<SalesData[]>([
    { month: 'Jan', value: 0 },
    { month: 'Mar', value: 0.2 },
    { month: 'May', value: 0.8 },
    { month: 'Jul', value: 1.0 },
    { month: 'Sep', value: 0.6 },
    { month: 'Nov', value: 0.4 }
  ])

  const recentActivity = ref<ActivityItem[]>([
    {
      id: '1',
      user: 'Janusz',
      action: 'added a new post',
      timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop'
    }
  ])

  // Getters
  const totalCommunityMembers = computed(() => communityStats.value.members)
  const totalCourses = computed(() => communityStats.value.courses)
  const hasRecentSales = computed(() => false) // No sales data in the example

  // Actions
  const updateCommunityStats = (stats: Partial<CommunityStats>) => {
    communityStats.value = { ...communityStats.value, ...stats }
  }

  const addActivity = (activity: Omit<ActivityItem, 'id'>) => {
    const newActivity: ActivityItem = {
      ...activity,
      id: Date.now().toString()
    }
    recentActivity.value.unshift(newActivity)
  }

  return {
    // State
    communityStats,
    salesData,
    communityMetrics,
    recentActivity,
    
    // Getters
    totalCommunityMembers,
    totalCourses,
    hasRecentSales,
    
    // Actions
    updateCommunityStats,
    addActivity
  }
})
