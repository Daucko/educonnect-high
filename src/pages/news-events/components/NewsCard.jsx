import React from 'react';

import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const NewsCard = ({ article, variant = 'default' }) => {
  const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    })?.format(new Date(date));
  };

  const getTimeAgo = (date) => {
    const now = new Date();
    const articleDate = new Date(date);
    const diffInHours = Math.floor((now - articleDate) / (1000 * 60 * 60));

    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) return `${diffInDays}d ago`;
    return formatDate(date);
  };

  if (variant === 'featured') {
    return (
      <article className="group relative bg-white rounded-xl shadow-brand hover:shadow-brand-lg transition-all duration-300 overflow-hidden">
        <div className="aspect-video overflow-hidden">
          <Image
            src={article?.image}
            alt={article?.imageAlt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="flex items-center space-x-4 mb-3">
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${article?.category?.color}`}
            >
              {article?.category?.name}
            </span>
            <span className="text-sm opacity-90">
              {formatDate(article?.date)}
            </span>
          </div>
          <h2 className="text-2xl font-bold mb-2 line-clamp-2">
            {article?.title}
          </h2>
          <p className="text-sm opacity-90 line-clamp-2 mb-4">
            {article?.excerpt}
          </p>
          <Button
            variant="secondary"
            size="sm"
            iconName="ArrowRight"
            iconPosition="right"
          >
            Read More
          </Button>
        </div>
      </article>
    );
  }

  if (variant === 'compact') {
    return (
      <article className="group flex space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-brand transition-all duration-200">
        <div className="flex-shrink-0 w-20 h-20 overflow-hidden rounded-lg">
          <Image
            src={article?.image}
            alt={article?.imageAlt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2 mb-1">
            <span
              className={`px-2 py-1 rounded text-xs font-medium ${article?.category?.color}`}
            >
              {article?.category?.name}
            </span>
            <span className="text-xs text-text-secondary">
              {getTimeAgo(article?.date)}
            </span>
          </div>
          <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-primary transition-colors">
            {article?.title}
          </h3>
          <p className="text-xs text-text-secondary line-clamp-2 mt-1">
            {article?.excerpt}
          </p>
        </div>
      </article>
    );
  }

  return (
    <article className="group bg-white rounded-xl shadow-brand hover:shadow-brand-lg transition-all duration-300 overflow-hidden">
      <div className="aspect-video overflow-hidden">
        <Image
          src={article?.image}
          alt={article?.imageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${article?.category?.color}`}
          >
            {article?.category?.name}
          </span>
          <span className="text-sm text-text-secondary">
            {getTimeAgo(article?.date)}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {article?.title}
        </h3>
        <p className="text-text-secondary line-clamp-3 mb-4">
          {article?.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="User" size={16} className="text-text-secondary" />
            <span className="text-sm text-text-secondary">
              {article?.author}
            </span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            iconName="ArrowRight"
            iconPosition="right"
          >
            Read More
          </Button>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;
