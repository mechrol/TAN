import React, { useState } from 'react'
import { Image, Smile, MapPin, Calendar } from 'lucide-react'

interface PostComposerProps {
  onPost: (content: string, image?: string) => void
}

export default function PostComposer({ onPost }: PostComposerProps) {
  const [content, setContent] = useState('')
  const [image, setImage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (content.trim()) {
      onPost(content, image || undefined)
      setContent('')
      setImage('')
    }
  }

  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <div className="flex space-x-3">
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1"
            alt="Your avatar"
            className="w-10 h-10 rounded-full"
          />
          <div className="flex-1">
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="What's happening in your AI community?"
              className="w-full p-3 border border-gray-200 rounded-lg resize-none focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
              rows={3}
            />
            
            {image && (
              <div className="mt-3">
                <img
                  src={image}
                  alt="Preview"
                  className="max-w-full h-48 object-cover rounded-lg"
                />
              </div>
            )}
            
            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center space-x-4">
                <button
                  type="button"
                  className="flex items-center space-x-1 text-gray-500 hover:text-primary-600 transition-colors"
                >
                  <Image className="w-5 h-5" />
                  <span className="text-sm">Photo</span>
                </button>
                <button
                  type="button"
                  className="flex items-center space-x-1 text-gray-500 hover:text-primary-600 transition-colors"
                >
                  <Smile className="w-5 h-5" />
                  <span className="text-sm">Emoji</span>
                </button>
                <button
                  type="button"
                  className="flex items-center space-x-1 text-gray-500 hover:text-primary-600 transition-colors"
                >
                  <MapPin className="w-5 h-5" />
                  <span className="text-sm">Location</span>
                </button>
              </div>
              
              <button
                type="submit"
                disabled={!content.trim()}
                className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
