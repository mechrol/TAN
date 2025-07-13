import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface Community {
  id: string
  name: string
  category: string
  description: string
  image: string
  createdAt: Date
  isActive: boolean
  showActions: boolean
  memberCount?: number
  settings?: {
    allowPublicJoin: boolean
    moderationEnabled: boolean
    aiAssistanceEnabled: boolean
  }
  stats?: {
    totalPosts: number
    totalComments: number
    activeMembers: number
    engagementRate: number
  }
}

export const useCommunityStore = defineStore('community', () => {
  // State
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
      memberCount: 1247,
      settings: {
        allowPublicJoin: false,
        moderationEnabled: true,
        aiAssistanceEnabled: true
      },
      stats: {
        totalPosts: 342,
        totalComments: 1856,
        activeMembers: 892,
        engagementRate: 0.72
      }
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
      memberCount: 892,
      settings: {
        allowPublicJoin: true,
        moderationEnabled: true,
        aiAssistanceEnabled: true
      },
      stats: {
        totalPosts: 156,
        totalComments: 743,
        activeMembers: 634,
        engagementRate: 0.71
      }
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
      memberCount: 634,
      settings: {
        allowPublicJoin: true,
        moderationEnabled: false,
        aiAssistanceEnabled: true
      },
      stats: {
        totalPosts: 89,
        totalComments: 412,
        activeMembers: 456,
        engagementRate: 0.72
      }
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
      memberCount: 1156,
      settings: {
        allowPublicJoin: false,
        moderationEnabled: true,
        aiAssistanceEnabled: true
      },
      stats: {
        totalPosts: 234,
        totalComments: 1123,
        activeMembers: 823,
        engagementRate: 0.71
      }
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
      memberCount: 2341,
      settings: {
        allowPublicJoin: true,
        moderationEnabled: true,
        aiAssistanceEnabled: true
      },
      stats: {
        totalPosts: 567,
        totalComments: 2834,
        activeMembers: 1892,
        engagementRate: 0.81
      }
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
      memberCount: 987,
      settings: {
        allowPublicJoin: false,
        moderationEnabled: true,
        aiAssistanceEnabled: false
      },
      stats: {
        totalPosts: 178,
        totalComments: 892,
        activeMembers: 723,
        engagementRate: 0.73
      }
    }
  ])

  const isLoading = ref(false)
  const searchQuery = ref('')

  // Getters
  const totalCommunities = computed(() => communities.value.length)
  const activeCommunities = computed(() => communities.value.filter(c => c.isActive).length)
  const totalMembers = computed(() => communities.value.reduce((sum, c) => sum + (c.memberCount || 0), 0))
  
  const filteredCommunities = computed(() => {
    if (!searchQuery.value) return communities.value
    
    const query = searchQuery.value.toLowerCase()
    return communities.value.filter(community =>
      community.name.toLowerCase().includes(query) ||
      community.category.toLowerCase().includes(query) ||
      community.description.toLowerCase().includes(query)
    )
  })

  const communitiesByCategory = computed(() => {
    const grouped: Record<string, Community[]> = {}
    communities.value.forEach(community => {
      if (!grouped[community.category]) {
        grouped[community.category] = []
      }
      grouped[community.category].push(community)
    })
    return grouped
  })

  // Actions
  const createCommunity = async (communityData: Omit<Community, 'id' | 'createdAt' | 'showActions'>) => {
    isLoading.value = true
    
    try {
      const newCommunity: Community = {
        ...communityData,
        id: Date.now().toString(),
        createdAt: new Date(),
        showActions: false
      }
      
      communities.value.unshift(newCommunity)
      return newCommunity
    } catch (error) {
      console.error('Error creating community:', error)
      throw error
    } finally {
      isLoading.value = false
    }
  }

  const updateCommunity = async (id: string, updates: Partial<Community>) => {
    isLoading.value = true
    
    try {
      const index = communities.value.findIndex(c => c.id === id)
      if (index !== -1) {
        communities.value[index] = { ...communities.value[index], ...updates }
        return communities.value[index]
      }
      throw new Error('Community not found')
    } catch (error) {
      console.error('Error updating community:', error)
      throw error
    } finally {
      isLoading.value = false
    }
  }

  const deleteCommunity = async (id: string) => {
    isLoading.value = true
    
    try {
      const index = communities.value.findIndex(c => c.id === id)
      if (index !== -1) {
        communities.value.splice(index, 1)
        return true
      }
      throw new Error('Community not found')
    } catch (error) {
      console.error('Error deleting community:', error)
      throw error
    } finally {
      isLoading.value = false
    }
  }

  const toggleCommunityStatus = async (id: string) => {
    const community = communities.value.find(c => c.id === id)
    if (community) {
      community.isActive = !community.isActive
      // TODO: API call to update status
      console.log(`Community ${community.name} is now ${community.isActive ? 'active' : 'inactive'}`)
    }
  }

  const cloneCommunity = async (id: string) => {
    const original = communities.value.find(c => c.id === id)
    if (original) {
      const cloned: Community = {
        ...original,
        id: Date.now().toString(),
        name: `${original.name} (Copy)`,
        createdAt: new Date(),
        showActions: false,
        memberCount: 0
      }
      
      communities.value.unshift(cloned)
      return cloned
    }
    throw new Error('Community not found')
  }

  const setSearchQuery = (query: string) => {
    searchQuery.value = query
  }

  const toggleActions = (id: string) => {
    communities.value.forEach(community => {
      if (community.id === id) {
        community.showActions = !community.showActions
      } else {
        community.showActions = false
      }
    })
  }

  const closeAllActions = () => {
    communities.value.forEach(community => {
      community.showActions = false
    })
  }

  return {
    // State
    communities,
    isLoading,
    searchQuery,
    
    // Getters
    totalCommunities,
    activeCommunities,
    totalMembers,
    filteredCommunities,
    communitiesByCategory,
    
    // Actions
    createCommunity,
    updateCommunity,
    deleteCommunity,
    toggleCommunityStatus,
    cloneCommunity,
    setSearchQuery,
    toggleActions,
    closeAllActions
  }
})
