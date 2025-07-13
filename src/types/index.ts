export interface User {
  id: string
  name: string
  email: string
  avatar: string
  credits: {
    used: number
    total: number
  }
}

export interface NavigationItem {
  id: string
  label: string
  icon: string
  path: string
  active?: boolean
}

export interface ChartDataPoint {
  label: string
  value: number
}

export interface DashboardMetrics {
  community: {
    courses: number
    members: number
    events: number
    blog: number
  }
  sales: ChartDataPoint[]
  communityMetrics: ChartDataPoint[]
}

// 4Z Framework Types
export interface FourZFramework {
  intention: {
    vision: string
    mission: string
    values: string[]
  }
  trust: {
    transparency: number
    reliability: number
    competence: number
  }
  management: {
    leadership: string[]
    processes: string[]
    resources: string[]
  }
  measurement: {
    kpis: string[]
    metrics: Record<string, number>
    feedback: string[]
  }
}

export interface ConsultationSession {
  id: string
  userId: string
  aiModuleId: string
  type: 'counseling' | 'consultation' | 'learning'
  status: 'active' | 'completed' | 'scheduled'
  framework: keyof FourZFramework
  startTime: Date
  endTime?: Date
  notes: string[]
  outcomes: string[]
}
