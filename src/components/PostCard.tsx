import React, { useState } from 'react'
import { Heart, MessageCircle, Share, MoreHorizontal } from 'lucide-react'

interface Post {
  id: string
  author: {
    name: string
    username: string
    avatar: string
  }
  content: string
  timestamp: string
  likes: number
  comments: number
  shares: number
  image?: string
}

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  const [liked, setLiked] = useState(false)
  const [likesCount, setLikesCount] = useState(post.likes)

  const handleLike = () => {
    setLiked(!liked)
    setLikesCount(liked ? likesCount - 1 : likesCount + 1)
  }

  return (
    <div className="card">
      <div className="flex space-x-3">
        <img
          src={post.author.avatar}
          alt={post.author.name}
          className="w-12 h-12 rounded-full"
        />
        
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <h3 className="font-semibold text-gray-900">{post.author.name}</h3>
              <span className="text-gray-500">{post.author.username}</span>
              <span className="text-gray-400">·</span>
              <span className="text-gray-500 text-sm">{post.timestamp}</span>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>
          
          <p className="text-gray-900 mt-2 leading-relaxed">{post.content}</p>
          
          {post.image && (
            <img
              src={post.image}
              alt="Post content"
              className="mt-3 rounded-lg max-w-full h-64 object-cover"
            />
          )}
          
          <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
            <button
              onClick={handleLike}
              className={`flex items-center space-x-2 px-3 py-1 rounded-full transition-colors ${
                liked 
                  ? 'text-red-600 bg-red-50 hover:bg-red-100' 
                  : 'text-gray-500 hover:text-red-600 hover:bg-red-50'
              }`}
            >
              <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
              <span className="text-sm font-medium">{likesCount}</span>
            </button>
            
            <button className="flex items-center space-x-2 px-3 py-1 rounded-full text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition-colors">
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm font-medium">{post.comments}</span>
            </button>
            
            <button className="flex items-center space-x-2 px-3 py-1 rounded-full text-gray-500 hover:text-green-600 hover:bg-green-50 transition-colors">
              <Share className="w-5 h-5" />
              <span className="text-sm font-medium">{post.shares}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
