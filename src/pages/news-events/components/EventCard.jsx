import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const EventCard = ({ event, variant = 'default' }) => {
  const [isRegistered, setIsRegistered] = useState(
    event?.isRegistered || false
  );
  const [attendeeCount, setAttendeeCount] = useState(event?.attendees || 0);

  const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    })?.format(new Date(date));
  };

  const formatTime = (time) => {
    return new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    })?.format(new Date(`2024-01-01 ${time}`));
  };

  const handleRegister = () => {
    if (!isRegistered && attendeeCount < event?.capacity) {
      setIsRegistered(true);
      setAttendeeCount((prev) => prev + 1);
    }
  };

  const getStatusColor = () => {
    if (event?.status === 'upcoming') return 'bg-blue-100 text-blue-800';
    if (event?.status === 'ongoing') return 'bg-green-100 text-green-800';
    if (event?.status === 'completed') return 'bg-gray-100 text-gray-800';
    return 'bg-gray-100 text-gray-800';
  };

  if (variant === 'calendar') {
    return (
      <div className="group p-3 bg-white rounded-lg border border-border hover:shadow-brand transition-all duration-200">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex flex-col items-center justify-center">
              <span className="text-xs font-medium text-primary">
                {new Date(event.date)
                  ?.toLocaleDateString('en-US', { month: 'short' })
                  ?.toUpperCase()}
              </span>
              <span className="text-lg font-bold text-primary">
                {new Date(event.date)?.getDate()}
              </span>
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-sm line-clamp-1 group-hover:text-primary transition-colors">
              {event?.title}
            </h4>
            <div className="flex items-center space-x-2 mt-1">
              <Icon name="Clock" size={12} className="text-text-secondary" />
              <span className="text-xs text-text-secondary">
                {formatTime(event?.time)}
              </span>
            </div>
            <div className="flex items-center space-x-2 mt-1">
              <Icon name="MapPin" size={12} className="text-text-secondary" />
              <span className="text-xs text-text-secondary line-clamp-1">
                {event?.location}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <article className="group bg-white rounded-xl shadow-brand hover:shadow-brand-lg transition-all duration-300 overflow-hidden">
      {event?.image && (
        <div className="aspect-video overflow-hidden">
          <Image
            src={event?.image}
            alt={event?.imageAlt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor()}`}
          >
            {event?.status?.charAt(0)?.toUpperCase() + event?.status?.slice(1)}
          </span>
          <span
            className={`px-2 py-1 rounded text-xs font-medium ${event?.category?.color}`}
          >
            {event?.category?.name}
          </span>
        </div>

        <h3 className="text-xl font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {event?.title}
        </h3>

        <p className="text-text-secondary line-clamp-2 mb-4">
          {event?.description}
        </p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center space-x-2">
            <Icon name="Calendar" size={16} className="text-text-secondary" />
            <span className="text-sm">
              {formatDate(event?.date)} at {formatTime(event?.time)}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="MapPin" size={16} className="text-text-secondary" />
            <span className="text-sm">{event?.location}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Users" size={16} className="text-text-secondary" />
            <span className="text-sm">
              {attendeeCount} / {event?.capacity} attendees
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="User" size={16} className="text-text-secondary" />
            <span className="text-sm text-text-secondary">
              {event?.organizer}
            </span>
          </div>

          {event?.status === 'upcoming' && (
            <Button
              variant={isRegistered ? 'secondary' : 'default'}
              size="sm"
              onClick={handleRegister}
              disabled={isRegistered || attendeeCount >= event?.capacity}
              iconName={isRegistered ? 'Check' : 'Calendar'}
              iconPosition="left"
            >
              {isRegistered
                ? 'Registered'
                : attendeeCount >= event?.capacity
                ? 'Full'
                : 'Register'}
            </Button>
          )}

          {event?.status === 'completed' && (
            <Button
              variant="outline"
              size="sm"
              iconName="Eye"
              iconPosition="left"
            >
              View Recap
            </Button>
          )}
        </div>
      </div>
    </article>
  );
};

export default EventCard;
