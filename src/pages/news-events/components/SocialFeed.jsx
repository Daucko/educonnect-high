import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const SocialFeed = ({ posts = [] }) => {
  const [expandedPosts, setExpandedPosts] = useState(new Set());

  const toggleExpanded = (postId) => {
    const newExpanded = new Set(expandedPosts);
    if (newExpanded?.has(postId)) {
      newExpanded?.delete(postId);
    } else {
      newExpanded?.add(postId);
    }
    setExpandedPosts(newExpanded);
  };

  const formatTimeAgo = (date) => {
    const now = new Date();
    const postDate = new Date(date);
    const diffInHours = Math.floor((now - postDate) / (1000 * 60 * 60));

    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) return `${diffInDays}d ago`;
    return postDate?.toLocaleDateString();
  };

  const getPlatformIcon = (platform) => {
    switch (platform?.toLowerCase()) {
      case 'twitter':
        return 'Twitter';
      case 'facebook':
        return 'Facebook';
      case 'instagram':
        return 'Instagram';
      case 'linkedin':
        return 'Linkedin';
      default:
        return 'Share2';
    }
  };

  const getPlatformColor = (platform) => {
    switch (platform?.toLowerCase()) {
      case 'twitter':
        return 'text-blue-500';
      case 'facebook':
        return 'text-blue-600';
      case 'instagram':
        return 'text-pink-500';
      case 'linkedin':
        return 'text-blue-700';
      default:
        return 'text-text-secondary';
    }
  };

  return (
    <div className="space-y-4">
      {posts?.map((post) => {
        const isExpanded = expandedPosts?.has(post?.id);
        const shouldTruncate = post?.content?.length > 200;
        const displayContent =
          shouldTruncate && !isExpanded
            ? post?.content?.substring(0, 200) + '...'
            : post?.content;

        return (
          <article
            key={post?.id}
            className="bg-white rounded-xl shadow-brand p-6 hover:shadow-brand-lg transition-shadow duration-200"
          >
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <Image
                  src={post?.avatar}
                  alt={post?.avatarAlt}
                  className="w-12 h-12 rounded-full object-cover"
                />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-2">
                  <h4 className="font-semibold text-text-primary">
                    {post?.author}
                  </h4>
                  <Icon
                    name={getPlatformIcon(post?.platform)}
                    size={16}
                    className={getPlatformColor(post?.platform)}
                  />
                  <span className="text-sm text-text-secondary">•</span>
                  <span className="text-sm text-text-secondary">
                    {formatTimeAgo(post?.date)}
                  </span>
                </div>

                <div className="mb-3">
                  <p className="text-text-primary whitespace-pre-line">
                    {displayContent}
                  </p>
                  {shouldTruncate && (
                    <button
                      onClick={() => toggleExpanded(post?.id)}
                      className="text-primary text-sm font-medium hover:underline mt-1"
                    >
                      {isExpanded ? 'Show less' : 'Show more'}
                    </button>
                  )}
                </div>

                {post?.image && (
                  <div className="mb-3 rounded-lg overflow-hidden">
                    <Image
                      src={post?.image}
                      alt={post?.imageAlt}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                )}

                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <div className="flex items-center space-x-6">
                    <button className="flex items-center space-x-2 text-text-secondary hover:text-red-500 transition-colors">
                      <Icon name="Heart" size={16} />
                      <span className="text-sm">{post?.likes}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-text-secondary hover:text-blue-500 transition-colors">
                      <Icon name="MessageCircle" size={16} />
                      <span className="text-sm">{post?.comments}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-text-secondary hover:text-green-500 transition-colors">
                      <Icon name="Share2" size={16} />
                      <span className="text-sm">{post?.shares}</span>
                    </button>
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    iconName="ExternalLink"
                    iconPosition="right"
                    className="text-xs"
                  >
                    View on {post?.platform}
                  </Button>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default SocialFeed;
