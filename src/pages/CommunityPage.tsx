import React, { useState } from 'react'
import Layout from '../components/Layout'
import PostComposer from '../components/PostComposer'
import PostCard from '../components/PostCard'
import TrendingTopics from '../components/TrendingTopics'
import CommunityMembers from '../components/CommunityMembers'

export default function CommunityPage() {
  const [posts, setPosts] = useState([
    {
      id: '1',
      author: {
        name: 'Sarah Chen',
        username: '@sarahchen',
        avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
      },
      content: 'Just launched our new AI-powered community analytics dashboard! The insights we\'re getting about member engagement are incredible. Who else is working on community-focused AI tools?',
      timestamp: '2 hours ago',
      likes: 24,
      comments: 8,
      shares: 3,
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1'
    },
    {
      id: '2',
      author: {
        name: 'Marcus Rodriguez',
        username: '@marcusdev',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
      },
      content: 'Excited to share that our AI Tribes community just hit 10,000 members! 🎉 The collaborative projects happening here are mind-blowing. From ML research to startup ideas, this community is where innovation happens.',
      timestamp: '4 hours ago',
      likes: 156,
      comments: 23,
      shares: 12
    },
    {
      id: '3',
      author: {
        name: 'Dr. Emily Watson',
        username: '@emilywatson',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
      },
      content: 'Working on a fascinating project using transformer models for community sentiment analysis. The preliminary results show we can predict community health metrics with 94% accuracy. Would love to collaborate with others in this space!',
      timestamp: '6 hours ago',
      likes: 89,
      comments: 15,
      shares: 7
    }
  ])

  const handleNewPost = (content: string, image?: string) => {
    const newPost = {
      id: Date.now().toString(),
      author: {
        name: 'You',
        username: '@you',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
      },
      content,
      timestamp: 'now',
      likes: 0,
      comments: 0,
      shares: 0,
      image
    }
    setPosts([newPost, ...posts])
  }

  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <TrendingTopics />
          <CommunityMembers />
        </div>

        {/* Main Feed */}
        <div className="lg:col-span-3 space-y-6">
          <PostComposer onPost={handleNewPost} />
          
          <div className="space-y-4">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}
