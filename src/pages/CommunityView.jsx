import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { 
  ArrowLeft, 
  Users, 
  MessageSquare, 
  Heart, 
  Share2, 
  MoreHorizontal,
  Play,
  Calendar,
  Clock,
  Trophy,
  Gift,
  BookOpen,
  ShoppingBag,
  FileText,
  Target,
  Star,
  Upload,
  Camera,
  Link,
  Volume2
} from 'lucide-react'

const CommunityView = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('groups')

  const communityData = {
    name: 'HomoHumanicus',
    category: 'Health and Wellness',
    logo: 'https://aitribes.app/upload/9/lib/18586_1730975403_lib.png',
    bannerImage: 'https://aitribes.app/upload/9/lib/19810_1730975796_lib.png',
    stats: {
      posts: 11,
      members: 2,
      groups: 2
    },
    themeColor: '#22c55e'
  }

  const navigationTabs = [
    { id: 'groups', label: 'Groups', icon: Users },
    { id: 'courses', label: 'Courses/Products', icon: ShoppingBag },
    { id: 'blogs', label: 'Blogs', icon: FileText },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'leaderboard', label: 'Leaderboard', icon: Trophy },
    { id: 'rewards', label: 'Rewards', icon: Gift }
  ]

  const timelineActivities = [
    {
      id: 1,
      user: 'Janusz',
      action: 'posted a new comment',
      time: '05:21 AM',
      date: 'Jun 14, 2025',
      avatar: 'J'
    },
    {
      id: 2,
      user: 'Janusz',
      action: 'added a new post',
      time: '05:16 AM',
      date: 'Jun 14, 2025',
      avatar: 'J'
    },
    {
      id: 3,
      user: 'Janusz',
      action: 'posted a new comment',
      time: '06:03 AM',
      date: 'Jun 13, 2025',
      avatar: 'J'
    },
    {
      id: 4,
      user: 'Janusz',
      action: 'added a new post',
      time: '05:58 AM',
      date: 'Jun 13, 2025',
      avatar: 'J'
    },
    {
      id: 5,
      user: 'Janusz',
      action: 'posted a new comment',
      time: '05:55 PM',
      date: 'Jun 5, 2025',
      avatar: 'J'
    },
    {
      id: 6,
      user: 'Phil',
      action: 'joined Advertising',
      time: '04:26 AM',
      date: 'May 31, 2025',
      avatar: 'P'
    },
    {
      id: 7,
      user: 'Phil',
      action: 'joined GotBackup - Wellness',
      time: '04:26 AM',
      date: 'May 31, 2025',
      avatar: 'P'
    },
    {
      id: 8,
      user: 'Janusz',
      action: 'joined GotBackup - Wellness',
      time: '04:16 PM',
      date: 'Feb 13, 2025',
      avatar: 'J'
    }
  ]

  const groups = [
    {
      id: 1,
      name: 'GotBackup - Wellness',
      description: 'GotBackup Health & Holistic Living This group is for GotBackup members who are passionate about lea...',
      posts: 10,
      members: 2,
      image: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      name: 'Advertising',
      description: 'As a membership group advisor, I\'ve analyzed popular discussions in **affiliate programs and network...',
      posts: 1,
      members: 2,
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpg?auto=compress&cs=tinysrgb&w=400'
    }
  ]

  const trendingFeeds = [
    {
      id: 1,
      user: 'Janusz',
      timeAgo: '1 month ago',
      type: 'audio',
      content: '',
      hasAudio: true,
      avatar: 'J'
    },
    {
      id: 2,
      user: 'Janusz',
      timeAgo: '29 days ago',
      type: 'text',
      content: 'NaviHealth is not a substitute professional medical care. It offers only guidance, integrating conventional and holistic methods of treatment. In case of a medical emergency, call 911 immediately. Scan the QR code and see what a great app was created with Xbesh',
      avatar: 'J'
    },
    {
      id: 3,
      user: 'Janusz',
      timeAgo: '1 month ago',
      type: 'text',
      content: 'Please write in the comments what issues you would like to develop as part of our joint participation in solving your problem.ACTION GUIDEBy making these simple, yet effective changes to your diet, you can significantly improve your overall health and longevity. Implement these steps gradually, and enjoy the benefits of a healthier, more balanced lifestyle.',
      avatar: 'J'
    },
    {
      id: 4,
      user: 'Janusz',
      timeAgo: '20 days ago',
      type: 'text',
      content: 'Choose from the attached checklist the habits that you should introduce into your daily life and save them in this application to track your progress in implementing them. Additionally, in this application you get a daily dose of motivation to lead a healthy lifestyle to gain prosperity, striving for longevity in health and happiness. https://xbesh-diy-7-1749657694141.vercel.app/',
      hasLink: true,
      avatar: 'J'
    },
    {
      id: 5,
      user: 'Janusz',
      timeAgo: '19 days ago',
      type: 'text',
      content: 'I have introduced my first application for our community. It is Habit Tracker. I have set the price of the product at $5. The product is available for members of our community for free. Ignore the payment and after clicking the pay button you will get access to the software. If you want to earn money by selling access to this product, write in the comment and you will get my consent and access to the community promoting my applications. Access to the product in the courses/products section.',
      avatar: 'J'
    }
  ]

  const pointsSystem = [
    { action: 'Make a post to get', points: 1 },
    { action: 'Comment on a post to get', points: 1 },
    { action: 'Like a comment or post to get', points: 1 },
    { action: 'Upload Profile picture to get', points: 1 },
    { action: 'Mark complete a lesson to get', points: 10 }
  ]

  const handleBack = () => {
    navigate('/community')
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      {/* Header */}
      <div style={{
        backgroundColor: 'white',
        borderBottom: '1px solid #e2e8f0',
        padding: '1rem 2rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            onClick={handleBack}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              backgroundColor: '#f1f5f9',
              border: '1px solid #e2e8f0',
              borderRadius: '6px',
              fontSize: '0.875rem',
              color: '#64748b',
              cursor: 'pointer'
            }}
          >
            <ArrowLeft size={16} />
            Back to Community
          </button>
          <h1 style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            color: '#1e293b'
          }}>
            {communityData.name} - Social View
          </h1>
        </div>
      </div>

      <div style={{ display: 'flex', maxWidth: '1400px', margin: '0 auto', gap: '2rem', padding: '2rem' }}>
        {/* Left Sidebar */}
        <div style={{ width: '300px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Community Info Card */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            border: '1px solid #e2e8f0',
            overflow: 'hidden'
          }}>
            {/* Banner */}
            <div style={{
              height: '120px',
              backgroundImage: `url(${communityData.bannerImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                bottom: '1rem',
                left: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  backgroundImage: `url(${communityData.logo})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  border: '2px solid white'
                }}></div>
                <div>
                  <h3 style={{
                    color: 'white',
                    fontSize: '1rem',
                    fontWeight: '600',
                    textShadow: '0 1px 2px rgba(0,0,0,0.5)'
                  }}>
                    {communityData.name}
                  </h3>
                  <p style={{
                    color: 'white',
                    fontSize: '0.75rem',
                    textShadow: '0 1px 2px rgba(0,0,0,0.5)'
                  }}>
                    {communityData.category}
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div style={{
              padding: '1rem',
              display: 'flex',
              justifyContent: 'space-around',
              textAlign: 'center',
              borderBottom: '1px solid #e2e8f0'
            }}>
              <div>
                <div style={{ fontSize: '1.25rem', fontWeight: '700', color: communityData.themeColor }}>
                  {communityData.stats.posts}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Posts</div>
              </div>
              <div>
                <div style={{ fontSize: '1.25rem', fontWeight: '700', color: communityData.themeColor }}>
                  {communityData.stats.members}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Members</div>
              </div>
              <div>
                <div style={{ fontSize: '1.25rem', fontWeight: '700', color: communityData.themeColor }}>
                  {communityData.stats.groups}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Groups</div>
              </div>
            </div>

            {/* Navigation */}
            <div style={{ padding: '1rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                {navigationTabs.map((tab) => {
                  const Icon = tab.icon
                  const isActive = activeTab === tab.id
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        padding: '0.75rem 1rem',
                        backgroundColor: isActive ? communityData.themeColor : 'transparent',
                        color: isActive ? 'white' : '#64748b',
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '0.875rem',
                        fontWeight: '500',
                        cursor: 'pointer',
                        textAlign: 'left',
                        width: '100%',
                        transition: 'all 0.2s'
                      }}
                    >
                      <Icon size={16} />
                      {tab.label}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* My Points Card */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            border: '1px solid #e2e8f0',
            padding: '1.5rem'
          }}>
            <h4 style={{
              fontSize: '1rem',
              fontWeight: '600',
              color: '#1e293b',
              marginBottom: '1rem'
            }}>
              My Points
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {pointsSystem.map((item, index) => (
                <div key={index} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '0.75rem',
                  backgroundColor: '#f8fafc',
                  borderRadius: '8px'
                }}>
                  <span style={{ fontSize: '0.875rem', color: '#64748b' }}>
                    {item.action}
                  </span>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    color: communityData.themeColor,
                    fontWeight: '600'
                  }}>
                    <span>{item.points}</span>
                    <span style={{ fontSize: '0.75rem' }}>Points</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Timeline Section */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            border: '1px solid #e2e8f0',
            padding: '1.5rem'
          }}>
            <h3 style={{
              fontSize: '1.125rem',
              fontWeight: '600',
              color: '#1e293b',
              marginBottom: '1rem'
            }}>
              Timeline
            </h3>
            <p style={{
              fontSize: '0.875rem',
              color: '#64748b',
              marginBottom: '1.5rem'
            }}>
              Latest activities
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {timelineActivities.map((activity) => (
                <div key={activity.id} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  padding: '1rem',
                  backgroundColor: '#f8fafc',
                  borderRadius: '8px',
                  border: '1px solid #e2e8f0'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    backgroundColor: communityData.themeColor,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    flexShrink: 0
                  }}>
                    {activity.avatar}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ marginBottom: '0.25rem' }}>
                      <span style={{ fontWeight: '600', color: '#1e293b' }}>
                        {activity.user}
                      </span>
                      <span style={{ color: '#64748b', marginLeft: '0.5rem' }}>
                        {activity.action}
                      </span>
                    </div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.75rem',
                      color: '#64748b'
                    }}>
                      <Clock size={12} />
                      <span>{activity.time}</span>
                      <span>•</span>
                      <span>{activity.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Groups Section */}
          {activeTab === 'groups' && (
            <div style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              border: '1px solid #e2e8f0',
              padding: '1.5rem'
            }}>
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                color: '#1e293b',
                marginBottom: '1rem'
              }}>
                Groups ({groups.length})
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {groups.map((group) => (
                  <div key={group.id} style={{
                    display: 'flex',
                    gap: '1rem',
                    padding: '1.5rem',
                    backgroundColor: '#f8fafc',
                    borderRadius: '12px',
                    border: '1px solid #e2e8f0'
                  }}>
                    <div style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '8px',
                      backgroundImage: `url(${group.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      flexShrink: 0
                    }}></div>
                    <div style={{ flex: 1 }}>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        marginBottom: '0.5rem'
                      }}>
                        <h4 style={{
                          fontSize: '1rem',
                          fontWeight: '600',
                          color: '#1e293b'
                        }}>
                          {group.name}
                        </h4>
                        <span style={{
                          fontSize: '0.75rem',
                          color: '#64748b',
                          backgroundColor: 'white',
                          padding: '0.25rem 0.5rem',
                          borderRadius: '4px',
                          border: '1px solid #e2e8f0'
                        }}>
                          Group
                        </span>
                      </div>
                      <p style={{
                        fontSize: '0.875rem',
                        color: '#64748b',
                        marginBottom: '1rem',
                        lineHeight: '1.4'
                      }}>
                        {group.description}
                      </p>
                      <div style={{
                        display: 'flex',
                        gap: '1.5rem',
                        fontSize: '0.875rem'
                      }}>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.25rem',
                          color: communityData.themeColor,
                          fontWeight: '600'
                        }}>
                          <span>{group.posts}</span>
                          <span style={{ color: '#64748b', fontWeight: '400' }}>Posts</span>
                        </div>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.25rem',
                          color: communityData.themeColor,
                          fontWeight: '600'
                        }}>
                          <span>{group.members}</span>
                          <span style={{ color: '#64748b', fontWeight: '400' }}>Members</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Sidebar - Trending Feeds */}
        <div style={{ width: '350px' }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            border: '1px solid #e2e8f0',
            padding: '1.5rem'
          }}>
            <h3 style={{
              fontSize: '1.125rem',
              fontWeight: '600',
              color: '#1e293b',
              marginBottom: '1.5rem'
            }}>
              Trending Feeds
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {trendingFeeds.map((feed) => (
                <div key={feed.id} style={{
                  padding: '1rem',
                  backgroundColor: '#f8fafc',
                  borderRadius: '8px',
                  border: '1px solid #e2e8f0'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginBottom: '0.75rem'
                  }}>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      backgroundColor: communityData.themeColor,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '0.75rem',
                      fontWeight: '600'
                    }}>
                      {feed.avatar}
                    </div>
                    <div>
                      <div style={{ fontSize: '0.875rem', fontWeight: '600', color: '#1e293b' }}>
                        {feed.user}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                        {feed.timeAgo}
                      </div>
                    </div>
                  </div>

                  {feed.hasAudio && (
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.75rem',
                      backgroundColor: 'white',
                      borderRadius: '6px',
                      border: '1px solid #e2e8f0',
                      marginBottom: '0.75rem'
                    }}>
                      <Volume2 size={16} color={communityData.themeColor} />
                      <span style={{ fontSize: '0.875rem', color: '#64748b' }}>Audio</span>
                      <button style={{
                        marginLeft: 'auto',
                        padding: '0.25rem 0.5rem',
                        backgroundColor: communityData.themeColor,
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        fontSize: '0.75rem',
                        cursor: 'pointer'
                      }}>
                        <Play size={12} />
                      </button>
                    </div>
                  )}

                  {feed.content && (
                    <p style={{
                      fontSize: '0.875rem',
                      color: '#374151',
                      lineHeight: '1.4',
                      marginBottom: '0.75rem'
                    }}>
                      {feed.content}
                    </p>
                  )}

                  {feed.hasLink && (
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.5rem',
                      backgroundColor: 'white',
                      borderRadius: '6px',
                      border: '1px solid #e2e8f0',
                      marginBottom: '0.75rem'
                    }}>
                      <Link size={14} color={communityData.themeColor} />
                      <span style={{ fontSize: '0.75rem', color: communityData.themeColor }}>
                        External Link
                      </span>
                    </div>
                  )}

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    paddingTop: '0.75rem',
                    borderTop: '1px solid #e2e8f0'
                  }}>
                    <button style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                      padding: '0.25rem 0.5rem',
                      backgroundColor: 'transparent',
                      border: 'none',
                      color: '#64748b',
                      fontSize: '0.75rem',
                      cursor: 'pointer'
                    }}>
                      <Heart size={14} />
                      Like
                    </button>
                    <button style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                      padding: '0.25rem 0.5rem',
                      backgroundColor: 'transparent',
                      border: 'none',
                      color: '#64748b',
                      fontSize: '0.75rem',
                      cursor: 'pointer'
                    }}>
                      <MessageSquare size={14} />
                      Comment
                    </button>
                    <button style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                      padding: '0.25rem 0.5rem',
                      backgroundColor: 'transparent',
                      border: 'none',
                      color: '#64748b',
                      fontSize: '0.75rem',
                      cursor: 'pointer'
                    }}>
                      <Share2 size={14} />
                      Share
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommunityView
