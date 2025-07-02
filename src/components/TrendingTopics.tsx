import React from 'react'
import { TrendingUp } from 'lucide-react'

const topics = [
  { name: '#AIInnovation', posts: '2.4k posts' },
  { name: '#MachineLearning', posts: '1.8k posts' },
  { name: '#CommunityBuilding', posts: '956 posts' },
  { name: '#TechStartups', posts: '743 posts' },
  { name: '#DataScience', posts: '621 posts' }
]

export default function TrendingTopics() {
  return (
    <div className="card">
      <div className="flex items-center space-x-2 mb-4">
        <TrendingUp className="w-5 h-5 text-primary-600" />
        <h3 className="font-semibold text-gray-900">Trending Topics</h3>
      </div>
      
      <div className="space-y-3">
        {topics.map((topic, index) => (
          <div key={index} className="flex items-center justify-between hover:bg-gray-50 p-2 rounded-lg cursor-pointer transition-colors">
            <div>
              <p className="font-medium text-primary-600">{topic.name}</p>
              <p className="text-sm text-gray-500">{topic.posts}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
